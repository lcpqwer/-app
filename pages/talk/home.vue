<template>
	<view v-if="flag">
		<!-- <web-view :src="url+data"></web-view> -->
		<web-view src="/hybrid/html/demo.html"></web-view>
	</view>
</template>

<script>
	export default {
		props:{
			data: String
		},
		data() {
			return {
				flag: true,
				url: 'http://47.103.40.112:8080/message.html?token='
			};
		},
		methods:{
			
		},
		created() {
			console.log(this.data)
		}
	}
</script>
	
<style>
</style>