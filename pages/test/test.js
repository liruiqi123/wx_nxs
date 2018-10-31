// pages/test/test.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */

 
  
  data: {
   //静态页面写死 问题与答案
    key: 0,
    keyItem:1,
    question: [
      {
        wen: '对于参加联谊活动的态度',
        option: [
          "非常不喜欢",
          "稍有不喜欢",
          "无所谓",
          "稍有喜欢",
          "非常喜欢"
        ]
      },
      {
        wen: '对于调节邻里纠纷的态度?',
        option: [
          "非常不喜欢",
          "稍有不喜欢",
          "无所谓",
          "稍有喜欢",
          "非常喜欢"
        ]
      },
      {
        wen: '对于为公益事业做义务宣传的态度？',
        option: [
          "非常不喜欢",
          "稍有不喜欢",
          "无所谓",
          "稍有喜欢",
          "非常喜欢"
        ]
      },
      {
        wen: '当教师?',
        option: [
          "非常不喜欢",
          "稍有不喜欢",
          "无所谓",
          "稍有喜欢",
          "非常喜欢"
        ]
      },
      {
        wen: '做职业咨询顾问?',
        option: [
          "非常不喜欢",
          "稍有不喜欢",
          "无所谓",
          "稍有喜欢",
          "非常喜欢"
        ]
      },
      {
        wen: '安慰别人?',
        option: [
          "非常不喜欢",
          "稍有不喜欢",
          "无所谓",
          "稍有喜欢",
          "非常喜欢"
        ]
      },
    ],
    grade: 0,
    wen: '如果你身处一片荒漠中，你最希望看到的天空是什么颜色?',
    optionindex:'-1',
    option:[
      "蓝色",
      "黄色",
      "绿色",
      "白色"
    ],



  },

  onoption:function(e){

    const that = this;

    var tmp_grade = 0;

    //根据答案进行得分匹配
    if (e.currentTarget.dataset.index == 1){
      tmp_grade = 2;
    }
    if (e.currentTarget.dataset.index == 2) {
      tmp_grade = 3;
    }
    if (e.currentTarget.dataset.index == 3) {
      tmp_grade = 4;
    }
    if (e.currentTarget.dataset.index == 4) {
      tmp_grade = 5;
    }

    tmp_grade = this.data.grade + tmp_grade;


    this.setData({
      optionindex: e.currentTarget.dataset.index,
      grade:tmp_grade
    });

    wx.showToast({
      title: '下一题',
      icon: 'success',
      mask: true,
      duration: 1400,
      success: function () {

        setTimeout(function () {
          //要延时执行的代码

          if(that.data.keyItem==6){

            console.log(that.data.grade);

            
            
          }else{

            that.setData({
              optionindex: -1,
              key: that.data.key + 1,
              keyItem: that.data.keyItem + 1
            });

          }
         



        }, 1400) //延迟时间 

      }
    })
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