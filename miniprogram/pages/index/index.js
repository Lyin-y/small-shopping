// pages/index/index.js
const db = wx.cloud.database()
Page({

 
  data: {
    banner:[],
    navList:[],
    productAll:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this
    wx.cloud.callFunction({
      name:'getList',
      complete:res=>{
        console.log(res)
        page.setData({
          productAll:res.result.data
        })
      }
    })
    db.collection('banner').get().then(res=>{
      this.setData({
        banner:res.data
      })
    })
    db.collection('navList').get().then(res=>{
      this.setData({
        navList:res.data
      })
    })
    // db.collection('productAll').get().then(res=>{
    //   console.log(res.data[0])
    //   this.setData({
    //     productAll:res.data
    //   })
    // })
  },

})