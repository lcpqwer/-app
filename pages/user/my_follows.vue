<template>
	<view style="width: 100%;height: 100%;">
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image  @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">我的关注</view>
				</view>
			</view>
		</view>
		<view v-if="itemData && itemData.length == 0" style="width: 100%;margin-top: 10%;text-align: center;font-size: 30upx;">暂无关注</view>
		<view v-if="itemData && itemData.length > 0" v-for="(item,index) in itemData" :key="index" class="info-item">
			<image src="/static/image/userImg.jpg" class="i-i-img" mode=""></image>
			<view class="i-i-top">
				<view>
					<view>{{item.username}}</view>
				</view>
			</view>
			<view class="i-i-bot">
				<view>
					<image class="b-sex" src="/static/image/man.png" mode=""></image>
					<view class="b-age">{{item.age}}岁</view>
					<view class="b-job">{{item.job}}</view>
				</view>
			</view>
			<view class="i-i-logo" @tap="delFollow(index)">取消关注</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemData: null
			}
		},
		onLoad() {
			let that = this
			uni.request({
				url: 'http://52.80.194.137:8000/user/user_myfocus/',
				method: 'POST',
				data: {
					pid: getApp().globalData.pid
				},
				dataType:"json",
				success: res => {
					console.log(res)
					that.itemData = res.data.data
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			delFollow(index){
				console.log(1)
			}
		}
	}
</script>

<style>
	@import url("../../static/css/infoItem.css");
</style>
