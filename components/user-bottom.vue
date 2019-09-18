<template>
	<view style="width: 100%;height: 50%;margin-top: 40upx;">
		<view class="list-item" v-for="(item,index) in list" :key="index" @tap="change(item)">
			<image class="item-img img-before" :src="item.img" mode="aspectFit"></image>
			<view class="item-title">{{item.title}}</view>
			<view class="item-data">{{item.num}}</view>
			<image class="item-img img-after" src="/static/image/more.png" mode="aspectFit"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			list: Array
		},
		data() {
			return {
				
			};
		},
		components: {
			
		},
		created() {
			
		},
		methods:{
			change(item){
				if (item.data == 'car'){
					uni.navigateTo({
						url:'/pages/user/my_carport'
					})
				}else if (item.data == 'setup'){
					uni.navigateTo({
						url:'/pages/user/app_setting'
					})
				}else if (item.data == 'search'){
					uni.navigateTo({
						url:'/pages/index/screening'
					})
				}else if (item.data == 'upload'){
					uni.navigateTo({
						url:'/pages/user/my-upload'
					})
				}else if (item.data == 'can'){
					uni.navigateTo({
						url:'/pages/user/my-can'
					})
				}else if (item.data == 'appearance'){
					uni.navigateTo({
						url:'/pages/user/myAppearance/myAppearance'
					})
				}
			}
		}
	}
</script>

<style>
@import url("../static/css/user-bottom.css");
.item-data {
	position: absolute;top: 50%;transform: translateY(-50%);right: 100upx;font-size: 25upx;
}
</style>
