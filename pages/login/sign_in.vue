<template>
	<view class="page_login">

		<view class="head">
			<view class="head_bg">
				<view class="head_inner_bg">
					<!-- <image src="/static/login/login.png" class="head_logo" /> -->
					<image  src="/static/login/login.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<button class="submit" @tap="login">登录</button>
	</view>



</template>
<script>
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				imgInfo: {
					head: isUni ? '/static/login/login.png' : require('../../static/login/login.png'),

				}
			}
		},
		methods: {

			login() {
				uni.redirectTo({
					url: './user_sign'
				})
			}

		}
	}
</script>
<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #FFFFFF;
	}
</style>
<style lang="scss" scoped>
	$logo-padding: 60px;
	$form-border-color: rgba(214, 214, 214, 1);
	$text-color: #B6B6B6;


	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: $logo-padding;
		padding-bottom: $logo-padding;

		.head_bg {
			margin-top: 200upx;
			width: 100px;
			height: 100px;
			display: flex;
			align-items: center;
			justify-content: center;

		}
	}

	.submit {
		height: 70upx;
		width: 500upx;
		font-size: 30upx;
		border-radius: 20upx;
		// margin-right: 60upx;
		// margin-left: 60upx;
		// margin-top: 450upx;
		position: fixed;
		top: 80%;
		left: 50%;
		transform: translateX(-50%);
		
		-webkit-tap-highlight-color: #176af6;
		background-color: #176af6;
		color: #d0e1fd;

		&:active {
			color: #B6B6B6;

		}
	}
</style>
