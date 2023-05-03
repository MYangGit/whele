// pages/pay/pay.js
var check_login = require("../../utils/login.js");
var http = require("../../utils/request.js")
var list=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stoer:"",
    shop_id:'',
    site:"请选择收货地址 >",
    tel:"",
    other: {
      freight: "",
      tableware: ""
    },
    total:{
      total_0:"",
      total_1:""
    },
    currentTab:0,
    flag:false,
    time:"",
    tel:"",
    newFlag:true,
    greens:list,
  },
 swichNav:function(e){
   var that=this;
   var currentTab=this.data.currentTab;
   var current=e.currentTarget.dataset.current;
   if(currentTab===current){
     return false;
   }else{
     that.setData({
       currentTab: current
     })
   }
 },
 swiperChange:function(e){
  //console.log(e)
   var current = e.detail.current;
   this.setData({
     currentTab: current
   })
 },
 // 选择收货地址
 selectAddress:function(e){
   wx.navigateTo({
     url: '/pages/site/site?select='+1,
   })
 },
//跳转到登录
gologin:function(){
  wx.navigateTo({
    url: '../login/login?pay='+9,
  })
},
//生成订单
addOrder:function(){
  var temestamp = Date.parse(new Date());
  var user = wx.getStorageSync('token');
  let order_id = temestamp + user.token
  let shopid = this.data.shop_id;
  var data = {
    order_id:order_id.substring(0,32),
    shop_id: shopid,
    box_cost: this.data.other.freight,
    send_cost: this.data.other.tableware,
    send_addre:this.data.site,
    pay_money: this.data.total.total_0,
    total_money: this.data.total.total_0,
    user_token: user.token,
    green: JSON.stringify(this.data.greens),
  }
 if(shopid != 'undefined'){
  let url = '/api/createOrder';
  http.postRequest(url,data,
    res=>{
      console.log(res)
      if(res.code == 200){
        console.log(res.data)
        wx.redirectTo({
          url: '/pages/paySuccess/paySuccess',
        })
      }
    },res=>{
      console.log(res)
    })
  console.log(data)
 }
}, 
 pay:function(e){
   var that=this;
   let site=this.data.site;
   if (site == "请选择收货地址 >"){
     wx.showToast({
       title: '请选择收货地址',
       icon: 'none',
       duration: 1000,
       mask: true,
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
   }else{
     var loging = that.data.loging;
     if(loging){
     // 打开扫码功能 
     wx:wx.scanCode({
      onlyFromCamera:false,
      scanType: [],
      success:(res) =>{
        that.addOrder();
      },
      fail:(res) =>{
        that.addOrder();
      }
    })
     }else{
      wx.showModal({
        title: '提示',
        content: '未登录，是否前往登录？',
        showCancel: true,
        confirmColor: '#ff4401',
        success: (res)=> {
          if(res.confirm){
           that.gologin();
          }else if(res.cancel){
            return;
          }
        },
      })
     }
   }
 },
  pay1: function (e) {
    var that = this;
    let tel=this.data.tel;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if(tel==""){
      wx.showToast({
        title: '请填写预留电话',
        icon: 'none',
        duration: 2000,
      })
      }else if (tel.length != 11 || !myreg.test(tel)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'loading',
      })
    }else{
      var loging = that.data.loging;
      if(loging){
        // 打开扫码功能 
      wx:wx.scanCode({
       onlyFromCamera:false,
       scanType: [],
       success:(res) =>{
         wx.redirectTo({
           url: '/pages/paySuccess/paySuccess',
         })
       },
     })
      }else{
       wx.showModal({
         title: '提示',
         content: '未登录，是否前往登录？',
         showCancel: true,
         confirmColor: '#ff4401',
         success: (res)=> {
           if(res.confirm){
            that.gologin();
           }else if(res.cancel){
             return;
           }
         },
       })
      }
    }
  },
  blur:function(e){
    let value=e.detail.value;
      this.setData({
        tel:value,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // console.log(options);
    //检测登录状态
    check_login.check_token(this);
    const id =1;
    if (options.id==id){
      let time, total, freight, store,tableware,other,shop_id;
      time=options.time;
      list = JSON.parse(options.arr);
      freight=options.freight;
      store= options.store;
      tableware=options.tableware;
      shop_id = options.shop_id;
      console.log(list)
      total={
        total_0: parseFloat(options.total) + parseFloat(freight) + parseFloat(tableware),
        total_1: parseFloat(options.total) + parseFloat(freight)
      };
      other={
        freight: freight,
        tableware: tableware,
      };
      this.setData({
        time:time,
        greens:list,
        newFlag:false,
        other:other,
        store:store,
        total:total,
        shop_id:shop_id,
      }) 
    }else{
      var menu = JSON.parse(options.menu);
      console.log(menu)
      var time=options.time;
      var otherCost = menu.otherCost;
      var green=menu.green;
      var total = {
        total_0: parseFloat(green[0].price) + parseFloat(otherCost.freight) + parseFloat(otherCost.tableware),
        total_1: parseFloat(green[0].price) + parseFloat(otherCost.freight)
      };
      this.setData({
        time:time,
        newFlag: false,
        total:total,
        store:menu.storeName,
        other: otherCost,
        greens: green,
      })
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