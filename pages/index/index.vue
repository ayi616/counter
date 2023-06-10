<template>
	<view class="container">
		<header class="header">
			<!-- 左侧导航栏 -->
			<view class="nav">
				<van-sidebar v-model="activeKey" @change="changeSidebar">
					<van-sidebar-item title="专利" />
					<van-sidebar-item>
						<template slot="title">
							<view>
								<view style="text-align: left;">广东</view>
								<view style="font-size: 12px;text-align: left;">保护中心</view>
							</view>
						</template>
					</van-sidebar-item>

					<van-sidebar-item>
						<template slot="title">
							<view style="text-align: left;">汕头</view>
							<view style="font-size: 12px;text-align: left;">保护中心</view>
						</template>
					</van-sidebar-item>

					<van-sidebar-item>
						<template slot="title">
							<view style="text-align: left;">广州</view>
							<view style="font-size: 12px;text-align: left;">保护中心</view>
						</template>
					</van-sidebar-item>

					<van-sidebar-item>
						<template slot="title">
							<view style="text-align: left;">深圳</view>
							<view style="font-size: 12px;text-align: left;">保护中心</view>
						</template>
					</van-sidebar-item>

					<van-sidebar-item>
						<template slot="title">
							<view style="text-align: left;">珠海</view>
							<view style="font-size: 12px;text-align: left;">保护中心</view>
						</template>
					</van-sidebar-item>

					<van-sidebar-item>
						<template slot="title">
							<view style="text-align: left;">佛山</view>
							<view style="font-size: 12px;text-align: left;">保护中心</view>
						</template>
					</van-sidebar-item>
				</van-sidebar>
			</view>
			<!-- 右侧内容区域 -->

			<pick-area v-show="activeKey === 0" @pop="pop" style="flex: 1; height: 100%;"></pick-area>
			<search v-show="activeKey === 1" :source="1" style="flex: 1"></search>
			<search v-show="activeKey === 2" :source="2" style="flex: 1"></search>
			<search v-show="activeKey === 3" :source="3" style="flex: 1"></search>
			<search v-show="activeKey === 4" :source="4" style="flex: 1"></search>
			<search v-show="activeKey === 5" :source="5" style="flex: 1"></search>
			<search v-show="activeKey === 6" :source="6" style="flex: 1"></search>
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
import Search from '../../wxcomponents/search/search.vue'
import clonedeep from 'lodash/cloneDeep'
export default {
	onShareAppMessage() {},
	onLoad() {
		// console.log('load index')
	},
	onUnload() {
		// console.log('unload index')
	},
	onShow() {
		this.handleDelete()
		this.handleChange()
	},
	onHide() {
		// console.log('hide index')
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
			// console.log(e, 'c2')
			const { selected, price, type } = e.detail.__args__[0]
			if (this.rawData[selected]) {
				const count = this.rawData[selected].count
				this.$set(this.rawData[selected], 'count', count + 1)
			} else {
				const item = {
					type,
					price,
					count: 1
				}
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
		clickitem(path) {
			uni.navigateTo({
				url: `/pages/${path}/${path}`
			})
		},
		changeSidebar(e) {
			// console.log(e, 'eee')
			this.activeKey = e.detail
		},
		toResult() {
			// console.log(JSON.stringify(this.rawData), 'json')
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
		Overview,
		Search
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
