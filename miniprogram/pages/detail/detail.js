// index/details.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    is_shoucang:0,
    // 商品信息
    // 
    goods_info:[],
    //评价数据
    pjDataList:[]
  },
  addCart:function(event){
   wx.cloud.callFunction({
     name:'addCart',
     data:{
       _id:this.data._id
     },
     success(res){
       Toast.success('成功加入购物车')
     },
     fail:console.error
   })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options._id;
    console.log(id)
    let page = this
    wx.cloud.callFunction({
      name:'getList',
      complete:res=>{
        page.setData({
          // productAll:res.result.data
          // 商品信息
    goods_info:res.result.data[id].goods_info,
    goods_img: res.result.data[id].goods_img,
    //评价数据
    pjDataList: res.result.data[id].pjDataList,
        })
      }
    })
  
  }
})