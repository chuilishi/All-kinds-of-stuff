// custom-tab-bar/index.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'
Component({
  lifetimes:{
    created:function(){
      this.storeBindings= createStoreBindings(this,{
        store,
        fields:['active','search_value','pages','goods_number'],
        actions:['pageChange']
      })
    },
    detached:function(){
      this.storeBindings.distroyStoreBindings()
    }
  },
  
  /**
   * 组件的属性列表
   */
  properties: {

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
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      wx.switchTab({
        url: this.data.pages[event.detail],
      })
      this.pageChange(event.detail)
    }
  },
})
