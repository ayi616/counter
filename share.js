module.exports = {
	onLoad() {
		// 设置默认的转发参数
		this.share = {
			title: '', // 默认为小程序名称
			path: '', // 默认为当前页面路径
			imageUrl: '' // 默认为当前页面的截图
		}
		//分享白名单
		let urlList = []
		//获取路由信息
		let pages = getCurrentPages()
		//获取当前路由
		let nowPage = pages[pages.length - 1]
	},
	//分享好友
	onShareAppMessage() {
		return this.share
	},
	//朋友圈
	onShareTimeline() {
		return this.share
	}
}