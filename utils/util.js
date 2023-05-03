var temestamp = Date.parse(new Date());
temestamp = temestamp / 1000;
var n = temestamp * 1000;
var date = new Date(n);
var Y = date.getFullYear();
var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

//生产23:24格式
function deliveryTime(unixtime){
  var teme = Date.parse(unixtime);
  teme = teme / 1000;
  var nm = teme + 40 * 60;
  var n1 = nm * 1000;
  var date1 = new Date(n1);
  var h1 = date1.getHours();
  var m1 = date1.getMinutes();
  var s1 = date1.getSeconds();
  var time = h1 + ":" + m1;
  return time;
}
// 获取系统尺寸
function gainSystemSize(that){
  wx.getSystemInfo({
    success: (res) => {
      that.setData({
        systemHeight : res.windowHeight,
        systemWidth : res.windowWidth,
      })
    }
  })
}
module.exports={
  deliveryTime: deliveryTime,
  gainSystemSize: gainSystemSize
}




