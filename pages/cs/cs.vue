<template>
	<view style="width: 100%;height: 500upx;padding-top: 50upx;">
		<view style="width: 88%;height: 100%;margin-left: 6%;">
			<view style="width: 100%;height: 69.5%;border-radius: 25upx;position: relative;" class="img-content">
				<image class="img" src="/static/image/userImg.jpg" mode=""></image>
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
							标题
						</view>
						<view class="active-distance">
							<view class="item-icon">
								<image style="width: 30upx;height: 40upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/address2.png" mode=""></image>
							</view>
							<view class="item-num">2.5km</view>
						</view>
						<view class="active-time">
							<view class="item-icon">
								<image style="width: 30upx;height: 35upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/re_time.png" mode=""></image>
							</view>
							<view class="item-num" style="right: 0;">30分钟</view>
						</view>
						<view class="active-car">
							兰博
						</view>
					</view>
			</view>
			<view style="width: 100%;height: 31.5%;position: relative;">
				<image class="userImg" src="/static/image/userImg.jpg" mode=""></image>
				<view class="userInfo">Kitty</view>
				<view style="width: 300upx;height: 25%;position: absolute;top: 48%;left: 100upx;">
					<view style="width: 100%;height: 100%;position: relative;">
						<image src="/static/image/woman.png" style="width: 25upx;height: 25upx;position: absolute;top: 50%;transform: translateY(-50%);" mode=""></image>
						<view style="font-size: 25upx;position: absolute;top: 50%;left: 40upx;transform: translateY(-50%);letter-spacing: 2upx;">20岁</view>
						<view style="font-size: 25upx;position: absolute;top: 50%;left: 140upx;transform: translateY(-50%);letter-spacing: 2upx;">美妆达人</view>
					</view>
				</view>
				<view class="active-type">
					<view style="width: 100%;height: 100%;position: relative;">
						<image  class="type-img"  src="/static/image/chat2.png" mode=""></image>
						<!-- <image v-else  class="type-img" style="width: 70upx;"  :src="item.typeImg" mode=""></image> -->
					</view>
				</view>
			</view>
		</view>
		<view>{{id}}</view>
		<button @tap="update" type="primary">222</button>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id : getApp().globalData.pid
			}
		},
		onLoad() {
			
		},
		methods: {
			update(){                                                                                       
				getApp().globalData.pid = 2222
			}
		}
	}
</script>

<style>
	@import url("./cs.css");
</style>
