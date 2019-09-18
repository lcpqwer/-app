<template>
	<view style="width: 100%;height: 100%;">
		<view class="data-item" v-for="(item,index) in list" :key="index" @tap="choose">
			<image class="item-img img-before" :src="item.img" mode=""></image>
			<view class="item-title">{{item.title}}</view>
			<image class="item-img img-after" src="/static/image/more.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{title: '活动时间', img: '/static/image/time.png', model: 'dataTime'},
					{title: '活动地点', img: '/static/image/address1.png', model: 'address'},
					{title: '参与人群', img: '/static/image/people.png', model:'people'},
					{title: '出行方式', img: '/static/image/car.png', model: 'car'}
				]
			};
		},
		methods:{
			choose(){
				this.$refs.dateTime.show();
			}
		}
	}
</script>

<style>
	@import url("../static/css/active-data-item.css");
</style>
