<template>
	<view>
		<view class="follow_top">
			<view class="left-back">
				<image src="../../static/back.png" mode="" class="back" @tap="back_homepage()"></image>
				颜值测试
			</view>

		</view>
		<hr>
		<view class="img_test">
			<image src="../../static/face_cord.png" mode="widthFix"></image>
			<view class="txt">
				请确保是本人测试哦
			</view>

		</view>
		<button>确认</button>





	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			back_homepage: function(){
				uni.reLaunch({
					url: '../home_page/home_page'
				})
			}

		}
	}
</script>

<style>
	page {
		background-color: #161824;
	}

	.follow_top {
		display: flex;
		flex-direction: row;

		align-items: center;
	}

	.left-back {
		position: absolute;
		color: #FFFFFF;
		float: left;
		top: 34upx;
		font-size: 38upx;
		left: 80upx;

	}

	.back {
		width: 32upx;
		height: 36upx;
		left: -50upx;
		top: 4upx;
	}

	hr {
		background-color: #282a33;
		border: none;
		height: 4upx;
		margin-top: 15%;
	}

	.img_test {
		position: relative;
		margin-top: 8%;
		height: 1100upx;


	}

	image {
		width: 100%;
	}

	.txt {
		position: absolute;
		top: 50%;
		left: 30%;
		color: #4b4b53;
		font-size: 28upx;

	}

	button {
		width: 60%;
		background-color: #175acc;
		color: #FFFFFF;
		border-radius: 20upx;
		margin-top: 15%;
	}
</style>
