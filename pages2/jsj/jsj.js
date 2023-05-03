// pages2/jsj/jsj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id1:"clear",
    id2: "back",
    id3: "history",
    id4: "div",
    id5:"num_7",
    id6: "num_8",
    id7: "num_9",
    id8: "mul",
    id9: "num_4",
    id10: "num_5",
    id11: "num_6",
    id12: "sub",
    id13: "num_1",
    id14: "num_2",
    id15: "num_3",
    id16: "add",
    id17: "num_0",
    id18:"dot",
    id19: "equals",

    result:"0",
    dotSign:false,
  },
  clickButton:function(e){
   var btnValue=e.target.id;
   var res=this.data.result;
   var newDotSign=this.data.dotSign;
   if(btnValue>="num_0"&&btnValue<="num_9"){
     var num =btnValue.split("_")[1];
     if(res==0||res.charAt(res.length-1)=='&'){
       res=num;
     }
     else{
       res=res+num;
     }
    }else{
      if(btnValue=="dot"){
        if(!newDotSign){
          res=res+".";
          newDotSign=true;
        }
      }else if(btnValue=="clear"){
          res="0";
          newDotSign=false;
      }else if(btnValue=="back"){
        var length=res.length;
        if(length>1){
          res=res.substr(0,length-1);
        }else{
          res="0";
        }
      } else if(btnValue=="add"||btnValue=="sub"||btnValue=="mul"||btnValue=="div"){
        newDotSign=false;
        var sign;
        switch(btnValue){
          case "add": sign = '+'; break;
          case "sub": sign = '-'; break;
          case "mul": sign = '*'; break;
          case "div": sign = '/'; break;
        }if(!isNaN(res.charAt(res.length-1))){
          res = res + sign;
        }
      }
    }
    this.setData({
     result:res,
     dotSign:newDotSign,
   });
  },
  
  equals:function(){
    var str=this.data.result;
    var strArr=[];
    var item='';
    var temp=0;
    for(var i=0;i<=str.length;i++){
      var ch=str.charAt(i);
      if((ch!='' &&ch>=0 &&ch<=9)||ch=='.'){
        item=item+ch;
      }else{
        strArr[temp]=item;
        temp++;
        strArr[temp]=ch;
        temp++;
        item="";
      }
    }
    if(isNaN(strArr[strArr.length-1])){
      strArr.pop();
    }
    var res=strArr[0]*1;
    var num;
    for(var i=1;i<strArr.length;i=i+2){
      if(res=='&'){
        break;
      }
      num=strArr[i+1];
      switch(strArr[i]){
        case '+': res = parseInt(res)+parseInt(num); break;
        case '-':res= res - num; break;
        case '*':res= res * num; break;
        case '/': if(num!=0){
        res=res/num;}else{
        res="&";}break;
      }
    }
    this.setData({
      result:'='+res,
    });

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