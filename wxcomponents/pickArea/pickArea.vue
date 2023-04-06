<template>
	<view class="pick-area-wrap">
		<scroll-view class="cart" scroll-y="true">
			<view class="cart-container" v-for="(item, index) in data" :key="index">
				<view class="type"><image :src="item.img"></image></view>
				<view class="desc">
					<view class="">
						<text class="desc-price">{{ item.price }}元</text>
						<text class="desc-other">起</text>
					</view>
					<van-button type="info" @click="pop(item.type)">选规格</van-button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			data: [
				{
					type: 'invent',
					img: '../../static/images/invent.jpeg',
					price: 5000
				},
				{
					type: 'utility',
					img: '../../static/images/utility.jpeg',
					price: 2500
				},
				{
					type: 'apperance',
					img: '../../static/images/apperance.jpeg',
					price: 1000
				}
			]
		}
	},
	methods: {
		pop(type) {
			this.$emit('pop', type)
		}
	}
}
</script>

<style lang="less">
.pick-area-wrap {
	width: 100%;
	height: 100%;
	.cart {
		display: flex;
		flex-direction: column;
		height: 100%;
		.cart-container {
			padding: 16rpx;
			display: flex;
			border-bottom: 1px solid lightgray;

			.type {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 200rpx;
				height: 200rpx;
				margin-right: 10rpx;
				border: 1rpx solid black;
				border-radius: 10px;
				font-size: 36px;
				font-weight: 700;

				image {
					border-radius: 10px;
					width: 100%;
					height: 100%;
				}
			}

			.desc {
				flex: 1;
				height: 200rpx;
				// text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				padding: 10rpx 0;

				.desc-price {
					font-size: 24px;
					font-weight: 500;
				}

				.desc-other {
					font-size: 12px;
				}

				button {
					width: 250rpx;
					border-radius: 10px;
				}
			}
		}
	}
}
</style>
