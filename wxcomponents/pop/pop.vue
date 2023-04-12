<template>
	<view>
		<van-dialog use-slot :title="title" show width="720rpx" show-cancel-button @close="close" @confirm="confirm">
			<view class="form-group">
				<view class="form-item" v-for="(item, index) in dataMap" :key="index">
					<text>{{ item.desc }}</text>
					<view>
						<van-radio-group :direction="item.dir" :value="item.choice" @change="changeRadio" :type="index">
							<van-radio v-for="(opt, key) in item.options" :name="key" :key="key" :class="[item.dir === 'vertical' ? 'radio-margin' : '']">
								<text>{{ opt.name }}</text>
								<text style="font-size: 12px;">{{ opt.detail }}</text>
							</van-radio>
						</van-radio-group>
					</view>
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
import getOptions from '../../utils/getOptions.js'
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
	/* // computed具有缓存，某些情况下计算不正确。
		computed: {
			price() {
				let sum = 0
				if (this.dataMap) {
					Object.keys(this.dataMap).forEach((key) => {
						sum += this.dataMap[key].price
					})
				}
				return sum
			}
		}, */
	watch: {
		dataMap: {
			handler(val) {
				let sum = 0
				let selected = ''
				if (this.dataMap) {
					Object.keys(this.dataMap).forEach((key) => {
						sum += this.dataMap[key].price
						selected += this.dataMap[key].tag
					})
				}
				this.sum = sum
				this.selected = selected
				console.log(this.selected, 'watch')
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
			selected: ''
		}
	},
	created() {
		this.getOptions()
	},
	methods: {
		getOptions() {
			if (this.source === 'invent') {
				const { ques1, ques7: ques2, ques3 } = getOptions('invent', [1, 7, 3])
				this.originData = {
					ques1,
					ques2,
					ques3
				}
			} else {
				this.originData = getOptions(this.source, [1])
			}
			// 保存初始对象，关闭弹窗时初始话数据
			this.dataMap = clonedeep(this.originData)
		},
		confirm() {
			// console.log('pop confirm')
			const params = {
				selected: this.selected,
				price: this.sum,
				type: this.source
			}
			// this.$emit('confirm', this.selected, this.sum)
			this.$emit('confirm', params)
		},
		close() {
			// 关闭弹窗时恢复初始数据
			this.dataMap = clonedeep(this.originData)
			this.$emit('close')
		},
		changeRadio(e) {
			// console.log(e, 'e');
			const opt = e.detail // 具体选择的题目和选项，如ques1-1
			const [ques, answer] = opt.split('-')
			const target = this.dataMap[ques]
			// console.log(target, 'target');
			target.choice = opt
			target.price = target.options[opt].price
			target.tag = target.options[opt].tag
			if (this.source === 'invent') {
				this.inventHandler(ques, answer)
			} else if (this.source === 'utility' || this.source === 'apperance') {
				if (ques === 'ques1') {
					if (answer === '1') {
						const { ques2 } = clonedeep(getOptions(this.source, [2]))
						// const ques2 = this.setQues2Opt(result.ques2);
						this.$set(this.dataMap, 'ques2', ques2)
					} else {
						delete this.dataMap['ques2']
					}
				}
			}
			console.log(this.dataMap, 'dataMap')
		},
		inventHandler(ques, answer) {
			if (ques === 'ques1') {
				if (answer === '1') {
					this.invetnFlag1 = true
					if (this.invetnFlag3) {
						// 当第三题选“是”时，重置第二题为原始值
						const result = clonedeep(getOptions('invent', [2]))
						const ques2 = this.setQues2Opt(result.ques2)
						this.$set(this.dataMap, 'ques2', ques2)
					} else {
						// 当第三题选“否”时，重置第二题为优惠值
						const { ques7 } = clonedeep(getOptions('invent', [7]))
						const ques2 = this.setQues2Opt(ques7)
						this.$set(this.dataMap, 'ques2', ques2)
					}
				} else if (answer === '2') {
					this.invetnFlag1 = false
					const { ques6 } = clonedeep(getOptions('invent', [6]))
					const ques2 = this.setQues2Opt(ques6)
					this.$set(this.dataMap, 'ques2', ques2)
				}
			}
			if (ques === 'ques3') {
				if (answer === '1') {
					this.invetnFlag3 = true
					const result = clonedeep(getOptions('invent', [2, 4]))
					this.$set(this.dataMap, 'ques4', result.ques4)
					if (this.invetnFlag1) {
						// 当第一题选“是”时，才重置第二题
						const ques2 = this.setQues2Opt(result.ques2)
						this.$set(this.dataMap, 'ques2', ques2)
					}
				} else if (answer === '2') {
					this.invetnFlag3 = false
					if (this.invetnFlag1) {
						// 当第一题选“是”时，才重置第二题
						const { ques7 } = clonedeep(getOptions('invent', [7]))
						const ques2 = this.setQues2Opt(ques7)
						this.$set(this.dataMap, 'ques2', ques2)
					}
					delete this.dataMap['ques4']
					if (this.dataMap['ques5']) {
						delete this.dataMap['ques5']
					}
				}
			}
			if (ques === 'ques4') {
				if (answer === '2') {
					const { ques5 } = clonedeep(getOptions('invent', [5]))
					this.$set(this.dataMap, 'ques5', ques5)
				} else {
					delete this.dataMap['ques5']
				}
			}
		},
		setQues2Opt(result) {
			// 重置第二题前记住当前选项
			const { choice, tag } = this.dataMap['ques2']
			const price = result.options[choice].price
			result.choice = choice
			result.tag = tag
			result.price = price
			return result
		}
	}
}
</script>

<style lang="less">
.form-group {
	font-size: 14px;

	.form-item {
		display: flex;
		// justify-content: start;
		margin: 10px;
		padding-bottom: 8px;
		border-bottom: 1px solid #eee;

		text {
			text-align: left;
			width: 250rpx;
		}

		.radio-margin {
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
</style>
