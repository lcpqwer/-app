<template>
	<view class="s-warpper">
		<view class="s-top">
			<!-- <view class="t-to" @tap="jTo">跳过</view> -->
		</view>
		<view class="s-img">
			<view class="i-img">
				<view class="i-warpper" style="">
					<image class="img" :src="imgPath" mode=""></image>
				</view>
				<view @tap="changeImg" class="changeImg">
					点击更换头像
				</view>
			</view>
			<view class="i-name">
				<view class="n-warpper">
					<input class="n-input" @input="inpuName" type="text" :value="name" placeholder="请输入用户名" />
					<view class="i-del" @tap="delInput">
						<view>
							<image class="d-img" src="/static/login/del.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="s-sex">
			<view>
				<view class="l-item" @tap="changeSex(1)">
					<image v-if="sex == '1'" src="/static/login/d_woman.png" mode=""></image>
					<image v-else src="/static/login/woman.png" mode=""></image>
					<view :class="[sex == '0'? 'black': 'c0']">女</view>
				</view>
			</view>
			<view>
				<view class="r-item" @tap="changeSex(0)">
					<image v-if="sex == '1'" src="/static/login/man.png" mode=""></image>
					<image v-else src="/static/login/man_unselected.png" mode=""></image>
					<view :class="[sex == '1'? 'black': 'c0']">男</view>
				</view>
			</view>
		</view>
		<button @tap="jTo" :class="[sub? '':'sub1']" type="primary">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				sex: 1,
				sub: true,
				phone: '',
				imgPath: '/static/login/system-head.png',
				imgBase64: ''
			}
		},
		onLoad() {
			let that = this
			var timestamp = new Date().getTime();
			this.name = 'dxgm_' + timestamp
			plus.io.resolveLocalFileSystemURL(this.imgPath, function(entry) { //获取文件对象
				entry.file(function(file) { //获取文件的数据  
					var fileReader = new plus.io.FileReader(); //创建读取文件对象    
					fileReader.readAsDataURL(file);
					console.log(JSON.stringify(fileReader))
					fileReader.onload = function(e) { //读取成功并以Base64编码呈现  
						console.log(e.target.result)
						that.imgBase64 = e.target.result
					}

				})
			})
		},
		methods: {
			inpuName(e) {
				this.name = e.target.value
				if (this.name == '') {
					this.sub = false
				} else {
					this.sub = true
				}
			},
			delInput() {
				this.name = ''
				this.sub = false
			},
			changeSex(sex) {
				this.sex = sex
			},
			jTo() {
				let suff = this.imgPath.split('.')[this.imgPath.split('.').length-1]
				console.log(suff)
				let data = {
					pid: getApp().globalData.pid,
					img_head: this.imgBase64,
					suffix: suff,
					nike: this.name,
					sex: ''+this.sex
				}
				if (this.sub) {
					console.log(data)
					uni.request({
						url: 'http://52.80.194.137:8000/user/user_editinfofirst/',
						method: 'POST',
						data: data,
						dataType:'json',
						success: res => {
							console.log(res)
							if (res.data.data == '保存成功'){
							}
						},
						fail: () => {},
						complete: () => {}
					});
					// uni.navigateTo({
					// 	url: "/pages/index/index?id=1"
					// })
				}

			},
			perfectInfo() {
				if (this.name != '') {
					uni.request({
						url: '',
						method: 'POST',
						data: {

						},
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else {

				}
			},
			changeImg() {
				let that = this
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					count: 1,
					success: function(res) {
						console.log(res)
						plus.io.resolveLocalFileSystemURL(res.tempFilePaths[0], function(entry) { //获取文件对象  
							entry.file(function(file) { //获取文件的数据  
								var fileReader = new plus.io.FileReader(); //创建读取文件对象    
								fileReader.readAsDataURL(file);
								console.log(JSON.stringify(fileReader))
								fileReader.onload = function(e) { //读取成功并以Base64编码呈现  
									console.log(e.target.result)	
									that.imgBase64 = e.target.result
								}

							})
						})
						// this.imgPath = []
						// this.imageList.concat(res.tempFilePaths)
						that.imgPath = res.tempFilePaths[0]
						// console.log(JSON.stringify(res.tempFilePaths));
						// this.imgPath = JSON.stringify(res.tempFilePaths)
					}
				});
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}

	.s-warpper {
		width: 100%;
		height: 100%;
		background-color: #fff;
	}

	.s-top {
		width: 100%;
		height: 5%;
		padding-top: 5%;
		position: relative;
	}

	.t-to {
		width: 100upx;
		height: 50upx;
		font-size: 20upx;
		color: #000000;
		text-align: center;
		line-height: 50upx;
		position: absolute;
		right: 50upx;
	}

	.s-img {
		width: 100%;
		height: 30%;
	}

	.i-img {
		width: 100%;
		height: 80%;
		position: relative;
	}

	.i-name {
		height: 20%;
		padding: 0 50upx;
	}

	.n-warpper {
		width: 100%;
		height: 100%;
		border-bottom: 1upx solid #c0c0c0;
		position: relative;
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.i-warpper {
		width: 200upx;
		height: 200upx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.n-input {
		margin-left: 10%;
		height: 80upx;
		width: 80%;
		color: #000;
		font-size: 30upx;
		position: absolute;
		bottom: 0;
		text-align: center;
	}

	.i-del {
		width: 10%;
		height: 80upx;
		position: absolute;
		right: 0;
		bottom: 0;
		text-align: center;
		line-break: 80upx;
	}

	.i-del>view {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.d-img {
		width: 30upx;
		height: 30upx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.s-sex {
		width: 100%;
		height: 10%;
		margin-top: 10%;
	}

	.s-sex>view {
		width: 50%;
		height: 100%;
		display: inline-block;
		position: relative;
	}

	.l-item {
		width: 90upx;
		height: 50upx;
		position: absolute;
		right: 40upx;
		top: 50%;
		transform: translateY(-50%);
	}

	.l-item>view {
		font-size: 30upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 0;
	}

	.l-item image {
		width: 40upx;
		height: 40upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
	}

	.r-item {
		width: 90upx;
		height: 50upx;
		position: absolute;
		left: 40upx;
		top: 50%;
		transform: translateY(-50%);
	}

	.r-item>view {
		font-size: 30upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 0;
	}

	.r-item image {
		width: 40upx;
		height: 40upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
	}

	button {
		width: 70%;
		height: 80upx;
		border-radius: 20upx;
		line-height: 80upx;
		font-size: 30upx;
		margin-top: 10%;
	}

	.black {
		color: #000;
	}

	.c0 {
		color: #c0c0c0;
	}

	.sub1 {
		background-color: #C0C0C0;
	}

	.changeImg {
		position: absolute;
		bottom: 30upx;
		left: 50%;
		transform: translateX(-50%);
		font-size: 30upx;
		color: #C0C0C0;
	}
</style>
