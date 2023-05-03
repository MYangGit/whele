// pages/qita/qita.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    server:[
      {
        id:1,
        src:"../../base/jsq.png",
        text:"计算机"
      },
      {
        id: 2,
        src: "../../base/su.png",
        text: "看寻物"
      }
    ]
    
  },
  bindcounterTap1:function(e){
   wx.navigateTo({
    url: '../../pages2/jsj/jsj',
    
   })
  },
  bindcounterTap2: function (e) {
    wx.navigateTo({
      url: '../../pages2/materials/materials',

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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