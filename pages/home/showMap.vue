<template>
	<view class="s-warpper" style="height: 100%;">
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">活动路线查看</view>
				</view>
			</view>
		</view>
		<view class="m-warpper" :style="height2">
			<map scale="15" :markers="markers" :polyline="polyline" name="" class="map-warpper" :latitude="a" :longitude="b"></map>
			<view style="width: 100%;height: 20%;background-color: #161824;border-top-right-radius: 25px;border-top-left-radius: 25px;overflow: auto;">
				<showItem @changes="showMap"></showItem>
			</view>
		</view>
	</view>
</template>

<script>
	var height2;
	uni.getSystemInfo({
	    success(res) {
			height2 = 'height: '+(res.screenHeight-60)+'px'
	    }
	})
	
	import amapFile from './amap-wx.js';
	import homeNav from '@/components/home-nav.vue'
	import showItem from '@/components/showMapItem.vue'
	export default {
		data() {
			return {
				height2: height2,
				// key: 'c290b7e016c85e8f279b2f80018c6fbf',
				key: '3dcb6b8d3b392e810c3de2b24de278bd',
				polyline: null,
				longitude: 121.787083,
				latitude: 31.51356,
				currentLongitude: 121.545294,
				currentLatitude: 31.21717,
				a: null,
				b: null,
				markers: [{
						longitude: null,
						latitude: null,
						iconPath: '/static/b2.png'
					},
					{
						latitude: null,
						longitude: null,
						iconPath: '/static/b1.png'
					}
				]
			}
		},
		onLoad() {
			// var myAmapFun = new amapFile.AMapWX({
			// 	key: this.key
			// });
			// this.drawPolyline(this, '#01b42a')
		},
		components: {
			homeNav,
			showItem
		},
		methods: {
			black(){
				uni.navigateTo({
					url:"/pages/index/index?id=1"
				})
			},
			drawPolyline(self, color) {
				return {
					origin: this.longitude + ',' + this.latitude,
					destination: this.currentLongitude + ',' + this.currentLatitude,
					success(data) {
						console.log('开始绘制')
						var points = [];
						if (data.paths && data.paths[0] && data.paths[0].steps) {
							var steps = data.paths[0].steps;
							for (var i = 0; i < steps.length; i++) {
								var poLen = steps[i].polyline.split(';');
								for (var j = 0; j < poLen.length; j++) {
									points.push({
										longitude: parseFloat(poLen[j].split(',')[0]),
										latitude: parseFloat(poLen[j].split(',')[1])
									})
								}
							}
						}
						// self.distance = data.paths[0].distance/1000;
						// console.log('距离',data.paths[0].distance+'米')
						// self.changeDistance(data.paths[0].distance)
						
						// self.duration = parseInt(data.paths[0].duration / 60),
						// console.log('时间', data.paths[0].duration+'秒')
						// self.changeDuration(parseInt(data.paths[0].duration / 60))
						self.polyline = [{
							points: points,
							color: color,
							width: 24,
							arrowLine: true
						}]
			
					},
					fail(e) {
						console.log(e)
					},
					complete() {
						console.log('complate')
					}
				}
			},
			showMap(val){
				this.markers[0].latitude = val.latitude
				this.markers[0].longitude = val.longitude
				this.markers[1].latitude = val.currentLatitude
				this.markers[1].longitude = val.currentLongitude
				this.latitude = val.latitude
				this.longitude = val.longitude
				this.currentLatitude = val.currentLatitude
				this.currentLongitude = val.currentLongitude
				this.a = ((val.latitude + val.currentLatitude)/2).toFixed(5)
				this.b = ((val.longitude + val.currentLongitude)/2).toFixed(6)
				var myAmapFun = new amapFile.AMapWX({
					key: this.key
				});
				myAmapFun.getDrivingRoute(this.drawPolyline(this, '#01b42a'))
			}
		}
	}
</script>

<style>
.s-warpper {
	width: 100%;
}

.m-warpper {
	width: 100%;background-color: #fff;
}

.map-warpper {
	width: 100%;height: 80%;
}
</style>
