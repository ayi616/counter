	const inventMap = [{
			choice: 'ques1-1',
			price: 0,
			tag: 'A',
			desc: '是否可以费减：',
			options: {
				'ques1-1': {
					name: '是',
					tag: 'A',
					detail: '',
					price: 0
				},
				'ques1-2': {
					name: '否',
					tag: 'B',
					detail: '',
					price: 3450
				}
			},
			dir: 'horizontal'
		},
		{
			choice: 'ques2-1',
			price: 560,
			tag: 'C',
			desc: '是否是单申请人：',
			options: {
				'ques2-1': {
					name: '是',
					tag: 'C',
					detail: '',
					price: 560
				},
				'ques2-2': {
					name: '否',
					tag: 'D',
					detail: '',
					price: 1020
				}
			},
			dir: 'horizontal'
		},
		{
			choice: 'ques3-2',
			price: 4550,
			tag: 'F',
			desc: '是否选择高质量：',
			options: {
				'ques3-1': {
					name: '是',
					tag: 'E',
					detail: '',
					price: 15000
				},
				'ques3-2': {
					name: '否',
					tag: 'F',
					detail: '',
					price: 4550
				}
			},
			dir: 'horizontal'
		},
		{
			choice: 'ques4-1',
			price: 7000,
			tag: 'G',
			desc: '是否走通道：',
			options: {
				'ques4-1': {
					name: '是，15个月出结果',
					tag: 'G',
					detail: '（优先审查）',
					price: 7000
				},
				'ques4-2': {
					name: '是，8个月出结果',
					tag: 'H',
					detail: '（保护中心）',
					price: 0
				},
				'ques4-3': {
					name: '否',
					tag: 'I',
					detail: '',
					price: 0
				}
			},
			dir: 'vertical'
		},
		{
			choice: 'ques5-1',
			price: 13000,
			tag: 'J',
			desc: '是否走通道：',
			options: {
				'ques5-1': {
					name: '电学、大数据',
					tag: 'J',
					detail: '',
					price: 13000
				},
				'ques5-2': {
					name: '其他',
					tag: 'K',
					detail: '',
					price: 10000
				}
			},
			dir: 'horizontal'
		},
		// 第一题为“否”的时候，重置第二题（选项价格）
		{
			choice: 'ques2-1',
			price: 0,
			tag: 'C',
			desc: '是否是单申请人：',
			options: {
				'ques2-1': {
					name: '是',
					tag: 'C',
					detail: '',
					price: 0
				},
				'ques2-2': {
					name: '否',
					tag: 'D',
					detail: '',
					price: 0
				}
			},
			dir: 'horizontal'
		},
		// 第三题为“否”的时候，重置第二题（选项价格/优惠价）
		{
			choice: 'ques2-1',
			price: 450,
			tag: 'C',
			desc: '是否是单申请人：',
			options: {
				'ques2-1': {
					name: '是',
					tag: 'C',
					detail: '',
					price: 450
				},
				'ques2-2': {
					name: '否',
					tag: 'D',
					detail: '',
					price: 950
				}
			},
			dir: 'horizontal'
		}
	]

	const utilityMap = [{
			choice: 'ques1-2',
			price: 3200,
			tag: 'M',
			desc: '是否可以费减：',
			options: {
				'ques1-1': {
					name: '是',
					tag: 'L',
					detail: '',
					price: 0
				},
				'ques1-2': {
					name: '否',
					tag: 'M',
					detail: '',
					price: 3200
				}
			},
			dir: 'horizontal'
		},
		{
			choice: 'ques2-1',
			price: 2500,
			tag: 'N',
			desc: '是否是单申请人：',
			options: {
				'ques2-1': {
					name: '是',
					tag: 'N',
					detail: '',
					price: 2500
				},
				'ques2-2': {
					name: '否',
					tag: 'O',
					detail: '',
					price: 2600
				}
			},
			dir: 'horizontal'
		}
	]

	const apperanceMap = [{
			choice: 'ques1-2',
			price: 2000,
			tag: 'Q',
			desc: '是否可以费减：',
			options: {
				'ques1-1': {
					name: '是',
					tag: 'P',
					detail: '',
					price: 0
				},
				'ques1-2': {
					name: '否',
					tag: 'Q',
					detail: '',
					price: 2000
				}
			},
			dir: 'horizontal'
		},
		{
			choice: 'ques2-1',
			price: 1000,
			tag: 'R',
			desc: '是否是单申请人：',
			options: {
				'ques2-1': {
					name: '是',
					tag: 'R',
					detail: '',
					price: 1000
				},
				'ques2-2': {
					name: '否',
					tag: 'S',
					detail: '',
					price: 1100
				}
			},
			dir: 'horizontal'
		}
	]

	function getOptions(type, arr) {
		const result = {}
		arr.forEach((item) => {
			if (type === 'invent') {
				result[`ques${item}`] = inventMap[item - 1]
			}
			if (type === 'utility') {
				result[`ques${item}`] = utilityMap[item - 1]
			}
			if (type === 'apperance') {
				result[`ques${item}`] = apperanceMap[item - 1]
			}
		})
		return result
	}

	export default getOptions