<template>
	<view class="container">
		<header class="header">
			<!-- 左侧导航栏 -->
			<view class="nav">
				<van-sidebar :active-key="activeKey" @change="changeSidebar">
					<van-sidebar-item title="专利" />
					<van-sidebar-item title="标签名" disabled />
					<van-sidebar-item title="标签名" disabled />
				</van-sidebar>
			</view>
			<!-- 右侧内容区域 -->

			<pick-area @pop="pop" style="flex: 1; height: 100%;"></pick-area>
		</header>

		<!-- 弹窗 -->
		<view>
			<!-- 发明 -->
			<block v-if="inventShow"><pop ref="invent" :source="source" title="发明" @confirm="confirm2" @close="closePop"></pop></block>

			<!-- 实用新型 -->
			<block v-if="utilityShow"><pop ref="utility" :source="source" title="实用新型" @confirm="confirm2" @close="closePop"></pop></block>

			<!-- 外观设计 -->
			<block v-if="apperanceShow"><pop ref="apperance" :source="source" title="外观设计" @confirm="confirm2" @close="closePop"></pop></block>
		</view>
		<footer>
			<van-goods-action>
				<van-goods-action-icon icon="balance-list-o" text="概览" @click="openOverview" :info="total" />
				<van-goods-action-button text="查看详情" @click="toResult" />
			</van-goods-action>
		</footer>
		<van-popup :show="visible" closeable position="bottom" custom-style="max-height: 40%" @close="closeOverview">
			<overview :data="rawData" :total="total" @changed="changeCount" @deleted="deleted"></overview>
		</van-popup>
		<van-toast id="van-toast" />
	</view>
</template>

<script>
import Toast from '../../wxcomponents/@vant/weapp/toast/toast'
import Pop from '../../wxcomponents/pop/pop.vue'
import PickArea from '../../wxcomponents/pickArea/pickArea.vue'
import Overview from '../../wxcomponents/overview/overview.vue'
import _ from 'lodash'
export default {
	onShareAppMessage() {},
	onLoad() {
		console.log('load')
	},
	onUnload() {
		console.log('unload')
	},
	onShow() {
		this.handleDelete()
		this.handleChange()
	},
	onHide() {
		console.log('hide')
	},
	computed: {
		total() {
			// return this.result.length
			let count = 0
			if (this.rawData) {
				Object.values(this.rawData).forEach((val) => {
					count += val.count
				})
				// console.log(count, 'computed')
			}
			return count
		}
	},
	data() {
		return {
			activeKey: 0,
			source: 'invent',
			inventShow: false,
			utilityShow: false,
			apperanceShow: false,
			result: [],
			res: {
				invent: [],
				utility: [],
				apperance: []
			},
			rawData: {},
			visible: false
		}
	},
	mounted() {
		const sysInfo = uni.getSystemInfoSync()
		// console.log(sysInfo, 'sysInfo');
	},
	methods: {
		pop(type) {
			this.source = type
			this[`${type}Show`] = true
			// console.log(this[`${type}Show`], 'pop')
		},
		confirm(e) {
			// console.log(e, 'e');
			const res = {
				type: e.target.dataset.ref,
				selected: e.detail.__args__[0],
				price: e.detail.__args__[1]
				// id: new Date().getTime() // 用于删除时找到对应元素
			}
			this.result.push(res)
			console.log(this.result, 'confirm')
			// const selected = e.detail.__args__[0]
		},
		confirm2(e) {
			// console.log(e, 'c2')
			const { selected, price, type } = e.detail.__args__[0]
			if (this.rawData[selected]) {
				// this.rawData[selected].count += 1
				const count = this.rawData[selected].count
				this.$set(this.rawData[selected], 'count', count + 1)
			} else {
				const item = {
					type,
					price,
					count: 1
				}
				// this.rawData[selected] = item
				this.$set(this.rawData, selected, item)
			}
			Toast({
				type: 'success',
				duration: 800
			})
			// console.log(this.rawData, 'confirm')
		},
		closePop() {
			this[`${this.source}Show`] = false
			// console.log(this[`${this.source}Show`], 'popClose')
		},
		changeSidebar(e) {
			console.log(e)
		},
		toResult() {
			console.log(JSON.stringify(this.rawData), 'json')
			uni.navigateTo({
				url: `/pages/result/result?result=${JSON.stringify(this.rawData)}`
			})
		},
		handleDelete() {
			const deleted = uni.getStorageSync('deleted')
			// console.log(deleted, 'deleted')
			if (deleted.length > 0) {
				deleted.forEach((key) => {
					if (this.rawData[key]) {
						this.$delete(this.rawData, key)
					}
				})
				uni.removeStorageSync('deleted')
			}
		},
		handleChange() {
			const changed = uni.getStorageSync('changed')
			if (changed.length > 0) {
				changed.forEach((item) => {
					this.rawData[item.selected].count = item.count
				})
				uni.removeStorageSync('changed')
			}
		},
		closeOverview() {
			this.visible = false
		},
		openOverview() {
			this.visible = true
		},
		// overview delete
		deleted(e) {
			const selected = e.detail.__args__[0]
			this.$delete(this.rawData, selected)
		},
		// overview change
		changeCount(e) {
			const { selected, count } = e.detail.__args__[0]
			this.rawData[selected].count = count
		}
	},
	components: {
		Pop,
		PickArea,
		Overview
	}
}
</script>

<style lang="less">
page {
	width: 100%;
	height: 100%;
}

view {
	box-sizing: border-box;
	text-align: center;
}

.container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

	.header {
		width: 100%;
		height: calc(100% - 84px);
		display: flex;

		.nav {
			height: 100%;
			width: 80px;
			background-color: #eee;
		}
	}
}
</style>
