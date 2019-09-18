<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">我的车库</view>
				</view>
			</view>
		</view>
		<view v-if="carData">
			<view  v-if="carData.length != 0" v-for="(item,index) in carData" :key="index" class="car"  @longpress="onLongPress(index,$event)">
				<view class="car_name">
					{{item.car_model_name}}
				</view>
				<view v-if="item.car_price != ''" class="car_color">
					{{item.car_price}}
				</view>
				<view v-else class="car_color">
					暂无
				</view>
			</view>
			<view v-if="carData.length == 0" class="nothave">
				暂无车辆，请添加
			</view>
			<!-- <view class="carLoad"> -->
			<!-- <image src="/static/load3.gif" mode=""></image> -->
			<!-- </view> -->
			<view class="car" style="margin-bottom: 40upx;">
				<image src="../../static/add.png" @tap="addcar()" mode="" style="width: 80upx; height: 80upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"></image>
			</view>
		</view>

		<view class="content">
			<!-- <button @click="open()">开始</button> -->
			<loading ref="loading" :custom="false" :shadeClick="true" :type="2" @callback="callback()" backgroundColor="#161824"
			 :shadeShow="false">
				<!-- <view class="test">自定义</view> -->
			</loading>
		</view>
		<view class="shade" v-show="showShade" @tap="hidePop">
			<view class="pop" :style="popStyle" :class="{'show':showPop}">
				<view style="text-align: center;" v-for="(item,index) in popButton" :key="index" @tap="pickerMenu" :data-index="index">{{item}}</view>
			</view>
		</view>
	</view>

</template>

