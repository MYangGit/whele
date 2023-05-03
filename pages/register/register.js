
// pages/register/register.js
// pages/login/login.js
var util = require("../../utils/util.js");
var http = require("../../utils/request.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cell: '',
    email: '',
    sno: '',
    password: '',
    repassword: '',
    code:'',
    systemHeight: 0,
    systemWidth: 0,
    gainFlag: false,
    kay: '获取'
  },
  //账号框失焦判断类型
  phoneBlur: function (e) {
    // console.log(e);
    var account = e.detail.value;
    if (account == '') {
      return
    }
    var telreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    let isphone = (telreg.test(account)) ? 1 : 0;
    var emailreg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    let isemail = (emailreg.test(account)) ? 2 : 4;
    let whatuser = isemail + isphone;
    switch (whatuser) {
      // is phone
      case 5:
        this.setData({
          cell: account
        })
        break;
      // is email
      case 2:
        this.setData({
          email: account
        })
        break;
      default:
        wx.showToast({
          title: '账号格式错误',
          icon: 'none'
        })
    }
  },
    // 编辑学号
  snoblur: function (e) {
     var sno = e.detail.value;
      if(sno != ""){
        if(sno.length != 10){
          wx.showToast({
            title: '学号应为10位数',
            icon: 'none'
          })
          return;
        }
        this.setData({
          sno: sno
        })
      }
   },
  // 编辑密码
  psdBlur: function (e) {
    var psd = e.detail.value;
    var psdreg=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/;
    if(psd != ""){
      if((psd.length < 6) || (psd.length > 18) ){
        wx.showToast({
          title: '密码不能低于6位，多于18位',
          icon:'none'
        })
        return
      } else if(!psdreg.test(psd)){
        wx.showToast({
          title: '密码必须包含字母、数字或特殊字符两种及以上！',
           icon: 'none'
         })
         return
      }else{
        this.setData({
        password: psd
        })
      }
    }
  },
  repsdBlur: function (e) {
    var repsd = e.detail.value;
    var psd = this.data.password;
    if(repsd != 0){
      if(repsd === psd){
        this.setData({
          repassword: psd
        })
      }else{
        wx.showToast({
          title: '两次输入密码不一致！',
          icon: 'none'
        })
      }
    }
  },
 // 编辑验证码
 codeblur: function (e) {
     var code = e.detail.value;
      if(code != ""){
         if(code.length != 6){
          wx.showToast({
            title: '验证码应为6位',
             icon: 'none'
           })
           return;
         }
         this.setData({
           code: code
         })
      }
 },
  // 点击发送验证码
  sendCodeTime: function (e) {
    var that = this;
    var phoneNum = this.data.cell;
    var iseamil = this.data.email;
    if (phoneNum == '' && iseamil == '') {
      wx.showToast({
        title: '电话或邮箱不存在',
        icon: 'none'
      })
      return
    }else{
      var temestamp = Date.parse(new Date());
      //console.log(temestamp);
      var user_account;
      if (phoneNum == ''){
        user_account = iseamil;
      }else{
        user_account = phoneNum;
      }
      var token = user_account;
      var getcode = "/api/getCode/" + temestamp+"/"+token+"/"+user_account+"/0";
      http.getRequest1(getcode,res => {
           console.log(res);
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
  //点击注册
  bindregister:function(e){
    
    var that = this;
    var user_account;
    if(that.data.cell != ""){
       user_account = that.data.cell;
    }else{
      user_account = that.data.email;
    }
    var user_password = that.data.password;
    var user_repassword = that.data.repassword;
    var sno = that.data.sno;
    var user_code = that.data.code;
    if((user_code == "")){
      wx.showToast({
        title: '验证码不能为空！',
        icon: 'none'
      })
    }else if((user_password == "")||(user_repassword == "")){
      wx.showToast({
        title: '密码不能为空！',
        icon: 'none'
      })
    }else{
      var url = '/api/register';
      var temestamp = Date.parse(new Date());
      var data = {
        user_account:user_account,
        user_password:user_password,
        sno:sno,
        code:user_code,
        time:temestamp
      };
      http.postRequest(url,data,
      res=>{
        console.log(res)
        if(res.code == 200){
          wx.showToast({
            title: '注册成功',
            icon: 'none'
          })
          that.toLogin();
        }
      },res=>{
        console.log(res)
      })
    }
  },
  //跳转到登录
  toLogin:function(){
    wx.redirectTo({
      url: '../login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          systemHeight: res.windowHeight,
          systemWidth: res.windowWidth,
        })
      }
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