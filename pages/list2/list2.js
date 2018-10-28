// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        titt:'测试题名称题名称list2',
        lock:false
      },
      {
        titt: '测试题名称题名称list2',
        lock:false
      },

      {
        titt: '测试题名称题名称list2',
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