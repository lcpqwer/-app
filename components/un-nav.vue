<template>
	<view class="nav-wrapper">
		<view class="bgc nav-main">
			<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
				<view @tap="black" class="black-warpper"></view>
				<image @tap="black" class="main-left black" src="/static/image/back.png" mode=""></image>
			<view class="main-title">{{nav.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			nav: Object,
			url: String
		},
		
		data() {
			return {
				navData: null
			};
		},
		created() {
			this.navData = this.nav
		},
		methods:{
			black(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
@import url("../static/css/home-nav");

</style>
