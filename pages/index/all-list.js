var app = getApp()
var api = require('../../utils/api.js')
var mock = require('../../utils/mock.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: 0,
    itemHeight: 100,
    itemExpand: false,
    cardExpandClass: '',
    winHeight: 300,
    totalList:[],
    toAfford:[],
    onTheWay:[],
    complete:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const cardNum = 3;
    this.setData({
      winHeight: cardNum * 200
    })

    var that = this;
    var tab = (options.tab==null)?0:options.tab;
    console.log("tab test"+tab);
    this.setData({
      tab:tab,
    })

    api.get({
      'url': mock.API_ORDER_LIST,
      'data': {
          page:1,
      },
      success: respData => {
          console.log('全部订单结果',JSON.stringify(respData.data));
          var totalList =respData.data;
          that.setData({
            totalList:totalList,
          })
      }
  })

  api.get({
    'url': mock.API_ORDER_LIST,
    'data': { 
        status:1,
        page:1,
    },
    success: respData => {
        console.log('待付款订单结果',JSON.stringify(respData.data));
        var toAfford =respData.data;
        that.setData({
          toAfford:toAfford,
        })
      }
  })

api.get({
  'url': mock.API_ORDER_LIST,
  'data': { 
      status:2,
      page:1,
  },
  success: respData => {
      console.log('配送中结果',JSON.stringify(respData.data));
      var onTheWay =respData.data;
      that.setData({
        onTheWay:onTheWay,
      })
    }
  })


api.get({
  'url': mock.API_ORDER_LIST,
  'data': { 
      status:3,
      page:1,
  },
  success: respData => {
      console.log('已经完成结果',JSON.stringify(respData.data));
      var complete =respData.data;
      that.setData({
        complete:complete,
      })
    }
  })
  },

  orderToAfford:function(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    console.log("测试 查看详情 的index"+index);
    let totalList = this.data.totalList;
    var order_code =totalList[index].order_code;
    console.log("order_code"+order_code);
    wx.redirectTo({
      url:'./order-toafford?order_code='+order_code
      }
    ); 
  },

  confirmReceipt:function(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    console.log("测试 确认收货 查看详情 的index"+index);
    let totalList = this.data.totalList;
    var order_code =totalList[index].order_code;
    wx.redirectTo({
      url:'./order-ontheway?order_code='+order_code
      }
    ); 
  },

  confirmReceipt:function(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    console.log("测试 确认收货 查看详情 的index"+index);
    let onTheWay = this.data.onTheWay;
    var order_code =onTheWay[index].order_code;
    wx.redirectTo({
      url:'./order-ontheway?order_code='+order_code
      }
    ); 
  },

  detailByCondition:function(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    console.log("测试 全部 查看详情 的index"+index);
    let totalList = this.data.totalList;
    var order_code =totalList[index].order_code;
    var status = totalList[index].status
    console.log("TEST Switch"+JSON.stringify(totalList));
    // wx.redirectTo({
    //   url:'./order-ontheway?id='+id
    //   }
    // ); 
    if(status=="待付款"){
         wx.redirectTo({
            url:'./order-over?order_code='+order_code
            }
          ); 
      }
      
  },

  tabSlide: function (e) {//滑动切换tab
    console.log('tab slide')
    var that = this;
    that.setData({ tab: e.detail.current });
  },

  tabClick: function (e) {//点击tab切换
    var that = this;
    if (that.data.tab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        tab: e.target.dataset.current
      })
    }
  },

  itemExpandClick: function(e){
    console.log("itemExpandClick")
    var that = this;
    if(that.data.itemExpand){
      that.setData({
        itemExpand: false,
        itemHeight: 100,
        cardExpandClass: '',
      })
    }else {
      that.setData({
        itemExpand: true,
        itemHeight: 200,
        cardExpandClass: 'card-desc-view-expand',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})