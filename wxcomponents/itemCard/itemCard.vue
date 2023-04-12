<template>
	<view>
		<view class="" v-for="(item, key) in data" :key="key">
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
						<van-stepper :data-selected="key" :value="item.count" :min="1" integer @change="changeCount" />
						<view>
							<text>费用：</text>
							<text class="card-footer-price">{{ item.price }}元/件</text>
						</view>
					</view>
				</view>
				<view slot="right" class="deleteBtn"><van-button type="danger" round @click="del(key, item.type)">删除</van-button></view>
			</van-swipe-cell>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	mounted() {
		console.log(this.data, 'card')
	},
	data() {
		return {}
	},
	methods: {
		changeCount(e) {
			const params = {
				selected: e.target.dataset.selected,
				count: e.detail
			}
			this.$emit('changed', params)
		},
		del(selected, type) {
			this.$emit('delete', selected, type)
		}
	}
}
</script>

<style lang="less"></style>
