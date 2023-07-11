<template>
	<view class="scale-wrap">
		<view class="scale-item" v-for="(item, index) in pathList" :key="index" :style="{ borderColor: item.bgc }">
			<view class="scale-title" :style="{ backgroundColor: item.bgc }">{{ item.title }}</view>
			<img v-for="(img, i) in item.imgs" :key="i" @click="scale(img.path)" :src="img.path" class="scale-img" />
		</view>
		<van-popup :show="visible" @click-overlay="close"><img :src="bigPic" class="bigPic" /></van-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pathList: [
				{
					key: 'invent',
					title: '发明',
					imgs: [{ path: '../../static/images/certification/invent-front.jpg' }, { path: '../../static/images/certification/invent-back.jpg' }],
					bgc: '#793a45'
				},
				{
					key: 'utility',
					title: '实用新型',
					imgs: [{ path: '../../static/images/certification/utility-front.jpg' }, { path: '../../static/images/certification/utility-back.jpg' }],
					bgc: '#1f586b'
				},
				{
					key: 'apperance',
					title: '外观',
					imgs: [{ path: '../../static/images/certification/apperance-front.jpg' }, { path: '../../static/images/certification/apperance-back.jpg' }],
					bgc: '#0a381e'
				}
			],
			visible: false,
			bigPic: ''
		}
	},
	methods: {
		scale(path) {
			// console.log(path, 'e')
			this.bigPic = path
			this.visible = true
		},
		close() {
			this.bigPic = ''
			this.visible = false
		}
	}
}
</script>

<style lang="less">
.scale-wrap {
	padding: 10px;
	.scale-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 110px;
		margin-bottom: 16px;
		padding: 0 10px 0 0;
		border: 1px solid;
		border-radius: 5px;
		.scale-title {
			writing-mode: vertical-lr;
			width: 40px;
			height: 100%;
			padding: 10px;
			border-radius: 5px 0 0 5px;
			color: #ffd765;
		}
		.scale-img {
			width: 80px;
			height: 100%;
		}
	}
}
.bigPic {
	width: 340px;
	height: 460px;
}
</style>
