// pages1/er/er.js
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
        storeName: "黄焖鸡米饭",
        logo:'/../img/store/logo/logo (16).jpg',
        storeImg:'/../img/store/tm/tm (8).jpeg',
        onOff: true,
        evaluate: "***** 4.8",
        num: "664",
        recommend: [
          "黄焖鸡米饭",
          "波斯顿",
        ],
        otherCost: {
          freight: "3",
          tableware: "1"
        },
      },
      {
        storeId: 1,
        storeName: "傻哥妙炒",
        logo:'/../img/store/logo/logo (14).jpg',
        storeImg:'/../img/store/tm/tm (9).jpeg',
        onOff: true,
        evaluate: "***** 4.7",
        num: "594",
        recommend: ["鸡肉","羊排"],
        otherCost: {
          freight: "3",
          tableware: "2"
        },
      },
      {
        storeId: 2,
        storeName: "波波鱼",
        logo:'/../img/store/logo/logo (1).png',
        storeImg:'/../img/store/tm/tm (10).jpeg',
        onOff:true,
        evaluate: "***** 4.9",
        num: "294",
        recommend: ["麻辣波波鱼"],
        otherCost: {
          freight: "1",
          tableware: "1"
        },
      },
      {
        storeId: 3,
        storeName: "肯德基",
        logo:'/../img/store/logo/logo (13).jpg',
        storeImg:'/../img/store/tm/tm (1).jpeg',
        onOff: true,
        evaluate: "***** 4.7",
        num: "594",
        recommend: ["鸡腿汉堡", "牛肉汉堡"],
        otherCost: {
          freight: "3",
          tableware: "2"
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
    var that = this;
     //获取食堂商家
     http.getRequest(
      '/api/getStore',
      {
        "token": "1843464695705ecdf2afd290798934b3",
         "name":"二食堂",
      },
      function (e) {
         console.log(e)
         let m = [...that.data.first_floor,...e.data]
        that.setData({
          first_floor: m
        })
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