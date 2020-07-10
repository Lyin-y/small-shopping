// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"登录",
    navList:[
      {src:'cloud://xly-oilad.786c-xly-oilad-1301571521/navList/付款通知 (1).png',title:'待付款'},
      {src:'cloud://xly-oilad.786c-xly-oilad-1301571521/navList/评价 (2).png',title:'待评价'},
      {src:'cloud://xly-oilad.786c-xly-oilad-1301571521/navList/待收货 (1).png',title:'待收货'},
      {src:'cloud://xly-oilad.786c-xly-oilad-1301571521/navList/售后1 (1).png',title:'售后/客服'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getUserInfo()
  },
  // getUserInfo() {
  //   const userInfo = App.globalData.userInfo

  // if (userInfo) {
  //   this.setData({
  //     userInfo: userInfo
  //   })
  //   return
  // }

  // App.getUserInfo()
  // .then(data => {
  //   console.log(data)
  //   this.setData({
  //     userInfo: data
  //   })
  // })
  // },
  login:function(){
    wx.cloud.callFunction({
      name:'login',
      complete:res=>{
        console.log(res)
        this.setData({
          name:res.result.user.name
        })
      }
    })

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