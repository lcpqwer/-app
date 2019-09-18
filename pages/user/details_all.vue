<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">编辑个人信息</view>
				</view>
			</view>
		</view>
		<view class="top">
			<image src="/static/image/userImg.jpg" style="width: 100%;position: absolute;top: 50%;transform: translateY(-50%);" mode="aspectFill"></image>
			<view class="mask">
				<view style="width: 100%;height: 100%;position: relative;">
					<!-- <image :src="imgPath" style="" mode=""></image> -->
					<avatar
					       selWidth="400upx" selHeight="400upx" @change="changBase" @upload="myUpload" :avatarSrc="imgPath"
					       avatarStyle="width: 150upx;height: 150upx;border-radius: 50%;position: absolute;bottom: 28%;left: 50%;transform: translateX(-50%);">
					   </avatar>
					<view class="click">点击更改头像</view>
				</view>
			</view>
		</view>
		<view class="info-item">
			<view class="i-title">昵称</view>
			<!-- <view class="i-info">Kitty 棠</view> -->
			<input type="text" @input="changeName" :value="name" class="i-info" />
			<image class="i-right" src="/static/image/more.png" mode=""></image>
		</view>
		<view class="info-item">
			<view class="i-title">性别</view>
			<picker mode="selector" :value="sexIndex" :range='sexArray' @change="sexChange">
				<view class="i-info">{{sexArray[sexIndex]}}</view>
			</picker>
			
			<image class="i-right" src="/static/image/more.png" mode=""></image>
		</view>
		<view class="info-item">
			<view class="i-title">生日</view>
			<picker mode="date" :value="data" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="i-info">{{data}}</view>
			</picker>
			<image class="i-right" src="/static/image/more.png" mode=""></image>
		</view>
		<view class="info-item">
			<view class="i-title">职业</view>
			<!-- <view class="i-info">美妆达人</view> -->
			<input type="text" @input="changeJob" :value="job" class="i-info"/>
			<image class="i-right" src="/static/image/more.png" mode=""></image>
		</view>
		<view class="info-item">
			<view class="i-title">地区</view>
			<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :range="allArray" @change="aeraChange">
				<view class="i-info">{{area}}</view>
			</picker>
			<image class="i-right" src="/static/image/more.png" mode=""></image>
		</view>
		<view class="info-item">
			<view class="i-title">喜好</view>
		</view>
		<view class="info-item" style="height: 80upx;">
			<view class="i-item">
				<view class="i-i-item">
					<view :class="like0 ? 'i-i-text2': 'i-i-text'" @tap="like(0)">互动聊天</view>
				</view>
				<view class="i-i-item">
					<view :class="like1 ? 'i-i-text2': 'i-i-text'" @tap="like(1)">美食咖啡</view>
				</view>
				<view class="i-i-item">
					<view :class="like2 ? 'i-i-text2': 'i-i-text'" @tap="like(2)">唱歌泡吧</view>
				</view>
			</view>
		</view>
		<view class="info-item" style="height: 80upx;">
			<view class="i-item">
				<view class="i-i-item">
					<view :class="like3 ? 'i-i-text2': 'i-i-text'" @tap="like(3)">运动户外</view>
				</view>
				<view class="i-i-item">
					<view :class="like4 ? 'i-i-text2': 'i-i-text'" @tap="like(4)">电影展览</view>
				</view>
			</view>
		</view>
		<button @click="upInfo" style="width: 60%;height: 70upx;line-height: 70upx;font-size: 30upx;margin-top: 30upx;margin-bottom: 30upx;" type="primary">提交</button>
	</view>
</template>

