<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">发布邀请</view>
				</view>
			</view>
		</view>
		<view class="class-main" :style="allHeight">
			<view class="class-item" v-for="(item,index) in ls" :key="index" @tap="jumpTo(item)">
				<image style="width: 100%;height: 100%;" :src="item.src" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	var allHeight;
	uni.getSystemInfo({
	    success(res) {
			allHeight = 'height: '+(res.screenHeight-60)+'px'
	    }
	})
	export default {
		data() {
			return {
				allHeight: allHeight,
				ls: [
					{src: '/static/image/class1.png', data: '1'},
					{src: '/static/image/class2.png', data: '2'},
					{src: '/static/image/class3.png', data: '3'},
					{src: '/static/image/class4.png', data: '4'},
					{src: '/static/image/class5.png', data: '5'}
				]
			}
		},
		methods: {
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			jumpTo(item){
				uni.navigateTo({
					url:'/pages/index/active-type?id='+item.data
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/class-choose.css");
</style>
