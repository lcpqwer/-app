<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">添加车辆</view>
				</view>
			</view>
		</view>
		<view class="car">
			<view class="car_type">
				车型
			</view>
			<view class="car_chose">
				请选择
			</view>
			<image src="/static/image/more.png" mode="" class="right_back"></image>

		</view>
		<!-- <view class="car">
			<view class="car_type">
				颜色
			</view>
			<view class="car_chose">
				请选择
			</view>
			<image src="/static/image/more.png" class="right_back"></image>

		</view> -->
		<view class="value">
			市场估值：
		</view>
		<view class="drive_upload">
			<text class="txt" style="padding-left: 5%;">行驶证上传</text>
			<view class="camera">
				<image src="../../static/camera.png" class="img_camera"></image>
			</view>
		</view>
		<view class="drive_upload">
			<text class="txt" style="padding-left: 5%;">驾驶证上传</text>
			<view class="camera">
				<image src="../../static/camera.png" class="img_camera"></image>
			</view>
		</view>
		<view class="read" style="display: flex; margin-left: 30%; margin-top: 8%;">
			<view style="width: 30upx; height: 30upx; background-color: #242730;"></view>
			<view class="article" style="color:  #999a9f; font-size: 26upx; padding-left: 30upx;">
				已阅读 《车辆注册须知》
			</view>

		</view>

		<view class="submit" @click="backcarport()">
			<button class="submit">确认</button>
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
		font-size: 35upx;
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
		height: 130upx;
		background-color: #242730;
		margin-top: 40upx;
		bottom: 10%;
		left: 3%;
		display: flex;
		border-radius: 26upx;

	}

	.car_type {
		position: absolute;
		color: #999a9f;
		font-size: 30upx;
		left: 50upx;
		top: 50%;
		transform: translateY(-50%);
	}

	.car_chose {
		position: absolute;
		color: #999a9f;
		font-size: 26upx;
		top: 50%;
		transform: translateY(-50%);
		right: 120upx;

	}

	.right_back {
		position: absolute;
		width: 20upx;
		height: 28upx;
		top: 50%;
		right: 50upx;
		transform: translateY(-50%);

	}

	.value {
		color: #999a9f;
		font-size: 26upx;
		width: 100%;
		padding-left: 65%;
		padding-top: 7%;

	}

	.drive_upload {
		color: #999a9f;
		font-size: 30upx;
		margin-top: 10%;
		padding-left: 3%;

	}

	.camera {
		width: 97%;
		height: 400upx;
		background-color: #242730;
		left: 3%;
		border-radius: 26upx;
		margin-top: 3%;

	}

	.img_camera {
		width: 30%;
		height: 35%;
		margin-left: 35%;
		margin-top: 18%;
	}

	.submit {
		width: 70%;
		margin-left: 15%;
		margin-top: 6%;
		border-radius: 26upx;
		background-color: #175acc;
		color: #d2def8;
		margin-bottom: 40upx;
	}
</style>
