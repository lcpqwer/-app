<template>
	<view class="warpper">
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">举报</view>
				</view>
			</view>
		</view>
		<view class="re-main" :style="allHeight">
			<view class="re-title"><view>请选择举报原因*</view></view>
			<view class="re-item">
				<view>欺诈</view>
			</view>
			<view class="re-item">
				<view>色情</view>
			</view>
			<view class="re-item">
				<view>不实信息</view>
			</view>
			<view class="re-item">
				<view>骚扰</view>
			</view>
			<view class="re-item">
				<view>其他</view>
				<input type="text" value="" placeholder="请填写"/>
			</view>
			<view class="re-title"><view>请说明原因*</view></view>
			<view class="text">
				<textarea class="text-input" :value="textContent" placeholder="请说明原因" />
			</view>
			<view class="re-sub">
				<button type="primary">确认举报</button>
			</view>
		</view>
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
				textContent: ''
			}
		},
		methods: {
			black() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/home-nav.css");
	@import url("../../static/css/report.css");
</style>
