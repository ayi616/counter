<template>
	<view class="container" ref="container" :style="{ height: height + 'px' }">
		<van-empty v-if="result.length === 0" class="custom-image" image="../../../../static/images/empty.png" description="无咩无个" />
		<view class="main" v-else>
			<scroll-view scroll-y="true" class="scroll">
				<block v-for="(item, index) in result" :key="index">
					<van-swipe-cell :right-width="75">
						<view class="card-wrap">
							<view class="card-main">
								<image :src="require(`../../static/images/${item.type}.jpeg`)" mode=""></image>
								<view class="card-desc">
									<view class="card-title">{{ item.title }}</view>
									<view class="card-other">
										<text>出结果时间：</text>
										<text>{{ item.time || '-' }}</text>
									</view>
									<view class="card-other">
										<text>退款说明：</text>
										<text>{{ item.remark || '-' }}</text>
									</view>
								</view>
							</view>
							<view class="card-footer">
								<text>费用：</text>
								<text class="card-footer-price">{{ item.price }}元</text>
							</view>
						</view>
						<view slot="right" class="deleteBtn"><van-button type="danger" round @click="del(item.id)">删除</van-button></view>
					</van-swipe-cell>
				</block>
			</scroll-view>
			<view class="options">
				<van-button type="danger" icon="delete" round @click="showDialog"></van-button>
				<van-dialog :show="show" title="确认要删除所有选择吗" show-cancel-button @confirm="delAll" @close="close" />
				<van-toast id="van-toast" />
			</view>
			<view class="footer">总价：{{ price }}元</view>
		</view>
	</view>
</template>

<script>
import getResult from '../../utils/getResult.js'
export default {
	data() {
		return {
			height: 0,
			result: [],
			deleted: [],
			show: false
		}
	},
	computed: {
		price() {
			let sum = 0
			if (this.result.length > 0) {
				this.result.forEach((item) => {
					sum += item.price
				})
			}
			return sum
		}
	},
	onLoad(options) {
		const sysInfo = uni.getSystemInfoSync()
		// console.log(sysInfo, 'sysInfo');
		this.height = sysInfo.windowHeight
		if (options.result) {
			const data = JSON.parse(options.result)
			this.result = getResult(data)
			// console.log(this.result, 'onload');
		}
	},
	onUnload() {
		// console.log('unload');
	},
	onShow() {
		// for test
		const string =
			'[{"type":"invent","selected":"ACF","price":5000,"id":1680690360788},{"type":"utility","selected":"M","price":3200,"id":1680690361953},{"type":"apperance","selected":"Q","price":2000,"id":1680690363271},{"type":"invent","selected":"ACF","price":5000,"id":1680690364497},{"type":"utility","selected":"M","price":3200,"id":1680690366050},{"type":"apperance","selected":"Q","price":2000,"id":1680690367120},{"type":"invent","selected":"ACF","price":5000,"id":1680690368526},{"type":"utility","selected":"M","price":3200,"id":1680690369807},{"type":"apperance","selected":"Q","price":2000,"id":1680690370929}]'
		const data = JSON.parse(string)
		// this.result = getResult(data);
	},
	mounted() {},
	methods: {
		del(id) {
			const index = this.result.findIndex((item) => item.id === id)
			if (index !== -1) {
				this.deleted.push(id)
				this.result.splice(index, 1)
				uni.setStorageSync('deleted', this.deleted)
				// console.log(this.result, 'res');
			}
		},
		showDialog() {
			this.show = true
		},
		close() {
			this.show = false
		},
		delAll() {
			this.result.forEach((item) => {
				this.deleted.push(item.id)
			})
			uni.setStorageSync('deleted', this.deleted)
			this.result = []
			// Toast.success('删除成功');
		}
	}
}
</script>

<style lang="less">
view {
	box-sizing: border-box;
}
.container {
	padding: 10px;
	height: 100%;
	position: relative;
	.main {
		height: 100%;
		// display: flex;
		// justify-content: center;
		.scroll {
			padding-bottom: 60px;
		}
	}
	.card-wrap {
		// height: 144px;
		padding: 10px;
		margin-bottom: 16px;
		// border: 1px solid #eee;
		border-radius: 10px;
		background-color: #eee;
		image {
			width: 100px;
			height: 100px;
			border-radius: 10px;
		}
		.card-main {
			display: flex;
			align-items: center;
			border-bottom: 1px solid #666;
			padding-bottom: 10px;
			.card-desc {
				margin-left: 10px;
				display: flex;
				flex-direction: column;
				flex: 1;
				view {
					margin-bottom: 8px;
				}
				.card-title {
					font-weight: bold;
					font-size: 17px;
				}
				.card-other {
					font-size: 14px;
					color: #999;
				}
			}
		}
		.card-footer {
			padding-top: 10px;
			padding-right: 20px;
			text-align: right;
			.card-footer-price {
				font-weight: bold;
				font-size: 18px;
			}
		}
	}
	.deleteBtn {
		display: flex;
		align-items: center;
		height: 100%;
		margin-left: 10px;
	}
	.options {
		position: fixed;
		bottom: 100px;
		right: 15px;
		border-radius: 50%;
	}
	.footer {
		position: fixed;
		bottom: 25px;
		height: 50px;
		line-height: 50px;
		width: 80%;
		text-align: right;
		padding: 0 20px;
		background-color: rgb(25, 25, 25);
		border-radius: 30px;
		color: aliceblue;
		left: 50%;
		transform: translate(-50%, 5px);
	}
}
</style>
