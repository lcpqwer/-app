<template>
	<view style="height: 100%;width: 100%;background-color: #fff;">
		<image src="/static/enter_logo.png" style="height: 20%;position: fixed;top: 10%;left: 50%;transform: translateX(-50%);" mode="aspectFit"></image>
		<view class="text1">等下干嘛</view>
		<view class="text2">www.dasgamo.com</view>
		<view class="text3">V1.0.1</view>
		<view class="text4">2019</view>
		<view class="text5">@上海刻契商务信息咨询有限公司</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			init(){
				let that = this
				that.getAddress()
				// 删除缓存
				// uni.removeStorage({
				//     key: 'userInfo',
				//     success: function (res) {
				// 		that.getpid()
				//     }
				// });
				that.getpid()
			},
			getUserInfo(pid){
				let that = this
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_geteditinfo/',
					method: 'POST',
					data: {
						pid: pid
					},
					success: res => {
						// console.log(res)
						if (res.data.status == 1){
							let data = res.data.data
							// console.log(data)
							getApp().globalData.userSexIndex = data.user_sex
							if (data.user_job != '')getApp().globalData.userJob = data.user_job
							getApp().globalData.userName = data.user_nike
							if (data.img_head_url != '')getApp().globalData.userHead = data.img_head_url
							if (data.user_area != '')getApp().globalData.userArea = data.user_area
							if (data.user_born != '')getApp().globalData.userBorn = data.user_born
							getApp().globalData.userLike = data.user_fan
							that.getUserOtherInfo(pid)
						}	
					},
					fail: () => {
						uni.showModal({
							content: '网络出错',
							showCancel: false
						});
					},
					complete: () => {}
				});
			},
			// 获取用户其他信息
			getUserOtherInfo(pid){
				let that = this
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_personalpage/',
					method: 'POST',
					data: {
						pid: pid 
					},
					success: res => {
						let data = res.data.data
						getApp().globalData.userSex = data.sex
						if (data.sign != '')getApp().globalData.userSign = data.sign
						getApp().globalData.userCoin = data.coin 
						that.toIndex()
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 获取缓存的pid
			getpid(){
				uni.getStorage({
					key:'userInfo',
					success: res => {
						// 发布版本
						// console.log('获取storage',res)
						getApp().globalData.pid = res.data
						this.getUserInfo(res.data)	
						// 测试专用
						// this.getUserInfo(getApp().globalData.pid)
					},
					fail: (e) => {
						// console.log(e)
						// if (e.errMsg == "getStorage:fail"){
							// 发布版本 跳转到登陆页面
							uni.navigateTo({
								url: '/pages/login/user_sign',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
							
							// 测试专用
							// this.getUserInfo(getApp().globalData.pid)
						// }
					}
				})
			},
			toIndex(){
				uni.navigateTo({
					url:"/pages/index/index"
				})
			},
			getAddress(){
				uni.getLocation({
				    type: 'wgs84',
					geocode: true,
				    success: function (res) {
						// console.log('位置信息',res)
				        // console.log('当前位置的经度：' + res.longitude);
				        // console.log('当前位置的纬度：' + res.latitude);
						getApp().globalData.userLatitude = res.latitude
						getApp().globalData.userLongitude = res.longitude
				    }
				});
			}
		}
	}
</script>

<style>
	view{
		color: #000000;font-size: 30upx
	}
	.text1,.text2,.text3,.text4,.text5 {
		width: 100%;text-align: center;position: fixed;
	}
	.text5 {
		bottom: 30upx;font-size: 20upx
	}
	.text4 {
		bottom: 60upx;font-size: 20upx
	}
	.text3 {
		bottom: 110upx;font-weight: 600;
	}
	.text2 {
		bottom: 220upx;font-weight: 600;
	}
	.text1 {
		bottom: 280upx;font-weight: 600;
	}
</style>