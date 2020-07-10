// pages/login/login.js
//数据库的初始化
const db = wx.cloud.database();
//获取App的全局变量
var app = getApp();

Page({
  data: {
    showMsg: false,
  },
  //点击登录
  login: function (event) {
    //定义一个变量接收用户名和密码
    let username = event.detail.value.username
    let pwd = event.detail.value.pwd
    //然后去后台判定用户名和密码是否正确
    //去数据库里面获取users表+根据条件where去获取
    db.collection('users').where({
      name: username,
      pwd: pwd,
      //获取
    }).get().then(res => {
      console.log(res)
      if (res.data[0] == null) {
        this.setData({
          showMsg: true,
        })
        return
      } else {
        this.setData({
          showMsg: false,
        })
        app.appUser = res.data[0]
        console.log(app.appUser.name);
      }
     })

  },
})