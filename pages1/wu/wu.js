// pages1/wu/wu.js
var http = require("../../utils/request.js")
var check_login = require("../../utils/login.js")
var util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    first_floor: [
      {
        storeId: 0,
        storeName: "刀削面",
        logo:'/../img/store/logo/logo (12).jpg',
        storeImg:'/../img/store/tm/tm (7).jpeg',
        onOff: true,
        evaluate: "***** 4.7",
        num: "394",
        recommend: ["鸡肉刀削面"],
        otherCost: {
          freight: "3",
          tableware: "2"
        },
      },
      {
        storeId: 1,
        storeName: "骨汤",
        logo:'/../img/store/logo/logo (11).jpg',
        storeImg:'/../img/store/tm/tm (6).jpeg',
        onOff: true,
        evaluate: "***** 4.9",
        num: "594",
        recommend: ["🐏汤", "🐮汤"],
        otherCost: {
          freight: "1",
          tableware: "1"
        },
      },
      
    ],

  },
  import1Tap: function (e) {
    var that = this;
    let storeId = e.currentTarget.dataset.id;
    var onOff = this.data.first_floor[storeId].onOff;
    //console.log(storeId);
    var store = JSON.stringify(this.data.first_floor[storeId]);
    //console.log(store);
    if (onOff) {
      wx.navigateTo({
        url: '/pages3/template1/template1?store=' + store + "&id=" + 1,
      })
    } else {
      wx.showToast({
        title: '商家暂停营业中...',
        icon: "none"
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     //获取食堂商家
     http.getRequest(
      '/api/getStore',
      {
        "token": "1843464695705ecdf2afd290798934b3",
         "name":"正门",
      },
      function (e) {
         console.log(e)
      },
      function (e) {
        console.log(e)
      },
    );

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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