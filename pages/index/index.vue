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
			<block v-if="inventShow"><pop ref="invent" :source="source" title="发明" @confirm="confirm" @close="closePop"></pop></block>

			<!-- 实用新型 -->
			<block v-if="utilityShow"><pop ref="utility" :source="source" title="实用新型" @confirm="confirm" @close="closePop"></pop></block>

			<!-- 外观设计 -->
			<block v-if="apperanceShow"><pop ref="apperance" :source="source" title="外观设计" @confirm="confirm" @close="closePop"></pop></block>
		</view>

		<footer>
			<van-goods-action>
				<van-goods-action-icon icon="balance-list-o" text="概览" @click="overview" :info="total" />
				<van-goods-action-button text="查看详情" @click="toResult" />
			</van-goods-action>
		</footer>
		<van-popup :show="visible" closeable position="bottom" custom-style="height: 30%" @close="closeOverview" />
	</view>
</template>

<script>
import Pop from '../../wxcomponents/pop/pop.vue'
import PickArea from '../../wxcomponents/pickArea/pickArea.vue'
import _ from 'lodash'
export default {
	// onShareAppMessage() {},
	onLoad() {
		console.log('load')
	},
	onUnload() {
		console.log('unload')
	},
	onShow() {
		const deleted = uni.getStorageSync('deleted')
		// console.log(deleted, 'deleted');
		const len = deleted.length
		if (len > 0) {
			deleted.forEach((id, idx) => {
				const index = this.result.findIndex((item) => item.id === id)
				if (index !== -1) {
					this.result.splice(index, 1)
				}
			})
			// deleted = [];
			// uni.setStorageSync('deleted', deleted);
			uni.removeStorageSync('deleted')
		}
	},
	onHide() {
		console.log('hide')
	},
	computed: {
		total() {
			return this.result.length
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
				price: e.detail.__args__[1],
				id: new Date().getTime() // 用于删除时找到对应元素
			}
			this.result.push(res)
			console.log(this.result, 'confirm')
			// uni.setStorageSync('result', this.result);
		},
		closePop() {
			this[`${this.source}Show`] = false
			// console.log(this[`${this.source}Show`], 'popClose')
		},
		changeSidebar(e) {
			console.log(e)
		},
		overview() {
			this.visible = true
		},
		closeOverview() {
			this.visible = false
		},
		toResult() {
			console.log(JSON.stringify(this.result), 'json')
			uni.navigateTo({
				url: `/pages/result/result?result=${JSON.stringify(this.result)}`
			})
		}
	},
	components: {
		Pop,
		PickArea
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
