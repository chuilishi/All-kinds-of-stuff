import {action, observable} from 'mobx-miniprogram'

  export const store=observable({
    search_value:'',
    active: 0, //页面的key
    goods_number: 1,
    activeKey:0, //左侧侧边导航的key
    announce:[
      "",
      "0"
    ],
    pages:[
      "/pages/home/home",
      "/pages/mine/mine"
    ],

    all:[
      {
        num:"2",
        price:"4444.00",
        desc:"半价出",
        title:"戴尔笔记本",
        thumb:"/pages/goods/goods",
        type="clothes"
      },{
        num:"2",
        price:"6666.00",
        desc:"半价出",
        title:"小米笔记本",
        thumb:"/images/89.png",
        type="electron"
      }
    ], 

    pageChange: action(function(Index){
      this.active=Index;
    }),
    activeKeyChange: action(function(Index){
      this.activeKey=Index;
    }),
    announce_input_change:action(function(source,value){
      this.announce[source]=value;
    })
  })