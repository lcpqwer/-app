<template>
	<view  style="width: 100%;padding-top: 50upx;">
		<view style="width: 88%;margin-left: 6%;">
			<view @tap="toAD" style="width: 100%;height: 305upx;border-radius: 25upx;position: relative;" class="img-content">
				<image class="img" :src="acItem.pic_list[0]" mode="aspectFill"></image>
					<view class="img-message">
						<view class="message-icon">
							<image style="width: 100%;height: 100%;" src="/static/image/message.png" mode=""></image>
						</view>
						<view class="message-num">
							{{acItem.pic_num}}
						</view>
					</view>
					<view class="img-title">
						<view class="active-text">
							{{acItem.topic_name}}
						</view>
						<view class="active-distance">
							<view class="item-icon">
								<image style="width: 22upx;height:26upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/address2.png" mode=""></image>
							</view>
							<view class="item-num" style="font-size: 20upx;color: #ffffffc9;">{{acItem.dis}}</view>
						</view>
						<view class="active-time">
							<view class="item-icon">
								<image style="width: 22upx;height: 23upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/re_time.png" mode=""></image>
							</view>
							<view class="item-num" style="right: 0;font-size: 20upx;color: #ffffffc9;">{{acItem.start_time}}</view>
						</view>
						<view class="active-car" style="color: #ffffffc9;text-align: right!important;">
							{{acItem.car_model_name}}
						</view>
					</view>
			</view>
			<view style="width: 100%;height: 125upx;position: relative;">
				<view class="userImg" style="overflow: hidden;">
					<view style="width: 100%;height: 100%;">
						<image @tap="toUser" style="height: 100%;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);" :src="acItem.head_img" mode="aspectFit"></image>
					</view>
					
				</view>
				
				<view class="userInfo">{{acItem.nikename}}</view>
				<view style="width: 300upx;height: 25%;position: absolute;top: 55%;left: 100upx;">
					<view style="width: 100%;height: 100%;position: relative;">
						<image v-if="acItem.sex == '0'" src="/static/image/woman.png" style="width: 25upx;height: 25upx;position: absolute;top: 50%;transform: translateY(-50%);" mode=""></image>
						<image v-else src="/static/image/man.png" style="width: 25upx;height: 25upx;position: absolute;top: 50%;transform: translateY(-50%);" mode=""></image>
						<view style="font-size: 25upx;position: absolute;top: 50%;left: 40upx;transform: translateY(-50%);letter-spacing: 2upx;">{{acItem.age}}岁</view>
						<view style="font-size: 25upx;position: absolute;top: 50%;left: 140upx;transform: translateY(-50%);letter-spacing: 2upx;">{{acItem.job}}</view>
					</view>
				</view>
				<view class="active-type">
					<view style="width: 100%;height: 100%;position: relative;">
						<image v-if="data.type == 1"   class="type-img"  src="/static/image/chat2.png" mode=""></image>
						<image v-else  class="type-img" style="width: 70upx;"  src="/static/image/chat1.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			acItem: Object
		},
		data() {
			return {
			
			};
		},
		onLoad() {
			console.log(this.data)
		},
		methods:{
			toUser(){
				uni.navigateTo({
					url: '/pages/user/home-page'
				});
			},
			toAD(){
				uni.navigateTo({
					url: '/pages/index/actice-details?acItem='+encodeURIComponent(JSON.stringify(this.acItem))
				});
			}
		}
	}
</script>

<style>
	@import url("../static/css/active-item.css");
</style>