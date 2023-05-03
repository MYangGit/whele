// pages3/template/template.js
var util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    color:['one','two','three'],
    greens: [
      {
        storeId: 0,
        storeName: "梦扬小吃店",
        green: [{
          greenName: "土豆片",
          src: "/../img/store/td/td (4).jpeg",
          count: 1,
          price: "9.2",
        }],
        onOff: true,
        evaluate: "***** 4.6",
        num: "664",
        recommend: [
          "贵州美味",
          "香辣可口",
        ],
        otherCost: {
          freight: "4",
          tableware: "1"
        },
      },
      {
        storeId: 1,
        storeName: "小杨面",
        green:[{
          greenName: "酸辣粉",
          src: "/../img/store/mx/mx (9).jpeg",
          count: 1,
          price: "10",
        }],
        onOff: true,
        evaluate: "***** 4.7",
        num: "594",
        recommend: ["鲜香麻辣","重庆酸辣粉"],
        otherCost: {
          freight: "3",
          tableware: "2"
        },
      },
      {
        storeId: 2,
        storeName: "美味羊",
       green:[{
         greenName: "拼盘烤肉",
         src: "/../img/store/sgf/sgf (13).jpeg",
         count: 1,
         price: "10",
       }],
        onOff: false,
        evaluate: "***** 4.9",
        num: "524",
        recommend: ["肉多量足","营养均衡"],
        otherCost: {
          freight: "1",
          tableware: "1"
        },
      },
      {
        storeId: 3,
        storeName: "东山烤肉拌饭",
        green: [{
          greenName: "香辣烤肉拌饭",
          src: "/../img/store/bf/bf (9).jpeg",
          count: 1,
          price: "12",
        }],
        onOff: true,
        evaluate: "***** 4.6",
        num: "464",
        recommend: [
          "鸡肉",
          "香辣口味",
        ],
        otherCost: {
          freight: "4",
          tableware: "1"
        },
      },
    ],
  },
  importTap:function(e){
    let t = new Date();
    var time = util.deliveryTime(t);
    let target=e.currentTarget.dataset.greenid;
   // console.log(target)
    var onOff = this.data.greens[target].onOff;
    var menu= JSON.stringify(this.data.greens[target]);
   // console.log(green)
    if (onOff) {
      wx.navigateTo({
        url: "/pages/pay/pay?menu=" + menu+"&time="+time,
      })
    } else {
      wx.showToast({
        title: '商家暂停营业中...',
        icon: "none"
      })
    }
  },
  importStoreTap:function(e){
    let target = e.currentTarget.dataset.storeid;
   // console.log(target)
    var onOff = this.data.greens[target].onOff;
    var store = JSON.stringify(this.data.greens[target]);
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
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          winHeight: res.windowHeight
        })
      },
    })
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