
/* 基本配置 */
//
export const CODE_OK = 200

// 首页接口
export const API_INDEX = 'index/index'

//me周边接口
export const API_GOODS_LIST = 'goods/list'

//商品详情页接口
export const API_GOODS_DETAIL = 'goods/details'

//加入购物车
export const API_GOODS_CART_ADD = 'cart/add'

//购物车 修改 利用type来表示增加或者减少
export const API_GOODS_CART_OPR = 'cart/editCart'

//提交订单
export const API_CREATE_ORDER = 'order/createOrder'

//获取购物车信息
export const API_GOODS_CART = 'cart/getAll'

//选择地址
export const API_ALL_ADDRESS = 'address/chooseAddress'

//确定地址
export const API_CONFIRM_ADDRESS = 'address/setDefaultAddress'

//保存地址
export const API_PRE_ADDRESS= 'address/addAddress'

//获取订单列表
export const API_ORDER_LIST='order/getList'

//具体订单详情
export const API_ORDER_DETAIL='order/details'

//me周边 不同category_type的列表
export const API_CURRENT_LIST= 'goods/list'

//获取鲜花币
export const API_CARD_COIN ='card/coin'

//获取优惠券
export const API_CARD_TICKET ='card/ticket'

//获取鲜花卡信息
export const API_CARD_GARDEN='card/gardenCard'

/** 地图配置 **/
export const MAP_KEY = '鲜花达-wxapp'
export const MAP_SECRET= 'PBJBZ-72BAX-VUL4P-Z7ULA-DOK6F-XNFMJ'


/* Banner列表 */
export const mockBannerList = [
  {
    img: "/images/temp/banner3.jpg",
  },
  {
    img: "/images/temp/banner2.jpg",
  },
  {
    img: "/images/temp/banner4.png",
  }
]

/* banner - Me周边商品详情页 */
export const mockMeBannerList = [
  {
    img: "/images/temp/me-detail-banner.jpg",
  },
  {
    img: "/images/temp/me-detail-banner.jpg",
  },
  {
    img: "/images/temp/me-detail-banner.jpg",
  }
]

/* 商品列表 */
export const mockGoodsList = [
  {
    id: 1,
    image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
    image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
    image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
    title: "古黛妃",
    desc:  "古黛妃 短袖t恤女夏装2019新款韩版宽松.古黛妃 短袖t恤女夏装2019新款韩版宽松",
    price: 179,
    sales: 61,
  },
  {
    id: 2,
    image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",
    image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",
    image3: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",
    title: "连衣裙",
    desc: "潘歌针织连衣裙",
    price: 78,
    sales: 16,
  },
  {
    id: 3,
    image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",
    image2: "http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",
    image3: "http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",
    title: "新品女装",
    desc: "巧谷2019春夏季新品新款女装",
    price: 108.8,
    sales: 5,
  },
  {
    id: 4,
    image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg",
    image2: "http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",
    image3: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",
    title: "私萱连衣裙",
    desc: "私萱连衣裙",
    price: 265,
    sales: 88,
  }, {
    id: 5,
    image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
    image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
    image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
    title: "娇诗茹",
    desc: "娇诗茹 ulzzang原宿风学生潮韩版春夏短",
    price: 422,
    sales: 137,
  }, {
    id: 6,
    image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
    image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
    image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
    title: "古黛妃",
    desc: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
    price: 179,
    sales: 95,
  },
]

export const menuList = [
  {
    "name": "鲜花达",
    "url": "",
    "icon": "https://megarden.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E5%B1%82%206.png",
    "explain": "1小时内达"
  },
  {
    "name": "Me商城",
    "url": "",
    "icon": "https://megarden.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E5%B1%82%207.png",
    "explain": ""
  },
  {
    "name": "花艺课",
    "url": "",
    "icon": "https://megarden.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E5%B1%82%208.png",
    "explain": ""
  },
  {
    "name": "附近的Me",
    "url": "",
    "icon": "https://megarden.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E5%B1%82%209.png",
    "explain": ""
  },
  {
    "name": "花材养护",
    "url": "",
    "icon": "https://megarden.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E5%B1%82%2010.png",
    "explain": ""
  }
]

