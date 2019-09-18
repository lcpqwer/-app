<template>
	<view class="page_login">
		<view class="jump_over" @tap="launchFlag()">{{jumpover}}</view>
		<view class="head">

			<view class="head_img">
				<image style="width: 220upx;height: 220upx;" :src="imgInfo.head" class="head_logo" />
				<image src="../../static/login/upload.png" class="upload"></image>
			</view>

		</view>

		<view class="login_form">
			<view class="input">
				<input type="text" v-model="username" style="color:#d1d1d3; font-size: 18px; margin-left: 80px;">
				<view class="img">
					<image @click="delUser" class="img_del" :src="imgInfo.icon_del" />
				</view>
			</view>

		</view>
		<!-- <view class="gender" style="display: flex;">
			<view class="female" style="display: flex;  float: left;">
				<image v-if="flag" src="../../static/login/female_unselected.jpg" mode="widthFix" style="width: 30px; height: 30px;"
				 @click="changefemale"></image>
				<image v-else src="../../static/login/female.png" mode="" style="width: 30px; height: 30px;" @click="changefemale"></image>

			</view>
			<view style="color:#2d3653; ">女</view>
			<view class="man" style="display: flex; float: right;">
				<image v-if="!flag" src="../../static/login/man_unselected.png" mode="widthFix" style="width: 30px; height: 30px;"
				 @click="changeman"></image>
				<image v-else src="../../static/login/man.png" mode="widthFix" style="width: 30px; height: 30px;" @click="changeman"></image>
			</view>
			<view style="color:#2d3653;"> 男</view>


		</view> -->
		<view class="gender">
			<view class="female">
				<image v-if="flag" src="../../static/login/female_unselected.jpg" mode="widthFix" class="img_gender" @click="changefemale"></image>
				<image v-else src="../../static/login/female.png" mode="" class="img_gender" @click="changefemale"></image>
				<view style="color:#2d3653; margin-left: 15upx;">女</view>
			</view>

			<view class="man">
				<image v-if="!flag" src="../../static/login/man_unselected.png" mode="widthFix" class="img_gender" @click="changeman"></image>
				<image v-else src="../../static/login/man.png" mode="widthFix" class="img_gender" @click="changeman"></image>
				<view style="color:#FFFFFF; margin-left: 15upx;"> 男</view>
			</view>
		</view>

		<!-- 登录提交 -->
		<button class="submit" @tap="login">保存</button>
	</view>
</template>
<script>
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				flag: true,
				jumpover: '跳过',
				username: '',
				imgInfo: {
					head: isUni ? '/static/login/default_head.png' : require('../../static/login/default_head.png'),
					icon_del: isUni ? '/static/login/icon_del.png' : require('../../static/login/icon_del.png')
				},
				showfemale: true,
				showman: true
			};
		},
		methods: {
			launchFlag: function() {
				uni.setStorage({
					key: 'launchFlag',
					data: true,
				});
				uni.redirectTo({
					url: '../sign_in/sign_in'
				})

			},
			changefemale: function() {
				this.flag = !this.flag
			},
			changeman: function() {
				this.flag = !this.flag
			},
			delUser() {
				this.username = ''
			},
		},
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
	.page_login {
		padding: 10px;
	}

	.jump_over {
		color: #888888;
		margin-left: 80%;
		margin-top: 15%;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 30%;
		padding-bottom: 80px;
		position: relative;


		.head_img {
			width: 200px;
			height: 100px;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			overflow: hidden;
			position: absolute;
		}

		.upload {
			width: 42upx;
			height: 42upx;
			left: 60%;
			position: absolute;
		}

	}

	.login_form {
		display: flex;
		margin: 40upx;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 20upx;

		.input {
			width: 100%;
			max-height: 90upx;
			height: 100upx;
			display: flex;
			padding: 6upx;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.img_del {
				width: 42upx;
				height: 42upx;
			}

		}

	}

	.gender {
		display: flex;
		margin-top:100upx;
		position: relative;

		.female {
			display: flex;
			position: absolute;
			left: 25%;

			.img_gender {
				width: 60upx;
				height: 60upx;
			}

		}

		.man {
			display: flex;
			position: absolute;
			right: 25%;

			.img_gender {
				width: 60upx;
				height: 60upx;
			}
		}

	}


	.submit {
		margin-top: 180upx;
		margin-left: 60upx;
		margin-right: 60upx;
		color: #d1e0fd;
		border-radius: 30upx;
		background-color: #176af6;
		-webkit-tap-highlight-color: #242730;

		&:active {
			color: white;
			background-color: #242730;
		}
	}

	.opts {
		margin-top: 5px;
		margin-left: 25px;
		margin-right: 25px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.text {
			font-size: 13px;
			color: #49597b;
		}
	}
</style>
