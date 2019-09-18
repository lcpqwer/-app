<template>
	<view class="warpper">
		<pop ref="popup" type="bottom" @change="change">
			<view class="pop-warpper">
				<view class="p-top">
					活动发布
				</view>
				<view class="p-num">
					-50
				</view>
				<view class="p-me">
					<image class="me-img" src="/static/small.png" mode=""></image>
					<view class="me-text">我的点数：</view>
					<view class="me-num">{{myCoin}}</view>
				</view>
				<button class="p-sub" @tap="upActive" type="primary">确认发布</button>
			</view>
		</pop>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">活动发布</view>
				</view>
			</view>
		</view>
		<view class="active-content" :style="allHeight">
			<view>
				<view v-if="inputType == '1'" class="ac-top">
					<image class="ac-img" src="/static/image/moveInput1.png" style="top: 50%;transform: translateY(-53%);" mode=""></image>
					<input @input="inputTitle" :value="title" class="title-input pstyle" type="text" style="background-color: #2a94db;"
					 placeholder="#添加话题" placeholder-class="pstyle">
				</view>
				<view v-if="inputType == '2'" class="ac-top">
					<image class="ac-img" src="/static/image/moveInput2.png" style="top: 50%;transform: translateY(-53%);" mode=""></image>
					<input @input="inputTitle" :value="title" class="title-input pstyle" type="text" style="background-color: #f7803c;"
					 placeholder="#添加话题" placeholder-class="pstyle">
				</view>
				<view v-if="inputType == '3'" class="ac-top">
					<image class="ac-img" src="/static/image/moveInput3.png" style="bottom: 0;right: 0;height: 220upx;" mode=""></image>
					<input @input="inputTitle" :value="title" class="title-input pstyle" type="text" style="background-color: #8753dc;"
					 placeholder="#添加话题" placeholder-class="pstyle">
				</view>
				<view v-if="inputType == '4'" class="ac-top">
					<image class="ac-img" src="/static/image/moveInput4.png" style="height: 100upx;right: 0;top: 60%;transform: translateY(-100%);"
					 mode=""></image>
					<input @input="inputTitle" :value="title" class="title-input pstyle" type="text" style="background-color: #edc108;"
					 placeholder="#添加话题" placeholder-class="pstyle">
				</view>
				<view v-if="inputType == '5'" class="ac-top">
					<image class="ac-img" src="/static/image/moveInput5.png" style="bottom: 0;right: 0;height: 206upx;" mode=""></image>
					<input @input="inputTitle" :value="title" class="title-input pstyle" type="text" style="background-color: #1ca078;"
					 placeholder="#添加话题" placeholder-class="pstyle">
				</view>

				<view class="default-title" style="margin-top: 3%;">
					<view class="default1" @tap="titleInput(t1)" :style="color">{{t1}}</view>
					<view class="default2" @tap="titleInput(t2)" :style="color">{{t2}}</view>
				</view>
				<view class="default-title">
					<view class="default1" @tap="titleInput(t1)" :style="color">{{t1}}</view>
					<view class="default2" @tap="titleInput(t2)" :style="color">{{t2}}</view>
				</view>
				<view class="active-data">
					<view class="data-item">
						<image class="item-img img-before" src="/static/image/time.png" mode=""></image>
						<view class="item-title">活动时间</view>
						<picker mode="multiSelector" @change="chooseTime" @columnchange="bindMultiPickerColumnChange" :value="multiIndex"
						 :range="multiArray">
							<!-- <view class="uni-input">{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}</view> -->
							<view class="data-res" style="color: #FFFFFF;">{{dataTime}}</view>
						</picker>
						<image class="item-img img-after" src="/static/image/more.png" mode=""></image>
					</view>
					<view class="data-item" @tap="choose(1)">
						<image class="item-img img-before" src="/static/image/address1.png" mode=""></image>
						<view class="item-title">始发地</view>
						<view class="data-res">{{address1}}</view>
						<image class="item-img img-after" src="/static/image/more.png" mode=""></image>
					</view>
					<view class="data-item" @tap="choose(2)">
						<image class="item-img img-before" src="/static/image/address1.png" mode=""></image>
						<view class="item-title">目的地</view>
						<view class="data-res">{{address2}}</view>
						<image class="item-img img-after" src="/static/image/more.png" mode=""></image>
					</view>
					<view class="data-item" @tap="choose(3)">
						<image class="item-img img-before" src="/static/image/people.png" mode=""></image>
						<view class="item-title">参与人群</view>
						<view class="data-res">{{people}}</view>
						<image class="item-img img-after" src="/static/image/more.png" mode=""></image>
					</view>
					<view class="data-item">
						<picker class="picker" :range="carArray" range-key="car_model_name" @change="carName">
							<view class="data-res" style="color: #FFFFFF;">{{car}}</view>
						</picker>
						<image class="item-img img-before" src="/static/image/car.png" mode=""></image>
						<view class="item-title">出行方式</view>

						<image class="item-img img-after" src="/static/image/more.png" mode=""></image>
					</view>
				</view>
				<view class="active-data active-data2">
					<view class="active-desc">
						<textarea @input="inputText" class="desc-input" :value="text" placeholder="说说你的想法" placeholder-class="text" />
					</view>
					<view class="active-img" style="height: 60%;width: 100%;overflow-x: auto;overflow-y: hidden;">
						<view class="abc" style="height: 100%;width: 800upx;">
							<view v-for="(item,index) in imgPathList" :key="index" style="height: 80%;width: 200upx;padding: 3%;display: inline-block;">
								<image style="width: 100%;height: 100%;" :src="item" mode="aspectFit"></image>
							</view>
							<view style="height: 80%;width: 200upx;padding: 3%;display: inline-block;">
								<image @tap="chooseImg" style="width: 100%;height: 100%;" src="/static/image/add_png.png" mode="aspectFit"></image>
							</view>
						</view>
						
					</view>
				</view>
				<view class="active-sub">
					<view style="width: 100%;">
						<button @tap="uppop" style="width: 50%;border-radius: 20upx;height: 70upx;line-height: 70upx;background-color: #1658C4;color: #FFFFFF;font-size: 30upx;" type="">确认发布</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>	
	// import wPicker from '@/components/w-picker/w-picker.vue'
	import pop from '@/components/uni-popup/uni-popup.vue'
	var allHeight;
	uni.getSystemInfo({
	    success(res) {
			allHeight = 'height: '+(res.screenHeight-60)+'px'
	    }
	})
	import activeData from '@/components/active-data-item.vue'
	var change1 = data => {
		console.log(data)
		this.$options.methods.changeAddress(data)
	}
	export default {
		data() {
			return {
				t1: '有人陪我看电影吗',
				t2: 'CHANEL美妆展',
				multiArray: [
					
				],
				multiIndex: [0, 1, 0],
				allHeight: allHeight,
				list: [
					{title: '活动时间', img: '/static/image/time.png', model: 'dataTime'},
					{title: '始发地', img: '/static/image/address1.png', model: 'address1'},
					{title: '目的地', img: '/static/image/address1.png', model: 'address2'},
					{title: '参与人群', img: '/static/image/people.png', model:'people'},
					{title: '出行方式', img: '/static/image/car.png', model: 'car'}
				],
				dataTime: '请选择',
				address1: '请选择',
				address2: '请选择',
				people: '请选择',
				car: '请选择',
				inputType: '5',
				num: '',
				color: '',
				state: true,
				sex: 2,
				carIndex: 0,
				array: [{name:3},{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name: 10}],
				peopleIndex: 0,
				pArray: [{name: 1},{name: 2},{name: 3},{name: 4}],
				mIndex: 0,
				mArray: [{name: 50},{name: 100},{name: 150},{name: 200}],
				day: null,
				hour: null,
				minute: null,
				carArray: [],
				chooseCar: 0,
				title: '',
				aType: '',
				dateList: [],
				numType: '单人',
				pNum: 0,
				text: '',
				imgPathList: [],
				imgBase: [],
				url: '',
				timeChoose: false,
				sexText: '',
				la1: '',
				lo1: '',
				la2: '',
				lo2: '',
				myCoin: getApp().globalData.userCoin,
				lastData: ''
			}
		},
		onShow() {
			if (getApp().globalData.peopleBool){
				console.log('已选择')
				let sex = getApp().globalData.sex
				switch (sex){
					case 0:
						this.sexText = '女'
						break;
					case 1:
						this.sexText = '男'
						break
					default:
						this.sexText = '不限'
						break;
				}
				this.people = this.sexText+' '+getApp().globalData.pNum+'人 '+'携带'+getApp().globalData.carry+'人'
				getApp().globalData.peopleBool = false
			}else {}
			return true
		},
		onLoad(data) {
			console.log(data)
			this.inputType = data.id
			this.num = data.num
			if (data.num == '2'){
				this.numType = '多人'
			}
			this.aType = getApp().globalData.typeData[data.id]
			this.url = getApp().globalData.urlList[data.id]
			if (data.id == '1'){
				this.color = 'color: rgb(42, 148, 219);'
			}else if (data.id == '2'){
				this.color = 'color: rgb(247, 128, 60);'
			}else if (data.id == '3'){
				this.color = 'color: rgb(135, 83, 220);'
			}else if (data.id == '4'){
				this.color = 'color: rgb(237, 193, 8);'
			}else {
				this.color = 'color: rgb(28, 160, 120);'
			}
			
			for (let i = 0; i < 7; i++) {
				this.dateList.push(this.getData(i))
			}
			console.log(this.dateList)
			var l1=[],l2=[];
			for (let i=0; i<24; i++){
				if (i<10) {
					i = '0' + i
				}
				l1.push(i)
			}
			this.multiArray[1] = l1
			for (let i=0; i<60; i++){
				if (i<10) {
					i = '0'+i
				}
				l2.push(i)
			}
			this.multiArray[2] = l2
			var l3 = ['今天','明天']
			for (let i = 2; i < 7; i++){
				l3.push(this.countDate(i))
			}
			this.multiArray[0] = l3
			this.getCar()
		},
		components: {
			activeData,
			// wPicker,
			pop
		},
		methods: {
			change(e){
				console.log(e)
			},
			uppop(){
				if (this.address1 == '请选择' || this.address2 == '请选择' || this.car == '请选择' || this.people == '请选择' || this.dataTime == '请选择' || this.text == ''|| this.imgPathList.length == 0 || this.title == ''){
					uni.showModal({
						content: '请完善信息',
						showCancel: false
					});
				}else {
					this.$refs['popup'].open()
				}
			},
			chooseImg(){
				let that = this
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that.imgPathList = that.imgPathList.concat(res.tempFilePaths)
						that.getBase64(res.tempFilePaths)
				    }
				});
			},
			getBase64(paths){
				let that = this
				for (var i = 0; i < paths.length; i++) {
					// console.log(path)
					let path = paths[i]
					plus.io.resolveLocalFileSystemURL(path, function(entry) { //获取文件对象
						entry.file(function(file) { //获取文件的数据  
							var fileReader = new plus.io.FileReader(); //创建读取文件对象    
							fileReader.readAsDataURL(file);
							// console.log(JSON.stringify(fileReader))
							fileReader.onload = function(e) { //读取成功并以Base64编码呈现  
								// console.log(e.target.result)
								let dic = {
									"base64": e.target.result,
									"type": path.split('.')[path.split('.').length-1]
								}
								that.imgBase.push(dic)
								console.log('ok')
							}
					
						})
						
					})
				}
				
			},
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			inputText(e){
				this.text = e.detail.value
			},
			inputTitle(e){
				this.title = e.detail.value
			},
			choose(index){
				if (index == 1){
					let that = this
					uni.chooseLocation({
						success(res) {
							console.log('address1', res)
							that.la1 = '' + res.latitude
							that.lo1 = '' + res.longitude
							that.address1 = res.name
						}
					})
				}else if (index == 2){
					let that = this
					uni.chooseLocation({
						success(res) {
							console.log(res)
							that.address2 = res.name
							that.la2 = '' + res.latitude
							that.lo2 = '' + res.longitude
						}
					})
				}else if (index == 3){
					// this.state = false
					uni.navigateTo({
						url: '/pages/home/choosePeople/choosePeople',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}else {
					this.chooseCar = 1
				}
				
			},
			onConfirm(val){
				console.log(val)
				this.dataTime= val.result
			},
			changeSex(sex){
				this.sex = sex
			},
			carNumChange(e){
				this.carIndex = e.target.value
			},
			peopleNumChange(e){
				this.peopleIndex = e.target.value
			},
			mNumChange(e){
				this.mIndex = e.target.value
			},
			blackCar(){
				this.chooseCar = 0
			},
			pBlack(){
				this.state = true
			},
			bindMultiPickerColumnChange(e) {
				// console.log(e)
				// console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.multiIndex[e.detail.column] = e.detail.value
				this.$forceUpdate()
			},
			carName(e){
				console.log(e)
				this.car = this.carArray[e.detail.value].car_model_name
			},
			countDate(AddDayCount) {
				let dd = new Date()
				//获取AddDayCount天后的日期
				dd.setDate(dd.getDate() + AddDayCount);
				let y = dd.getFullYear();
				//获取当前月份的日期，不足10补0
				let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1)
				//获取当前几号，不足10补0
				let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate()
				let firstDistribution = y + "-" + m + "-" + d
				console.log('最终日期', firstDistribution)
				let reserveTimeWeek = new Date(firstDistribution).getDay()
				// console.log(reserveTimeWeek)
				switch (reserveTimeWeek){
					case 1:
						return '星期一'
						break;
					case 2:
						return '星期二'
						break;
					case 3:
						return '星期三'
						break;
					case 4:
						return '星期四'
						break;
					case 5:
						return '星期五'
						break;
					case 6:
						return '星期六'
						break;
					case 0:
						return '星期日'
						break;
				}
			},
			chooseTime(){
				this.dataTime = this.multiArray[0][this.multiIndex[0]] + '        ' + this.multiArray[1][this.multiIndex[1]] + '：' + this.multiArray[2][this.multiIndex[2]]
				this.timeChoose = true
				this.lastData = this.dateList[this.multiIndex[0]]
				console.log(this.multiIndex)
				console.log()
			},
			titleInput(val){
				console.log(val)
				this.title = val
			},
			getData(n){
				let dd = new Date()
				//获取AddDayCount天后的日期
				dd.setDate(dd.getDate() + n);
				let y = dd.getFullYear();
				//获取当前月份的日期，不足10补0
				let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1)
				//获取当前几号，不足10补0
				let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate()
				let firstDistribution = y + "-" + m + "-" + d
				return firstDistribution
			},
			getCar(){
				let that = this
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_mycars/',
					method: 'GET',
					data: {
						pid: getApp().globalData.pid
					},
					success: res => {
						console.log(res)
						that.carArray = res.data.data
					},
					fail: () => {},
					complete: () => {}
				});
			},
			upActive(){
				let date = this.dateList[this.multiIndex[0]]
				let time = this.lastData+' '+ this.multiArray[1][this.multiIndex[1]]+':'+this.multiArray[2][this.multiIndex[2]]+':00'
				console.log(time)
				let aData = {
					"pid": getApp().globalData.pid,
					"activity_type": this.aType,
					"activity_kind": this.numType,
					"activity_topic": this.title,
					"activity_time": time,
					"activity_area_start": this.address1,
					"activity_area_end": this.address2,
					"activity_person_sex": this.sexText,
					"activity_person_num": getApp().globalData.pNum,
					"activity_car": this.car,
					"activity_content": this.text,
					"activity_img":this.imgBase,
					'activity_person_take': getApp().globalData.carry,
					'longitude_start': this.lo1,
					'latitude_start': this.la1,
					'longitude_end': this.lo1,
					'latitude_end': this.la2,
					'activity_coin_take': 50,
					'issue_coin': 50,
				}
				let that = this
				uni.request({
					url: that.url,
					method: 'POST',
					data: aData,
					dataType:'json',
					success: res => {
						console.log(res.data)
						if (res.data.status == 1 && res.data.msg == '请求成功'){
							getApp().globalData.userCoin -= 50
							uni.navigateBack({
								delta: 3
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
				
				
			}
		}
	}
</script>

<style>
@import url("../../static/css/upload-active.css");
@import url("../../static/css/active-data-item.css");
.data-res {
	position: absolute;top: 50%;right: 65upx;transform: translateY(-50%);font-size: 20upx;color: #ffffff8f;
}
.text {
	color: #ffffff8f;font-size: 25upx
}
.abc {
	height: 100%;
}

</style>
