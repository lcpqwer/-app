<template>
	<view style="width: 100%;height: 100%;">
		<userTop :userInfo="userInfo"></userTop>
		<userBottom :list="list"></userBottom>
	</view>
</template>

<script>
	import userTop from '../../components/user-top.vue'
	import userBottom from '../../components/user-bottom.vue'
	export default {
		props:{
			userInfo: Object,
			list: Array
		},
		data() {
			return {
				
			};
		},
		components: {
			userTop,
			userBottom
		},
		methods:{
			
		}
	}
</script>

<style>
	
</style>
