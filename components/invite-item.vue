<template>
	<view  style="width: 100%;padding-top: 50upx;">
		<view style="width: 88%;margin-left: 6%;">
			<view style="width: 100%;height: 305upx;border-radius: 25upx;position: relative;" class="img-content">
				<image class="img" src="/static/image/active1.jpg" mode=""></image>
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
							huo
						</view>
						<view class="active-distance">
							<view class="item-icon">
								<image style="width: 30upx;height: 40upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/address2.png" mode=""></image>
							</view>
							<view class="item-num">2km</view>
						</view>
						<view class="active-time">
							<view class="item-icon">
								<image style="width: 30upx;height: 35upx;position: absolute;top:50%;transform: translateY(-50%);" src="/static/image/re_time.png" mode=""></image>
							</view>
							<view class="item-num" style="right: 0;">2分钟</view>
						</view>
						<view class="active-car">
							兰博
						</view>
					</view>
			</view>
			<view style="width: 100%;height: 46upx;">
				<view class="active-address">上海</view>
				<view class="active-date">2019/06/14</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>
	
<style>
@import url("../static/css/active-item.css");
@import url("../static/css/invite-item.css");
</style>
