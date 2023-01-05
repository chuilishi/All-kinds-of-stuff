import {action, observable} from 'mobx-miniprogram'

export const store=observable({
  search_value:'',
  active: 0, //页面的key
  goods_number: 1,
  activeKey:0, //左侧侧边导航的key
  pages:[
    "/pages/home/home",
    "/pages/mine/mine"
  ],
  all_activeKey:['all','clothes','electron'],
  all:[
    {
      num:"2",
      price:"2222.00",
      desc:"半价出",
      title:"小米笔记本",
      thumb:"/images/89.png"
    }
  ],
  clothes:[
    {
      num:"2",
      price:"2222.00",
      desc:"半价出",
      title:"戴尔笔记本",
      thumb:"/images/89.png"
    }
  ], 
   electron:[
    {
      num:"2",
      price:"2222.00",
      desc:"半价出",
      title:"小米笔记本",
      thumb:"/images/89.png"
    }
  ],
  
  pageChange: action(function(Index){
    this.active=Index;
  }),
  activeKeyChange: action(function(Index){
    this.activeKey=Index;
  })
})