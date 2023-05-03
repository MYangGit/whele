// pages/cart/tuiguang/tuiguang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    drawing:[],
    text:"",
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

  },
  saveDetail:function(e){
    this.setData({
      text: e.detail.value
    })
  },
  increse: function (e) {
    this.setData({
      flag: true,
    });
  },
  tpTap:function(){
    this.setData({
      flag: false,
    });
  },
  upi: function () {
    var{drawing}=this.data;
    wx.chooseImage({
      count: 3,
      success: res => {
        var path = res.tempFilePaths;
        this.setData({
          drawing: drawing.concat(res.tempFilePaths),
        });
      },
    })
  },
  previewImg:function(e){
    wx.previewImage({
      urls: this.data.drawing,
    })
  },
  deleteImg:function(e){
    var drawing=this.data.drawing;
    var itemIndex=e.currentTarget.id;
    drawing.splice(itemIndex,1);
    this.setData({
      drawing:drawing
    })
  },
  backspace:function(){
    wx.switchTab({
      url: '../../cart/cart',
    })
  },
  uploading:function(){
    if (this.data.text == "" || this.data.drawing==""){
      wx.showToast({
        title: '还没填写推广内容!',
        icon: 'none',
        duration: 2000,
        mask: true,
      })
      return;
    };
    wx.setStorageSync("save", this.data.text)
    wx.setStorageSync("path", this.data.drawing)
    wx.showActionSheet({
      itemList: ['10元30分钟','100元3小时','400元6小时','500元12小时'],
      itemColor:'#3380EB',
      success:function(e){
        var value=e.tapIndex;
        if(value==0){
              wx.showModal({
                title: '作者',
                content: '本未完成支付，不给予推广',
                showCancel: false,
                success:  ()=> {
                  wx.switchTab({
                    url: '../../cart/cart',
                    success: (res)=> {
                      setTimeout((res) => {
                        wx.clearStorage();
                      },1800000 )
                    },
                  })
                }
              });
        }else if(value==1){
          wx.showModal({
            title: '作者',
            content: '本未完成支付，不给予推广',
            showCancel: false,
            success: () => {
              wx.switchTab({
                url: '../../cart/cart',
                success: (res) => {
                  setTimeout((res) => {
                    wx.clearStorage();
                  }, 10799999.784000004)
                },
              })
            }

          })

        }else if(value==2){
          wx.showModal({
            title: '作者',
            content: '本未完成支付，不给予推广',
            showCancel: false,
            success: () => {
              wx.switchTab({
                url: '../../cart/cart',
                success: (res) => {
                  setTimeout((res) => {
                    wx.clearStorage();
                  }, 21599999.568000007)
                },
              })
            }
          })

        }else if(value==3){
          wx.showModal({
            title: '作者',
            content: '本未完成支付，不给予推广',
            showCancel: false,
            success: () => {
              wx.switchTab({
                url: '../../cart/cart',
                success: (res) => {
                  setTimeout((res) => {
                    wx.clearStorage();
                  }, 43199999.136000015)
                },
              })
            }

          })
          
        }

      }
    })

  },

})
