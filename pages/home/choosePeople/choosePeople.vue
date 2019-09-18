<template>
	<view style="width: 100%;height: 100%;">
		<view class="bgc nav-main">
			<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
				<view @tap="black" class="black-warpper"></view>
				<image @tap="black" class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
				<view class="main-title">选择参与人群</view>
			</view>
		</view>
		<view style="width: 90%;margin-left: 5%;padding-top: 60px;">
			<view class="p-sex">
				<view class="p-title">性别</view>
				<view @tap="changeSex(2)" class="picker-item">
					<view class="wh">
						<image style="height: 40upx;width: 40upx;" v-if="sex == 2" class="pi-img" src="/static/all.png" mode=""></image>
						<image style="height: 40upx;width: 40upx;" v-else class="pi-img" src="/static/d_all.png" mode=""></image>
						<view>不限</view>
					</view>
				</view>
				<view @tap="changeSex(1)" class="picker-item" style="right: 150upx;">
					<view class="wh">
						<image v-if="sex == 1" class="pi-img" src="/static/image/man.png" mode=""></image>
						<image v-else class="pi-img" src="/static/login/d_man.png" mode=""></image>
						<view>男生</view>
					</view>
				</view>
				<view @tap="changeSex(0)" class="picker-item" style="right: 300upx;">
					<view class="wh">
						<image v-if="sex == 0" class="pi-img" src="/static/woman.png" mode=""></image>
						<image v-else class="pi-img" src="/static/login/d_woman.png" mode=""></image>
						<view>女生</view>
					</view>
				</view>
			</view>
			<picker style="color: #000" @change="carNumChange" :value="carIndex" :range="array" range-key="name">
				<view class="o-item">
					<view class="c-num">{{array[carIndex].name}}</view>
					<view class="p-title">参与人数</view>
					<view class="c-desc">多人活动至少三人</view>
					<image src="/static/image/more.png" class="c-img" mode=""></image>
				</view>
			</picker>
			<picker style="color: #fff" @change="peopleNumChange" :value="peopleIndex" :range="pArray" range-key="name">
				<view class="o-item">
					<view class="c-num">{{pArray[peopleIndex].name}}</view>
					<view class="p-title">携带人数</view>
					<image src="/static/image/more.png" class="c-img" mode=""></image>
				</view>
			</picker>
			<view class="o-item">
				<view class="p-title">参与点数</view>
				<!-- <picker style="color: #000" @change="mNumChange" :value="mIndex" :range="mArray" range-key="name"> -->
				<view class="c-num">{{money}}</view>
				<!-- </picker> -->
				<!-- <image src="/static/image/more.png" class="c-img" mode=""></image> -->
			</view>
			<button class="p-sub" @tap="upInfo" type="primary">提交</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex: 2,
				carIndex: 0,
				array: [{
					name: 3
				}, {
					name: 4
				}, {
					name: 5
				}, {
					name: 6
				}, {
					name: 7
				}, {
					name: 8
				}, {
					name: 9
				}, {
					name: 10
				}],
				peopleIndex: 0,
				pArray: [{
					name: 1
				}, {
					name: 2
				}, {
					name: 3
				}, {
					name: 4
				}],
				mIndex: 0,
				mArray: [{
					name: 50
				}, {
					name: 100
				}, {
					name: 150
				}, {
					name: 200
				}],
				money: getApp().globalData.money
			}
		},
		methods: {
			changeSex(sex) {
				this.sex = sex
			},
			carNumChange(e) {
				this.carIndex = e.target.value
			},
			peopleNumChange(e) {
				this.peopleIndex = e.target.value
			},
			mNumChange(e) {
				this.mIndex = e.target.value
			},
			black() {
				uni.navigateBack({
					delta: 1
				});
			},
			upInfo(){
				getApp().globalData.peopleBool = true
				getApp().globalData.sex = this.sex
				getApp().globalData.pNum = this.array[this.carIndex].name
				getApp().globalData.carry = this.pArray[this.peopleIndex].name
				this.black()
			}
		}
	}
</script>

<style>
	@import url("../../../static/css/upload-active.css");

	picker view {
		color: #FFFFFF;
	}
</style>
