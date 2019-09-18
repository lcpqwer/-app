<template>
	<view>
		<view class="nav-wrapper">
			<view class="bgc nav-main">
				<view style="width: 100%;height: 44px;position: relative;margin-top: 15px;">
					<view @tap="black" class="black-warpper"></view>
					<image @tap="black"  class="main-left" style="width: 15px;" src="/static/image/back.png" mode=""></image>
					<view class="main-title">密码修改</view>
				</view>
			</view>
		</view>
		<view class="logo">
			<image src="/static/login/head.png" class="l-img" mode="aspectFit"></image>
		</view>
		<view class="c-item">
			<view>
				<view class="ci-title">手 机 号</view>
				<input type="number" class="ci-input" value="18538218697" disabled="true"/>
			</view>
		</view>
		<view class="c-item">
			<view>
				<view class="ci-title">新 密 码</view>
				<input class="ci-input" @input="changeNP" placeholder="请输入新密码" :password="newPwd"/>
			</view>
		</view>
		<view class="c-item">
			<view>
				<view class="ci-title">确认密码</view>
				<input class="ci-input" @input="changeCP" placeholder="请确认新密码" :password="conPwd"/>
			</view>
		</view>
		<view class="c-item">
			<view>
				<view class="ci-title">验 证 码</view>
				<input type="number" @input="changeSC" class="ci-input" placeholder="请输入验证码" :value="smsCode"/>
				<view class="ci-right">获取验证码</view>
			</view>
		</view>
		<view class="c-item" style="margin-top: 30upx;">
			<button @tap="upPwd" class="sub" type="primary">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newPwd: '',
				conPwd: '',
				smsCode: ''
			}
		},
		methods: {
			black(){
				uni.navigateBack({
					delta: 1
				});
			},
			upPwd(){
				console.log(this.newPwd)
			},
			changeNP(e){
				this.newPwd = e.detail.value
			},
			changeCP(e){
				this.conPwd = e.detail.value
			},
			changeSC(e){
				this.smsCode = e.detail.value
			}
		}
	}
</script>

<style>
	.c-item {
		height: 100upx;padding: 20upx 50upx;
	}
	.c-item>view {
		position: relative;border-bottom: #C8C7CC solid 2upx;width: 100%;height: 100%;
	}
	.ci-title {
		font-size: 30upx;position: absolute;top: 50%;transform: translateY(-50%);width: 150upx;text-align: center;
	}
	.ci-input {
		position: absolute;top: 50%;transform: translateY(-50%);left: 200upx;
	}
	.ci-right {
		width: 150upx;height: 100%;position: absolute;right: 0;line-height: 100upx;font-size: 30upx
	}
	.logo {
		width: 100%;height: 300upx;position: relative;
	}
	.l-img {
		height: 40%;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);
	}
	.sub {
		height: 70upx;line-height: 70upx;font-size: 30upx;
	}
</style>
