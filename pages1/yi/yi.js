// pages1/yi/yi.js
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
        storeName: "功夫家",
        logo:'/../img/store/logo/logo (1).jpg',
        onOff: false,
        evaluate: " 4.0",
        num: "164",
        recommend: [
          "玉米粗粮面",
        ],
        otherCost: {
          freight: "3",
          tableware: "1"
        },
      },
      {
        storeId: 2,
        storeName: "砂锅粉",
        logo:'/../img/store/logo/logo (4).jpg',
        storeImg:'/../img/store/mx/mx (5).jpeg',
        onOff: true,
        evaluate: " 4.9",
        num: "594",
        recommend: ["🐏汤","🐮汤"],
        otherCost: {
          freight: "1",
          tableware: "1"
        },
        greens: [
          {
            greenid: 0,
            greenName:"经典砂锅粉",
            src: '/../img/store/mx/mx (1).jpeg',
            price: '0',
            count: 0,
          },
          {
            greenid: 1,
            greenName: "蔬菜砂锅粉",
            src: '/../img/store/mx/mx (2).jpeg',
            price: '6',
            count: 0,
          },
          {
            greenid: 2,
            greenName: "肉末砂锅粉",
            src: '/../img/store/mx/mx (3).jpeg',
            price: '8',
            count: 0,
          },
          {
            greenid: 3,
            greenName: "鸡肉砂锅粉",
            src: '/../img/store/mx/mx (4).jpeg',
            price: '9',
            count: 0,
          },
          {
            greenid: 4,
            greenName: "肥肠砂锅粉",
            src: '/../img/store/mx/mx (5).jpeg',
            price: '10',
            count: 0,
          },
          {
            greenid: 5,
            greenName: "火腿砂锅粉",
            src: '/../img/store/mx/mx (10).jpeg',
            price: '12',
            count: 0,
          },
          {
            greenid: 6,
            greenName: "大排砂锅粉",
            src: '/../img/store/tm/tm (9).jpeg',
            price: '14',
            count: 0,
          },
          {
            greenid: 7,
            greenName: "牛肉砂锅粉",
            src: '/../img/store/mx/mx (12).jpeg',
            price: '14',
            count: 0,
          },
        ]
      },
    ],
  },
  import1Tap: function (e) {
    var that = this;
  
    let storeId = e.currentTarget.dataset.id;
   
    var onOff = this.data.first_floor[storeId].status || this.data.first_floor[storeId].onOff
  
    console.log(onOff);
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
    var that = this
    //获取食堂商家
    http.getRequest(
      '/api/getStore',
      {
        "token": "1843464695705ecdf2afd290798934b3",
         "name":"一食堂",
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