var app = getApp()

Page({
  data: {
    shop_name: "",
    shop_descript: "",
    shop_area: "",
    mobile: ""
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
          //获取店铺名称
          shop_name: e.data.data.shopdata.shop_name,
          //获取详细信息
          shop_descript: e.data.data.shopdata.shop_descript,
          shop_area: e.data.data.shopdata.shop_area,
          mobile: e.data.data.shopdata.mobile

        })
      }
    })
  },
  phonecallevent: function (e) {
    wx.makePhoneCall({
      phoneNumber: this.data.mobile
    })
  }

})