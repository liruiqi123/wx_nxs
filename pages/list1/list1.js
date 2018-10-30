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

  totest:function(){
    wx.navigateTo({
      url: '../../pages/card1/card1'
    })
  }
})