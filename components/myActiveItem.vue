<template>
	<view style="width: 100%;">
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
								<image style="width: 24upx;height: 32upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/address2.png" mode=""></image>
							</view>
							<view class="item-num">{{acItem.dis}}</view>
						</view>
						<view class="active-time">
							<view class="item-icon">
								<image style="width: 24upx;height: 26upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/re_time.png" mode=""></image>
							</view>
							<view class="item-num" style="right: 0;">{{acItem.start_time}}</view>
						</view>
						<view class="active-car">
							{{acItem.car_model_name}}
						</view>
					</view>
			</view>
		</view>
		<view style="width: 88%;margin-left: 6%;height: 100upx;">
			<view style="display: inline-block;float: right;margin-left: 50upx;font-size: 25upx;line-height: 100upx;">{{acItem.activity_area_start}}</view>
			<view style="display: inline-block;float: right;font-size: 25upx;line-height: 100upx;">{{acItem.activity_create_time}}</view>
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
		created() {
			console.log(this.acItem)
		}
	}
</script>

<style>
@import url("../static/css/active-item.css");
</style>
