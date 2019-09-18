<template>
	<view class="content">
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">选择车辆</view>
				</view>
			</view>
		</view>
		<view class="car-item">
			<view class="c-brand">品牌</view>
			<view class="c-series">系列</view>
			<view class="c-model">车型</view>
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
	@import url("../../static/css/my-car.css");
</style>
