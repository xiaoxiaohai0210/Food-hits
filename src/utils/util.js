// 辅助函数，log
export const log = console.log.bind(console)

// 判断三元素的数组是否都为‘00’
export const isZero = (arr) => {
  if (arr.length !== 3) {
    return 'error'
  } else if (arr[0] === '00' && arr[1] === '00' && arr[2] === '00') {
    return true
  } else {
    return false
  }
}

// 获取设备系统信息
export const getSystem = () => {
  let sys = {}
  wx.getSystemInfo({
    success: function (res) {
      sys.pixelRatio = res.pixelRatio
      sys.ww = res.windowWidth
      sys.wh = res.windowHeight
      sys.barh = res.statusBarHeight
    }
  })
  return sys
}

// 本地存储相关
export const SetItem = (key, value) => {
  wx.setStorageSync(key, value)
}

export const GetItem = (key) => {
  return wx.getStorageSync(key)
}

// 格式化日期
export const formatTime = (date) => {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).concat([hour, minute, second].map(formatNumber))
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
