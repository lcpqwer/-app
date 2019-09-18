<template>
	<view>
		<homeNav></homeNav>
		<activeItem v-for="(acItem,index) in activeList" :key="index" :acItem="acItem"></activeItem>
	</view>
</template>

<script>
	var allHeight;
	uni.getSystemInfo({
		success(res) {
			allHeight = 'height: ' + (res.screenHeight - 60) + 'px'
		}
	})
	import activeItem from '../../components/active-item.vue'
	import homeNav from '../../components/home-nav.vue'
	export default {
		props:{
			activeList: Array
		},
		data() {
			return {
				allHeight: allHeight,
				con:'上拉加载'
			}
		},
		components: {
			activeItem,
			homeNav
		},
		methods: {},
		onReady() {}
	}
</script>

<style>

</style>
