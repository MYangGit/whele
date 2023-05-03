 var host = "http://localhost/MY/MYstore/PHPstore/public/index.php";
// var host = "http://mengyang.store/PHPstore/public/index.php";
/**
 * GET 请求
 * url: 接口路径
 * getData: 请求数据
 * doSuccess: 成功回调函数
 * doFail: 失败回调函数
 */
function getRequest(url,getData = {},doSuccess,doFail){
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: host + url,
    method: 'GET',
    dataType: 'json',
    data: getData,
    success: function (res) {
      wx.hideLoading();
      if (typeof doSuccess == "function" ){
        doSuccess(res.data)
      }
    },
    fail: function (res) {
      wx.hideLoading();
      if (typeof doFail== "function") {
        doFail(res)
      }
    }
  })
}
function getRequest1(url, doSuccess, doFail) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: host + url,
    method: 'GET',
    dataType: 'json',
    success: function (res) {
      wx.hideLoading();
      if (typeof doSuccess == "function") {
        doSuccess(res.data)
      }
    },
    fail: function (res) {
      wx.hideLoading();
      if (typeof doFail == "function") {
        doFail(res)
      }
    }
  })
}
/**  POST请求， 
 * URL：接口 
 * postData：参数，json类型 
 * doSuccess：成功的回调函数 
 * doFail：失败的回调函数
*/ 
function postRequest(url, postData, doSuccess, doFail)
 { 
  wx.showLoading({
    title: '加载中',
  })
   wx.request({ //项目的真正接口，通过字符串拼接方式实现 
   url: host + url, 
   header: { "content-type": "application/json;charset=UTF-8" },
   data: postData,
   method: 'POST',
   success: function (res) { 
     //参数值为res.data,直接将返回的数据传入 
     wx.hideLoading();
     doSuccess(res.data); 
    }, 
   fail: function () { 
     doFail();
     },
   }) 
  }
module.exports = {
  getRequest: getRequest,
  getRequest1: getRequest1,
  postRequest:postRequest
}