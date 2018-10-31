// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        titt:'测试题名称题名称list1',
        lock:false
      },
      {
        titt: '测试题名称题名称list1',
        lock:false
      },

      {
        titt: '测试题名称题名称list1',
        lock: true
      },
    ]
  },

  totest:function(flag){
    wx.navigateTo({
      url: '../../pages/card1/card1'
    })
  },


  tocard1: function () {
    wx.navigateTo({
      url: '../../pages/card1/card1'
    })
  },


  tocard2: function () {
    wx.navigateTo({
      url: '../../pages/card2/card2'
    })
  },


  tocard3: function (flag) {
    wx.navigateTo({
      url: '../../pages/card3/card3'
    })
  }
})