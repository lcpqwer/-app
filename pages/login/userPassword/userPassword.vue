<template>
	<view style="padding: 20upx;">
		<view class="logo">
			<image src="/static/login/login2.png" class="logo-img" mode="aspectFit"></image>
		</view>
		<view class="c-item">
			<view class="c-warpper">
				<view class="c-warpper-title">手机号</view>
				<input type="number" class="c-warpper-input" @input="changePe" :value="phone" placeholder="请输入手机号"/>
			</view>
		</view>
		<view class="c-item">
			<view class="c-warpper">
				<view class="c-warpper-title">密码</view>
				<input class="c-warpper-input" @input="changePd" :password="password" placeholder="请输入密码"/>
			</view>
		</view>
		<view class="c-item" style="margin-top: 40upx;">
			<button class="sub" @tap="userLogin" type="primary">登陆</button>
		</view>
		<view class="c-item">
			<view @tap="userSMS" class="c-item-sms">
				验证码登陆
			</view>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				password: '',
				phone: ''
			}
		},
		methods: {
			changePe(e){
				this.phone = e.detail.value
			},
			changePd(e){
				this.password = e.detail.value
			},
			userSMS(){
				uni.navigateBack({
					delta: 1
				});
			},
			userLogin(){
				let that = this
				console.log(that.phone,that.password)
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_loginpwd/',
					method: 'POST',
					data: {
						phone: that.phone,
						password: that.password
					},
					success: res => {
						console.log(res)
						getApp().globalData.pid = res.data.data.pid
						that.getUserInfo(res.data.data.pid)
					},
					fail: () => {},
					complete: () => {}
				});
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
			toIndex(){
				uni.navigateTo({
					url:"/pages/index/index"
				})
			},
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.logo {
		width: 100%;height: 480upx;position: relative;
		
		&-img {
			width: 200upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);
		}
	}
	.c-item {
		height: 100upx;padding: 20upx 50upx;
		
		&-sms {
			width: 200upx;height: 80upx;font-size: 25upx;color: #175ACC;line-height: 80upx;
		}
	}
	.c-warpper {
		position: relative;border-bottom: #C8C7CC solid 2upx;width: 100%;height: 100%;
		
		&-title {
			font-size: 30upx;position: absolute;top: 50%;transform: translateY(-50%);width: 150upx;text-align: center;color: #000000;
		}
		&-input {
			position: absolute;top: 50%;transform: translateY(-50%);left: 200upx;color: #000000;
		}
	}
	.sub {
		height: 80upx;line-height: 80upx;font-size: 30upx;border-radius: 15upx;
	}
</style>
