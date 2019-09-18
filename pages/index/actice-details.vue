<template>
	<view class="warpper" style="position: relative;">
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image  @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">活动查看</view>
					<image @tap="share" class="main-right" src="/static/image/share.png" style="width: 30px;height: 5px;" mode=""></image>
				</view>
			</view>
		</view>
		<view class="ad-main" :style="allHeight">
			<view class="ad-top">
				<view class="ad-img">
					<image style="width: 100%;height: 100%;" :src="acItem.pic_list[0]" mode=""></image>
				</view>
				<view class="ad-user">
					<image :src="acItem.head_img" class="user-img" mode=""></image>
					<view class="user-name">
						<view>{{acItem.nikename}}</view>
					</view>
					<view class="user-info">
						<view>
							<image v-if="acItem.sex == '0'" class="info-img" src="/static/image/woman.png" mode=""></image>
							<image v-else class="info-img" src="/static/image/man.png" mode=""></image>
							<view class="info-age">{{acItem.age}}岁</view>
							<view class="info-pro">{{acItem.job}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="ad-bottom">
				<view class="active-plane">
					<view class="p-top">
						<view class="p-title">{{acItem.topic_name}}</view>
						
						<!-- 活动类型，需要判断 -->
						<!-- 互动聊天 -->
						<image v-if="acItem.activity_name == '互动聊天' && acItem.activity_kind == '单人'" class="p-type" src="/static/image/chat.png" mode=""></image>
						<image v-else-if="acItem.activity_name == '互动聊天' && acItem.activity_kind == '多人'" class="p-type2" src="/static/image/chat2.png" mode=""></image>
						
						<!-- 美食咖啡 -->
						<image v-else-if="acItem.activity_name == '美食咖啡' && acItem.activity_kind == '单人'" class="p-type" src="/static/image/food1.png" mode=""></image>
						<image v-else-if="acItem.activity_name == '美食咖啡' && acItem.activity_kind == '多人'" class="p-type2" src="/static/image/food2.png" mode=""></image>
						
						<!-- 展览电影 -->
						<image v-else-if="acItem.activity_name == '展览电影' && acItem.activity_kind == '单人'" class="p-type" src="/static/image/move1.png" mode=""></image>
						<image v-else-if="acItem.activity_name == '展览电影' && acItem.activity_kind == '多人'" class="p-type2" src="/static/image/move2.png" mode=""></image>
						
						<!-- 唱歌泡吧 -->
						<image v-else-if="acItem.activity_name == '唱歌泡吧' && acItem.activity_kind == '单人'" class="p-type" src="/static/image/song1.png" mode=""></image>
						<image v-else-if="acItem.activity_name == '唱歌泡吧' && acItem.activity_kind == '多人'" class="p-type2" src="/static/image/song2.png" mode=""></image>
						
						<!-- 户外运动 -->
						<image v-else-if="acItem.activity_name == '户外运动' && acItem.activity_kind == '单人'" class="p-type" src="/static/image/fitness1.png" mode=""></image>
						<image v-else class="p-type2" src="/static/image/fitness2.png" mode=""></image>
					</view>
					<view class="p-info">
						<view>
							<view v-if="acItem.activity_person_sex == '女'" class="p-sex c-color">仅限女生</view>
							<view v-else-if="acItem.activity_person_sex == '男'" class="p-sex c-color">仅限男生</view>
							<view v-else class="p-sex c-color">性别不限</view>
							<view v-if="acItem.activity_kind == '多人'" class="p-people c-color">多人活动</view>
							<view v-else class="p-people c-color">单人活动</view>
						</view>
						<view>
							<view class="c-color">{{acItem.activity_content}}</view>
						</view>
					</view>
					<view class="info-item" style="margin-top: 30upx;">
						<image class="item-img" src="/static/image/time.png" mode=""></image>
						<view class="item-content">剩余 {{acItem.start_time}}</view>
					</view>
					<view class="info-item" style="margin-top: 30upx;">
						<image class="item-img" style="width: 25upx;left: 4%;" src="/static/image/address1.png" mode=""></image>
						<view class="item-content">{{acItem.dis}} {{acItem.activity_area_start}}</view>
					</view>
					<view class="info-item" style="margin-top: 30upx;">
						<image class="item-img" style="height: 30upx;" src="/static/image/car.png" mode=""></image>
						<view class="item-content">{{acItem.car_model_name}}</view>
					</view>
					<button type="primary">我感兴趣</button>
				</view>
			</view>
		</view>
		<view v-if="shareBool" class="ad-share">
			<view class="share-item">
				<image @tap="share1" class="share-img" src="/static/image/weixin.png" mode=""></image>
				<view class="share-text">分享到微信</view>
			</view>
			<view class="share-item">
				<image @tap="share2" class="share-img" src="/static/image/friends.png" mode=""></image>
				<view class="share-text">分享到朋友圈</view>
			</view>
			<view class="share-item">
				<image @tap="share3" class="share-img" src="/static/image/report.png" mode=""></image>
				<view class="share-text">举报</view>
			</view>
		</view>
		<view v-if="shareBool" class="mask" @tap="share"></view>
	</view>
</template>

<script>
	var allHeight;
	uni.getSystemInfo({
		success(res) {
			allHeight = 'height: ' + (res.screenHeight - 60) + 'px'
		}
	})
	export default {
		data() {
			return {
				allHeight: allHeight,
				shareBool: false,
				acItem: null
			}
		},
		onLoad(val) {
			// console.log(val.acItem)
			this.acItem = JSON.parse(val.acItem)
			// console.log(acitem.id)
			// console.log(val.acItem.parseJSON())
			
		},
		methods: {
			share() {
				this.shareBool = !this.shareBool
			},
			black() {
				uni.navigateBack({
					delta: 1
				})
			},
			share1() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			share2() {
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			share3() {
				uni.navigateTo({
					url: '/pages/index/report'
				});
			}
		}
	}
</script>

<style>
	@import url("../../static/css/home-nav.css");
	@import url("../../static/css/ad.css");
</style>
