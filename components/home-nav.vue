<template>
	<view class="nav-wrapper">
		<view class="bgc nav-main">
			<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
				<image @tap="toScre" class="main-left" src="/static/image/select.png" mode=""></image>
				<view class="main-title">首页</view>
				<image @click="showMap" class="main-right" src="/static/image/map.png" mode=""></image>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toScre(){
				uni.navigateTo({
					url: '/pages/index/screening'
				});
			},
			showMap(){
				uni.navigateTo({
					url:"/pages/home/showMap"
				})
			}
		}
	}
</script>

<style>
	@import url("../static/css/home-nav.css");
</style>
