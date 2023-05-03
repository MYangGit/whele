//app.js
App({
  onLaunch: function () {
   
  },
  _getUserInfo: function () {
    var userInfoStorage = wx.getStorageSync('user');
    if (!userInfoStorage) {
      var that = this;
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              console.log(res);
              that.globalData.g_userInfo = res.userInfo
              wx.setStorageSync('user', res.userInfo)
            },
            fail: function (res) {
              console.log(res);
            }
          })
        }
      })
    }
    else {
      this.globalData.g_userInfo = userInfoStorage;
    }
  },
  globalData: {
    g_isPlayingMusic: false,
    g_currentMusicPostId: null,
   // doubanBase: "https://api.douban.com",
    doubanBase: "https://douban.uieee.com/",
    g_userInfo: null
  }
})