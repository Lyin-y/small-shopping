// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let res = await db.collection('productAll').where({
    _id
  }).get()
  let cart = await db.collection('cart')
  let resSelect = await cart.where({   //在购物车获取此id的商品信息
    _id
  }).get()
  if(resSelect.data.length === 0){  //购物车无此id的信息，添加此id的商品
    const name = res.data[0].name;
    const fenlei = res.data[0].fenlei;
    const price = res.data[0].price;
    const src = res.data[0].src;
    const title = res.data[0].title
    await cart .add({
      data:{
        _id,
        name,
        price,
        fenlei,
        src,
        title,
        num:1
      }
    })

  }else{   //购物车存在此商品，数量+1
    await cart.where({
      _id
    }).update({
      data:{
        num:resSelect.data[0].num +1
      }
    })

  }
}