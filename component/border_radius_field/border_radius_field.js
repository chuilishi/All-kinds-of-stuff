// component/border_radius_field/border_radius_field.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    iconName: "default",
    text: "default",
    rgba:"",
    number:"0",
    url:""
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(){
      wx.navigateTo({
        url: this.properties.url,
      })
    }
  }
})
