// pages/shopping/shopping.js
const db = wx.cloud.database
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: true, //购物车是否有数据
    totalMoney: 0, //总金额
    selectAllStatus: false, //是否全选
    uid: 0, //用户ID
    totalCount: 0, //数量


    carts: [
    ],
  },
  onLoad(){
    db.collection('cart').get().then(res=>{
      this.setData({
        carts:res.data
      })
    })

  },

  //设置文本框值
  bindIptCartNum: function(e) {

    const index = e.currentTarget.dataset.index;
    var num = e.detail.value;
    let carts = this.data.carts;
    carts[index].num = num;

    this.setData({
      carts: carts
    });
  },

  /* 点击减号 */
  bindMinus: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = parseFloat( carts[index].num);
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /* 点击加号 */
  bindPlus: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = parseFloat( carts[index].num);
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  //删除商品
  bindCartsDel(e) {
    
    var that = this;
    const index = e.currentTarget.dataset.index;
    var selectAllStatus = this.data.selectAllStatus;
    let carts = this.data.carts;
    let totalMoney = this.data.totalMoney;
    wx.showModal({
      title: '提示',
      content: '您确定要删除吗？',
      success: res => {

        if (res.confirm) {
          console.log("用户点了确定")
          carts.splice(index, 1);              // 删除购物车列表里这个商品
          this.setData({
            carts: carts
          });
          if (carts.length == 0) {                  // 如果购物车为空
            this.setData({
              hasList: false,             // 修改标识为false，显示购物车为空页面
              selectAllStatus: false,
              totalMoney:0            //此时价格为0
            });
          } else {                              // 如果不为空
            this.getTotalPrice();           // 重新计算总价格
          }
        } else if (res.cancel) {
          console.log("用户点了取消")
        }

    
      }
    })
  },

  //计算总价
  getTotalPrice() {
    let carts = this.data.carts; // 获取购物车列表
    let total = 0; //注意后台返回的是字符串数字。
    let num = 0; //注意后台返回的是字符串数字。
    for (let i = 0; i < carts.length; i++) { // 循环列表得到每个数据
      if (carts[i].isSelect) { // 判断选中才会计算价格
        total += parseFloat(carts[i].num) * parseFloat(carts[i].price); // 所有价格加起来
        num += parseFloat(carts[i].num);
      }
    }
    this.setData({ // 最后赋值到data中渲染到页面
      carts: carts,
      totalCount: num,
      totalMoney: total.toFixed(2)
    });
  },

  //绑定单选
  bindCheckbox: function(e) {
    var that = this;
    const idx = e.currentTarget.dataset.index;
    let carts = that.data.carts;
    const isSelect1 = carts[idx].isSelect;
    carts[idx].isSelect = !isSelect1;
    that.setData({
      carts: carts,
      selectAllStatus: false
    });
    that.getTotalPrice();
  },


  //绑定多选
  bindSelectAll: function(e) {
    var that = this;
    let selectedAllStatus = that.data.selectAllStatus;
    let carts = that.data.carts;
    selectedAllStatus = !selectedAllStatus;
    for (var i = 0; i < carts.length; i++) {
      carts[i].isSelect = selectedAllStatus;
    }

    that.setData({
      carts: carts,
      selectAllStatus: selectedAllStatus
    });
    that.getTotalPrice();
  },

  //购物车结算
  bindjiesuan: function() {
    var that = this;
    let carts = that.data.carts;
    let jscart = [];
    var j = 0
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].isSelect) {
        jscart[j] = carts[i];
        j++;
      }
    }
    if (jscart.length <= 0) {
      wx.showToast({
        title: '未选择商品',
        icon: 'success',
        duration: 1000
      })
      return;
    }
    wx.setStorageSync('jscart', jscart); //存入缓存
    //转到结算页面
    wx.navigateTo({
      url: 'jiesuan?amount=' + that.data.totalMoney
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options)
    // var id = options.id
    // var title = options.title
    // var image = options.image
    // var price = options.price
    // var num=options.num
   
    // this.setData({
    //    title: title,
    //    image: image,
    //    price: price,
    //     num:num,

    //   carts: (title,image,price,num)
    // })
  },

  //加载购物车
  getCart: function() {
    var that = this;
    var uid = that.data.uid;
    //网络请求获取购物车数据
  }
})