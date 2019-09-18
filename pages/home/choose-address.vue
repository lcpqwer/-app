<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">选择地点</view>
				</view>
			</view>
		</view>
		<view class="item">
			<view class="i-left">始发地</view>
			<view class="i-center" @tap="choose1">{{address1}}</view>
			<image class="i-right" src="/static/image/more.png" mode=""></image>
			<view class="click" @tap="choose1"></view>
		</view>
		<view class="item">
			<view class="i-left">目的地</view>
			<view class="i-center" @tap="choose2">{{address2}}</view>
			<image class="i-right" src="/static/image/more.png" mode=""></image>
			<view class="click" @tap="choose2"></view>
		</view>
		<button @tap="black" class="sub" type="primary">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address1: '请选择',
				address2: '请选择'
			}
		},
		onLoad() {
			
		},
		methods: {
			choose1: function(){
				let that = this
				uni.chooseLocation({
					success:function(res){
						// that.$store.state.activeInfo.address1 = res.name
						that.address1 = res.name
					}
				})
			},
			choose2: function(){
				let that = this
				uni.chooseLocation({
					success:function(res){
						// that.$store.state.activeInfo.address2 = res.name
						that.address2 = res.name
					}
				})
			},
			black(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/choose-address");
</style>
