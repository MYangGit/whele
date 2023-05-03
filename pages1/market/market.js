// pages1/market/market.js
var http = require("../../utils/request.js")
var check_login = require("../../utils/login.js")
var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:0,
    screenId: 0, 
    currentTab: 0, //对应样式变化
    scrollTop: 0, //用作跳转后右侧视图回到顶部
    leftArray: [
      {
        screenId:0,
        screenName:"热门推荐"
      },
      {
        screenId: 1,
        screenName: "学习用品"
      },
      {
        screenId: 2,
        screenName: "爱吃零食"
      },
      {
        screenId: 3,
        screenName: "酒水乳饮"
      },
      {
        screenId: 4,
        screenName: "充饥速食"
      },
      {
        screenId: 5,
        screenName: "日簌护品"
      },
      {
        screenId: 6,
        screenName: "清洁卫生"
      }, 
    ], //左侧导航栏内容
    reghtArray:[
      {
        screenId: 0,
        havelist: true,
        // showImageUrl:'../../base/MY.png',
        showImageUrl:'../../base/banner.png',
        list:[
          {
            subtitle:"麻辣小吃",
            childrenArray:[
              {
                id:0,
                showImageUrl:'/../img/store/cs/ml/1.jpg',
                screenName:'陌陌小麻辣',
                 greens: [
                  {
                    greenid: 0,
                    greenName:"品尝麻辣片",
                    src: '/../img/store/cs/ml/m (1).jpg',
                    price: '0',
                    count: 0,
                  },
                  {
                    greenid: 1,
                    greenName: "爽快牛肉干",
                    src: '/../img/store/cs/ml/m (2).jpg',
                    price: '6',
                    count: 0,
                  },
                  {
                    greenid: 2,
                    greenName: "香辣鸭脖",
                    src: '/../img/store/cs/ml/m (3).jpg',
                    price: '8',
                    count: 0,
                  },
                  {
                    greenid: 3,
                    greenName: "麻辣鸡腿",
                    src: '/../img/store/cs/ml/m (4).jpg',
                    price: '9',
                    count: 0,
                  },
                  {
                    greenid: 5,
                    greenName: "猪颜脆骨",
                    src: '/../img/store/cs/ml/m (5).jpg',
                    price: '12',
                    count: 0,
                  },
                  {
                    greenid: 6,
                    greenName: "YY大礼包",
                    src: '/../img/store/cs/ml/m (6).jpg',
                    price: '24',
                    count: 0,
                  },
                  {
                    greenid: 7,
                    greenName: "豆腐干",
                    src: '/../img/store/cs/ml/m (7).jpg',
                    price: '10',
                    count: 0,
                  },
                  {
                    greenid: 8,
                    greenName: "新疆牛肉条",
                    src: '/../img/store/cs/ml/m (8).jpg',
                    price: '16',
                    count: 0,
                  },
                  {
                    greenid: 9,
                    greenName: "辣块",
                    src: '/../img/store/cs/ml/m (9).jpg',
                    price: '8',
                    count: 0,
                  },
                ],
              },
              {
                id: 0,
                showImageUrl: '/../img/store/cs/mb/1 (1).jfif',
                screenName: '达利园面包',
              },
              {
                id: 0,
                showImageUrl: '/../img/store/cs/sss/1.jpg',
                screenName: '三只松鼠',
              }]
          },
          {
            subtitle: '酒水冰奶',
            childrenArray: [
              {
                id: 1,
                showImageUrl: '/../img/store/cs/pj/1.jfif',
                screenName: '百威',
              },
              {
                id: 1,
                showImageUrl: '/../img/store/cs/ln/1.jfif',
                screenName: '鲜奶',
              },
              {
                id: 1,
                showImageUrl: '/../img/store/cs/kqs/1.jfif',
                screenName: '矿泉水',
              }]
          },
          {
           subtitle: '护肤狂魔',
            childrenArray: [
              {
                id: 2,
                showImageUrl: '/../img/store/cs/xmn/1.jfif',
                screenName: '洗面奶',
              },
              {
               id: 2,
                showImageUrl: '/../img/store/cs/mm/1.jfif',
                screenName: '面膜',
              },
              {
                id: 2,
                showImageUrl: '/../img/store/cs/xfl/1.jfif',
                screenName: '洗护套装',
              }]
          },
          {
            subtitle: '生活必备',
            childrenArray: [
              {
                id: 3,
                showImageUrl: '/../img/store/cs/wsz/1.jfif',
                screenName: '卫生纸',
              },
              {
                id: 3,
                showImageUrl: '/../img/store/cs/yg/1.jfif',
                screenName: '牙膏',
              }]
          },
        ]},
     {
       screenId: 1,
       havelist: true,
       showImageUrl: '',
       list:[
         {
           subtitle: '晨光',
           childrenArray:[
             {
               id: 0,
               showImageUrl: '/../img/store/cs/xxyp/2.jfif',
               screenName: '中性笔',
             },
             {
               id: 0,
               showImageUrl: '/../img/store/cs/xxyp/1.jfif',
               screenName: '笔记本',
             }]
         },
         {
           subtitle: '真彩',
           childrenArray: [
             {
               id: 1,
               showImageUrl: '/../img/store/cs/xxyp/3.jfif',
               screenName: 'A4~纸张',
             }
           ]
         },
       ]
      },
      {
        screenId: 2,
        havelist: true,
        showImageUrl: '',
        list:[
          {
            subtitle: "麻辣小吃",
            childrenArray: [
              {
                id: 0,
                showImageUrl: '/../img/store/cs/ml/m (2).jpg',
                screenName: '陌陌小麻辣',
              },
              {
                id: 0,
                showImageUrl: '/../img/store/cs/mb/1 (2).jpg',
                screenName: '达利面包',
              },
              {
                id: 0,
                showImageUrl: '/../img/store/cs/sss/s (2).jpg',
                screenName: '三只松鼠',
              }]
          },
        ]
      },
      {
        screenId: 3,
        havelist: false,
        showImageUrl: '',
        list: []
      },
      {
        screenId: 4,
        havelist: false,
        showImageUrl: '',
        list: []
      },
      {
        screenId: 5,
        havelist: false,
        showImageUrl: '',
        list: []
      },
      {
        screenId: 6,
        havelist: false,
        showImageUrl: '',
        list: []
      }] //右侧内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name=options.name;
    wx.setNavigationBarTitle({
      title: name,
    });
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

  },
  navbarTap: function (e) {
    var that = this;
    var id = e.currentTarget.id;
   // console.log(id);
    this.setData({
      currentTab: e.currentTarget.id, //按钮CSS变化
      screenId: id,
      scrollTop: 0, //切换导航后，控制右侧滚动视图回到顶部
    })
  },
  ToSearchResult:function(e){
    var that = this;
    let screenId=this.data.screenId;
    var id=e.currentTarget.dataset.relativeid;
    var list = JSON.stringify(that.data.reghtArray[screenId].list[id]);
    //console.log(list)
    wx.navigateTo({
      url: '/pages3/template1/template1?list=' + list,
    })
   
  },
})





