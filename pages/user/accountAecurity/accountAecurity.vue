<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">账户与安全</view>
				</view>
			</view>
		</view>
		<view class="a-item" @tap="toCP">
			<view>
				<view class="ai-title">密码重置</view>
				<image src="/static/image/more.png" class="ai-img" mode=""></image>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toCP(){
				uni.navigateTo({
					url: '/pages/user/changePassword/changePassword',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			black(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	.a-item {
		height: 110upx;padding: 30upx;
	}
	.a-item>view {
		width: 100%;height: 100%;background-color: #242730;border-radius: 20upx;position: relative;
	}
	.ai-title, .ai-img {
		position: absolute;top: 50%;transform: translateY(-50%);font-size: 30upx;
	}
	.ai-title {
		left: 50upx;
	}
	.ai-img {
		width: 20upx;height: 30upx;right: 50upx;
	}
</style>
