var app = getApp();
// 检测token是否存在返回bool
function check_token(that){
  var login = false;
  var token = wx.getStorageSync('token');
  if(token){
    login = true;
  }
 if(that){
  that.setData({
    loging:login,
  })
 }else{
   return login
 } 
}
//配置判断名字图片
function userinfo(that)
{
  var token = wx.getStorageSync('token');
  if(token){
    if(token.user_name == null)
    {
      var num = (Math.random()*1000 + 8999).toFixed();
      token.user_name = 'MY_' + num;
    }else if (token.user_tp == null)
    {
      token.user_tp = '/../img/MY -黄.png'
    }
    wx.setStorageSync('token', token);
    var userinfo = wx.getStorageSync('token');
    that.setData({
      userinfo
    })
  }
}
module.exports = {
  check_token:check_token,
  userinfo:userinfo
}