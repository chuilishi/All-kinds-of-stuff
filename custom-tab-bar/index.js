// custom-tab-bar/index.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store.js'
Component({
  behaviors:[storeBindingsBehavior],
  storeBindings:{
    store,
    fields:{
      active:'active',
      search_value:'search_value',
      pages:'pages',
      goods_number:'goods_number'
    },
    actions:{
      pageChange:'pageChange'
    }
  },
  // lifetimes:{
  //   created:function(){
  //     this.storeBindings= createStoreBindings(this,{
  //       store,
  //       fields:['active','search_value','pages','goods_number'],
  //       actions:['pageChange']
  //     })
  //   },
  //   detached:function(){
  //     this.storeBindings.distroyStoreBindings()
  //   }
  // },
  
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
