// custom-tab-bar/custom-tab-bar.js
var app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event){
      wx.switchTab({
        url: app.globalData.pages[event.detail]
      });
      this.setData({
        active:event.detail
      })
    }
  }
})
