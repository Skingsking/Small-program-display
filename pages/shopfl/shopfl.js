

var app = getApp();  // getApp代表的也是全局的 一个变量

Page({
  // 我们要先记录data的值
  data: {


    mydata: [],
    pages: 1,
    urll: '',
    searchLoading: false, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false  //“没有数据”的变量，默认false，隐藏  


  },
  onLoad: function (options) {


    var thtas = this;
    var urlp = '';
    urlp = 'shop_id=' + options.shop_id;
    if (options.sc) {
      urlp += "&sc=" + options.sc;
    }
    if (options.widgets_type) {
      urlp += "&widgets_type=" + options.widgets_type;
    }
    if (options.widgets_id) {
      urlp += "&widgets_id=" + options.widgets_id;
    }
    thtas.setData({
      // title: options.title,
      // shop_id: options.shop_id,
      // widgets_type: options.widgets_type,
      // widgets_id: options.widgets_id,
      // sc: options.sc,
      urll: urlp,

    })
    console.log(urlp);
    wx.request({
      // url: 'http://www.jinyisoubu.com/index.php/topwxapi?format=json&v=v1&shop_id=' + options.shop_id + '&method=item.shopitemlist',
      
      url: 'https://api.jinyisoubu.com/index.php/topwxapi?format=json&v=v1&' + urlp + '&method=item.shopitemlist',
      data: {}, //参数
      header: {
        'content-type': 'application/json' // 默认值  
      },
      //回调
      success: function (res) {
        console.log(thtas.data.urll);
        thtas.setData({
          mydata: res.data.data.items,


        })
        
      }
    })
  },



  //上啦 方法
  onReachBottom: function (data) {
    console.log(this)
    var page = this.data.pages + 1;
    var _this = this;
    _this.setData({
      pages: page

    })
    console.log(page);


    this.TapBaoApi(page);
    console.log(this)



  },
  //定义一个方法
  TapBaoApi: function (page) {
    //定义的  thisthis page指向
    var that = this;


    wx.request({
      url: 'https://api.jinyisoubu.com/index.php/topwxapi?format=json&v=v1&' + that.data.urll + '&method=item.shopitemlist', //仅为示例，并非真实的接口地址
      data: {

        pages: page,

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let itemss = res.data.data.items;
        console.log(itemss);
        if (itemss.length == 0) {
          that.setData({
            searchLoading: false,
            searchLoadingComplete: true,
          })
          wx.stopPullDownRefresh();



        } else {
          //将两个data数组 添加到一起
          var newattr = that.data.mydata.concat(itemss);
          console.log(that.data.mydata);
          //data合并的方法
          that.setData({
            mydata: newattr,
            searchLoading: true,
          })

        }



        //关闭刷新
        wx.stopPullDownRefresh();
      }



    })
  },


  //下拉的方法
  onPullDownRefresh: function (curr) {
    this.miss();

  },
  //定义一个 方法 函数
  miss: function () {
    var that = this;

    wx.request({
      url: 'https://api.jinyisoubu.com/index.php/topwxapi?format=json&v=v1&' + that.data.urll + '&method=item.shopitemlist', //仅为示例，并非真实的接口地址
      data: {
        pages: '1'

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        var one = res.data.data.items;
        console.log(one);
        that.setData({
          mydata: one,

        })
        //关闭刷新
        wx.stopPullDownRefresh();

      }
    })
  },






  changeName: function () {
    wx.switchTab({
      url: '../index/index',
    })
  }



})

