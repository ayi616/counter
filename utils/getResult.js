import clonedeep from 'lodash/cloneDeep';
const quoteMap = {
	// 发明
	quote1: {
		title: '普通发明',
		time: '2~3年',
		refund: 0,
		remark: '不包授权，不退费',
		// type: 'invent'
	},
	quote2: {
		title: '高质量发明',
		time: '2~3年',
		refund: 15000,
		remark: '不授权退15000元',
		// type: 'invent'
	},
	quote3: {
		title: '优先审查发明',
		time: '15个月',
		refund: 17000,
		remark: `①不授权，但15个月内出结果，退15000元
		②不授权，且15个月内没出结果，退17000元`,
		// type: 'invent'
	},
	quote4: {
		title: '保护中心发明（电学、大数据）',
		time: '8个月',
		refund: 28000,
		remark: '不授权，退28000，或重新申请',
		// type: 'invent'
	},
	quote5: {
		title: '保护中心发明',
		time: '8个月',
		refund: 25000,
		remark: '不授权，退25000，或重新申请',
		// type: 'invent'
	},
	// 实用新型
	quote6: {
		title: '实用新型（没费减）',
		time: '5～8个月',
		refund: 0,
		remark: '',
		// type: 'utility'
	},
	quote7: {
		title: '实用新型（费减85%）',
		time: '5～8个月',
		refund: 0,
		remark: '',
		// type: 'utility'
	},
	quote8: {
		title: '实用新型（费减70%）',
		time: '5～8个月',
		refund: 0,
		remark: '',
		// type: 'utility'
	},
	// 外观设计
	quote9: {
		title: '外观设计（没费减）',
		time: '5～8个月',
		refund: 0,
		remark: '',
		// type: 'apperance'
	},
	quote10: {
		title: '外观设计（费减85%）',
		time: '5～8个月',
		refund: 0,
		remark: '',
		// type: 'apperance'
	},
	quote11: {
		title: '外观设计（费减70%）',
		time: '5～8个月',
		refund: 0,
		remark: '',
		// type: 'apperance'
	}
}

const tagMap = {
	// 报价1
	'ACF': {
		// price: 5000,
		...quoteMap.quote1
	},
	'ADF': {
		// price: 5500,
		...quoteMap.quote1
	},
	'BCF': {
		// price: 8000,
		...quoteMap.quote1
	},
	'BDF': {
		// price: 8000,
		...quoteMap.quote1
	},
	// 报价2
	'ACEI': {
		// price: 15560,
		...quoteMap.quote2
	},
	'ADEI': {
		// price: 16020,
		...quoteMap.quote2
	},
	'BCEI': {
		// price: 18450,
		...quoteMap.quote2
	},
	'BDEI': {
		// price: 18450,
		...quoteMap.quote2
	},
	// 报价3
	'ACEG': {
		// price: 22560,
		...quoteMap.quote3
	},
	'ADEG': {
		// price: 23020,
		...quoteMap.quote3
	},
	'BCEG': {
		// price: 25450,
		...quoteMap.quote3
	},
	'BDEG': {
		// price: 25450,
		...quoteMap.quote3
	},
	// 报价4
	'ACEHJ': {
		// price: 28560,
		...quoteMap.quote4
	},
	'ADEHJ': {
		// price: 29020,
		...quoteMap.quote4
	},
	'BCEHJ': {
		// price: 31450,
		...quoteMap.quote4
	},
	'BDEHJ': {
		// price: 31450,
		...quoteMap.quote4
	},
	// 报价5
	'ACEHK': {
		// price: 25560,
		...quoteMap.quote5
	},
	'ADEHK': {
		// price: 26020,
		...quoteMap.quote5
	},
	'BCEHK': {
		// price: 28450,
		...quoteMap.quote5
	},
	'BDEHK': {
		// price: 28450,
		...quoteMap.quote5
	},
	// 报价6
	'M': {
		// price: 3200,
		...quoteMap.quote6
	},
	// 报价7
	'LN': {
		// price: 2500,
		...quoteMap.quote7
	},
	// 报价8
	'LO': {
		// price: 2600,
		...quoteMap.quote8
	},
	// 报价9
	'Q': {
		// price: 2000,
		...quoteMap.quote9
	},
	// 报价10
	'PR': {
		// price: 1000,
		...quoteMap.quote10
	},
	// 报价11
	'PS': {
		// price: 1100,
		...quoteMap.quote11
	}
}

function getResult(data) {
	let result = {}
	Object.keys(data).forEach((key) => {
		const source = clonedeep((tagMap[key]))
		const item = Object.assign(data[key], source)
		item.title = key === 'ACF' ? '普通发明（费减85%）' : item.title
		item.title = key === 'ADF' ? '普通发明（费减70%）' : item.title
		// console.log(item, '111')
		result[key] = item
	})
	return result
}

export default getResult