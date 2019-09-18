<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image  @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">我的参与</view>
				</view>
			</view>
		</view>
		<view  style="width: 100%;padding-top: 50upx;">
			<view style="width: 88%;margin-left: 6%;">
				<view @tap="toAD" style="width: 100%;height: 305upx;border-radius: 25upx;position: relative;" class="img-content">
					<image class="img" src="/static/image/userImg.jpg" mode="aspectFill"></image>
						<view class="img-message">
							<view class="message-icon">
								<image style="width: 100%;height: 100%;" src="/static/image/message.png" mode=""></image>
							</view>
							<view class="message-num">
								2
							</view>
						</view>
						<view class="img-title">
							<view class="active-text">
								美妆活动
							</view>
							<view class="active-distance">
								<view class="item-icon">
									<image style="width: 24upx;height: 32upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/address2.png" mode=""></image>
								</view>
								<view class="item-num">2km</view>
							</view>
							<view class="active-time">
								<view class="item-icon">
									<image style="width: 24upx;height: 26upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/re_time.png" mode=""></image>
								</view>
								<view class="item-num" style="right: 0;">2分钟</view>
							</view>
							<view class="active-car">
								兰博
							</view>
						</view>
				</view>
			</view>
			<view style="width: 88%;margin-left: 6%;height: 100upx;">
				<view style="display: inline-block;float: right;margin-left: 50upx;font-size: 25upx;line-height: 100upx;">上海科技馆</view>
				<view style="display: inline-block;float: right;font-size: 25upx;line-height: 100upx;">2019/09/09</view>
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
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			toAD(){
				uni.navigateTo({
					url: '/pages/index/actice-details'
				});
			}
		}
	}
</script>

<style>
	@import url("../../static/css/active-item.css");
</style>
