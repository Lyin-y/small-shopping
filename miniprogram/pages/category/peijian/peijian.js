// pages/peijian/peijian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju01: [{
      image: '../images/ps01.jpg',
      title: '2020春夏新品',
      price: '￥59.00',
      icon: '/pages/images/aixin.png'
    },
    {
      image: '../images/ps03.jpg',
      title: '2020春夏新品',
      price: '￥179.00',
      icon: '/pages/images/aixin.png'
    },
    {
      image: '../images/ps05.jpg',
      title: '2020春夏新品',
      price: '￥139.00',
      icon: '/pages/images/aixin.png'
    },
    {
      image: '../images/ps07.jpg',
      title: '2020春夏新品',
      price: '￥79.00',
      icon: '/pages/images/aixin.png'
    },
    {
      image: '../images/ps09.jpg',
      title: '2020春夏新品',
      price: '￥59.00',
      icon: '/pages/images/aixin.png'
    }
    ],
    shuju02: [{
      image: '../images/ps02.jpg',
      title: '2020春夏新品',
      price: '￥39.00',
      icon: '/pages/images/aixin.png'
    },
    {
      image: '../images/ps04.jpg',
      title: '2020春夏新品',
      price: '￥59.00',
      icon: '/pages/images/aixin.png'
    },
    {
      image: '../images/ps06.jpg',
      title: '2020春夏新品',
      price: '￥169.00',
      icon: '/pages/images/aixin.png'
    },
    {
      image: '../images/ps08.jpg',
      title: '2020春夏新品',
      price: '￥59.00',
      icon: '/pages/images/aixin.png'
    }

    ]


  },
  toXianqin: function (e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    let title = e.currentTarget.dataset.title
    let image = e.currentTarget.dataset.image
    let price = e.currentTarget.dataset.price
    wx.navigateTo({
      url: '../xianqin/xianqin?id=' + id + '&title=' + title + '&image=' + image + '&price=' + price,
      success: function (res) {

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