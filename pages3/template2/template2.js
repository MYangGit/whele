// pages3/template2/template2.js
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    scrollTop:false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData: [
      {
        text: '全部'
      },
      {
        text: '面食清粥'
      },
      {
        text: '汉堡热饼'
      },
      {
        text: '生鲜水果'
      },
      {
        text: '肉食午餐'
      },
      {
        text: '夜食晚餐'
      },
      {
        text: '甜品饮品'
      },
      {
        text: '馋嘴小吃'
      },
      {
        text: '周评好店'
      }
    ],
    currentTab: 0,
    navScrollLeft: 0,
    setMal:[
      {
        id:0,
        img:"/../img/store/tm/tm (6).jpeg",
        subtitle:"开心花甲",
        sum:1314,
        price:9.4,
      },
      {
        id:1,
        img: "/../img/store/hb/hb (13).jpeg",
        subtitle: "可乐汉堡",
        sum: 999,
        price: 15,
      },
      {
        id:2,
        img: "/../img/store/zj/zj (9).jpeg",
        subtitle: "鸡腿套餐",
        sum: 134,
        price: 13,
      },
      {
        id:3,
        img: "/../img/store/zj/zj (3).jpeg",
        subtitle: "一只鸡",
        sum: 1314,
        price: 16,
      },
      {
        id:4,
        img: "/../img/store/td/td (2).jpeg",
        subtitle: "烧烤土豆",
        sum: 314,
        price: 10,
      },
    ],
    navigationBar:[
      {
        greensId:0,
        greens: [
          {
            storeId: 0,
            storeName: "简单汉堡",
            logo:'/../img/store/logo/logo (17).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: false,
            evaluate: "***** 4.0",
            num: "164",
            recommend: [
              "鸡腿肉汉堡",
            ],
            otherCost: {
              freight: "3",
              tableware: "1"
            },
          },
          {
            storeId: 2,
            storeName: "砂锅粉",
            logo:'/../img/store/logo/logo (4).jpg',
            storeImg:'/../img/store/mx/mx (5).jpeg',
            onOff: true,
            evaluate: "***** 4.9",
            num: "594",
            recommend: ["🐏汤","🐮汤"],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
            greens: [
              {
                greenid: 0,
                greenName:"经典砂锅粉",
                src: '/../img/store/mx/mx (1).jpeg',
                price: '0',
                count: 0,
              },
              {
                greenid: 1,
                greenName: "蔬菜砂锅粉",
                src: '/../img/store/mx/mx (2).jpeg',
                price: '6',
                count: 0,
              },
              {
                greenid: 2,
                greenName: "肉末砂锅粉",
                src: '/../img/store/mx/mx (3).jpeg',
                price: '8',
                count: 0,
              },
              {
                greenid: 3,
                greenName: "鸡肉砂锅粉",
                src: '/../img/store/mx/mx (4).jpeg',
                price: '9',
                count: 0,
              },
              {
                greenid: 4,
                greenName: "肥肠砂锅粉",
                src: '/../img/store/mx/mx (5).jpeg',
                price: '10',
                count: 0,
              },
              {
                greenid: 5,
                greenName: "火腿砂锅粉",
                src: '/../img/store/mx/mx (10).jpeg',
                price: '12',
                count: 0,
              },
              {
                greenid: 6,
                greenName: "大排砂锅粉",
                src: '/../img/store/tm/tm (9).jpeg',
                price: '14',
                count: 0,
              },
              {
                greenid: 7,
                greenName: "牛肉砂锅粉",
                src: '/../img/store/mx/mx (12).jpeg',
                price: '14',
                count: 0,
              },
            ]
          },
          {
            storeId: 1,
            storeName: "小杨面",
            logo:'/../img/store/logo/logo (5).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.7",
            num: "394",
            recommend: ["鸡肉刀削面"],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
            greens: [
              {
                greenid: 0,
                greenName:"大排面",
                src: '/../img/store/tm/tm (1).jpeg',
                price: '10',
                count: 0,
              },
              {
                greenid: 1,
                greenName: "牛肉面",
                src: '/../img/store/tm/tm (11).jpeg',
                price: '10',
                count: 0,
              },
              {
                greenid: 2,
                greenName: "西红柿鸡蛋面",
                src: '/../img/store/tm/tm (12).jpeg',
                price: '8',
                count: 0,
              },
              {
                greenid: 3,
                greenName: "大肉面",
                src: '/../img/store/tm/tm (13).jpeg',
                price: '10',
                count: 0,
              },
              {
                greenid: 4,
                greenName: "梅菜笋丝面",
                src: '/../img/store/tm/tm (14).jpeg',
                price: '10',
                count: 0,
              },
              {
                greenid: 5,
                greenName: "蔬菜面",
                src: '/../img/store/tm/tm (10).jpeg',
                price: '6',
                count: 0,
              },
              {
                greenid: 6,
                greenName: "鸡小面",
                src: '/../img/store/tm/tm (9).jpeg',
                price: '11',
                count: 0,
              },
              {
                greenid: 7,
                greenName: "鱼肉面",
                src: '/../img/store/tm/tm (8).jpeg',
                price: '11',
                count: 0,
              },
              {
                greenid: 8,
                greenName: "葱油面",
                src: '/../img/store/tm/tm (7).jpeg',
                price: '5',
                count: 0,
              },
              {
                greenid: 9,
                greenName: "香菇鸡蛋面",
                src: '/../img/store/tm/tm (6).jpeg',
                price: '8',
                count: 0,
              },
              {
                greenid: 10,
                greenName: "肉末蔬菜面",
                src: '/../img/store/tm/tm (5).jpeg',
                price: '9',
                count: 0,
              },
              {
                greenid: 11,
                greenName: "牛肉方便面",
                src: '/../img/store/tm/tm (4).jpeg',
                price: '11',
                count: 0,
              },
            ],
          },
          {
            storeId: 4,
            storeName: "肯德基",
            logo:'/../img/store/logo/logo (13).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.7",
            num: "394",
            recommend: ["牛肉汉堡", "鸡肉卷"],
            otherCost: {
              freight: "3",
              tableware: "2"
            },
          },
          {
            storeId: 3,
            storeName: "东山炸鸡",
            logo:'/../img/store/logo/logo (16).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.7",
            num: "394",
            recommend: ["香辣鸡翅"],
            otherCost: {
              freight: "3",
              tableware: "2"
            },
          },
          {
            storeId: 5,
            storeName: '饭小帅',
            logo:'/../img/store/logo/logo (12).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 5.0",
            num: "594",
            recommend: ["黄焖鸡",],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
          },
          {
            storeId: 0,
            storeName: "刀削面",
            logo:'/../img/store/logo/logo (11).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.7",
            num: "394",
            recommend: ["鸡肉刀削面"],
            otherCost: {
              freight: "3",
              tableware: "2"
            },
          },
          {
            storeId: 1,
            storeName: "骨汤",
            logo:'/../img/store/logo/logo (10).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.9",
            num: "594",
            recommend: ["🐏汤", "🐮汤"],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
          },
          {
            storeId: 0,
            storeName: "东山水果店",
            logo:'/../img/store/logo/logo (6).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.7",
            num: "394",
            recommend: ["冰糖雪梨", "水果捞"],
            otherCost: {
              freight: "3",
              tableware: "2"
            },
          },
          {
            storeId: 1,
            storeName: '梦扬自营',
            logo:'/../img/store/logo/logo (9).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 5.0",
            num: "594",
            recommend: ["各种水果", ],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
          },
          {
            storeId: 2,
            storeName: '水果+牛奶',
            logo:'/../img/store/logo/logo (4).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.9",
            num: "594",
            recommend: ["鲜奶果",],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
          },
        ],
      },
      {
        greensId: 1,
        greens:[
          {
            storeId: 0,
            storeName: "刀削面",
            logo:'/../img/store/logo/logo (11).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.7",
            num: "394",
            recommend: ["鸡肉刀削面"],
            otherCost: {
              freight: "3",
              tableware: "2"
            },
          },
          {
            storeId: 1,
            storeName: "骨汤",
            logo:'/../img/store/logo/logo (10).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.9",
            num: "594",
            recommend: ["🐏汤", "🐮汤"],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
          },
          
        ]
      },
      {
        greensId: 2,
        greens:[
          {
            storeId: 0,
            storeName: "转角小店",
            logo:'/../img/store/logo/logo (9).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.7",
            num: "394",
            recommend: ["烤冷面","鸡蛋灌饼"],
            otherCost: {
              freight: "3",
              tableware: "2"
            },
          },
          {
            storeId: 1,
            storeName: '华士顿',
            logo:'/../img/store/logo/logo (8).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.8",
            num: "594",
            recommend: ["炸鸡", "薯条"],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
          },
          {
            storeId: 2,
            storeName: '叫了个鸡',
            logo:'/../img/store/logo/logo (7).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.9",
            num: "594",
            recommend: ["蜜汁炸鸡",],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
          },
        ]
      },
      {
        greensId:3,
        greens: [
          {
            storeId: 0,
            storeName: "东山水果店",
            logo:'/../img/store/logo/logo (6).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.7",
            num: "394",
            recommend: ["冰糖雪梨", "水果捞"],
            otherCost: {
              freight: "3",
              tableware: "2"
            },
          },
          {
            storeId: 1,
            storeName: '梦扬自营',
            logo:'/../img/store/logo/logo (9).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 5.0",
            num: "594",
            recommend: ["各种水果", ],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
          },
          {
            storeId: 2,
            storeName: '水果+牛奶',
            logo:'/../img/store/logo/logo (4).jpg',
            storeImg:'/../img/store/tm/tm (3).jpeg',
            onOff: true,
            evaluate: "***** 4.9",
            num: "594",
            recommend: ["鲜奶果",],
            otherCost: {
              freight: "1",
              tableware: "1"
            },
          },
        ]

      },
      {
        greensId: 4,

      },
      {
        greensId: 5,

      },
      {
        greensId: 6,

      },
      {
        greensId: 7,

      },
      {
        greensId: 8,

      }
    ],

  },
  //事件处理函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: false
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  },
  scroll(e){
    var scrollTap=e.detail.scrollTop;
    if (scrollTap>=60){
      this.setData({
        scrollTop:true,
      })
    };
    return
  },
  pay:function(e){
    let greenid=e.currentTarget.dataset.green;
    var setMal = JSON.stringify(this.data.setMal[greenid]);
    //console.log(setMal);
    wx.navigateTo({
      url: '/pages3/template1/template1?list=' + setMal ,
    });
  },
  importTap:function(e){
    let currentTab=this.data.currentTab;
    let target=e.currentTarget.dataset.id;
    var onOff = this.data.navigationBar[currentTab].greens[target].onOff;
    var store = JSON.stringify(this.data.navigationBar[currentTab].greens[target]);
    console.log(store);
    if (onOff) {
      wx.navigateTo({
        url: '/pages3/template1/template1?store=' + store + "&id=" + 1,
      })
    } else {
      wx.showToast({
        title: '商家暂停营业中...',
        icon: "none"
      })
    }
  }
})



