// app.js

App({
  async onLaunch() {
    console.log('app onLaunch')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
      }
    })
  },
  globalData: {
    weddingId: '1',
    isConnected: false,
    isReConnect: true,
    reConnectLimit: -1,
    msgQueue: [],
    wsUrl: 'wss://bestlang.cn/nanomsg',
    ws: {}
  }
})
