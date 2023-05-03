// pages/meng/meng.js
var http = require("../../utils/request.js")
var check_login = require("../../utils/login.js")
var util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    opacity: 0,
    picture:[],
    canteen:[],
  },
  // 打开登录页面
  bindtopLogin:function(e){
    wx.navigateTo({
      url: '../login/login'
    })
  },
  // 打开设置页面
  bindtopsetting:function(e){
    wx.navigateTo({
      url: '../setting/setting'
    })
  },
  // 定义各区域人口跳转函数
  bindsanTap:function(e){
    wx.navigateTo({
      url: '../../pages1/san/san'
    })
  },
  bindyiTap:function(e){
    wx.navigateTo({
      url: '../../pages1/yi/yi'
    })
  },
  binderTap: function (e) {
    wx.navigateTo({
      url: '../../pages1/er/er'
    })
  },
  bindxingTap: function (e) {
    wx.navigateTo({
      url: '../../pages1/si/si'
    })
  },
  bindzhengTap: function (e) {
    wx.navigateTo({
      url: '../../pages1/wu/wu'
    })
  },
  bindxiTap: function (e) {
    wx.navigateTo({
      url: '../../pages1/liu/liu'
    })
  },
  //点击激发跳转函数 
  openEntrance: function (e) {
    let siteId = e.currentTarget.id;
    console.log(siteId)
    switch (siteId) {
      case '1':
        this.bindyiTap();
        break;
      case '2':
        this.binderTap();
        break;
      case '3':
        this.bindsanTap();
        break;
      case '4':
        this.bindxingTap();
        break;
      case '5':
        this.bindzhengTap();
        break;
      case '6':
        this.bindxiTap();
        break;
      default:
        wx.showToast({
          title: '该区域正在为您努力‘装修’中，敬请期待！',
          icon: "none"
        });
    }
  },
  scroll: function (e) {
    //console.log(e)
    var height = e.detail.scrollTop;
    if (height > 300) {
      return;
    };
    var opacityNum = height / 280;
    this.setData({
      opacity: opacityNum
    })
  },
  searchTap: function (e) {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    util.gainSystemSize(this);
    //检测登录状态
    check_login.check_token(this);
    // 美味排行
    http.getRequest(
      '/api/getSort',
      {
        "site":"4e473ebc1dfe38df0b2f4ab2d6a4e6fd"
      },
      function(e){
        var leftcur = e.filter((p)=>{
          return p.platesite == 0;
        })
        var rightcur = e.filter((p)=>{
          return p.platesite == 1;
        })
        that.setData({
          leftcurrent: leftcur,
          rightcurrent: rightcur
        })
       // console.log(leftcur)
      },
      function(e){
        console.log(e)
      },
    );
    // 加载轮番图
    http.getRequest(
      '/api/getCar',
      {
        "site":"b02b231cd4b34480204c6791da5c27b2"
      },
      function(e){
        that.setData({
          picture: e
        })
         console.log(e)
      },
      function(e){
        console.log(e)
      },
    );
    // 加载食堂人口图
    http.getRequest(
      '/api/getCar',
      {
        "site": "f36826577aeaddd2a2e134936a03d97b"
      },
      function (e) {
        that.setData({
          canteen: e
        })
        // console.log(e)
      },
      function (e) {
        console.log(e)
      },
    );
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