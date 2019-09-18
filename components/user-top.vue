<template>
	<view style="height: 30%;">
		<view class="user-img">
			<image style="width: 100%;" :src="userInfo.head_img" mode="aspectFill"></image>
			<view class="info-plane">
				<view class="all-info">
					<view class="user-head" style="width: 120upx;height: 120upx;border-radius: 61upx;overflow: hidden;">
						<view style="width: 100%;height: 100%;position: relative;">
							<image style="height: 100%;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);" :src="userInfo.head_img" mode="aspectFit"></image>
						</view>
						
					</view>
					<view class='user-name' style="">
						<!-- <view class="userName">{{username}}&nbsp;</view><view class="num">LV3</view> -->
						<view style="width: 100%;height: 100%;position: relative;">
							<view class="text">{{userInfo.username}}</view>
							<view class="num">LV3</view>
							<view class="edit" style="z-index: 1;" @tap="toDetail">
								
							</view>
							<image class="edit" style="width: 30upx;height: 30upx;" src="/static/image/edit.png" mode=""></image>
						</view>
					</view>
					<view class="info">
						<image class="sex" v-if="userInfo.sex == 0" src="/static/image/woman.png" mode=""></image>
						<image class="sex" v-else src="/static/image/man.png" mode=""></image>
						<view class="age">{{userInfo.age}}岁</view>
						<view class="job">{{userInfo.job}}</view>
						<view class="sign">{{userInfo.sign}}</view>
						<view class="area">{{userInfo.area}}</view>
					</view>
					<view class="info-three">
						<view @tap="toFollows">
							<view >关注</view><view class="people-num">{{userInfo.focus_num}}</view>
						</view>
						<view @tap="toFans">
							<view>粉丝</view><view class="people-num">{{userInfo.fans_num}}</view>
						</view>
						<view @tap="toBlack">
							<view>黑名单</view><view class="people-num">{{userInfo.blacklist_num}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			userInfo: Object
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url: '/pages/user/details_all'
				})
			},
			toFollows(){
				uni.navigateTo({
					url: '/pages/user/my_follows'
				})
			},
			toFans(){
				uni.navigateTo({
					url: '/pages/user/my_fans'
				})
			},
			toBlack(){
				uni.navigateTo({
					url: '/pages/user/black_block'
				})
			}
		}
	}
</script>

<style>
	@import url("../static/css/user-top.css");
	.userName {
		display: inline-block;max-width: 300upx;overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>
