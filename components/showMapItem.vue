<template>
	<view class="i-warpper" :style="width">
		<view class="i-main" v-for="(item,index) in data" :key="index" @tap="showMap(index)">
			<view class="m-top">
				<view class="t-warpper">
					<view class="img-warpper">
						<image class="t-img" src="/static/image/userImg.jpg" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="m-bottom">
				<view class="b-top">{{item.name}}</view>
				<view class="b-bottom">
					{{item.sex}} {{item.num}} {{item.time}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [
					{name: '活动一', sex: '男', num: '单人', time: '2小时10分钟后'},
					{name: '活动二', sex: '女', num: '多人', time: '1小时15分钟后'},
					{name: '活动三', sex: '男', num: '单人', time: '2小时20分钟后'},
					{name: '活动四', sex: '不限男女', num: '多人', time: '30分钟后'}
				],
				width: '',
				route: [
					{longitude: 121.54121, latitude: 31.21436, currentLongitude: 121.55255, currentLatitude: 31.22148},
					{longitude:121.541671, latitude: 31.218216, currentLongitude: 121.53873, currentLatitude: 31.21551},
					{longitude: 121.542, latitude: 31.2201, currentLongitude: 121.54244, currentLatitude:31.22739},
					{longitude: 121.54121, latitude: 31.21436, currentLongitude: 121.55255, currentLatitude: 31.22148}
				],
				
			};
		},
		created() {
			var w = this.data.length*375
			console.log(this.data.length)
			this.width = "width:"+w+'upx'
			
			this.showMap(0)
		},
		methods:{
			showMap(index){
				var val = this.route[index]
				this.$emit('changes', val)
			}
		}
	}
</script>

<style>
	.i-warpper {
		height: 100%;
	}
	.i-main {
		width: 375upx;height: 100%;display: inline-block;
	}
	.m-top {
		width: 100%;height: 65%;position: relative;
	}
	.m-bottom {
		width: 100%;height: 27%;
	}
	.t-warpper {
		width: 80%;height: 80%;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 15upx;overflow: hidden;
	}
	.img-warpper {
		width: 100%;height: 100%;position: relative;
	}
	.t-img {
		width: 100%;position: absolute;top: 50%;transform:translateY(-50%);
	}
	.b-top {
		width: 100%;height: 60%;font-size: 30upx;text-align: center;
	}
	.b-bottom {
		width: 100%;height: 40%;font-size: 20upx;text-align: center;color: #c0c0c08f;
	}
</style>
