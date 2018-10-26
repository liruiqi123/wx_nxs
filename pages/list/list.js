// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        titt:'测试题名称题名称',
        lock:false
      },
      {
        titt: '测试题名称题名称',
        lock:false
      },

      {
        titt: '测试题名称题名称',
        lock: true
      },
    ]
  },

  totest:function(){
    wx.navigateTo({
      url: '../../pages/test/test'
    })
  }
})