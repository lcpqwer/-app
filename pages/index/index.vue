<template>
	<view class="warpper content">
		<!-- <talk :data="token" v-if="pageType == 'talk'"></talk> -->
		<!-- <web-view  src="/hybrid/html/demo.html"></web-view> -->
		<view v-if="pageType == 'talk'">
			<web-view  src="/hybrid/html/demo.html"></web-view>
		</view>
		
		<!-- <web-view v-if="pageType == 'talk'" src="/hybrid/html/demo.html"></web-view> -->
		<user :userInfo="userInfo" :list="list" v-else-if="pageType ==  'user'"></user>
		<home :activeList="activeList" v-else></home>
		<uni-load-more v-if="pageType == 'home'" :status="state" :content-text="contentText" />
		<view v-if="pageType != 'user'" class="warpper" style="height: 180upx;"></view>
		<view style="z-index: 1;" class="nav">
			<view class="nav-item aaa">
				<image v-if="talkBool" class="nav-item-image" src="../../static/image/talk.png" @tap="navChange" mode="" data-cur="talk"></image>
				<image v-else src="../../static/image/talk1.png" class="nav-item-image" mode=""></image>
			</view>
			<view class="nav-item bbb">
				<image v-if="homeBool" class="nav-item-image" src="../../static/image/home.png" @tap="navChange" mode="" data-cur="home"></image>
				<image v-else src="../../static/image/upload.png" class="nav-item-image upload" @tap="jumpTo" mode=""></image>
			</view>
			<view class="nav-item ccc">
				<image v-if="userBool" style="width: 22%;" class="nav-item-image" src="../../static/image/user1.png" @tap="navChange" mode="" data-cur="user"></image>
				<image v-else src="../../static/image/user.png" style="width: 22%;" class="nav-item-image" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import amapFile from './amap-wx.js';
	export default {
		data() {
			return {
				pageType: 'home',
				talkBool: true,
				homeBool: false,
				userBool: true,
				token: '',
				state: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				activeData: null,
				userInfo: {
					blacklist_num: getApp().globalData.userBlack,
					fans_num: getApp().globalData.userFans,
					focus_num: getApp().globalData.userFocus,
					job: getApp().globalData.userJob,
					sex: getApp().globalData.userSex,
					username: getApp().globalData.userName,
					sign: getApp().globalData.userSign,
					area: getApp().globalData.userArea,
					age: getApp().globalData.userAge,
					head_img: getApp().globalData.userHead,
				},
				list: [
					// {title: '搜索设置', img: '/static/image/search.png', data: 'search', num: ''},
					{title: '我的点数', img: '/static/mycoin.png',data: 'coin', num: getApp().globalData.userCoin},
					{title: '我发布的', img: '/static/image/uploadme.png', data: 'upload', num: ''},
					{title: '我参与的', img: '/static/image/withme.png',data:'can', num: ''},
					{title: '我的车库', img: '/static/image/car2.png',data: 'car', num: ''},
					{title: '我的颜值', img: '/static/myaence.png',data: 'appearance', num: getApp().globalData.userAence},
					{title: '应用设置', img: '/static/image/setup.png',data: 'setup', num: ''},
				],
				activeList: [],
				key: '3dcb6b8d3b392e810c3de2b24de278bd',
				acPag: 1
			}
		},
		components: {
			uniLoadMore
		},
		onLoad(val) {
			if (val.id == 1){
				this.pageType = 'user'
				this.userBool = false;
				this.talkBool = this.homeBool = true
			} else {
				this.pageType = 'home'
				this.homeBool = false;
				this.talkBool = this.userBool = true
			}			
			// if (this.acPag == 1){
			// 	this.getActive(this.acPag)
			// }
			// console.log('pagtype',this.pageType)
			this.getActive(this.acPag)
		},
		onReachBottom() {
			if (this.pageType == 'home'){
				this.getActive(this.acPag)
			}
		},
		onBackPress() {
			plus.runtime.quit(); 
		},
		onShow() {
			// 页面展示时整理啃改变的信息
			this.userInfo = {
				blacklist_num: getApp().globalData.userBlack,
				fans_num: getApp().globalData.userFans,
				focus_num: getApp().globalData.userFocus,
				job: getApp().globalData.userJob,
				sex: getApp().globalData.userSex,
				username: getApp().globalData.userName,
				sign: getApp().globalData.userSign,
				area: getApp().globalData.userArea,
				age: getApp().globalData.userAge,
				head_img: getApp().globalData.userHead,
			}
			this.list[0].num = getApp().globalData.userCoin
			this.list[4].num = getApp().globalData.userAence
		},
		methods: {
			navChange: function(e){
				this.pageType = e.target.dataset.cur
				this.homeBool = this.talkBool = this.userBool = true
				if (this.pageType == 'home'){
					this.homeBool = false
				}else if (this.pageType == 'talk'){
					this.talkBool = false
				}else {
					this.userBool = false
					
					// uni.navigateTo({
					// 	url:'/pages/index/index?id=2'
					// })
				}
			},
			jumpTo: function(){
				uni.navigateTo({
					url: '/pages/home/class-choose'
				});
			},
			getActive(pag){
				// console.log('获取',pag)
				let myAmapFun = new amapFile.AMapWX({
					key: this.key,
					city: '全国'
				});
				this.state = 'loading'
				let that = this
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_activityindex/?page='+pag+'&size=4',
					method: 'POST',
					data: {
						pid: getApp().globalData.pid
					},
					success: res => {
						if (res.data.detail != 'Invalid page.' ){
							let acData = res.data.data
							console.log('用户id',getApp().globalData.pid)
							console.log('获取活动',acData)
							that.acPag += 1
							for (var i = 0; i < acData.length; i++) {
								console.log(acData[i])
								myAmapFun.getDrivingRoute(that.drawPolyline(that,acData[i]))
							}
							that.state = 'more'
						}else {
							that.state = 'noMore'
						}
						
					},
					fail: () => {},
					complete: () => {}
				});
			},
			drawPolyline(self,acItem) {
				return {
					origin: getApp().globalData.userLongitude+ ',' + getApp().globalData.userLatitude,
					destination: acItem.longitude_end + ',' + acItem.latitude_end,
					success(data) {
						console.log('开始计算距离')
						let distance = data.paths[0].distance;
						if (distance<1000){
							// console.log(distance+'米')
							acItem.dis = distance+'米'
						}else {
							// console.log((distance/1000).toFixed(2)+'km')
							acItem.dis = (distance/1000).toFixed(2)+'km'
						}
						self.activeList.push(acItem)
						console.log('格式化之后的活动',acItem)
					},
					fail(e) {
						console.log(e)
					},
					complete() {
						// console.log('complate')
					}
				}
			
			},
		}
	}
</script>

<style>
	.content {
		position: relative;
	}
	.nav {
		width: 683upx;
		height: 121upx;
		position: fixed;
		left: 50%;
		top: 100%;
		transform: translate(-50%,-150%);
		border-radius: 60upx;
		display: flex;
		flex-direction: row;
		background-color: rgba(0, 0, 0, .8);
	}
	.nav-item {
		width: 33.33%;
		/* background-color: #fff; */
		height: 100%;
		align-items: center;
		text-align: center;
		position: relative;
	}
	.nav-item-image {
		width: 25%;
		height: 45%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.upload {
		width: 120upx;
		height: 120upx;
	}
</style>
