// pages/login/login.js
var util = require("../../utils/util.js");
var http = require("../../utils/request.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    kay: '获取',
    cell:'',
    email:'',
    son:'',
    password:'',
    enCode:'',
    numcode:'',
    openid: "",
    phoneNumber: "",
    showModal:false,//定义登录弹窗
    gopage:1,//定义登录跳转那页
  },
  //登录方式切换
  swichNav:function(e){
    //  console.log(e)
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
  //跳转到主页
  goMeng:function(){
    wx.switchTab({
      url: '../sort/sort',
      success:function(e){
        var page = getCurrentPages().pop();
        if(page == undefined || page == null) return;
        page.onLoad();
      }
    })
  },
  //账号框失焦判断类型
  phoneBlur:function(e){
   // console.log(e);
    var that = this;
    var account = e.detail.value;
    if (account == '') {
      return
    }else{
      that.setData({
        account:account
     })
    }
    var telreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    let isphone = (telreg.test(account)) ? 1 : 0;
    var emailreg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    let isemail = (emailreg.test(account)) ? 2 : 4;
    let whatuser = isemail + isphone;
    switch (whatuser){
      // is phone
      case 5:
         that.setData({
             cell:account
          })
          break;
      // is email
      case 2:
        that.setData({
            email: account
         })
        break;
      default:
        wx.showToast({
          title: '账号输入错误',
          icon: 'none'
        })
    }   
  },
  // 编辑密码
  psdBlur:function(e){
     var psd = e.detail.value;
     this.setData({
       password:psd
     })
  },
  //获取输入的验证码
  encodeBlur:function(e){
    var enCode = e.detail.value;
    this.setData({
      enCode:enCode
    })
 },
  // 点击更换验证码
 changeCode:function(e){
    var code = (Math.random()*1000 + 8999).toFixed();
    this.setData({
      numcode:code
    })
 },
 //账号登陆
 Login:function(e){
  var that = this;
  let numcode = this.data.numcode;
  let enCode = this.data.enCode;
  if(enCode){
    if(numcode != enCode){
      wx.showToast({
        title: '验证码输入错误',
        icon: 'none'
      })
      return
    }else{
      var account = that.data.account;
      var pas = that.data.password;
      var temestamp = Date.parse(new Date())
      var url = '/api/login';
      var data = {
        user_account:account,
        user_password:pas,
        time:temestamp,
        flag:'15e58fadc2826ec5fc841a8c65e37d25'
      }
      http.postRequest(url,data,sres => {
        console.log(sres)
        if(sres.code == '200'){
          wx.showToast({
            title: '登录成功',
          })
          wx.setStorageSync('token', sres.data);
          that.goMeng();
          // var goPage = that.data.goPage;
          // if(goPage == 1){
          //   that.goMeng();
          // }else if(goPage == 9){
          //   var pages = getCurrentPages();
          //   var beforepage = pages[pages.length - 2];
          //   wx.navigateBack({
          //     delta:1,
          //     success:function(){
          //     beforepage.pay();
          //     }
          //   })
          // }
        }else{
          wx.showToast({
            title: sres.msg,
            icon:'none'
          })
        }
      },
      fres => {
        console.log(fres)
      }
      )
    }
  }

 },
 //短信登录
 noteLogin:function(e){
  var that = this;
  var phoneNum = this.data.cell;
  var encode = this.data.enCode;
  if(encode == ''){
    wx.showToast({
      title: '验证码不能为空！',
      icon: 'none'
    })
    return;
  }
  var url = '/api/noteLogin';
  var temestamp = Date.parse(new Date());
  var data = {
    phone : phoneNum,
    time : temestamp,
    code : encode
  }
  http.postRequest(url,data,res=>{
    if(res.code == '200'){
      wx.showToast({
        title: '登录成功',
      })
      wx.setStorageSync('token', res.data);
      that.goMeng();
    }
   // console.log(res)

  },
  resF =>{
    console.log(resF)
  })

 },
 // 点击发送验证码
 sendCodeTime: function (e) {
  var that = this;
  var phoneNum = that.data.cell;
  if (phoneNum == '') {
    wx.showToast({
      title: '电话不存在',
      icon: 'none'
    })
    return
  }else{
    var temestamp = Date.parse(new Date());
    //console.log(temestamp);
    var user_account;
    var token = user_account;
    var getcode = "/api/getCode/" + temestamp+"/"+token+"/"+phoneNum+"/7";
    http.getRequest1(getcode,res => {
        // console.log(res);
         var code = res.code;
         var message = res.msg;
         wx.showToast({
           title: message,
           icon:'none',
           duration:5000
         })
         if(code == 200){
           let second = 60;
           that.countDown(second);
           return;
         }
    },
    res => {
        console.log(res);
    });
  }
},
//  验证码倒计时函数
countDown: function (num) {
  this.setData({
    gainFlag: true,
    kay: num
  });
  if (num < 0) {
    this.setData({
      kay: "获取",
      gainFlag: false
    });
    return;
  }
  setTimeout(() => {
    this.countDown(num - 1)
  }, 1000);
},
/*
*微信登录
*/
 //微信号登录
 codeLogin:function(e){
  var that = this;
  wx.login({
    success (res) {
      if (res.code) { 
       // console.log(res.code)
       wx.getUserInfo({
         success :function(e){
           var rawData = e.rawData;
           var signature = e.signature;
           var encryptedData = e.encryptedData;
           var iv = e.iv;
           var url = '/api/codeLogin';
           var temestamp = Date.parse(new Date());
           var data = {
             code:res.code,
             time:temestamp,
             rawData:rawData,
             signature:signature,
             encryptedData :encryptedData,
             iv:iv,
           };
           console.log(data);
           http.postRequest(url,data,
           res => {
            if(res.code == '200'){
              wx.showToast({
                title: '登录成功',
              })
              wx.setStorageSync('token', res.data);
              that.goMeng();
            }
              console.log(res);
           },resFail => {
            console.log(res);
           }) 
         } 
       })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })   
 },
 //跳转到注册
  toRegister: function () {
    wx.redirectTo({
      url: '../register/register',
    })
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModal: true,
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    util.gainSystemSize(that);
    that.changeCode();//初始验证码
    var pay = options.pay;
    if (pay === 9) {
      that.setData({
        gopage:pay
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