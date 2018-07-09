//index.js
// 引入城市数据
var city = require('../../utils/city.js');
 console.log(city)
Page({
  // 定义数据
  data: {
    // 选中的城市
    chooseCity: '--',
    // 选中城市
    searchLetter: [],
    // 窗口高度
    windowHeight: 0,
    // 字母高度
    itemHeight: 0,
    // 城市数据
    cityList: [],
    // 历史记录
    cityHistory: [],
    // 热门城市
    hotCity: [],
    // 显示的字母
    showLetter: ''
  },
  // 页面加载完成
  onLoad: function() {
    // 获取屏幕高度
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    // 每一个字母的高度
    var itemHeight = (windowHeight - 50) / city.searchLetter.length;
    // 获取所有选中过的城市
    var cityHistory = wx.getStorageSync('cityHistory');
    // 更新数据
    this.setData({
      searchLetter: city.searchLetter,
      windowHeight: windowHeight,
      itemHeight: itemHeight,
      cityList: city.cityList,
      hotCity: city.hotCity,
      // 更新选中的城市，如果不存在定义默认值
      chooseCity: cityHistory[0] || '--', 
      cityHistory: cityHistory
    })
    // 测试本地存储
    // wx.setStorage({
    //   key: 'ickt',
    //   data: '网易',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // 获取数据
    // wx.getStorage({
    //   key: 'ickt',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // 同步方式
    // wx.setStorageSync('color', 'green') 
    // 同步获取数据
    // console.log(111,wx.getStorageSync('color'))
  },
  // 点击城市选中城市
  updateChooseCity: function(e) {
    // 缓存this
    var me = this;
    // 获取点击城市
    var chooseCity = e.target.dataset.city;
    // 获取本地存储中，所有点击过的城市
    var cityHistory = wx.getStorageSync('cityHistory') || [];
    // 当前选中的应该作为第一个成员
    cityHistory.unshift(chooseCity);
    // 最多只能存储两行城市，一共6个城市
    cityHistory = cityHistory.slice(0, 6);
    // 更新本地存储
    wx.setStorage({
      key: 'cityHistory',
      data: cityHistory,
      // 存储成功，要更新视图
      success: function() {
        // 更新数据
        me.setData({
          chooseCity: chooseCity,
          cityHistory: cityHistory
        })
      }
    })
  },
  // 点击字母，切换视图
  changeShowLetter: function(e) {
    // 获取点击的字母
    var letter = e.target.dataset.letter;
    // 更新数据
    this.setData({
      showLetter: letter
    })
    // console.log(e.target.dataset.letter)
  },
  // 滑动字母表，切换显示的城市
  letterTouchMove: function(e) {
    // 获取手指所在容器元素内的位置
    var pageY = e.touches[0].pageY - 50;
    // 获取每一个字母的高度
    var itemHeight = this.data.itemHeight;
    // 包含的字母
    var index = Math.floor(pageY / itemHeight);
    // 根据索引值获取字母
    var letter = this.data.searchLetter[index];
    // 如果当前的letter与showLetter不同的话，我们再设置
    // 还要保证字母存在
    if (letter && letter != this.data.showLetter) {
      // 更新显示的字母
      this.setData({
        showLetter: letter
      })
      // console.log(e.touches[0].pageY)
    }
    
    
  }
})
