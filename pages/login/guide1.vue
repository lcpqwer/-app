<template>
	<view style="width: 100%;height: 100%;">
		<view @tap="jumpTo" style="width: 150upx;height: 60upx;background-color: rgba(0,0,0,0.3);position: fixed;z-index: 1;top: 50upx;right: 50upx;border-radius: 30upx;text-align: center;line-height: 60upx;letter-spacing: 2px;border: 1upx solid;">
			跳过
		</view>
		<uni-swiper-dot :autoplay="true" style="width: 100%;height: 100%;" :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view :class="item.colorClass" class="swiper-item">
						<image :src="item.url" mode="aspectFill" />
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-dot.vue'
	export default {
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: '/static/1.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: '/static/2.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: '/static/3.jpg',
						content: '内容 C'
					}
				],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					},
					{
						backgroundColor: 'rgba(255, 90, 95,0.3)',
						border: '1px rgba(255, 90, 95,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
						selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
					},
					{
						backgroundColor: 'rgba(83, 200, 249,0.3)',
						border: '1px rgba(83, 200, 249,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
						selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'long',
				dotsStyles: {
						backgroundColor: 'rgba(245, 116, 88,1)',
						border: '1px rgba(245, 116, 88,1) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(245, 116, 88,1)',
						selectedBorder: '1px rgba(245, 116, 88,1) solid'
					}
			}
		},
		components: {
			uniSwiperDot
		},
		methods: {
			change(e) {
				console.log(e.detail.current)
				this.current = e.detail.current
			},
			jumpTo(){
				uni.navigateTo({
					url: '/pages/login/sign_in'
				})
			}
		}
	}
</script>

<style>
page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}
	.swiper-box {
		height: 100%;
		width: 100%;
	}
	
	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #eee;
		color: #fff;
	}
	
	.swiper-item image {
		width: 100%;
		height: 100%;
	}
	
</style>
