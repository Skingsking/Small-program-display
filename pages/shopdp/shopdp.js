var App = getApp();  //全局的一个变量


Page({
  // 这个里面是挂载的数据
  // 你的所有操作都用过围绕着你挂载的数据来操作

  data: {
    images:[],
    titles:'',
    sub_title:'',
    price:'',
    bn:'',
    spec_value:[],
    shippingPlace:'',
    base_info:[],
    freeConf:'',
   
},
  
onLoad: function (options) {
    this.setData({
      id: options.id,
      // name:options.name
    })
    var thtas = this;
    wx.request({
      url: 'https://api.jinyisoubu.com/topwxapi?format=json&v=v1&method=item.detail&item_id=' + options.id,
      data: {}, //参数
      header: {
        'content-type': 'application/json' // 默认值  
      },
      //回调
      success: function (e) {
         thtas.setData({
          //轮播图片
          images: e.data.data.item.images,
          //获取到商品title
          titles: e.data.data.item.title,
          //获取二级title
          sub_title: e.data.data.item.sub_title,
          //获取价格
          price: e.data.data.item.price,
          //获取货号
          bn: e.data.data.item.bn,
          //获取颜色
          spec_value: e.data.data.item.spec.specs,
          //获取发货地址
          shippingPlace: e.data.data.item.shippingPlace,
          //获取参数
          base_info: e.data.data.base_info,
          //获取到付还是卖家承担
          freeConf: e.data.data.freeConf,

        })
      }
    })
  }, 

  

  

})
