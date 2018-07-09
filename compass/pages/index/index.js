Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotate: 0,
    direction: '--',
    angle: '--'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const me = this;
    wx.onCompassChange(function(res){
      // console.log(res)
      var value = res.direction; //获取旋转角度
      //更新数据
      me.setData({
        rotate: -value, //更新图片旋转角度
        direction: me.getDirectionText(value),
        angle: value.toFixed(2) //更新显示的角度数字
      })
    })
    setTimeout(function (){
      //默认值是否改变
      if(me.data.direction === '--' && me.data.angle === '--'){
      //提示用户
      wx.showToast({
        title: '您的手机不支持电子罗盘、或者已经被禁用',
        icon: 'loading',
        duration: 1000
      })
      }
    },5000)

  },
  //获取当前角度对应的文案
  getDirectionText:function(value) {
    var dir = '正北 东北 正东 东南 正南 西南 正西 西北'.split(' ');
    var dirAngle = 360 / 8; //定义角度区间值
    // 获取文本索引值
    var index = Math.floor((value + dirAngle / 2) / dirAngle % 8)
    // 返回文本
    return dir[index]
  }

})