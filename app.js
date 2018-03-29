/**
 * Created by Administrator on 2016/12/18 0018.
 */

App({
  onLaunch: function () {

  },

  //定义 输入的信息 接收用户传递的信息
  getUserInfo: function (callback) {
   // 获取微信用户信息
    // 先让微信用户登陆

    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              nickName: res.userInfo.nickName,
              avatarUrl: res.userInfo.avatarUrl,
            })
          },
        })
      }
    });

  }
})

// App({
//   onLaunch: function () {
//     //调用API从本地缓存中获取数据
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)
//   },
//   getUserInfo: function (cb) {
//     var that = this
//     if (this.globalData.userInfo) {
//       typeof cb == "function" && cb(this.globalData.userInfo)
//     } else {
//       //调用登录接口
//       wx.login({
//         success: function (e) {
//           //打印的为 登录凭证(js-code)
//           wx.getUserInfo({
//             success: function (res) {
//               that.globalData.userInfo = res.userInfo
//               typeof cb == "function" && cb(that.globalData.userInfo)
//             }
//           })
//         }
//       })
//     }
//   },
//   globalData: {
//     userInfo: null
//   }
// })