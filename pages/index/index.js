//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    plain:true,
    res: [
      {
        id: 1,
        data: '产检',
        typeid:1
      }, {
        id: 2,
        data: '奶粉',
        typeid:2
      }, {
        id: 3,
        data: 'NT',
        typeid:3
      }, {
        id: 4,
        data: '早唐',
        typeid:4
      }, {
        id: 5,
        data: 'B超',
        typeid:5
      }, {
        id: 6,
        data: '验血',
        typeid:6
      }
    ],
    image: {
      head: "../../images/headbg.png", 
      search:"../../images/search.png"
    },
    toolItems:[
      {
        tid:1,
        name:'能不能吃',
        smallpic:'../../images/icon1.png'
      },
      {
        tid: 2,
        name: 'B超单解释',
        smallpic: '../../images/icon2.png'
      },
      {
        tid: 3,
        name: '产检时间表',
        smallpic: '../../images/icon3.png'
      },
      {
        tid: 4,
        name: '胎儿体重计算',
        smallpic: '../../images/icon4.png'
      },
      {
        tid: 5,
        name: '待产包清单',
        smallpic: '../../images/icon1.png'
      },
      {
        tid: 6,
        name: '清宫表',
        smallpic: '../../images/icon2.png'
      },
      {
        tid: 7,
        name: '孕期食谱',
        smallpic: '../../images/icon3.png'
      },
      {
        tid: 8,
        name: '数胎动',
        smallpic: '../../images/icon4.png'
      }
    ]
  }, 
  tapName:function(){
    console.log(1);
  },
  onLoad: function () {

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

})


