<template>
	<view style="width: 100%;height: 100%;">
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">车辆详情</view>
				</view>
			</view>
		</view>
		<view v-for="(item,index) in carData" :key="index" class="carInfo">
			<view class="title">{{item.title}}</view>
			<view class="text">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				car_id:null,
				carData: [
					{title: '品牌', text: ''},
					{title: '系列', text: ''},
					{title: '车型', text: ''},
					{title: '价格', text: ''}
					]
			}
		},
		onLoad(data) {
			console.log(data.id)
			let that = this
			uni.request({
				url: 'http://52.80.194.137:8000/user/user_mycars/',
				method: 'POST',
				data: {
					car_id: data.id
				},
				dataType: 'json',
				success: res => {
					// console.log(res)
					let d = res.data.data
					that.carData[0].text = d.car_brand_name
					that.carData[1].text = d.car_series_name
					that.carData[2].text = d.car_model_name
					that.carData[3].text = d.car_price
				},
				fail: () => {},
				complete: () => {}
			});
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
	.carInfo {
		width: 94%;height: 100upx;margin-left: 3%;margin-top: 2%;background-color: #242730;border-radius: 20upx;position: relative;
	}
	.title {
		position: absolute;top: 50%;transform: translateY(-50%);left: 30upx;font-size: 30upx;
	}
	.text {
		position: absolute;top: 50%;transform: translateY(-50%);right: 30upx;font-size: 30upx;
	}
</style>