<script>
	import loading from '@/components/xuan-loading/xuan-loading.vue'
	export default {
		data() {
			return {
				carData: null,
				showShade: false,
				/* 显示操作弹窗 */
				showPop: false,
				/* 弹窗按钮列表 */
				popButton: ["查看详情", "删除车辆"],
				/* 弹窗定位样式 */
				popStyle: "",
				/* 选择的用户下标 */
				pickerUserIndex: -1,
				winSize: {},
				carId: null,
				domIndex: null
			}
		},
		mounted() {
		},
		components: {
			loading
		},
		onLoad() {
			uni.showLoading({
				title: '加载中',
				mask: false
			});
			this.getCars()
			this.getWindowSize()
		},
		created() {
			// console.log(2)
			// uni.showLoading({
			// 	title: '加载中',
			// 	mask: false
			// });
		},
		methods: {
			/* 长按监听 */
			onLongPress(n,e) {
				// console.log(e)
				// console.log(n)
				this.domIndex = n
				this.carId = this.carData[n].car_id
				let [touches, style, index] = [e.touches[0], "", e.currentTarget.dataset.index];
				
				/* 因 非H5端不兼容 style 属性绑定 Object ，所以拼接字符 */
				if (touches.clientY > (this.winSize.height / 2)) {
					style = `bottom:${this.winSize.height-touches.clientY}px;`;
				} else {
					style = `top:${touches.clientY}px;`;
				}
				if (touches.clientX > (this.winSize.witdh / 2)) {
					style += `right:${this.winSize.witdh-touches.clientX}px`;
				} else {
					style += `left:${touches.clientX}px`;
				}
			
				this.popStyle = style;
				this.pickerUserIndex = Number(index);
				this.showShade = true;
				this.showPop = true;
				this.$nextTick(() => {
					// setTimeout(() => {
					// 	this.showPop = true;
					// 	console.log(111)
					// }, 10);
					this.showPop = true;
				});
			},
			/* 隐藏弹窗 */
			hidePop() {
				// console.log(111111)
				this.showPop = false;
				this.pickerUserIndex = -1;
				setTimeout(() => {
					this.showShade = false;
				}, 250);
			},
			/* 选择菜单 */
			pickerMenu(e) {
				let that = this
				switch (e.target.dataset.index){
					case 0:
						// console.log('查看详情', this.carId)
						uni.navigateTo({
							url: '/pages/user/carInfo/carInfo?id='+that.carId
						})
						break;
					case 1:
						if (this.carId){
							this.carData.splice(this.domIndex,1)
							
							console.log(that.carId)
							uni.request({
								url: 'http://52.80.194.137:8000/user/user_mycars/?car_id='+that.carId,
								method: 'DELETE',
								data: {},
								dataType: 'json',
								success: res => {
									console.log(res)
								},
								fail: () => {},
								complete: () => {}
							});
						}
						break;
					default:
						break;
				}
				/* 
				 因为隐藏弹窗方法中会将当前选择的用户下标还原为-1,
				 如果行的菜单方法存在异步情况，请在隐藏之前将该值保存，或通过参数传入异步函数中
				 */
				this.hidePop();
			},
			getWindowSize() {
				uni.getSystemInfo({
					success: (res) => {
						this.winSize = {
							"witdh": res.windowWidth,
							"height": res.windowHeight
						}
					}
				})
			},
			black() {
				uni.navigateBack({
					delta: 1
				})
			},
			addcar() {
				uni.navigateTo({
					url: '/pages/user/add_car/add_car'
				})
			},
			getCars() {
				let that = this
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_mycars/',
					method: 'GET',
					data: {
						pid: getApp().globalData.pid
					},
					success: res => {
						console.log(res)
						uni.hideLoading()
						that.carData = res.data.data
						// that.close()
					},
					fail: () => {
						console.log(1)
					},
					complete: () => {}
				});
			},
			delCar(){
				
				uni.request({
					url: '',
					method: 'GET',
					data: {},
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.test {
		animation: 1s aaa infinite;
	}

	@keyframes aaa {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.content {}

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

	.car {
		position: relative;
		width: 94%;
		height: 120upx;
		background-color: #242730;
		margin-top: 40upx;
		bottom: 10%;
		left: 3%;
		border-radius: 26upx;
	}

	view>.car:last-child {
		margin-bottom: 40upx;
	}

	.car_name {
		position: absolute;
		color: #e2e2e2;
		font-size: 32upx;
		left: 5%;
		top: 30%;
	}

	.car_price {
		position: absolute;
		color: #e2e2e2;
		font-size: 32upx;
		left: 25%;
		top: 30%;


	}

	.car_color {
		position: absolute;
		color: #e2e2e2;
		font-size: 32upx;
		right: 10%;
		top: 30%;
	}

	.carLoad {
		width: 100%;
		height: 150upx;
		background-color: #fff;
	}
	.nothave {
		width: 100%;height: 100upx;font-size: 30upx;line-height: 100upx;text-align: center;margin-top: 40upx;
	}
	
	
</style>
<style scoped lang="scss">
	/* 列式弹性盒子 */
	.flex_col {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
	}

	/* 弹性盒子弹性容器 */
	.flex_col .flex_grow {
		width: 0;
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
	}

	.flex_row .flex_grow {
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
	}

	/* 弹性盒子允许换行 */
	.flex_col.flex_wrap {
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

	/* 列表 */
	.list {
		background-color: #FFFFFF;
		font-size: 28upx;
		color: #333;
		user-select: none;
		touch-callout: none;

		&>view {
			padding: 24upx 30upx;
			position: relative;

			&:active,
			&.active {
				// background-color: #f3f3f3;
			}

			image {
				height: 80upx;
				width: 80upx;
				border-radius: 4px;
				margin-right: 20upx;
			}

			&>view {
				line-height: 40upx;

				.time,
				.info {
					color: #999;
					font-size: 24upx;
				}

				.time {
					width: 150upx;
					text-align: right;
				}

				.info {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}

		&>view:not(:first-child) {
			margin-top: 1px;

			&::after {
				content: '';
				display: block;
				height: 0;
				border-top: #CCC solid 1px;
				width: 620upx;
				position: absolute;
				top: -1px;
				right: 0;
				transform:scaleY(0.5);	/* 1px像素 */
			}
		}
	}

	/* 遮罩 */
	.shade {
		position: fixed;
		z-index: 100;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		-webkit-touch-callout: none;

		.pop {
			position: fixed;
			z-index: 101;
			width: 200upx;
			box-sizing: border-box;
			font-size: 28upx;
			text-align: left;
			color: #333;
			background-color: #242730;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
			line-height: 80upx;
			transition: transform 0.15s ease-in-out 0s;
			user-select: none;
			-webkit-touch-callout: none;
			transform: scale(0, 0);

			&.show {
				transform: scale(1, 1);
			}

			&>view {
				padding: 0 20upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				user-select: none;
				-webkit-touch-callout: none;

				&:active {
					background-color: #000;
				}
			}
		}
	}
</style>
