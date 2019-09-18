<template>
	<view class="page_login">
		<!-- 头部logo -->
		<view class="head">

			<view class="head_img">
				<image style="width: 55px;height: 65px;" :src="imgInfo.head" class="head_logo" />
			</view>
		</view>
		<!-- 登录form -->
		<view class="login_form">
			<view class="input">
				<view style="width: 25%;height: 100%;display: inline-block;position: relative;">
					<view style="font-size: 30upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);color:#d0d1d3;width: 100upx;height: 40upx;">
						<view style="width: 100%;height: 100%;position: relative;">
							<view style="position: absolute;top: 50%;left: 0;transform: translateY(-50%); font-size: 34upx; ">+86
							</view>
							<image style="width: 28upx;height: 14upx;position: absolute;top: 50%;right: 0;transform: translateY(-50%);" src="/static/login/selection.png"
							 mode=""></image>
						</view>
					</view>
				</view>
				<view style="width: 75%;height: 100%;display: inline-block;position: relative; margin-left: 50upx;">
					<input v-model="username" style="position: absolute;top: 50%;transform: translateY(-50%);color: #FFFFFF; font-size: 38upx; font-family: 微软雅黑;"
					 value="" type="number" placeholder="请输入手机号" placeholder-style="color: #383d50;font-size: 20upx">
				</view>
				<view class="img">
					<image @tap="delUser" class="img_del" :src="imgInfo.icon_del" />
				</view>
			</view>

			<view class="input" style="width: 100%;height: 80upx;margin-top: 80upx;">
				<view style="width: 25%;height: 100%;display: inline-block;position: relative;">
					<view style="font-size: 30upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);color: #D2D2D4;width: 100upx;height: 40upx;">
						<view style="width: 100%;height: 100%;position: relative;">
							<view style="position: absolute;top: 50%;left: 0;transform: translateY(-50%);">验证码
							</view>

						</view>
					</view>
				</view>
				<view style="width: 75%;height: 100%;display: inline-block;position: relative; margin-left: 50upx;">
					<input style="position: absolute;top: 50%;transform: translateY(-50%);color: #FFFFFF;" value="" type="number"
					 placeholder="输入验证码" placeholder-style="color: #383d50;font-size: 20upx">
					<view class="login-phone-getcode">30s后重发</view>
				</view>


			</view>

		</view>
		<!-- 登录提交 -->
		<button class="submit" type="primary" @tap="login">登录</button>
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
					head: isUni ? '/static/login/min_logo.png' : require('../../static/login/min_logo.png'),

					icon_user: isUni ? '/static/login/selection.png' : require('../../static/login/selection.png'),
					icon_del: isUni ? '/static/login/icon_del.png' : require('../../static/login/icon_del.png')


				}
			}
		},
		methods: {
			inputUsername(e) {
				this.username = e.target.value
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			delUser() {
				this.username = ''
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			login() {
				uni.navigateTo({
					url: '../user_gender/user_gender'
				})
			},
			findPwd() {
				console.log('1231')
			},
			goReg() {
				console.log('1231')
			},
			thirdLogin(type) {
				console.log(type)
			}
		}
	}
</script>
<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #161824;
	}
</style>
<style lang="scss" scoped>
	$logo-padding: 80px;

	$text-color: #B6B6B6;

	.page_login {
		padding: 10px;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: $logo-padding;
		padding-bottom: $logo-padding;


		.head_img {
			width: 80px;
			height: 80px;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			overflow: hidden;
		}

	}

	.login_form {
		display: flex;
		margin: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 10px;

		.input {
			width: 100%;
			max-height: 45px;
			height: 50px;
			display: flex;
			padding: 3px;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.img {
				min-width: 40px;
				min-height: 40px;
				margin: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.img_del {
				width: 21px;
				height: 21px;
			}

			.login-phone-getcode {

				text-align: center;
				min-width: 140upx;
				color: #383d50;
				font-size: 30upx;
				float: right;
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-50%)
			}

		}
	}

	.submit {
		margin-top: 80upx;
		margin-left: 60upx;
		margin-right: 60upx;
		color: #d0e1fd;
		background-color: #176af6;
		-webkit-tap-highlight-color: #176af6;
		border-radius: 30upx;

		&:active {
			color: white;
			background-color: #176af6;
		}
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
			font-size: 13px;
			color: #49597b;
		}
	}

	.buttom_text {
		margin-top: 450upx;
		color: #3a3d50;
		font-size: 28upx;
		text-align: center;
	}
</style>
