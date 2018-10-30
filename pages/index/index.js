//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [
      { url: '/images/pic_01.png' },
      { url: '/images/pic_01.png' },
      { url: '/images/pic_01.png' },
      { url: '/images/pic_01.png' }
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
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
    
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  lunbotu: function () {
    console.log("点击成功");
    wx.navigateTo({
      url: "../../pages/list/list"
    })
  },

  // 心灵捕手跳转处理函数
  xinlignbushou: function () {
    console.log("点击成功");
    wx.navigateTo({
      url: "../../pages/list2/list2"
    })
  },

  // 今日运势跳转处理函数
  jinryunshi: function () {
    console.log("点击成功");
    wx.navigateTo({
      url: "../../pages/card/card"
    })
  },

  // 心灵百科跳转处理函数
  xinlingbaike: function () {
    console.log("点击成功");
    wx.navigateTo({
      url: "../../pages/list1/list1"
    })
  },





})
