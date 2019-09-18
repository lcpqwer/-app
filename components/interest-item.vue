<template>
	<view class="item-warpper" :style="{filter: (flag?'brightness(0.5)':'brightness(1)')}">
		<view class="item-img"  @tap="change">
			<view class="img-warpper">
				<view style="width: 100%;height: 100%;position: relative;">
					<image class="img" :src="data.img" mode=""></image>
				</view>
			</view>
		</view>
		<view class="item-title">
			<view>{{data.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object
			},
		},
		data() {
			return {
				obj: null,
				flag: true
			};
		},
		methods:{
			change(){
				this.flag = !this.flag
			}
		}
	}
</script>

<style>
	@import url("../static/css/interest-item.css");
</style>
