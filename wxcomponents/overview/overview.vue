<template>
	<view class="overview-wrap">
		<van-empty v-if="total === 0" class="custom-image" image="../../../../static/images/empty.png" description="无咩无个" />
		<scroll-view scroll-y="true" class="scroll-wrap" v-else>
			<van-swipe-cell :right-width="64" v-for="(item, key) in data" :key="key">
				<view class="overview-item">
					<view class="overview-main">
						<van-tag round type="primary" :color="matchMap[item.type].color" text-color="#ffd765" size="large">
							<text decode>{{ matchMap[item.type].title }}</text>
						</van-tag>
						<view class="">
							<text style="font-size: 18px;">{{ item.price }}</text>
							<text style="font-size: 12px;">元/件</text>
						</view>
						<van-stepper :value="item.count" @change="changeCount" :data-selected="key" theme="round" integer />
					</view>
				</view>
				<view slot="right" class="deleteBtn" @click="del(key)">删除</view>
			</van-swipe-cell>
		</scroll-view>
	</view>
</template>

<script>
const matchMap = {
	invent: {
		color: '#793a45',
		title: '&emsp;发明&emsp;'
	},
	utility: {
		color: '#1f586b',
		title: '实用新型'
	},
	apperance: {
		color: '#0a381e',
		title: '外观设计'
	}
}
export default {
	props: {
		data: {
			type: Object,
			default() {
				return {}
			}
		},
		total: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			matchMap,
			empty: true
		}
	},
	methods: {
		changeCount(e) {
			const params = {
				selected: e.target.dataset.selected,
				count: e.detail
			}
			this.$emit('changed', params)
		},
		del(selected) {
			this.$emit('deleted', selected)
		}
	}
}
</script>

<style lang="less" scoped>
view {
	text-align: unset;
	box-sizing: border-box;
}
.overview-wrap {
	padding-top: 40px;
	.overview-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		border-bottom: 1px solid floralwhite;
		&:nth-child(odd) {
			background-color: #eee;
		}
		.overview-main {
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	.deleteBtn {
		color: aliceblue;
		background-color: red;
		width: 100%;
		height: 100%;
		padding: 0 16px;
		display: flex;
		align-items: center;
	}
}
.overview-wrap > .overview-item {
	&:nth-child(odd) {
		background-color: #eee;
	}
}
</style>
