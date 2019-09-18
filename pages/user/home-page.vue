<template>
	<view class="warpper">
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">TA的主页</view>
				</view>
			</view>
		</view>
		<view class="hp-main" :style="allHeight">
			<view class="hp-top">
				<image class="top-img" src="/static/image/userImg.jpg" mode=""></image>
				<view class="top-user">
					<view>
						<image class="tu-img" src="/static/image/userImg.jpg" mode=""></image>
						<view class="tu-name">
							<view>
								<view class="tun-text">Kitty</view>
							</view>
						</view>
						<view class="tu-info">
							<view>
								<image class="tui-img" src="/static/image/woman.png" mode=""></image>
								<view class="tui-age">20岁</view>
								<view class="tui-type">美妆达人</view>
							</view>
						</view>
						<view class="tu-address">
							<view>
								<image class="tua-img" src="/static/image/address1.png" mode=""></image>
								<view class="tua-text">浦东国际机场</view>
							</view>
						</view>
						<view class="foucs">
							取消关注
						</view>
						<view class="in-pic">
							邀请TA参加我的活动
						</view>
					</view>
				</view>
			</view>
			<view class="hp-title">
				<view>TA的相册</view>
			</view>
			<view class="hp-content">
				<view :style="itemHeight">
					<image v-for="(item,index) in ls" :key="index" class="hpc-img" src="/static/image/userImg.jpg" mode=""></image>
				</view>
			</view>
			<view class="hp-bottom">
				<view class="hpb-title" @tap="toInvite">
					<view class="t">TA的邀约</view>
				</view>
				<view class="hpb-main">
					<view class="invite">
						<view class="invite-warpper">
							<view class="invite-left">
								<image class="invite-img" src="/static/image/chat1.png" mode=""></image>
							</view>
							<view class="invite-main">
								<view class="invite-title">互动聊天</view>
								<image class="im-img" src="/static/image/more.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="invite">
						<view class="invite-warpper">
							<view class="invite-left">
								<image class="invite-img" src="/static/image/chat1.png" mode=""></image>
							</view>
							<view class="invite-main">
								<view class="invite-title">互动聊天</view>
								<image class="im-img" src="/static/image/more.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="invite">
						<view class="invite-warpper">
							<view class="invite-left">
								<image class="invite-img" src="/static/image/chat1.png" mode=""></image>
							</view>
							<view class="invite-main">
								<view class="invite-title">互动聊天</view>
								<image class="im-img" src="/static/image/more.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
				<view class="hpb-title">
					<view class="t">TA参与的话题</view>
					<view class="a">
							<view>邀请TA参加我的话题</view>	
					</view>
				</view>
				<view class="topic">
					<view>#美妆展1234</view>
				</view>
				<view class="topic">
					<view>#美妆展1234</view>
				</view>
				<view class="instert">
					<button class="in-btn" type="primary">发消息</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var allHeight;
	uni.getSystemInfo({
		success(res) {
			allHeight = 'height: ' + (res.screenHeight - 60) + 'px'
		}
	})
	import inviteItem from '@/components/interest-item.vue'
	export default {
		data() {
			return {
				allHeight: allHeight,
				ls: [
					"/static/image/BasicsBg.png",
					"/static/image/BasicsBg.png",
					"/static/image/BasicsBg.png",
					"/static/image/BasicsBg.png"
				],
				itemHeight: ''
			}
		},
		components: {
			inviteItem
		},
		onLoad() {
			this.itemHeight = 'width: ' + this.ls.length * 300 + 'upx'
		},
		methods: {
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			toInvite(){
				uni.navigateTo({
					url: '/pages/home/invite'
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/home-page.css");
	.foucs {
		width: 130upx;height: 50upx;font-size: 20upx;position: absolute;top: 10%;right: 20upx;text-align: center;line-height: 50upx;background-color: #000;border-radius: 25upx;
	}
	.in-pic {
		width: 250upx;height: 50upx;font-size: 20upx;position: absolute;bottom: 10%;right: 20upx;text-align: center;line-height: 50upx;background-color: #000;border-radius: 25upx;color: #538CE2;
	}
</style>