<script>
	import avatar from "@/components/yq-avatar/yq-avatar.vue";
	function getDate(type) {
		const date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
		return `${year}-${month}-${day}`;
	}
	
	export default {
		data() {
			return {
				modalName: null,
				data: getApp().globalData.userBorn,
				startDate:getDate('start'),
				endDate:getDate('end'),
				sexArray:['女','男'],
				sexIndex: getApp().globalData.userSexIndex,
				sex: '女',
				allArray: [
					["北京市","天津市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西自治区","海南省"," 重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","香港特别行政区","澳门特别行政区","台湾省"],
					[]
					],
				areaArray: [
					["北京","东城区","西城区","崇文区","宣武区","朝阳区","丰台区","石景山区"," 海淀区（中关村）","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云县","延庆县"," 其他"],
					["和平区","河东区","河西区","南开区","红桥区","塘沽区","汉沽区","大港区","西青区","津南区","武清区","蓟县","宁河县","静海县","其他"],
					["石家庄市","张家口市","承德市","秦皇岛市","唐山市","廊坊市","衡水市","沧州市","邢台市","邯郸市","保定市","其他"],
					["太原市","朔州市","大同市","长治市","晋城市","忻州市","晋中市","临汾市","吕梁市","运城市","其他"],
					["呼和浩特市","包头市","赤峰市","呼伦贝尔市","鄂尔多斯市","乌兰察布市","巴彦淖尔市","兴安盟","阿拉善盟","锡林郭勒盟","其他"],
					["沈阳市","朝阳市","阜新市","铁岭市","抚顺市","丹东市","本溪市","辽阳市","鞍山市","大连市","营口市","盘锦市","锦州市","葫芦岛市","其他"],
					["长春市","白城市","吉林市","四平市","辽源市","通化市","白山市","延边朝鲜族自治州","其他"],
					["哈尔滨市","七台河市","黑河市","大庆市","齐齐哈尔市","伊春市","佳木斯市","双鸭山市","鸡西市","大兴安岭地区(加格达奇)","牡丹江","鹤岗市","绥化市 ","其他"],
					["黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","南汇区","奉贤区","崇明县","其他"],
					["南京市","徐州市","连云港市","宿迁市","淮安市","盐城市","扬州市","泰州市","南通市","镇江市","常州市","无锡市","苏州市","其他"],
					["杭州市","湖州市","嘉兴市","舟山市","宁波市","绍兴市","衢州市","金华市","台州市","温州市","丽水市","其他"],
					["合肥市","宿州市","淮北市","亳州市","阜阳市","蚌埠市","淮南市","滁州市","马鞍山市","芜湖市","铜陵市","安庆市","黄山市","六安市","巢湖市","池州市","宣城市","其他"],
					["福州市","南平市","莆田市","三明市","泉州市","厦门市","漳州市","龙岩市","宁德市","其他"],
					["南昌市","九江市","景德镇市","鹰潭市","新余市","萍乡市","赣州市","上饶市","抚州市","宜春市","吉安市","其他"],
					["济南市","聊城市","德州市","东营市","淄博市","潍坊市","烟台市","威海市","青岛市","日照市","临沂市","枣庄市","济宁市","泰安市","莱芜市","滨州市","菏泽市","其他"],
					["郑州市","三门峡市","洛阳市","焦作市","新乡市","鹤壁市","安阳市","濮阳市","开封市","商丘市","许昌市","漯河市","平顶山市","南阳市","信阳市","周口市","驻马店市","其他"],
					["武汉市","十堰市","襄樊市","荆门市","孝感市","黄冈市","鄂州市","黄石市","咸宁市","荆州市","宜昌市","随州市","恩施土家族苗族自治州","仙桃市","天门市","潜江市","神农架林区","其他"],
					["长沙市","张家界市","常德市","益阳市","岳阳市","株洲市","湘潭市","衡阳市","郴州市","永州市","邵阳市","怀化市","娄底市","湘西土家族苗族自治州","其他"],
					["广州市","清远市市","韶关市","河源市","梅州市","潮州市","汕头市","揭阳市","汕尾市"," 惠州市","东莞市","深圳市","珠海市","中山市","江门市","佛山市","肇庆市","云浮市","阳江市","茂名市","湛江市"," 其他"],
					["南宁市","桂林市","柳州市","梧州市","贵港市","玉林市","钦州市","北海市","防城港市","崇左市","百色市","河池市","来宾市","贺州市","其他"],
					["海口市","三亚市","其他"],
					["渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","万盛区","双桥区","渝北区","巴南区","万州区","涪陵区","黔江区","长寿区","合川市","永川市","江津市","南川市","綦江县","潼南县","铜梁县","大足县","璧山县","垫江县","武隆县","丰都县","城口县","开县","巫溪县","巫山县","奉节县","云阳县","忠县","石柱土家族自治县","彭水苗族土家族自治县","酉阳土家族苗族自治县","秀山土家族苗族自治县","其他"],
					["成都市","广元市","绵阳市","德阳市","南充市","广安市","遂宁市","内江市","乐山市","自贡市","泸州市","宜宾市","攀枝花市","巴中市","资阳市","眉山市","雅安","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州县","其他"],
					["贵阳市","六盘水市","遵义市","安顺市","毕节地区","铜仁地区","黔东南苗族侗族自治州","黔南布依族苗族自治州","黔西南布依族苗族自治州","其他"],
					["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","宁德市","德宏傣族景颇族自治州","怒江僳僳族自治州","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","大理白族自治州","迪庆藏族自治州","西双版纳傣族自治州","其他"],
					["拉萨市","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区","其他"],
					["西安市","延安市","铜川市","渭南市","咸阳市","宝鸡市","汉中市","安康市","商洛市","其他"],
					["兰州市 ","嘉峪关市","金昌市","白银市","天水市","武威市","酒泉市","张掖市","庆阳市","平凉市","定西市","陇南市","临夏回族自治州","甘南藏族自治州","其他"],
					["西宁市","海东地区","海北藏族自治州","黄南藏族自治州","玉树藏族自治州","海南藏族自治州","果洛藏族自治州","海西蒙古族藏族自治州","其他"],
					["银川市","石嘴山市","吴忠市","固原市","中卫市","其他"],
					["乌鲁木齐市","克拉玛依市","喀什地区","阿克苏地区","和田地区","吐鲁番地区","哈密地区","塔城地区","阿勒泰地区","克孜勒苏柯尔克孜自治州","博尔塔拉蒙古自治州","昌吉回族自治州 伊犁哈萨克自治州","巴音郭楞蒙古自治州","河子市","阿拉尔市","五家渠市","图木舒克市","其他"],
					["香港","其他"],
					["澳门","其他"],
					["台湾","其他"]
				],
				areaIndex: [0,0],
				likeArray: getApp().globalData.userLike,
				like0: false,
				like1: false,
				like2: false,
				like3: false,
				like4: false,
				name: getApp().globalData.userName,
				job: getApp().globalData.userJob,
				imgPath: getApp().globalData.userHead,
				imgBase: '',
				allUrl: getApp().globalData.allUrl,
				area: getApp().globalData.userArea
			}
		},
		onLoad() {
			let that = this
			this.allArray[1] = this.areaArray[0]
			for (var i = 0; i < that.likeArray.length; i++) {
				this.defaultLike(that.likeArray[i]-1)
			}
			this.getBase64(this.imgPath)
		},
		components: {
			avatar
		},
		methods: {
			changBase(val){
				this.getBase64(val)
			},
			myUpload(rsp) {
			   this.url = rsp.path; //更新头像方式一
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			getBase64(path){
				let that = this
				plus.io.resolveLocalFileSystemURL(path, function(entry) { //获取文件对象
					entry.file(function(file) { //获取文件的数据  
						var fileReader = new plus.io.FileReader(); //创建读取文件对象    
						fileReader.readAsDataURL(file);
						fileReader.onload = function(e) { //读取成功并以Base64编码呈现  
							that.imgBase = e.target.result
							console.log(e.target.result)
						}
				
					})
					
				})
			},
			black(){
				uni.navigateBack({
					delta:1
				})
			},
			bindDateChange(e){
				this.data = e.target.value
			},
			sexChange(e){
				this.sexIndex = e.detail.value
				this.sex = this.sexArray[this.sexIndex]
			},
			bindMultiPickerColumnChange(e){
				if (e.detail.column == 0){
					this.allArray = [this.allArray[0],this.areaArray[e.detail.value]]
				}
			},
			aeraChange(e){
				this.areaIndex = e.detail.value
				if (!this.areaIndex[1]){
					this.areaIndex[1] = 0
				}
				this.area = this.allArray[0][this.areaIndex[0]]+'-'+this.allArray[1][this.areaIndex[1]]
			},
			defaultLike(n){
				switch (n){
					case 0:
						this.like0 = !this.like0
						break;
					case 1:
						this.like1 = !this.like1
						break;
					case 2:
						this.like2 = !this.like2
						break;
					case 3:
						this.like3 = !this.like3
						break;
					case 4:
						this.like4 = !this.like4
						break;
					default:
						break;
				}
			},
			like(n){
				let flag;
				switch (n){
					case 0:
						this.like0 = !this.like0
						flag = this.like0
						break;
					case 1:
						this.like1 = !this.like1
						flag = this.like1
						break;
					case 2:
						this.like2 = !this.like2
						flag = this.like2
						break;
					case 3:
						this.like3 = !this.like3
						flag = this.like3
						break;
					case 4:
						this.like4 = !this.like4
						flag = this.like4
						break;
					default:
						break;
				}
				if (flag){
					this.likeArray.push(n+1)
				}else {
					this.likeArray = this.likeArray.filter(function(item) {
						return item != n+1
					});
				}
			},
			changeName(e){
				this.name = e.detail.value
			},
			changeJob(e){
				this.job = e.detail.value
			},
			getUserInfo(pid){
				let that = this
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_geteditinfo/',
					method: 'POST',
					data: {
						pid: pid
					},
					success: res => {
						if (res.data.status == 1){
							let data = res.data.data
							getApp().globalData.userSexIndex = data.user_sex
							if (data.user_job != '')getApp().globalData.userJob = data.user_job
							getApp().globalData.userName = data.user_nike
							if (data.img_head_url != '')getApp().globalData.userHead = data.img_head_url
							if (data.user_area != '')getApp().globalData.userArea = data.user_area
							if (data.user_born != '')getApp().globalData.userBorn = data.user_born
							getApp().globalData.userLike = data.user_fan
						};
						uni.request({
							url: 'http://52.80.194.137:8000/user/user_personalpage/',
							method: 'POST',
							data: {
								pid: pid 
							},
							success: res => {
								let data = res.data.data
								getApp().globalData.userSex = data.sex
								if (data.sign != '')getApp().globalData.userSign = data.sign
								getApp().globalData.userCoin = data.coin
								uni.navigateBack({
									delta: 1
								});
							},
							fail: () => {},
							complete: () => {}
						});
					},
					fail: () => {
						uni.showModal({
							content: '网络出错',
							showCancel: false
						});
					},
					complete: () => {}
				});
				
			},
			upInfo(){
				let that = this
				let info={
					"pid": getApp().globalData.pid, 
					"nike": this.name,
					"sex": this.sexIndex,
					"birthday": this.data + ' 00:00:00',
					"job": this.job,
					"area": this.allArray[0][this.areaIndex[0]]+'-'+this.allArray[1][this.areaIndex[1]],
					"like": this.likeArray,
					"headimg": {
						"base64": this.imgBase,
						"type": 'png'
					}
				}
				uni.request({
					url: 'http://52.80.194.137:8000/user/user_editinfo/',
					method: 'POST',
					data: info,
					dataType: 'json',
					success: res => {
						that.getUserInfo(getApp().globalData.pid)
					},
					fail: () => {
						uni.showModal({
							content: '网络出错',
							showCancel: false
						});
					},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.top {
		width: 100%;height: 450upx;position: relative;overflow: hidden;
	}
	
	.mask {
		width: 100%;height: 100%;position: absolute;top: 0;background-color: rgba(0,0,0,.5);
	}
	
	.click {
		font-size: 25upx;color: #C0C0C0;letter-spacing: 4upx;position: absolute;left: 50%;transform: translateX(-50%);bottom: 10%;width: 200upx;text-align: center;
	}
	
	.info-item {
		width: 100%;height: 120upx;position: relative;
	}
	.i-title,.i-info,.i-right {
		font-size: 30upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.i-right {
		width: 15upx;height: 30upx;right: 7%;
	}
	.i-title {
		left: 7%;
	}
	.i-info {
		right: 14%;color: #C0C0C0;text-align: right;min-width: 100upx;
	}
	.i-item {
		width: 86%;height: 100%;margin-left: 7%;
	}
	.i-i-item {
		width: 30%;
		height: 100%;position: relative;display: inline-block;
	}
	.i-i-text {
		width: 80%;height: 60upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 10upx;line-height: 60upx;text-align: center;font-size: 25upx;border: 1upx solid #C0C0C0;
	}
	.i-i-text2 {
		width: 80%;height: 60upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 10upx;line-height: 60upx;text-align: center;font-size: 25upx;border: 1upx solid #166BF5;color: #166BF5;
	}
</style>
