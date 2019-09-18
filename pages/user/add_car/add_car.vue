<template>
	<view>
		<view class="nav-wrapper">
			<view v-if="state" class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">添加车辆</view>
				</view>
			</view>
			<view v-else class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<image @tap="blackIndex" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">选择车型</view>
				</view>
			</view>
		</view>
		<view class="ac-main" :style="allHeight">
			<view v-if="state">
				<view style="height: 2%;"></view>
				<view class="chooseCar" @tap="toChoose">
					<view class="c-title">车型</view>
					<view class="c-val">{{carmodel}}</view>
					<image class="c-img" src="/static/image/more.png" mode=""></image>
				</view>
				<view class="c-price">
					<view>市场估值：{{carPrice}}</view>
				</view>
				<view class="card-title">
					<view>行驶证上传</view>
				</view>
				<view class="up-card" @tap="up1">
					<image v-if="imgPath1 == ''"  style="width: 224upx;height: 150upx;position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);" src="/static/camera.png" mode=""></image>
					<image style="width: 100%;height: 100%;" v-else :src="imgPath1" mode="aspectFit"></image>
				</view>
				<view class="card-title">
					<view>驾驶证上传</view>
				</view>
				<view class="up-card" @tap="up2">
					<image v-if="imgPath2 == ''" style="width: 224upx;height: 150upx;position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);" src="/static/camera.png" mode=""></image>
					<image style="width: 100%;height: 100%;" v-else :src="imgPath2" mode="aspectFit"></image>
				</view>
				<view class="check">
					<view>
						<view @tap="check" class="ch-img">
							<view v-if="ok">
								<image style="width: 100%;height: 100%;position: absolute;top: 50%;left: 0;transform: translateY(-50%);" class="ch-img" src="/static/ok.png" mode=""></image>
							</view>
						</view>
						<view class="ch-text">
							已阅读《车辆注册须知》
						</view>
					</view>
				</view>
				<button class="c-sub" @tap="addCar" type="primary">提交</button>
			</view>
			<view v-else>
				<view style="height: 2%;"></view>
				<view class="chooseCar">
					<picker :range="barand" @change="chooseBarand" range-key="model_name">
						<view class="c-title">品牌</view>
						<view class="c-val">{{carbarand}}</view>
						<image class="c-img" src="/static/image/more.png" mode=""></image>
					</picker>
					
				</view>
				<view style="height: 2%;"></view>
				<view class="chooseCar">
					<picker :range="series" @change="chooseSeries" range-key="series_name">
						<view class="c-title">系列</view>
						<view class="c-val">{{carseries}}</view>
						<image class="c-img" src="/static/image/more.png" mode=""></image>
					</picker>
				</view>
				<view style="height: 2%;"></view>
				<view class="chooseCar">
					<picker :range="model" @change="choosemodel" range-key="model_name">
						<view class="c-title">车型</view>
						<view class="c-val">{{Carmodel}}</view>
						<image class="c-img" src="/static/image/more.png" mode=""></image>
					</picker>
					
				</view>
				<button class="c-sub" @tap="carUp" type="primary">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	var allHeight;
	uni.getSystemInfo({
		success(res) {
			allHeight = 'height: ' + (res.screenHeight - 60) + 'px'
		}
	})
	export default {
		data() {
			return {
				allHeight: allHeight,
				ok: false,
				state: true,
				barand: [],
				barandID: 0,
				carbarand:"请选择",
				series: [],
				seriesID: 0,
				carseries: '请选择',
				model: [],
				modelID: 0,
				Carmodel: '请选择',
				imgBase1: '',
				imgBase2: '',
				imgPath1: '',
				imgPath2: '',
				carmodel: '请选择',
				carPrice: '暂无'
			}
		},
		onLoad() {
			uni.request({
				url: 'http://52.80.194.137:8000/user/user_getallcarbrand/',
				method: 'GET',
				data: {},
				dataType: 'json',
				success: res => {
					// console.log(res)
					this.barand = res.data.data
				},
				fail: () => {},
				complete: () => {}
			});
		},
		
		methods: {
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			check(){
				this.ok = !this.ok
			},
			blackIndex(){
				this.state = true
			},
			toChoose(){
				this.state = false
			},
			chooseBarand(e){
				this.carbarand = this.barand[e.detail.value].model_name
				console.log(e)
				this.barandID = this.barand[e.detail.value].id
				// console.log(this.barandID)
				this.carseries = "请选择"
				this.Carmodel = '请选择'
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_getallcarseries/',
					method: 'POST',
					data: {
						car_brand_id: this.barandID
					},
					dataType: 'json',
					success: res => {
						console.log(res)
						this.series = res.data.data
					},
					fail: () => {},
					complete: () => {}
				});
			},
			chooseSeries(e){
				this.carseries = this.series[e.detail.value].series_name
				this.seriesID = this.series[e.detail.value].id
				this.Carmodel = "请选择"
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_getallcarmodel/',
					method: 'POST',
					data: {car_series_id:this.seriesID},
					dataType: 'json',
					success: res => {
						console.log(res)
						this.model = res.data.data
					},
					fail: () => {},
					complete: () => {}
				});
			},
			choosemodel(e){
				this.Carmodel = this.model[e.detail.value].model_name
				this.modelID = this.model[e.detail.value].id
				if (this.model[e.detail.value].model_price != ''){
					this.carPrice = this.model[e.detail.value].model_price
				}
				
			},
			up1(){
				let that = this
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that.imgPath1 = res.tempFilePaths[0]
						that.getBase64(that.imgPath1, 1)
		
				    }
				});
			},
			up2(){
				let that2 = this
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that2.imgPath2 = res.tempFilePaths[0]
						that2.getBase64(that2.imgPath2,2)
						
				    }
				});
			},
			getBase64(path, Ptype){
				let that = this
				plus.io.resolveLocalFileSystemURL(path, function(entry) { //获取文件对象
					entry.file(function(file) { //获取文件的数据  
						var fileReader = new plus.io.FileReader(); //创建读取文件对象    
						fileReader.readAsDataURL(file);
						// console.log(JSON.stringify(fileReader))
						fileReader.onload = function(e) { //读取成功并以Base64编码呈现  
							// console.log(e.target.result)
							console.log(Ptype)
							if (Ptype == 1){
								that.imgBase1 = e.target.result
							}else {
								that.imgBase2 = e.target.result
							}
							
							
						}
				
					})
					
				})
			},
			carUp(){
				if (this.Carmodel != '请选择'){
					this.carmodel = this.Carmodel
					this.blackIndex()
				}
			},
			addCar(){
				let t = this
				console.log(121212, t.imgPath1.split('.')[t.imgPath1.split('.').length-1])
				if (!this.ok){
					uni.showModal({
						content: '1',
						showCancel: false
					});
				}else if (this.imgBase1 == '' || this.imgBase2 == '' || this.carmodel == '请选择'){
					uni.showModal({
						content: '请完善所有信息',
						showCancel: false
					});
				}else {
					
					let data = {
							pid: getApp().globalData.pid,
							car_model_name: t.carmodel,
							driver_licence: t.imgBase1,
							licence_suffix: t.imgPath1.split('.')[t.imgPath1.split('.').length-1],
							driver_license: t.imgBase2,
							license_suffix: t.imgPath2.split('.')[t.imgPath2.split('.').length-1],
						};
					uni.request({
						url: 'http://52.80.194.137:8000/user/user_mycars/',
						method: 'PUT',
						data: data,
						dataType: 'json',
						success: res => {
							console.log(res)
							if (res.data.data == '添加车辆成功'){
								uni.redirectTo({
									url:"/pages/user/my_carport"
								})
							}
						},
						fail: () => {},
						complete: () => {}
					});
				}
			}
		}
	}
</script>

<style>
	@import url("../../../static/css/add_car.css");
	.uni-picker-item {
		font-size: 30upx;
	}
	
	uni-picker .uni-picker-item {
		font-size: 30upx;
	}
</style>
