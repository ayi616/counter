<template>
	<view>
		<van-dialog use-slot :title="title" show width="720rpx" show-cancel-button @close="close" @confirm="confirm">
			<view class="form-group">
				<view class="form-item" v-for="(item, ques) in dataMap" :key="ques" v-if="item.active">
					<text>{{ item.desc }}</text>
					<view>
						<van-radio-group :direction="item.dir" :value="item.choice" @change="changeRadio" :data-key="ques">
							<van-radio v-for="(opt, key) in item.options" :key="key" :name="key" :class="[item.dir === 'vertical' ? 'vertical-margin' : '']">
								<text>{{ opt.title }}</text>
								<text style="font-size: 7px;">{{ opt.detail }}</text>
							</van-radio>
						</van-radio-group>
					</view>
				</view>

				<view class="form-item" v-if="source === 'invent' && inventCounter">
					<text>赠送实用新型数量：</text>
					<view class=""><van-stepper :value="addedCount" :min="0" :max="2" @change="changeCount" theme="round" integer disable-input button-size="20px" /></view>
				</view>
				<view class="form-item" v-if="source === 'apperance'">
					<text>同一申请的设计数：</text>
					<view class=""><van-stepper :value="addedCount" :min="1" :max="10" @change="changeCount" theme="round" integer disable-input button-size="20px" /></view>
				</view>
			</view>

			<!-- 显示总价 -->
			<view class="footer">
				<text>总价：</text>
				<text class="price">{{ sum }}</text>
				<text>元</text>
			</view>
		</van-dialog>
	</view>
</template>

