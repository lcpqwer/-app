<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image  @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">TA的主页</view>
				</view>
			</view>
		</view>
		
		<inItem></inItem>
		<inItem></inItem>
		<inItem></inItem>
		<inItem></inItem>
	</view>
</template>

<script>
	import inItem from '@/components/invite-item.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			inItem
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
