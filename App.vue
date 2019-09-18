<script>
	export default {
		globalData: {
			pid: 1,
			typeData: {
				'1': '美食咖啡',
				'2': '展览电影',
				'3': '唱歌泡吧',
				'4': '互动聊天',
				'5': '户外运动'
			},
			urlList: {
				'1': 'http://52.80.194.137:8000/user/user_gourmetcoffee/',
				'2': 'http://52.80.194.137:8000/user/user_filmfair/',
				'3': 'http://52.80.194.137:8000/user/user_singsingbar/',
				'4': 'http://52.80.194.137:8000/user/user_chatinteraction/',
				'5': 'http://52.80.194.137:8000/user/user_sportsoutdoors/'
			},
			allUrl: 'http://52.80.194.137:8000/',
			// 选择参与人群
			peopleInfo: '请选择',
			peopleBool: false,
			sex: null,
			pNum: null,
			carry: null,
			money: 50,
			userInfo: false,
			// 个人信息
			userBlack: 0, 		//黑名单
			userFans: 0,  		//粉丝
			userFocus: 0, 		// 关注
			userJob: '无职业', 	// 职业
			userSexIndex: 0,  	// 性别Index
			userName: '',     	// 用户名
			userSign: '无星座', 	// 星座
			userArea: '北京市-北京', // 地区
			userAge: 0, 		// 年龄
			userHead: '', 		// 头像
			userBorn: '2019-09-01', // 出生年月日
			headBase: '',
			userLike: [], 		// 喜好
			userSex: 0,  		// 性别
			userCoin:0, 		// 点数
			// 加载活动第一页
			activeBool: false,
			// 用户位置信息
			userLatitude: null,
			userLongitude: null,
			// 颜值
			userAence: '去测试',
			// 我的发布
			myUpload: true,
			// 高德地图key
			gaoKey: '3dcb6b8d3b392e810c3de2b24de278bd'
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			getBase64(path){
				let that = this
				plus.io.resolveLocalFileSystemURL(path, function(entry) { //获取文件对象
					entry.file(function(file) { //获取文件的数据  
						var fileReader = new plus.io.FileReader(); //创建读取文件对象    
						fileReader.readAsDataURL(file);
						fileReader.onload = function(e) { //读取成功并以Base64编码呈现  
							getApp().globalData.headBase = e.target.result
							// console.log(e.target.result)
						}
				
					})
					
				})
			},
			getUserInfo(){
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_geteditinfo/',
					method: 'POST',
					data: {
						pid: getApp().globalData.pid
					},
					success: res => {
						console.log(res)
						if (res.data.status == 1){
							let data = res.data.data
							getApp().globalData.userSexIndex = data.user_sex
							getApp().globalData.userJob = data.user_job
							getApp().globalData.username = data.user_nike
							getApp().globalData.userHead = data.img_head_url
							getApp().globalData.headBase = this.getBase64(data.img_head_url)
							getApp().globalData.userArea = data.user_area
							getApp().globalData.userBorn = data.user_born
							getApp().globalData.userLike = data.user_fan
						}
						
						
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./static/css/home-nav.css");
	page {
		background-color: #161824;
		width: 100%;
		height: 100%;
	}
	.black-warpper {
		height: 100%;background-color: rgba(255,255,255,0);width: 100upx;
	}
	.warpper {
		background-color: #161824;
		width: 100%;
		height: 100%;
	}
	view {
		color: white;
	}
	
	.bgc {
		background-color: #161824;
	}
	uni-page-head {
		display: none;
	}
	.uni-page-head {
		display: none;
	}
	.uni-picker-view-mask{
		background: none!important;
	}
	.uni-picker-view-group :not{
		background: none!important;
	}
	picker .uni-picker-item {
		font-size: 30upx;		
		color: #FFFFFF;
	}
	picker .uni-picker-header {
		background-color: #161824;
		font-size: 30upx;
		color: #FFFFFF;
	}
	picker .uni-picker-view-wrapper {
		background-color: #161824;
	}
	
</style>
