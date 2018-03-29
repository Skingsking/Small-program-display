

var app = getApp();  // getApp代表的也是全局的 一个变量
Page({
  // 我们要先记录data的值
  data: {

    mydata: [],
    shop_logo: '',
    shop_logodp: '',
    shop_name: '',
    slider: [],
    shopcat:[],
    shop_id:'',

  },

  //加载数据
  onReady: function () {
    var thtas = this;
    wx.request({
      url: 'https://api.jinyisoubu.com/topwxapi?format=json&v=v1&shop_id=2&method=shop.index',
      data: {}, //参数
      header: {
        'content-type': 'application/json' // 默认值  
      },
      //回调
      success: function (e) {
        thtas.setData({
          //获取店铺背景图
          shop_logo: e.data.data.logo_image.shop_logo,
          //获取店铺图
          shop_logodp: e.data.data.shopdata.shop_logo,
          //获取店铺名称
          shop_name: e.data.data.shopdata.shop_name,
          //获取轮播图
          slider: e.data.data.slider,
          //获取图片
          showitems: e.data.data.showitems,
         //获取分类列表
          shopcat: e.data.data.shopcat,
          //获取shopid
          shop_id:e.data.data.shopdata.shop_id,

        })
      }
    })
  },

})

