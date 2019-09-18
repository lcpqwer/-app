<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">应用设置</view>
				</view>
			</view>
		</view>
		<view class="car">
			<view class="car_name">
				隐私和通知
			</view>
			<image src="/static/image/more.png" mode=""></image>
		</view>
		<view class="car">
			<view class="car_name">
				数据与缓存
			</view>
			<image src="/static/image/more.png" mode=""></image>
			
		</view>
		<view class="car" @tap="ass">
			<view class="car_name">
				账号与安全
			</view>
			<image src="/static/image/more.png" mode=""></image>
			
		</view>
		<view class="car">
			<view class="car_name">
				帮助与反馈
			</view>
			<!-- <image src="../../static/add.png" mode="" style="width: 80upx; height: 80upx; top: 20%; left: 47%;"></image> -->
			<image src="/static/image/more.png" mode=""></image>
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
			black: function(){
				uni.navigateBack({
					delta:1
				})
			},
			ass(){
				uni.navigateTo({
					url: '/pages/user/accountAecurity/accountAecurity',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #161824;
	}

	.follow_top {
		display: flex;
		flex-direction: row;

		align-items: center;
	}

	.left-back {
		position: absolute;
		color: #FFFFFF;
		float: left;
		top: 34upx;
		font-size: 38upx;
		left: 80upx;

	}

	.back {
		width: 32upx;
		height: 36upx;
		left: -50upx;
		top: 4upx;
	}

	hr {
		background-color: #282a33;
		border: none;
		height: 4upx;
		margin-top: 15%;
	}

	.car {
		position: relative;
		width: 94%;
		height: 140upx;
		background-color: #242730;
		margin-top: 40upx;
		bottom: 10%;
		left: 3%;
		border-radius: 26upx;		
		
	}

	.car_name {
		position: absolute;
		color: #999a9f;
		font-size: 32upx;
		left: 5%;	
		top: 50%;
		transform: translateY(-50%);
	}
	.car>image{
		position: absolute;
		width: 20upx;
		height: 28upx;
		top: 50%;
		right: 5%;
		transform: translateY(-50%);
		
	}

</style>
