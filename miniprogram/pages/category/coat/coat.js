// pages/coat/coat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju01: [{
        id:'1',
        image: '../images/coat01.jpg',
        title: '2020春夏新品女装',
        price: '￥119.00',
        icon: '../../images/aixin.png'
      },
      {
        image: '../images/coat03.jpg',
        title: '2020春夏新品女装',
        price: '￥59.00',
        icon: '/pages/images/aixin.png'
      },
      {
        image: '../images/coat05.jpg',
        title: '2020春夏新品女装',
        price: '￥159.00',
        icon: '/pages/images/aixin.png'
      },
      {
        image: '../images/coat07.jpg',
        title: '2020春夏新品女装',
        price: '￥79.00',
        icon: '/pages/images/aixin.png'
      },
      {
        image: '../images/coat09.jpg',
        title: '2020春夏新品女装',
        price: '￥139.00',
        icon: '/pages/images/aixin.png'
      }
    ],
    shuju02: [{
        image: '../images/coat02.jpg',
        title: '2020春夏新品女装POLO',
        price: '￥139.00',
        icon: '/pages/images/aixin.png'
      },
      {
        image: '../images/coat04.jpg',
        title: '2020春夏新品女装',
        price: '￥99.00',
        icon: '/pages/images/aixin.png'
      },
      {
        image: '../images/coat06.jpg',
        title: '2020春夏新品女装',
        price: '￥169.00',
        icon: '/pages/images/aixin.png'
      },
      {
        image: '../images/coat08.jpg',
        title: '2020春夏新品女装',
        price: '￥59.00',
        icon: '/pages/images/aixin.png'
      }

    ]

  },


  toXianqin: function(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    let title = e.currentTarget.dataset.title
    let image = e.currentTarget.dataset.image
    let price = e.currentTarget.dataset.price
    wx.navigateTo({
      url: '../xianqin/xianqin?id=' + id + '&title=' + title + '&image=' + image + '&price=' + price ,
      success:function(res){

      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})