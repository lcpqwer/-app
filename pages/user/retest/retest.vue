<template>
	<view>
		<view class="bgc nav-main">
			<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
				<view @tap="black" class="black-warpper"></view>
				<image @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
				<view class="main-title">我的颜值</view>
			</view>
		</view>
		<view style="width: 100%;height: 60px;"></view>
		<view class="re-num">
			80
		</view>
		<button @tap="retest" class="re-sub" type="primary">重新测试</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			black(){
				uni.navigateBack({
					delta: 1
				});
			},
			retest(){
				let that = this
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that.getBase64(res.tempFilePaths[0])
				    }
				});
			},
			getBase64(path){
				let that = this
				plus.io.resolveLocalFileSystemURL(path, function(entry) { //获取文件对象
					entry.file(function(file) { //获取文件的数据  
						var fileReader = new plus.io.FileReader(); //创建读取文件对象    
						fileReader.readAsDataURL(file);
						fileReader.onload = function(e) { //读取成功并以Base64编码呈现
							// console.log(e.target.result)
							uni.request({
								url: 'http://52.80.194.137:8000/user/user_acc/',
								method: 'POST',
								data: {
									base64: e.target.result,
									type: path.split('.')[path.split('.').length-1]
								},
								success: res => {
									console.log(res)
									that.black()
								},
								fail: () => {},
								complete: () => {}
							});
						}
				
					})
					
				})
			},
		}
	}
</script>

<style>
	.re-num {
		width: 100%;height: 300upx;font-size: 80upx;text-align: center;line-height: 300upx;color: #165BCB;
	}
	.re-sub {
		width: 80%;height: 80upx;line-height: 80upx;font-size: 30upx;border-radius: 15upx;
	}
</style>
