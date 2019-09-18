<template>
	<view>
		<loading
			ref="loading"
			:custom="false"
			:shadeClick="true"
			:type="2"
			@callback="callback()"
			backgroundColor="#121618"
			:shadeShow="false">
			<!-- <view class="test">自定义</view> -->
		</loading>
	</view>
</template>

<script>
	import loading from '@/components/xuan-loading/xuan-loading.vue'
	export default {
		components:{
			loading
		},
		data() {
			return {
			}
		},
		mounted() {
			this.open();
			setTimeout(()=>{
				this.close();
			},2000)
		},
		methods: {
			close:function(){
				this.$refs.loading.close();
			},
			open:function(){
				this.$refs.loading.open();
				this.close()
			},
			callback(){
				// console.log("关闭后回掉");
			}
		}
	}
</script>

<style>

</style>