<script>
import clonedeep from 'lodash/cloneDeep'
import getOpts from '../../utils/getOpts.js'
import getResult from '../../utils/getResult.js'
export default {
	props: {
		source: {
			type: String,
			default: '',
			required: true
		},
		title: {
			type: String,
			default: ''
		}
	},
	watch: {
		dataMap: {
			handler(val) {
				let sum = 0
				let selected = ''
				if (this.dataMap) {
					Object.keys(this.dataMap).forEach((key) => {
						if (this.dataMap[key].active) {
							const current = this.dataMap[key]
							const choice = current.choice
							sum += current.options[choice].price
							selected += current.choice
						}
					})
				}
				this.sumOrigin = sum
				this.getAddedPrice()
				const addedValue = this.getAddedValue()
				this.sum = sum + addedValue
				if (this.source === 'invent') {
					this.selected = this.inventCounter ? `${selected}-${this.addedCount}` : selected
				} else if (this.source === 'apperance') {
					this.selected = `${selected}-${this.addedCount}`
				} else if (this.source === 'utility') {
					// 实用新型暂时没有附加选项
					this.selected = selected
				}
				// console.log(this.selected, this.sum, 'watch')
			},
			// immediate: true,
			deep: true
		}
	},

	data() {
		return {
			originData: null,
			dataMap: null,
			invetnFlag1: true,
			invetnFlag3: false,
			sum: 0,
			sumOrigin: 0, // 没有附加值的总价
			selected: '',
			inventCounter: false,
			addedPrice: 0,
			addedCount: 0
		}
	},
	created() {
		// this.getOptions()
		this.getOpts()
		if (this.source === 'invent') {
			this.addedCount = 0
		} else if (this.source === 'apperance') {
			this.addedCount = 1
		}
	},
	methods: {
		getOpts() {
			this.originData = getOpts(this.source)
			// 保存初始对象，关闭弹窗时初始化数据
			this.dataMap = clonedeep(this.originData)
			// console.log(this.dataMap, 'getOpts')
		},
		confirm() {
			const params = {
				selected: this.selected,
				price: this.sum,
				type: this.source
			}
			// console.log(params, 'pop confirm')
			this.$emit('confirm', params)
		},
		close() {
			// 关闭弹窗时恢复初始数据
			this.dataMap = clonedeep(this.originData)
			this.$emit('close')
		},
		changeRadio(e) {
			// console.log(e, 'e')
			const key = e.target.dataset.key
			const current = this.dataMap[key]
			current.choice = e.detail
			// console.log(current, 'current')
			if (this.source === 'invent') {
				this.inventHandler(key, current.choice)
			} else if (this.source === 'utility' || this.source === 'apperance') {
				if (key === 'ques1') {
					if (current.choice === 'A') {
						this.dataMap['ques2'].active = true
					} else {
						this.resetChoice('ques2')
					}
				}
			}
			// console.log(this.dataMap, 'dataMap--changeRadio')
		},
		inventHandler(ques, choice) {
			if (ques === 'ques1') {
				if (choice === 'A') {
					this.invetnFlag1 = true
					if (this.invetnFlag3) {
						// 当第三题选“是”时，重置第二题为原始值
						this.setPrice('ques2', {
							A: 560,
							B: 1020
						})
					} else {
						// 当第三题选“否”时，重置第二题为优惠值
						this.setPrice('ques2', {
							A: 450,
							B: 950
						})
					}
				} else if (choice === 'B') {
					this.invetnFlag1 = false
					this.setPrice('ques2', {
						A: 0,
						B: 0
					})
				}
			} else if (ques === 'ques3') {
				if (choice === 'A') {
					this.invetnFlag3 = true
					this.dataMap['ques4'].active = true
					if (this.invetnFlag1) {
						// 当第一题选“是”时，才重置第二题
						this.setPrice('ques2', {
							A: 560,
							B: 1020
						})
					}
				} else if (choice === 'B') {
					this.invetnFlag3 = false
					if (this.invetnFlag1) {
						// 	// 当第一题选“是”时，才重置第二题
						this.setPrice('ques2', {
							A: 450,
							B: 950
						})
					}
					this.resetChoice('ques4')
					this.resetChoice('ques5')
					this.inventCounter = false
					this.changeCount(null, 0)
				}
			} else if (ques === 'ques4') {
				if (choice === 'B') {
					this.inventCounter = true
					this.dataMap['ques5'].active = true
				} else {
					this.inventCounter = false
					this.changeCount(null, 0)
					this.resetChoice('ques5')
				}
			}
		},
		setPrice(key, params) {
			// 主要用于设置“发明”项第二题的价格
			const target = this.dataMap[key].options
			Object.keys(target).forEach((key) => {
				target[key].price = params[key]
			})
		},
		resetChoice(key) {
			this.dataMap[key].active = false
			const originChoice = this.originData[key].choice
			this.dataMap[key].choice = originChoice
		},
		changeCount(e, count) {
			const sumTemp = this.sumOrigin
			// console.log(e, count, 'changecount')
			// const temp = this.addedCount
			this.addedCount = e ? e.detail : count
			let countTemp = 0
			// console.log(this.addedCount, 'count')
			// let num = 0
			// if (this.source === 'invent') {
			// 	num = this.addedCount - temp
			// } else if (this.source === 'apperance') {
			// 	if (this.addedCount <= 2) {
			// 		num = 0
			// 	} else {
			// 		num = this.addedCount - temp
			// 	}
			// }
			// const num = this.addedCount - temp
			// this.sum += this.addedPrice * num
			if (this.source === 'apperance') {
				countTemp = this.addedCount <= 2 ? 0 : this.addedCount - 2
			} else {
				countTemp = this.addedCount
			}
			this.sum = sumTemp + countTemp * this.addedPrice
			let selected = ''
			if (this.selected.includes('-')) {
				selected = this.selected.split('-')[0]
			}
			this.selected = `${selected}-${this.addedCount}`
			// console.log(this.sum, this.selected, 'changCount')
		},
		// 获取附加项价格
		getAddedPrice() {
			if ((this.inventCounter && this.source === 'invent') || this.source === 'apperance') {
				if (this.source === 'invent') {
					const key = this.selected.substring(0, 2)
					if (key === 'BA' || key === 'BB') {
						this.addedPrice = 1100
					} else if (key === 'AB') {
						this.addedPrice = 230
					} else if (key === 'AA') {
						this.addedPrice = 165
					}
				} else if (this.source == 'apperance') {
					this.addedPrice = 100
				}
			} else {
				this.addedPrice = 0
			}
		},
		getAddedValue() {
			let addedValue = 0
			if (this.source === 'invent') {
				addedValue = this.addedCount * this.addedPrice
			} else if (this.source === 'apperance') {
				let num = this.addedCount <= 2 ? 0 : this.addedCount - 2
				// console.log(num, 'aaaaa')
				addedValue = num * this.addedPrice
				// console.log(addedValue, 'getAddedValue')
			}
			return addedValue
		}
	}
}
</script>

<style lang="less">
.form-group {
	font-size: 14px;

	.form-item {
		display: flex;
		margin: 10px;
		padding-bottom: 8px;
		border-bottom: 1px solid #eee;

		text {
			text-align: left;
			width: 250rpx;
		}

		.vertical-margin {
			display: block;
			margin-bottom: 8px;
		}
	}
}

.footer {
	margin-bottom: 12px;

	.price {
		font-size: 24px;
	}
}
// /deep/ .van-stepper--round .van-stepper__minus {
// 	border: 1px solid #1989fa;
// 	color: #1989fa;
// }
</style>
