<template>
	<view class="search-wrap" id="search-container">
		<!-- 下拉菜单（有bug，暂未解决） -->
		<van-dropdown-menu><van-dropdown-item v-model="selected" :options="options" custom-class="dropdown" @change="hangdleChange" /></van-dropdown-menu>

		<van-field v-model="keyword" center clearable label="搜索词" placeholder="请输入搜索词" @change="keyChange">
			<template #button>
				<van-button size="small" type="info" @click="search">搜索</van-button>
			</template>
		</van-field>

		<scroll-view scroll-y="true" class="scroll-area" v-if="result.length > 0">
			<view class="table">
				<view class="table-row" v-for="item in result" :key="item.key">
					<view class="row-key">
						<view v-html="item.key"></view>
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
import dataSZ from '../../data/dataSZ.json'
import dataZH from '../../data/dataZH.json'
import dataFS from '../../data/dataFS.json'
import dataAll from '../../data/data.json'
// 序号对应index页面侧边栏顺序
const mapping = {
	1: dataGD,
	2: dataST,
	3: dataGZ,
	4: dataSZ,
	5: dataZH,
	6: dataFS,
	7: dataAll
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
			options: [{ text: '全部', value: '全部' }],
			selected: '全部',
			keyword: '', // 搜索关键词
			result: []
		}
	},
	created() {
		const sourceArr = Object.keys(mapping[this.source])
		if (sourceArr.length > 1) {
			sourceArr.forEach((key) => {
				this.options.push({
					text: key,
					value: key
				})
			})
		}
	},
	methods: {
		hangdleChange(e) {
			this.selected = e.detail
		},
		keyChange(e) {
			this.keyword = e.detail
		},
		search() {
			this.result = []
			if (this.keyword === '') {
				return
			}
			if (this.selected === '全部') {
				Object.keys(mapping[this.source]).forEach((item) => {
					const temp = this.handleResult(mapping[this.source], item, this.keyword)
					this.result = [...this.result, ...temp]
				})
			} else {
				this.result = this.handleResult(mapping[this.source], this.selected, this.keyword)
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
.dropdown {
	left: unset !important;
	width: calc(100% - 80px);
}
.search-wrap {
	height: 100%;
	width: 100%;
}
.scroll-area {
	height: calc(100% - 100px);
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
			width: 120px;
			padding: 0 6px;
			border-right: 1px solid gainsboro;
			word-break: break-all;
		}
		.row-value {
			width: calc(100% - 120px);
			padding: 0 6px;
			text-align: left;
		}
		.fontColor {
			color: red;
		}
	}
}
</style>
