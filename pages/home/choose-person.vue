<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">选择参与人群</view>
				</view>
			</view>
		</view>
		<view class="sex">
			<view class="title">性别</view>
			<view class="item">
				<view>
					<image class="i-img" src="/static/woman.png" mode=""></image>
					<view class="i-text">不限</view>
				</view>
			</view>
			<view class="item" style="right: 200upx;">
				<view>
					<image class="i-img" src="/static/image/man.png" mode=""></image>
					<view class="i-text">男生</view>
				</view>
			</view>
			<view class="item" style="right: 360upx;">
				<view>
					<image class="i-img" src="/static/woman.png" mode=""></image>
					<view class="i-text">女生</view>
				</view>
			</view>
		</view>
		<view class="person-num">
			<view class="title">活动人数</view>
			<view class="text">至少三人</view>
			<image src="/static/image/more.png" class="p-img" mode=""></image>
			<view class="p-num">3</view>
		</view>
		<view style="padding: 40upx;">
			<button @tap="black" type="primary">确认</button>
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
			}
		}
	}
</script>

<style>
	@import url("../../static/css/choose-person.css");
</style>
