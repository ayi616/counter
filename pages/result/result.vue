<template>
	<view class="container" ref="container" :style="{ height: height + 'px' }">
		<van-empty v-if="total === 0" class="custom-image" image="../../../../static/images/empty.png" description="无咩无个" />
		<view class="main" v-else>
			<scroll-view scroll-y="true" class="scroll">
				<item-card ref="invent" :data="inventData" @changed="changeCount" @delete="del"></item-card>
				<item-card ref="utility" :data="utilityData" @changed="changeCount" @delete="del"></item-card>
				<item-card ref="apperance" :data="apperanceData" @changed="changeCount" @delete="del"></item-card>
			</scroll-view>
			<view class="options">
				<view>
					<van-button type="danger" icon="delete" round @click="trigger"></van-button>
					<van-dialog :show="show" :z-inde="99999" title="确认要删除所有选择吗" show-cancel-button @confirm="delAll" @close="trigger" />
					<van-toast id="van-toast" />
				</view>
			</view>
			<view class="footer">
				<text>最大可退金额：{{ refund }}元</text>
				<text>总价：{{ price }}元</text>
			</view>
		</view>
	</view>
</template>

<script>
import getResult from '../../utils/getResult.js'
import itemCard from '../../wxcomponents/itemCard/itemCard.vue'
export default {
	data() {
		return {
			height: 0,
			result: {},
			deleted: [],
			changed: [],
			show: false,
			inventData: {},
			utilityData: {},
			apperanceData: {},
			showDoc: true
		}
	},
	computed: {
		price() {
			// console.log(this.result, 'computed price')
			let sum = 0
			Object.values(this.result).forEach((item) => {
				sum += item.price * item.count
			})
			return sum
		},
		refund() {
			let sum = 0
			Object.values(this.result).forEach((item) => {
				sum += item.refund * item.count
			})
			return sum
		},
		total() {
			let sum = 0
			Object.values(this.result).forEach((item) => {
				sum += item.count
			})
			return sum
		}
	},
	onLoad(options) {
		const sysInfo = uni.getSystemInfoSync() // 获取系统信息
		// console.log(sysInfo, 'sysInfo');
		this.height = sysInfo.windowHeight
		if (options.result) {
			const data = JSON.parse(options.result)
			this.result = getResult(data)
			console.log(this.result, 'onload')
			this.classify(this.result)
		}
	},
	onUnload() {
		// console.log('unload result')
	},
	onShow() {
		// console.log('show')
		// const string2 = '{"Q":{"type":"apperance","price":2000,"count":1}}'
		// // '{"ACF":{"type":"invent","price":5000,"count":2},"ADF":{"type":"invent","price":5500,"count":1},"ACEG":{"type":"invent","price":22560,"count":1},"M":{"type":"utility","price":3200,"count":1},"Q":{"type":"apperance","price":2000,"count":1}}'
		// this.result = getResult(JSON.parse(string2))
		// console.log(this.result, 'show')
		// this.classify(this.result)
	},
	onHide() {
		// console.log('hide result')
	},
	mounted() {},
	methods: {
		classify(data) {
			// 分类
			Object.keys(data).forEach((key) => {
				const type = data[key].type
				this[`${type}Data`][key] = data[key]
			})
			// console.log(this.inventData, this.utilityData, this.apperanceData, 'classify')
		},
		del(key, type) {
			if (this.result[key]) {
				this.$delete(this[`${type}Data`], key)
				this.$delete(this.result, key)
				this.deleted.push(key)
				uni.setStorageSync('deleted', this.deleted)
				uni.showToast({
					icon: 'none',
					title: '删除成功',
					duration: 800
				})
			}
		},
		trigger() {
			this.show = !this.show
		},
		delAll() {
			Object.keys(this.result).forEach((key) => {
				this.deleted.push(key)
			})
			uni.setStorageSync('deleted', this.deleted)
			this.result = {}
			uni.showToast({
				icon: 'none',
				title: '删除成功',
				duration: 800
			})
		},
		changeCount(params) {
			// console.log(params, 'emit')
			const { selected, count } = params
			if (this.result[selected]) {
				this.changed.push(params)
				this.result[selected].count = count
				// console.log(this.result, 'changeCount')
				// console.log(this.inventData, 'inventData')
				uni.setStorageSync('changed', this.changed)
			}
		}
	},
	components: {
		itemCard
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
	.options {
		position: fixed;
		bottom: 100px;
		right: 15px;
		border-radius: 50%;
	}
	.footer {
		position: fixed;
		bottom: 25px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 50px;
		width: 85%;
		padding: 0 15px;
		background-color: rgb(25, 25, 25);
		border-radius: 30px;
		color: aliceblue;
		left: 50%;
		transform: translate(-50%, 5px);
		text {
			&:first-child {
				font-size: 12px;
				color: #999;
			}
		}
	}
}
</style>
