// pages/dingdan/dingdan.js
var check_login = require("../../utils/login.js")
var http = require("../../utils/request.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    winHeight:0,
    // tab切换 
    currentTab: 0,
    flag:true,
    totalMoney:"",
    shoppingCart:[{
      subtitle:'MY自营店 >',
      greenName:'开心土豆',
      checkAll:false,
      radio:false,
      img: "/../img/store/td/td (7).jpeg",
      count:'1',
      price:11,
    }],
    dropShipping:[{
      subtitle:'小杨面',
      shopid:'',
      img: "/../img/store/logo/logo (5).jpg",
      time: "2022-05-16 16:09",
      price:26,
    }]
  },
  swichNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
      currentTab: e.target.dataset.current,
      })
    }
  },
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
  },
  checkAll:function(e){
  // console.log(e)
    var flag = this.data.flag;
    let check = e.currentTarget.dataset.check;
    var shoppingCart = this.data.shoppingCart;
    var checkAll=shoppingCart[check].checkAll;
    shoppingCart[check].checkAll = !checkAll;
    var radio = shoppingCart[check].radio;
    shoppingCart[check].radio = !radio;
    this.setData({
      shoppingCart,
      flag:!flag
    });
    this.getTotalPrice();
  },
  radio:function(e){
    var flag=this.data.flag;
    let check = e.currentTarget.dataset.check;
    var shoppingCart = this.data.shoppingCart;
    var checkAll = shoppingCart[check].checkAll;
    shoppingCart[check].checkAll = !checkAll;
    var radio = shoppingCart[check].radio;
    shoppingCart[check].radio = !radio;
    this.setData({
      shoppingCart,
      flag:!flag
    });
    this.getTotalPrice();
  },
  sub:function(e){
   // console.log(e)
    let check = e.currentTarget.dataset.check;
    var shoppingCart = this.data.shoppingCart;
    var count = shoppingCart[check].count;
    if(count<=1){
      return
    }
    count = parseInt(count)-1;
    shoppingCart[check].count=count;
    this.setData({
      shoppingCart
    });
    this.getTotalPrice();
  },
  add:function(e){
    //console.log(e)
    let check = e.currentTarget.dataset.check;
    var shoppingCart = this.data.shoppingCart;
    var count = shoppingCart[check].count;
    count = parseInt(count)+1;
    shoppingCart[check].count = count;
    this.setData({
      shoppingCart
    });
    this.getTotalPrice();
  },
 getTotalPrice:function(e){
   var shoppingCart = this.data.shoppingCart;
   let total=0;
   let sum=0;
   for (let i = 0; i < shoppingCart.length;i++){
     if (shoppingCart[i].radio){
       total += shoppingCart[i].count * shoppingCart[i].price;
     }
   };
   this.setData({
     shoppingCart,
     totalMoney:total
   })
 },
  importTap:function(e){
    var storeS = {
      storeName:e.currentTarget.dataset.storename,
      logo:e.currentTarget.dataset.img,
      shop_id:e.currentTarget.dataset.shopid,
      otherCost:{
        freight: e.currentTarget.dataset.freight,
        tableware: e.currentTarget.dataset.tableware
      },
      tag:e.currentTarget.dataset.tag
    }
    var store = JSON.stringify(storeS);
    // let  = e.currentTarget.dataset.store;
    // var shoppingCart = this.data.shoppingCart;
    // var list = JSON.stringify(shoppingCart[store]);
    console.log(store)
    wx.navigateTo({
      url: '/pages3/template1/template1?store='+store+ "&id=" + 1,
    })
  },
  pay:function(e){
    wx.showToast({
      title: '请先登录',
      icon: 'loading',
      duration: 2000,
      mask: true,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          winHeight: res.windowHeight,
          winWidth:res.windowWidth,
        })
      },
    })
   var that = this;
    // 检测登录
   check_login.check_token(this);
   if(this.data.loging){
    var user = wx.getStorageSync('token');
     // 获取地址
    http.getRequest(
      '/api/getWiteOrder',
      {
        "token":user.token
      },
      function(e){
         console.log(e)
         that.setData({
          dropShipping:e.data
        })
      },
      function(e){
        console.log(e)
      },
    );
   }
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