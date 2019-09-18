<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">我的发布</view>
				</view>
			</view>
		</view>
		<view style="width: 100%;" v-if="upAcData.length>0">
			<myActiveItem v-for="(item,index) in upAcData" :key="index" :acItem="item"></myActiveItem>
		</view>
		<view v-else>
			暂无活动
		</view>
		<uni-load-more :status="state" :content-text="contentText" />
	</view>
</template>

<script>
	import myActiveItem from '@/components/myActiveItem.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import amapFile from './amap-wx.js';
	export default {
		data() {
			return {
				upAcData: [],
				state: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				pag: 1
			}
		},
		components: {
			myActiveItem,
			uniLoadMore
		},
		onLoad() {
			this.state = 'loading'
			this.getUpAc()
		},
		onReachBottom() {
			this.state = 'loading'
			this.getUpAc()
		},
		methods: {
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			toAD(){
				uni.navigateTo({
					url: '/pages/index/actice-details'
				});
			},
			drawPolyline(self,acItem) {
				return {
					origin: getApp().globalData.userLongitude+ ',' + getApp().globalData.userLatitude,
					destination: acItem.longitude_end + ',' + acItem.latitude_end,
					success(data) {
						let distance = data.paths[0].distance;
						if (distance<1000){
							// console.log(distance+'米')
							acItem.dis = distance+'米'
						}else {
							// console.log((distance/1000).toFixed(2)+'km')
							acItem.dis = (distance/1000).toFixed(2)+'km'
						}
						self.upAcData.push(acItem)
					},
					fail(e) {
						console.log(e)
					},
					complete() {
						// console.log('complate')
					}
				}
			
			},
			getUpAc(){
				let that = this
				let myAmapFun = new amapFile.AMapWX({
					key: getApp().globalData.gaoKey,
					city: '全国'
				});
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_activitypaging/?size=4&page='+that.pag,
					method: 'POST',
					data: {
						pid: 2
					},
					success: res => {
						if (res.data.detail == 'Invalid page.' ){
							this.state = 'noMore'
						}else {
							this.state = 'more'
							// console.log(res)
							that.pag += 1
							let acData = res.data.data
							for (var i = 0; i < acData.length; i++) {
								myAmapFun.getDrivingRoute(that.drawPolyline(that,acData[i]))
							}
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
		}
	}
</script>

<style>
	@import url("../../static/css/active-item.css");
</style>
