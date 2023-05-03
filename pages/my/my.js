// pages/my/my.js
const app = getApp()
var check_login = require("../../utils/login.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    xpg: "1"
  },
  //跳转到设置
  bindsetting:function(){
    wx.navigateTo({
      url: '../setting/setting'
    })
  },
  //跳转到登录
  entranceLogin:function(){
    wx.navigateTo({
      url: '../login/login'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../set/set'
    })
  },
  addressTap:function(){
    wx.navigateTo({
      url: '../site/site'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //检测登录状态
     check_login.check_token(this);
     check_login.userinfo(this);
     

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
       
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   const pages = getCurrentPages();
   const perpages = pages[pages.length - 1];
   perpages.onLoad();
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})