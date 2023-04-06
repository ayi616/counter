import clonedeep from 'lodash/cloneDeep';
const quoteMap = {
	quote1: {
		title: '普通发明',
		time: '2~3年',
		remark: '不包授权，不退费'
	},
	quote2: {
		title: '高质量发明',
		time: '2~3年',
		remark: '不授权退15000元'
	},
	quote3: {
		title: '优先审查发明',
		time: '15个月',
		remark: '①不授权，但15个月内出结果，退15000元②不授权，且15个月内没出结果，退17000元'
	},
	quote4: {
		title: '保护中心发明（电学、大数据）',
		time: '8个月',
		remark: '不授权，退28000，或重新申请'
	},
	quote5: {
		title: '保护中心发明',
		time: '8个月',
		remark: '不授权，退25000，或重新申请'
	},
	quote6: {
		title: '实用新型（没费减）',
		time: '5～8个月',
		remark: ''
	},
	quote7: {
		title: '实用新型（费减85%）',
		time: '5～8个月',
		remark: ''
	},
	quote8: {
		title: '实用新型（费减70%）',
		time: '5～8个月',
		remark: ''
	},
	quote9: {
		title: '外观设计（没费减）',
		time: '5～8个月',
		remark: ''
	},
	quote10: {
		title: '外观设计（费减85%）',
		time: '5～8个月',
		remark: ''
	},
	quote11: {
		title: '外观设计（费减70%）',
		time: '5～8个月',
		remark: ''
	}
}

const tagMap = {
	// 报价1
	'ACF': {
		...quoteMap.quote1
	},
	'ADF': {
		...quoteMap.quote1
	},
	'BCF': {
		...quoteMap.quote1
	},
	'BDF': {
		...quoteMap.quote1
	},
	// 报价2
	'ACEI': {
		...quoteMap.quote2
	},
	'ADEI': {
		...quoteMap.quote2
	},
	'BCEI': {
		...quoteMap.quote2
	},
	'BDEI': {
		...quoteMap.quote2
	},
	// 报价3
	'ACEG': {
		...quoteMap.quote3
	},
	'ADEG': {
		...quoteMap.quote3
	},
	'BCEG': {
		...quoteMap.quote3
	},
	'BDEG': {
		...quoteMap.quote3
	},
	// 报价4
	'ACEHJ': {
		...quoteMap.quote4
	},
	'ADEHJ': {
		...quoteMap.quote4
	},
	'BCEHJ': {
		...quoteMap.quote4
	},
	'BDEHJ': {
		...quoteMap.quote4
	},
	// 报价5
	'ACEHK': {
		...quoteMap.quote5
	},
	'ADEHK': {
		...quoteMap.quote5
	},
	'BCEHK': {
		...quoteMap.quote5
	},
	'BDEHK': {
		...quoteMap.quote5
	},
	// 报价6
	'M': {
		...quoteMap.quote6
	},
	// 报价7
	'IN': {
		...quoteMap.quote7
	},
	// 报价8
	'IO': {
		...quoteMap.quote8
	},
	// 报价9
	'Q': {
		...quoteMap.quote9
	},
	// 报价10
	'PR': {
		...quoteMap.quote10
	},
	// 报价11
	'PS': {
		...quoteMap.quote11
	}
}

function getResult(data) {
	// console.log(data, 'res')
	let result = []
	data.forEach((choice) => {
		const source = clonedeep(tagMap[choice.selected])
		const item = Object.assign(source, choice)
		result.unshift(item)
	})
	return result
}

export default getResult