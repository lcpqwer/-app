<template>
	<view class="content">
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image  @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view v-if="type == '1'" class="main-title">美食咖啡</view>
					<view v-else-if="type == '2'" class="main-title">展览电影</view>
					<view v-else-if="type == '3'" class="main-title">唱歌泡吧</view>
					<view v-else-if="type == '4'" class="main-title">互动聊天</view>
					<view v-else class="main-title">户外运动</view>
				</view>
			</view>
		</view>
		<view v-if="type == '5'">
			<view class="main" @tap="jump">
				<view class="main-img">
					<image src="/static/image/moveInput5.png" class="img" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					单人
				</view>
			</view>
			<view class="main" @tap="jump2">
				<view class="main-img">
					<image src="/static/image/fitness2.png" class="img" style="height: 50%;" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					多人
				</view>
			</view>
		</view>
		<view v-else-if="type == '4'">
			<view class="main" @tap="jump">
				<view class="main-img">
					<image src="/static/image/moveInput4.png" class="img" style="height: 50%;" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					单人
				</view>
			</view>
			<view class="main" @tap="jump2">
				<view class="main-img">
					<image src="/static/image/chat2.png" class="img" style="height: 50%;" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					多人
				</view>
			</view>
		</view>
		<view v-else-if="type == '3'">
			<view class="main" @tap="jump">
				<view class="main-img">
					<image src="/static/image/moveInput3.png" class="img" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					单人
				</view>
			</view>
			<view class="main" @tap="jump2">
				<view class="main-img">
					<image src="/static/image/song2.png" class="img" style="height: 50%;" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					多人
				</view>
			</view>
		</view>
		<view v-else-if="type == '2'">
			<view class="main" @tap="jump">
				<view class="main-img">
					<image src="/static/image/moveInput2.png" class="img" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					单人
				</view>
			</view>
			<view class="main" @tap="jump2">
				<view class="main-img">
					<image src="/static/image/move2.png" class="img" style="height: 50%;" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					多人
				</view>
			</view>
		</view>
		<view v-else>
			<view class="main" @tap="jump">
				<view class="main-img">
					<image src="/static/image/moveInput1.png" class="img" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					单人
				</view>
			</view>
			<view class="main" @tap="jump2">
				<view class="main-img">
					<image src="/static/image/food2.png" class="img" style="height: 50%;" mode="aspectFit"></image>
				</view>
				<view class="main-text">
					多人
				</view>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title: '户外运动',
				type: '5',
			}
		},
		onLoad(option) {
			this.type = option.id
		},
		methods: {
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			jump(){
				uni.navigateTo({
					url: "/pages/index/upload-active?id="+this.type+'&num=1'
				})
			},
			jump2(){
				uni.navigateTo({
					url: "/pages/index/upload-active?id="+this.type+'&num=2'
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/active-type");
</style>
