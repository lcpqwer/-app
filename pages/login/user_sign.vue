<template>
	<view class="page_login">

		<view class="head">
			<view class="head_img">
				<image mode="aspectFit" style="width: 200upx;" src="/static/login/login2.png" />
			</view>
		</view>

		<view class="login_form">
			<view class="input" style="width: 100%;height: 80upx;border-bottom: 2upx solid #c0c0c0;">
				<view style="width: 25%;height: 100%;display: inline-block;position: relative;vertical-align: middle;">
					<view style="font-size: 30upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);color:#d0d1d3;width: 100upx;height: 40upx;">
						<view style="width: 100%;position: relative;">
							<view style="position: absolute;top: 50%;left: 0;transform: translateY(-50%); font-size: 34upx; ">+86
							</view>
							<image style="width: 40upx;height: 40upx;position: absolute;top: 50%;right: 0;transform: translateY(-50%);" src="/static/login/down.png"
							 mode=""></image>
						</view>
					</view>
				</view>
				<view style="width: 75%;height: 100%;display: inline-block;position: relative;vertical-align: sub;">
					<input @input="inputUsername" @focus="check" style="position: absolute;top: 50%;transform: translateY(-50%);color: #FFFFFF;" :value="username" type="number"
					 placeholder="请输入手机号" maxlength="11" placeholder-style="color: #383d50;font-size: 20upx">
					 <image @tap="delUser" src="/static/login/del.png" style="width: 32upx;height: 32upx;position: absolute;top: 50%;transform: translate(50%,-50%);right: 100upx;" mode=""></image>
				</view>
			</view>
			<view class="input" style="width: 100%;height: 80upx;margin-top: 80upx;border-bottom: 2upx solid #c0c0c0;">
				<view style="width: 25%;height: 100%;display: inline-block;position: relative;">
					<view style="font-size: 30upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);color: #D2D2D4;width: 100upx;height: 40upx;">
						<view style="width: 100%;height: 100%;position: relative;">
							<view style="position: absolute;top: 50%;left: 0;transform: translateY(-50%);">验证码
							</view>
						</view>
					</view>
				</view>
				<view style="width: 75%;height: 100%;display: inline-block;position: relative;">
					<input :value="userpwd" @input="inputPwd" style="position: absolute;top: 50%;transform: translateY(-50%);color: #FFFFFF;" type="number"
					 placeholder="输入验证码" placeholder-style="color: #383d50;font-size: 20upx">
					<view v-if="vrify" @tap="getVrify" class="login-phone-getcode">获取验证码</view>
					<view v-else class="login-phone-getcode">{{time}}秒后重新发送</view>
				</view>
			</view>
		</view>
		<!-- 登录提交 -->
		<button :class="[sub? 'sub1': 'sub2']" type="primary" @tap="login">登录</button>
		<view class="opts">
			<text @tap="goReg" class="text">用密码登录</text>
			<text @tap="findPwd" class="text">收不到验证码？</text>
		</view>
		<view class="buttom_text">
			首次登录将自动注册
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				username: '',
				userpwd: '',
				pwdType: 'password',
				imgInfo: {
					head: isUni ? '/static/login/login2.png' : require('../../static/login/login2.png'),
					icon_user: isUni ? '/static/login/selection.png' : require('../../static/login/selection.png'),
				},
				sub: false,
				time: 61,
				vrify: true,
				code: ''
			}
		},
		onLoad() {
			// console.log(getApp().globalData.pid)
			// getApp().globalData.pid = 2
			// console.log(getApp().globalData.pid)
		},
		methods: {
			inputUsername(e) {
				this.username = e.target.value
				this.sub = this.check(this.username)
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			delUser() {
				this.username = ''
				this.sub = false
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			login() {
				if (this.sub){
					console.log(this.userpwd)
					uni.request({
						url: 'http://52.80.194.137:8000/user/user_loginphone/',
						method: 'POST',
						data: {
							phone: this.username,
							sms_code: this.userpwd
						},
						dataType:'json',
						success: res => {
							console.log(res)
							if (res.data.status == 1){
								getApp().globalData.pid = res.data.data.pid
								uni.setStorage({
									key:'userInfo',
									data: res.data.data.pid,
									success: () => {
										console.log('success')
									}
								})
								if (res.data.data.details == '登陆成功,信息未完善'){
									uni.navigateTo({
										url: "/pages/login/set-head/set-head"
									})
								}else {
									uni.navigateTo({
										url: '/pages/index/index'
									})
								}
							}
						},
						fail: () => {console.log('失败')},
						complete: () => {}
					});
				}
				
			},
			findPwd() {
				console.log('1231')
			},
			goReg() {
				uni.navigateTo({
					url: '/pages/login/userPassword/userPassword',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			thirdLogin(type) {
				console.log(type)
			},
			check(phone){
				if(/^1[3456789]\d{9}$/.test(phone)){ 
					return true; 
				} 
				return false
			},
			getVrify(){
				if (this.sub){
					this.countDown()
					uni.request({
						url: 'http://52.80.194.137:8000/user/send_sms/',
						method: 'POST',
						data: {
							phone: this.username
						},
						dataType:'json',
						success: res => {
							console.log(res)
						},
						fail: () => {
							uni.showModal({
								content: '网络连接失败',
								showCancel: false
							});
						},
						complete: () => {}
					});
				}else {
					uni.showModal({
						content: '手机号格式错误',
						showCancel: false
					});
				}
				
			},
			countDown(){
				this.vrify = false
				this.time -= 1
				// console.log(this.time)
				if (this.time == 0){
					this.time = 61
					this.vrify = true
					return
				}
				setTimeout(this.countDown,1000);  
			}
		}
	}
</script>
<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #FFFFFF;
		color: black!important;
	}
	view {
		color: black!important;
	}
	
</style>
<style lang="scss" scoped>
	.page_login {
		padding: 10px;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		


		.head_img {
			display: flex;
			align-items: flex-end;
			justify-content: center;
			overflow: hidden;
		}

	}

	.login-phone-getcode {
		
		text-align: center;
		// min-width: 140upx;
		width: 200upx;
		color: #383d50;
		font-size: 20upx;
		float: right;
		position: absolute;top: 50%;right: 0;transform: translateY(-50%)
	}
	
	.sub1 {
		background-color: #176af6;
	}
	
	.sub2 {
		background-color: #C0C0C0;
	}

	button {
		margin-top: 50upx;
		margin-bottom: 50upx;
		// margin-left: 60upx;
		// margin-right: 60upx;
		width: 500upx;
		height: 60upx;
		font-size: 30upx;
		line-height: 60upx;
		color: #FFFFFF;
		border-radius: 15upx;
		-webkit-tap-highlight-color: #242730;

		// &:active {
		// 	color: white;
		// 	background-color: #176af6;
		// }
	}

	.opts {
		margin-top: 30upx;
		margin-left: 50upx;
		margin-right: 50upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.text {
			font-size: 26upx;
			color: #49597b;
		}
	}

	.buttom_text {
		margin-top: 200upx;
		color: #383d50;
		font-size: 28upx;
		text-align: center;
	}
	
	input {
		color: #000000!important;
	}
</style>
