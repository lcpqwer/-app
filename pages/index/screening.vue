<template>
	<view class="warpper">
		<unNav :nav="navData"></unNav>
		<view class="scre-main" :style="styleHeight">
			<view class="scre">
				<view style="width: 15%;height: 100%;position: relative;">
					<view class="scre-title">兴趣</view>
				</view>
			</view>
			<view class="interests">
				<view>
					<intereItem :data="ls[0]"></intereItem>
					<intereItem :data="ls[1]"></intereItem>
					<intereItem :data="ls[2]"></intereItem>
				</view>
				<view>
					<intereItem :data="ls[3]"></intereItem>
					<intereItem :data="ls[4]"></intereItem>
				</view>
			</view>
			<view class="scre" style="margin-top: 3%;">
				<view class="scre-left">
					<view class="scre-title">性别</view>
				</view>
				<view class="sex">
					<view class="all-sex">
						<view class="sex-one">
							<image class="sex-img" src="/static/image/woman.png" mode=""></image>
							<view class="sex-title">女</view>
						</view>
						<view class="sex-one">
							<image class="sex-img" src="/static/image/woman.png" mode=""></image>
							<view class="sex-title">女</view>
						</view>
						<view class="sex-one">
							<image class="sex-img" src="/static/image/woman.png" mode=""></image>
							<view class="sex-title">女</view>
						</view>
					</view>
				</view>
			</view>
			<view class="scre">
				<view class="scre-left">
					<view class="scre-title">年龄</view>
				</view>
				<view class="scre-right">
					<view class="sr-main">
						<view>
							<input class="input" type="number" value="" />
							<view class="input-middle">——</view>
							<input class="input" style="left: 270upx;width: 170upx;" type="number" value="" />
							<view class="sr-nuit">岁</view>
						</view>
					</view>
				</view>
			</view>
			<view class="scre">
				<view class="scre-left">
					<view class="scre-title">颜值</view>
				</view>
				<view class="scre-right">
					<view class="sr-main">
						<view>
							<input class="input" type="number" value="" />
							<view class="input-middle">——</view>
							<input class="input" style="left: 270upx;width: 170upx;" type="number" value="" />
							<view class="sr-nuit">分</view>
						</view>
					</view>
				</view>
			</view>
			<view class="scre">
				<view class="scre-left">
					<view class="scre-title">时间</view>
				</view>
				<view class="scre-right">
					<view class="sr-main">
						<view>
							<input class="input" type="number" value="" />
							<view class="input-middle">——</view>
							<input class="input" style="left: 270upx;width: 170upx;" type="number" value="" />
							<view class="sr-nuit">时</view>
						</view>
					</view>
				</view>
			</view>
			<view class="scre">
				<view class="scre-left">
					<view class="scre-title">距离</view>
				</view>
				<view class="scre-right">
					<view class="sr-main">
						<view>
							<input class="input" type="number" value="" />
							<view class="input-middle">——</view>
							<input class="input" style="left: 270upx;width: 160upx;" type="number" value="" />
							<view class="sr-nuit" style="right: 0;">千米</view>
						</view>
					</view>
				</view>
			</view>
			<view class="s-btn">
				<button class="s-sub">确认</button>
			</view>
		</view>
	</view>
</template>

<script>
	import unNav from '../../components/un-nav.vue'
	import intereItem from '../../components/interest-item.vue'
	var allHeight;
	uni.getSystemInfo({
	    success(res) {
			allHeight = 'height: '+(res.screenHeight-60)+'px'
	    }
	})
	export default {
		data() {
			return {
				navData: {
					title: '条件筛选'
				},
				styleHeight: allHeight,
				ls: [
					{title: '美食咖啡', img: '/static/image/food1.png'},
					{title: '电影展览', img: '/static/image/move1.png'},
					{title: '户外运动', img: '/static/image/fitness1.png'},
					{title: '唱歌泡吧', img: '/static/image/song1.png'},
					{title: '互动聊天', img: '/static/image/chat1.png'}
				]
			}
		},
		components: {
			unNav,
			intereItem
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("../../static/css/screening.css");
</style>
