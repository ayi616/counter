<template>
	<view class="search-wrap" id="search-container">
		<!-- 下拉菜单（有bug，暂未解决） -->
		<!-- <van-dropdown-menu><van-dropdown-item v-model="value1" :options="option1" /></van-dropdown-menu> -->
		<view class="">搜索范围：</view>
		<van-radio-group v-model="radio" @change="changeRadio">
			<van-cell-group>
				<van-cell :title="item" clickable v-for="(item, index) in keyList" :key="index" @click="cellClick(item)">
					<template #right-icon>
						<van-radio :name="item" />
					</template>
				</van-cell>
			</van-cell-group>
		</van-radio-group>

		<van-field v-model="keyword" center clearable label="搜索词" placeholder="请输入搜索词" @change="keyChange">
			<template #button>
				<van-button size="small" type="info" @click="search">搜索</van-button>
			</template>
		</van-field>

		<scroll-view scroll-y="true" class="scroll-area" v-if="result.length > 0">
			<view class="table">
				<view class="table-row" v-for="item in result" :key="item.key">
					<view class="row-key">
						<view class="">{{ item.key }}</view>
						<van-tag color="#1f586b" size="medium">{{ item.tag }}</van-tag>
					</view>
					<view class="row-value">{{ item.desc }}</view>
				</view>
			</view>
		</scroll-view>
		<van-empty v-else image="search" description="无咩无个" />
	</view>
</template>

<script>
import dataGZ from '../../data/dataGZ.json'
import dataGD from '../../data/dataGD.json'
import dataST from '../../data/dataST.json'
// 序号对应index页面侧边栏顺序
const mapping = {
	1: dataGD,
	2: dataST,
	3: dataGZ
}
export default {
	props: {
		source: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			value1: 0,
			option1: [{ text: '全部商品', value: 0 }, { text: '新款商品', value: 1 }, { text: '活动商品', value: 2 }],
			radio: '全部',
			keyword: '', // 搜索关键词
			result: [],
			keyList: ['全部']
		}
	},
	created() {
		this.keyList = [...this.keyList, ...Object.keys(mapping[this.source])]
	},
	methods: {
		cellClick(value) {
			this.radio = value
		},
		changeRadio(e) {
			this.radio = e.detail
		},
		keyChange(e) {
			this.keyword = e.detail
		},
		search() {
			this.$nextTick(() => {
				console.log(this.$refs, 'ref')
			})
			this.result = []
			if (this.keyword === '') {
				return
			}
			if (this.radio === '全部') {
				Object.keys(mapping[this.source]).forEach((item) => {
					const temp = this.handleResult(mapping[this.source], item, this.keyword)
					this.result = [...this.result, ...temp]
				})
			} else {
				this.result = this.handleResult(mapping[this.source], this.radio, this.keyword)
			}
		},
		handleResult(source, target, keyword) {
			let result = []
			source[target].forEach((item) => {
				const { key, desc } = item
				if (key.includes(keyword) || desc.includes(keyword)) {
					result.push({
						key,
						desc,
						tag: target.charAt(0)
					})
				}
			})
			return result
		}
	}
}
</script>
<style lang="less">
.search-wrap {
	height: 100%;
}
.scroll-area {
	height: calc(100% - 205px);
}
.table {
	.table-row {
		display: flex;
		align-items: center;
		padding: 6px 0;
		color: dimgray;
		&:nth-child(odd) {
			background-color: aliceblue;
			// background-color: gainsboro;
		}
		.row-key {
			width: 60px;
			padding: 0 6px;
			border-right: 1px solid gainsboro;
		}
		.row-value {
			width: calc(100% - 60px);
			padding: 0 6px;
			text-align: left;
		}
	}
}
</style>
