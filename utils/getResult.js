import clonedeep from 'lodash/cloneDeep';
const quoteMap = {
	// 发明
	quote1: {
		title: '普通发明',
		time: '2~3年',
		refund: 0,
		remark: '不包授权，不退费'
	},
	quote2: {
		title: '高质量发明',
		time: '约18~30个月3年',
		refund: 15000,
		remark: '不授权，退15000元，或重新申请'
	},
	quote3: {
		title: '优先审查发明',
		time: '15个月',
		refund: 22000,
		remark: '不授权，退22000元，或重新申请'
	},
	quote4: {
		title: '保护中心发明',
		desc: '电学、大数据',
		time: '备案后8个月',
		refund: 28000,
		remark: '不授权，退28000，或重新申请'
	},
	quote5: {
		title: '保护中心发明',
		desc: '其他',
		time: '备案后8个月',
		refund: 25000,
		remark: '不授权，退25000，或重新申请'
	},
	// 实用新型
	quote6: {
		title: '实用新型（没费减）',
		desc: '编写包授权',
		time: '5～8个月',
		refund: 0,
		remark: ''
	},
	quote7: {
		title: '实用新型',
		desc: '编写包授权',
		time: '5～8个月',
		refund: 0,
		remark: ''
	},
	quote8: {
		title: '实用新型',
		desc: '编写包授权',
		time: '5～8个月',
		refund: 0,
		remark: ''
	},
	// 外观设计
	quote9: {
		title: '外观设计（没费减）',
		time: '5～8个月',
		refund: 0,
		remark: ''
	},
	quote10: {
		title: '外观设计',
		time: '5～8个月',
		refund: 0,
		remark: ''
	},
	quote11: {
		title: '外观设计',
		time: '5～8个月',
		refund: 0,
		remark: ''
	}
}

const inventMap = {
	// 报价1
	'AAB': {
		...quoteMap.quote1
	},
	'ABB': {
		...quoteMap.quote1
	},
	'BAB': {
		...quoteMap.quote1
	},
	'BBB': {
		...quoteMap.quote1
	},
	// 报价2
	'AAAC': {
		...quoteMap.quote2
	},
	'ABAC': {
		...quoteMap.quote2
	},
	'BAAC': {
		...quoteMap.quote2
	},
	'BBAC': {
		...quoteMap.quote2
	},
	// 报价3
	'AAAA': {
		...quoteMap.quote3
	},
	'ABAA': {
		...quoteMap.quote3
	},
	'BAAA': {
		...quoteMap.quote3
	},
	'BBAA': {
		...quoteMap.quote3
	},
	// 报价4
	'AAABA': {
		...quoteMap.quote4
	},
	'ABABA': {
		...quoteMap.quote4
	},
	'BAABA': {
		...quoteMap.quote4
	},
	'BBABA': {
		...quoteMap.quote4
	},
	// 报价5
	'AAABB': {
		...quoteMap.quote5
	},
	'ABABB': {
		...quoteMap.quote5
	},
	'BAABB': {
		...quoteMap.quote5
	},
	'BBABB': {
		...quoteMap.quote5
	}
}

const utilityMap = {
	// 报价6
	'B': {
		...quoteMap.quote6
	},
	// 报价7
	'AA': {
		...quoteMap.quote7
	},
	// 报价8
	'AB': {
		...quoteMap.quote8
	}
}

const apperanceMap = {
	// 报价9
	'B': {
		...quoteMap.quote9
	},
	// 报价10
	'AA': {
		...quoteMap.quote10
	},
	// 报价11
	'AB': {
		...quoteMap.quote11
	}
}

const resultMap = {
	inventMap,
	utilityMap,
	apperanceMap
}

function getDiscount(key) {
	const choice1 = key.charAt(0)
	const choice2 = key.charAt(1)
	let sub = ''
	if (choice1 === 'A') {
		sub = choice2 === 'A' ? '（费减85%）' : '（费减70%）'
	}
	return sub
}

function getResult(data) {
	// console.log(resultMap, 'resultMap')
	let result = {}
	Object.keys(data).forEach((key) => {
		const type = data[key].type
		let selected = key
		let tag = ''
		if (key.includes('-')) {
			const arr = key.split('-')
			selected = arr[0]
			const addedCount = arr[1]
			if (addedCount > 0) {
				if (type === 'invent') {
					tag = `赠送实用新型${addedCount}件`
				} else if (type === 'apperance') {
					tag = `${addedCount}项设计`
				}
			}
		}
		const source = clonedeep((resultMap[`${type}Map`][selected]))
		const item = Object.assign(data[key], source)
		item.tag = tag
		const sub = getDiscount(key)
		item.title += sub
		// console.log(item, '111')
		result[key] = item
	})
	return result
}

export default getResult