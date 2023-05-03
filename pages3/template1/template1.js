// pages3/template1/template1.js
var http = require("../../utils/request.js")
var util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    storeName:"",
    storeimg:"",
    tag:'',
    orderCount:{
     total: "0",
     num:"0"
    },
    otherCost:{
     freight: "5",
     tableware:"2"
    },
    // greens: [
    //   {
    //     greenid: 0,
    //     greenName:"name",
    //     src: [],
    //     price: '0',
    //     count: 0,
    //   },
    //   {
    //     greenid: 1,
    //     greenName: "name",
    //     src: [],
    //     price: '6',
    //     count: 0,
    //   },
    //   {
    //     greenid: 2,
    //     greenName: "name",
    //     src: [],
    //     price: '8',
    //     count: 0,
    //   },
    //   {
    //     greenid: 3,
    //     greenName: "name",
    //     src: [],
    //     price: '9',
    //     count: 0,
    //   },
    //   {
    //     greenid: 4,
    //     greenName: "name",
    //     src: [],
    //     price: '10',
    //     count: 0,
    //   },
    //   {
    //     greenid: 5,
    //     greenName: "name",
    //     src: [],
    //     price: '12',
    //     count: 0,
    //   },
    //   {
    //     greenid: 6,
    //     greenName: "name",
    //     src: [],
    //     price: '14',
    //     count: 0,
    //   },
    //   {
    //     greenid: 7,
    //     greenName: "name",
    //     src: [],
    //     price: '15',
    //     count: 0,
    //   },
    //   {
    //     greenid: 8,
    //     greenName: "name",
    //     src: [],
    //     price: '16',
    //     count: 0,
    //   },
    //   {
    //     greenid: 9,
    //     greenName: "name",
    //     src: [],
    //     price: '17',
    //     count: 0,
    //   },
    //   {
    //     greenid: 10,
    //     greenName: "name",
    //     src: [],
    //     price: '18',
    //     count: 0,
    //   },
    //   {
    //     greenid: 11,
    //     greenName: "name",
    //     src: [],
    //     price: '20',
    //     count: 0,
    //   },
    // ],
    flag: false,
    
  },
  add:function(e){
    let that = this;
    var flag=this.data.flag;
    const postId=e.currentTarget.dataset.postid;
    let green=this.data.greens;
    let count = green[postId].count;
    count++;
    var item='greens['+postId+'].count';
    if(count>0){
      this.setData({
        flag:true,
        [item]:count,
      })
    };
    var num = 0;
    for(var i=0;i<green.length;i++){
      var allCount =that.data.greens[i].count;
      num = parseInt(num) + parseInt(allCount);
    };
    var total = 0;
    if(num>0){
      for (var i = 0; i < green.length; i++) {
        var price = that.data.greens[i].price || that.data.greens[i].sell_price;
        var pricrCount = that.data.greens[i].count;
        total = parseFloat(total)+parseFloat(price*pricrCount);
      }
    };
    var orderCount={
      total,
      num,
    };
   // console.log(orderCount);
    this.setData({
      orderCount
    })
  },

  sub:function(e){
    let that=this;
    var flag = this.data.flag;
    const postId = e.currentTarget.dataset.postid;
    let green = this.data.greens;
    var count = green[postId].count;
    var item = 'greens['+postId+'].count'
    if (count>0){
      count--;
      this.setData({
        [item]: count,
      })
    };
   // console.log(green);
    var num = 0;
    for(var i=0;i<green.length;i++){
      var allCount = that.data.greens[i].count;
      num = parseInt(num) + parseInt(allCount);
    }
    var total =0;
    if (num > 0) {
      for (var i = 0; i < green.length; i++) {
        var price = that.data.greens[i].price || that.data.greens[i].sell_price;
        var pricrCount = that.data.greens[i].count;
        total = parseFloat(total) + parseFloat(price * pricrCount);
      }
    };
    let orderCount={
      total,
      num
    }
    if(num==0){
      this.setData({
        flag:false
      })
    }
   // console.log(orderCount)
    this.setData({
      orderCount
    })
  },
  addCart:function(){
    var that=this;
    wx.showToast({
      title: '添加成功！',
      icon: 'success',
      duration: 3000,
      mask: true,
      success: (res) =>{
      },
    })
  },
  pay:function(){
    var that=this;
    var green = this.data.greens;
    let total = this.data.orderCount.total;
    let arr=[];
    let t=new Date();
    var time = util.deliveryTime(t);
    for(var i=0;i<green.length;i++){
      var count = green[i].count;
      if(count!=0){ 
       arr.push(green[i]);
      }
    };
    var arry = JSON.stringify(arr);
      wx.navigateTo({
        url: '/pages/pay/pay?time=' + time + "&total=" + total + "&arr=" + arry + "&freight=" + this.data.otherCost.freight + "&tableware=" + this.data.otherCost.tableware + "&store=" + this.data.storeName+ "&shop_id=" + this.data.shop_id+"&id="+1,
      })  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    util.gainSystemSize(this);
    let flag=1;
    if(flag==options.id){
      var store = JSON.parse(options.store)
      let shopid = store.shop_id
      if(shopid){
        //获取食堂商家
        http.getRequest(
          '/api/getFoods',
          {
            "token": "f5709fbb161afd90e1ecd111a20f4144",
            "shopid": shopid,
          },
          function (e) {
            console.log(e) 
            that.setData({
              greens:e.data,
            })
          },
          function (e) {
            console.log(e)
          },
        )
      }
      console.log(store)
      this.setData({
        storeName: store.storeName || store.shopname,
        storeImg: store.logo || store.logo_img,
        tag: store.tag, 
        shop_id: store.shop_id,
        otherCost: store.otherCost || {
          freight: store.send_cost,
          tableware: store.box_cost
        },
        greens:store.greens,
      })
    }else{
      var list = JSON.parse(options.list)
      console.log(list)
      this.setData({
        //storeName: list.subtitle,
        storeName:list.childrenArray[0].screenName,
        storeImg:list.childrenArray[0].showImageUrl,
        greens:list.childrenArray[0].greens,

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