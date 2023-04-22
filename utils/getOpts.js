	const inventMap = {
		'ques1': {
			choice: 'A',
			desc: '是否可以费减：',
			active: true,
			options: {
				'A': {
					title: '是',
					price: 0,
					detail: ''
				},
				'B': {
					title: '否',
					price: 3450,
					detail: ''
				}
			},
			dir: 'horizontal'
		},
		'ques2': {
			choice: 'A',
			desc: '是否是单申请人：',
			active: true,
			options: {
				'A': {
					title: '是',
					// price: 560, //正常价格
					price: 450, //第三题选B时，优惠价格（初始价格）
					// price: 0, // 第一题选B时，无价格（优先级比第三题高）
					detail: ''
				},
				'B': {
					title: '否',
					// price: 1020, //正常价格
					price: 950, //第三题选B时，优惠价格（初始价格）
					// price: 0, // 第一题选B时，无价格（优先级比第三题高）
					detail: ''
				}
			},
			dir: 'horizontal'
		},
		'ques3': {
			choice: 'B',
			desc: '是否选择高质量：',
			active: true,
			options: {
				'A': {
					title: '是',
					price: 15000,
					detail: ''
				},
				'B': {
					title: '否',
					price: 4550,
					detail: ''
				}
			},
			dir: 'horizontal'
		},
		'ques4': {
			choice: 'A',
			desc: '是否走通道：',
			active: false,
			options: {
				'A': {
					title: '是，15个月出结果',
					price: 7000,
					detail: '（优先审查）'
				},
				'B': {
					title: '是，备案后8个月出结果',
					price: 0,
					detail: '（保护中心）'
				},
				'C': {
					title: '否，约18～30个月出结果',
					price: 0,
					detail: ''
				}
			},
			dir: 'vertical'
		},
		'ques5': {
			choice: 'A',
			desc: '是否走通道：',
			active: false,
			options: {
				'A': {
					title: '电学、大数据',
					price: 13000,
					detail: ''
				},
				'B': {
					title: '其他',
					price: 10000,
					detail: ''
				}
			},
			dir: 'horizontal'
		}
	}

	const utilityMap = {
		'ques1': {
			choice: 'B',
			desc: '是否可以费减：',
			active: true,
			options: {
				'A': {
					title: '是',
					price: 0,
					detail: ''
				},
				'B': {
					title: '否',
					price: 3200,
					detail: ''
				}
			},
			dir: 'horizontal'
		},
		'ques2': {
			choice: 'A',
			desc: '是否是单申请人：',
			active: false,
			options: {
				'A': {
					title: '是',
					price: 2500,
					detail: ''
				},
				'B': {
					title: '否',
					price: 2600,
					detail: ''
				}
			},
			dir: 'horizontal'
		}
	}

	const apperanceMap = {
		'ques1': {
			choice: 'B',
			desc: '是否可以费减：',
			active: true,
			options: {
				'A': {
					title: '是',
					price: 0,
					detail: ''
				},
				'B': {
					title: '否',
					price: 2000,
					detail: ''
				}
			},
			dir: 'horizontal'
		},
		'ques2': {
			choice: 'A',
			desc: '是否是单申请人：',
			active: false,
			options: {
				'A': {
					title: '是',
					price: 850,
					detail: ''
				},
				'B': {
					title: '否',
					price: 950,
					detail: ''
				}
			},
			dir: 'horizontal'
		}
	}

	const optionMap = {
		inventMap,
		utilityMap,
		apperanceMap
	}

	function getOpts(type) {
		return optionMap[`${type}Map`]
	}

	export default getOpts