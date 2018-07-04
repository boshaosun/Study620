//－－－－－－－－－－－－－－－－－－－－－公共URL－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
//服务器地址 ------本地测试时：放开localhost:8080，注释掉wect.haidilao.com  即可，不用再改其它地方
//生产服务器
var SERVER_URL = 'http://cater.haidilao.com';

//自动买单卡包url
var CARDPACKAGE_URL = "http://172.16.149.57:8888/hdl-banking/";
//var CARDPACKAGE_URL = "http://172.16.149.57:8888/hdl-banking/";
//新排号通过order查询订单状态
var ORDERSTATUS = SERVER_URL + '/Cater/terminus/orderStatus.action';
//自动买单支付顺序url
var PAYMENTORDER_URL = 'http://paycenter.haidilao.com:8080/hotpot-payment-gateway/';
//SNS测试服务器
var WEBROOT_SNS = "http://hi.haidilao.com/";
var WEBROOT_SNS_MSG = WEBROOT_SNS; //测试发送地址不一样
var ZNCJ = 'http://easylink.bayss.cn';
var NEW_QUERY_URL = 'http://qcenter.haidilao.com:2001';
var operNum = NEW_QUERY_URL + '/api/v1/arrangingCenter/operNum'
//新排号市别接口
var newQueryMarket = NEW_QUERY_URL + '/api/v1/arrangingCenter/h5/queryMarket';
//首页排号信息
var findNumberListForUserNew = NEW_QUERY_URL+'/api/v1/arrangingCenter/findNumberListForUserNew';
//新我的排号
var queryNumberListForUser = NEW_QUERY_URL+'/api/v1/arrangingCenter/queryNumberListForUser';
//新排号结果查询
var queryNumberById = NEW_QUERY_URL + '/api/v1/arrangingCenter/h5/queryNumberById'

//修改手机号发送验证码
var bindMobileCode = SERVER_URL + '/Cater/bindMobile/bind_sendMobileCode.action';
//判断是否是旧手机号
var bindMobileOld = SERVER_URL + '/Cater/bindMobile/bind_validateOld.action';
//判断是否是旧手机号
var bindMobileNew = SERVER_URL + '/Cater/bindMobile/bind_validateNew.action';
//卡包开通免密支付接口
//绑定卡包免密支付
var bindingAutoPay = CARDPACKAGE_URL + 'rs/external/bankcore/user/bindingAutoPay';
//解绑卡包绑定
var unbindingAutoPay = CARDPACKAGE_URL + 'rs/external/bankcore/user/unbindingAutoPay';
//获取卡包余额
var cardBalance = CARDPACKAGE_URL + 'rs/external/bankcore/account/cardBalance';

//获取支付顺序
var getSignList = PAYMENTORDER_URL + 'aliSignInfo/getSignList';

//支付宝签约

var aliAgreementSign = PAYMENTORDER_URL + 'aliSignInfo/aliAgreementSign';

//支付宝解约 
var aliAgreementUnSign = PAYMENTORDER_URL + 'aliSignInfo/aliAgreementUnSign';

//修改支付顺序
var updateAutoPaySort = PAYMENTORDER_URL + 'aliSignInfo/updateAutoPaySort';

//我的卡券
var webpath_myCard = SERVER_URL + ':808/hdl-banking';
//埋点服务器
var MAI_DIAN_URL = "http://bpoint.haidilao.com/analyze/data/saveWebDataList.action";

//我的订单排号图片路径
var webpath_caterImg = SERVER_URL;
var webpath_caterImg2 = 'http://cater-image.haidilao.com';
var CHAT_URL = "http://news.haidilao.com/onlinewap/toDialogue.json";
var USER_INTERFACE_URL = WEBROOT_SNS + 'userInterface/';
//Cater服务器地址
var webpath_cater = SERVER_URL + '/Cater/';

//红包地址
var CouponCodeApp_Url = "http://hdlhb.hdltest.com" + '/CouponCodeApp'; //测试地址：'http://172.18.36.2:8098/CouponCodeApp';

//小图标服务器地址
var img_section_url = 'http://imageapp.haidilao.com/';
//图片服务器地址，和小图片服务器地址一致，采用了CDN加速，8080转发不了
var picservice_root = 'http://101.201.57.23:8080/Cater_PicService';
//自媒体－测试服务器地址
var webpath_h5app = 'http://wemedia.haidilao.com/hdl_market/';
//投诉建议
var SUGGEST_BASE_URL = "http://suggest.haidilao.com/#/main/kr001/";
//链接webSocket
var web_socket_url = 'http://mq.haidilao.com:15674/stomp';
//估清首次进入请求接口
var HAS_BEEN_SOLD_OUT_URL = 'http://appstock.haidilao.com:8080/api/web/dishDynamic/list_test/';
//遗失物品配置
var YSWP_ULR = SERVER_URL
//－－－－－－－－－－－－－－－－－－－－－公共参数(parameter)－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

//缓存对象
var customer_cachekey = 'customer_yy'
var customer = null //用户对象
/** 为登录提示语*/
var RELOGIN_ALERT_MSG = '亲,未登录或登录超时，请登录！'

//应用app的微信和支付宝传递的appid
var appid = 'wxd8e8753b2226c249'
//是否开始调试模式 true：开始调试模式  打印log日志  false：关闭，不打印日志
var DEBUG = false
//省
var PROVINCE_ACTION = '../../js/json-array-of-province.json'
//市
var CITY_ACTION = '../../js/json-array-of-city.json'
//县
var AREAS_ACTION = '../../js/json-array-of-district.json'
//－－－－－－－－－－－－－－－－－－－－－公共参数(parameter)－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
/***************网络请求相关配置参数****************/
//网络请求方法
var REQUEST_METHOD_POST = 'post'
//数据类型
var REQUEST_DATA_TYPE = 'json'
var REQUEST_DATA_TYPE_TEXT = 'text'
//请求超时时间
var REQUEST_TIMEOUT = '100000'
//文件扩展名
var CONTENT_TYPE_TEXT = {
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
var CONTENT_TYPE_JSON = {
	'Content-Type': 'application/json;charset=UTF-8'
}

/*************************************后台接口请求地址***************************************/
//安智市场
var ANZHI_URL = 'http://m.anzhi.com/info_2576675.html'
//appStore市场地址
var ITUNES_URL = 'http://sj.qq.com/myapp/detail.htm?apkName=com.haidilao'
//食品安全
var GOOD_SAFE_URL =
	'http://qs.haidilao.com/#/category/article/54b5099a2fb7f5d00e0f2c5f'
//新闻中心
var NEW_CENTER_URL = SERVER_URL + '/Cater/Cater/userwap/new_center.action'
//产品招标
var CHANPIN_ZHAOBIAO_URL = 'http://124.127.49.43/list/16.html'
//诚聘英才
var ZHAO_PIN_URL = 'http://haidilao.hirede.com'
//HI底盘URL全路径
var HI_TERRITORY_SNS_URL =
	'http://hiface.haidilao.com:9990/hdlSNS/hdlsns/squareMblogList.action?sc=1&fromeSrc=newApp'
//HI底盘说说全路径
var HI_SAY_SOMETHING_SNS_URL =
	'http://hiface.haidilao.com:9990/hdlSNS/hdlsns/newBlog.action?fromeSrc=newApp'
//底料
var SUB_PAGE_URL = 'https://h5.koudaitong.com/v2/home/vuux4e1e?redirect_count=1'
//趣映像
var QU_YINGXIANG_URL = 'http://www.zhilandaren.com/hdlHQ?third_login_id='
//趣映像登录成功后的页面
var GO_TO_QYX_PRINT_URL = webpath_cater + 'pointPhoto/pointPhoto.html'
//游戏
var GAME_URL =
	'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1b41721bf40d57d1&redirect_uri=http://game.haihaigame.com/wechatUserAuth/hdl&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
//新闻
var NEWS_ACTION = 'http://news.haidilao.com/onlinewap/toDialogue.json?injson='
//游戏app
var USER_Auth = 'http://game.haihaigame.com/sso/userAuth'

//应用app的微信和支付宝的支付接口
var APP_PAYS_ERVER_URL =
	SERVER_URL + '/Cater/terminus/prePayForWeixin.action?channelNo='

//获取微信部分参数接口用于调用微信扫一扫等功能
var GET_JS_PARAMS = SERVER_URL + '/CaterWeixin/getJsParams.json'

/** 微信首页请求*/
var WE_CHAT_HOME_ACTION = SERVER_URL + '/Cater/wap/getAppMethod.action'
var excInterface = WEBROOT_SNS + 'excInterface/'

//默认会员头像路径
var DEFAULT_HEADER_URL = WEBROOT_SNS + 'User/UserHeadImage/60X60/boy.jpg'
//全景图
var TO_FULL_VIEW_MAP_ACTION =
	SERVER_URL + '/Cater/terminus/toFullViewMap.action?pid='
//打赏切换登录后跳转
var WAP_CATER_LOGIN_URL = SERVER_URL + '/hdl-applet/wapCaterLogin.xhtml'

/*****************口碑********************/
//支付宝登录
var ALIPAY_LOGIN_ATCION = webpath_cater + 'koubei/alipayLogin.action'
//支付宝绑定接口
var BIND_LOGIN_ALIPAY_ACTION = webpath_cater + 'wap/bindByMobileToAlipay.action'
/***************登录*****************/
//登录接口
var CATER_LOGIN_URL = webpath_cater + 'wap/login.action'
//获取验证码
var GET_VERIFY_CODE_ACTION = webpath_cater + 'wap/getAppMethod.action'
//手机和验证码登录
var PHONE_AND_CODE_LOGIN_ACTION = webpath_cater + 'wap/phoneAndCodeLogin.action'
//修改密码
var UPDATE_PWD_ACTION = webpath_cater + 'modifyPwdByPhone.action'
//根据验证码注册
var REGISTER_BY_CODE_ACTION = webpath_cater + 'wap/registerByCode.action'
//退出接口
var EXIT_ACTION = webpath_cater + 'wap/godown.action'

//QQ登录接口
var QQ_LOGIN_ACTION = webpath_cater + 'wap3/newQQLogin.action'
//微信登录接口
var WEIXIN_LOGIN_ACTION = webpath_cater + 'wap3/weixinlogin.action'
//扣扣绑定登录
var BIND_LOGIN_BYQQ_ACTION = webpath_cater + 'userwap/bindAndLoginByQQ.action'
//微信绑定登录
var BIND_LOGIN_BYWEIXIN_ACTION =
	webpath_cater + 'userwap/bindAndLoginByWeixin.action'
//解绑账户
var UNBIND_ACOUNT_ACTION = USER_INTERFACE_URL + 'unBindAcount.action'

/*个人中心*/

var HI_DASAHNG_ACTION = webpath_cater + 'personal/skip/party/award.action'
/***************积分商城*****************/
/** */
var GET_PERSON_POINT_ACTION =
	webpath_cater + 'terminus/personl/integrate/getPersonPoint.action'
//积分商城兑换验证码
var SEND_MOBILE_CODE = WEBROOT_SNS_MSG + 'excInterface/sendMobileCode.action'
//获取积分商城礼品列表数据接口
var GET_GIFT_LIST_ACTION = WEBROOT_SNS + 'excInterface/giftList.action'
//获取积分商城礼品兑换排行榜数据接口
var GET_GIFT_RANKIN_GLIST_ACTION =
	WEBROOT_SNS + 'excInterface/giftRankingList.action'
//获取积分商城礼品详情数据接口
var GET_GIFT_DETAIL_ACTION =
	WEBROOT_SNS + 'excInterface/exchangeGiftInfo.action'
//积分分段
var GET_CUSTSCORE_ACTION =
	webpath_cater + 'terminus/personl/integrate/getCustScore.action'
//请求兑换商品
var GET_GIFT_EXCHANGE_ACTION = WEBROOT_SNS + 'excInterface/giftExchange.action'
//请求历史兑换地址
var GET_QUERY_USER_ADDS_ACTION =
	WEBROOT_SNS + 'excInterface/queryUserAdds.action'
//请求删除兑换地址setUserAddDefault.action
var DEL_USERADDS_ACTION = WEBROOT_SNS + 'excInterface/delUserAdd.action'
//地址设为默认
var SET_USERADD_DEFAULT_ACTION =
	WEBROOT_SNS + 'excInterface/setUserAddDefault.action'
//新增兑换地址
var SAVE_USERADD_ACTION = WEBROOT_SNS + 'excInterface/saveUserAdd.action'
//请求积分明细数据
var QUERY_POINT_ACTION = WEBROOT_SNS + 'excInterface/queryPoint.action'; 
//请求积分明细的即将过期积分数据
var QUERY_POINT_EXPIRY_ACTION = WEBROOT_SNS + 'excInterface/queryMemberExpiryPtsDtlInfo.action'; 
//请求即将过期总积分数据
var GET_POINT_TOTAL_EXPIRY_ACTION = WEBROOT_SNS + 'excInterface/queryMemberExpiryPtsInfo.action'; 
//积分兑换记录
var GIFT_EXCHANGE_HISTORY_ACTION =
	WEBROOT_SNS + 'excInterface/giftExchangeHistory.action'
//修改兑换地址
var EDIT_USERADD_ACTION = WEBROOT_SNS + 'excInterface/editUserAdd.action'
//查询用户地址
var QUERY_USER_ADDS_ACTION = USER_INTERFACE_URL + 'queryUserAdds.action'

//用户积分兑换记录
var QUERY_EXCTMP_ACTIVITY = WEBROOT_SNS + "excInterface/queryExctmpActivity.action"

/***************我的订单*****************/
//我的订单数据
var MYORDER_ACTION = webpath_cater + 'terminus/order/find/diningdate.action'
//我的排号
var MYPAIHAO_ACTION = webpath_cater + 'wap3/getNewAppMethod.action'
//我的订单---订单详情
var GET_ORDER_DETAILS = webpath_cater + 'terminus/getOrderInfo.action'
//取消订单
var CANCEL_ORDER_FOR_APP_ACTION = webpath_cater + 'terminus/cancelOrderForApp.action'
//发起退款流程
var PAYBACK_ORDER_FOR_APP_ACTION=webpath_cater+'terminus/paybackOrderForApp.action'
//
var ADD_ORDER_DISHES_ACTION = webpath_cater + 'terminus/addOrderDishes.action'
//预点餐下单
var ADD_PRE_ORDER_DISHES_ACTION =
	webpath_cater + 'terminus/addPreOrderDishes.action'
//预点餐订单查询
var GET_PRE_ORDER_ACTION = webpath_cater + 'terminus/qureyPreOrderDishes.action'


//查找地址
var FIDN_ADDRESS_ACTION =
	webpath_cater + 'terminus/external/address/find.action'
//删除地址
var DELETE_ADDRESS_ACTION =
	webpath_cater + 'terminus/external/address/delete.action'
//修改地址
var UPDATE_ADDRESS_ACTION =
	webpath_cater + 'terminus/external/address/modStatus.action'
//增加地址
var ADD_ADDRESS_ACTION = webpath_cater + 'terminus/external/address/add.action'

/***************首页*****************/
/**首页轮播图*/
var TO_QUERY_CAROUSL_INFO_ACTION =
	webpath_h5app + 'rs/inner/appCommonRest/toQueryCarouselInfo'
/**首页列表请求 */
var TO_QUERY_INFO_PAGE_ACTION =
	webpath_h5app + 'rs/inner/appCommonRest/toQueryInfoPage'
/**轮播图判断存在与否 */
var TO_QUERY_CAROUSL_EXIST_ACTION =
	webpath_h5app + 'rs/inner/appCommonRest/toCheckExist'

/***************首页--美食*****************/
/**查询回答信息 */
var QUERY_REPLY_ACTION =
	webpath_cater + 'terminus/store/appraise/queryReply.action'

/**增加评论*/
var ADD_COMMENT_ACTION = webpath_cater + 'terminus/store/appraise/add.action'
/** 美食互动 FoodDetail*/
var GET_LOGIN_INFO_ACTION = webpath_cater + 'wap/getLoginInfo.action'
/**美食详情 FoodDetail*/
var QUERY_CATE_INFO_ACTION =
	webpath_h5app + 'rs/inner/appCateInfo/queryCateInfo'
/** 美食*/
var TO_QUERY_CATE_COMMENT_REPLAY_ACTION =
	webpath_h5app + 'rs/inner/appCateComment/toQueryCateCommentReply'
/** 美食*/
var TO_QUERY_CATE_COMMENT_PAGE_ACTOIN =
	webpath_h5app + 'rs/inner/appCateComment/toQueryCateCommentPage'
/**美食 */
var TO_ADD_CATE_COMMENT_REPLAY_ACTION =
	webpath_h5app + 'rs/inner/appCateComment/toAddCateCommentReply'
/**美食评论点赞 */
var TO_GOOD_FOR_CATE_COMMETN_ACTION =
	webpath_h5app + 'rs/inner/appCateComment/toGoodForCateComment'
/**美食评论取消点赞 */
var TO_CANCLE_GOOD_FOR_CATE_COMMETN_ACTION =
	webpath_h5app + 'rs/inner/appCateComment/toCancleGoodForCateComment'
/** 去评论*/
var TO_GOOD_FOR_CATE_INFO_ACTION =
	webpath_h5app + 'rs/inner/appCateComment/toGoodForCateInfo'
/** 不写评论*/
var TO_ACNCLE_GOOD_FOR_CATE_INFO_ACTION =
	webpath_h5app + 'rs/inner/appCateComment/toCancleGoodForCateInfo'
/**美食发表评论*/
var TO_ADD_COMMENT_FOR_CATE_INFO_ACTION =
	webpath_h5app + 'rs/inner/appCateComment/toAddCommentForCateInfo'

/***************首页--任务*****************/

/** 查询任务活动基本信息*/
var TO_QUERY_TASK_INFO_BYID_ACTION =
	webpath_h5app + 'rs/inner/appTaskInfo/toQueryTaskInfoByID'
/** 任务评论查询*/
var TO_QUERY_TASK_COMMENT_PAGE_ACTION =
	webpath_h5app + 'rs/inner/appTaskComment/toQueryTaskCommentPage'
/** 任务评论点赞*/
var TO_GOOD_FOR_TASK_COMMENT_ACTION =
	webpath_h5app + 'rs/inner/appTaskComment/toGoodForTaskComment'
/** 任务评论取消点赞*/
var TO_CANCLE_GOOD_FOR_TASK_COMMENT_ACTION =
	webpath_h5app + 'rs/inner/appTaskComment/toCancleGoodForTaskComment'

/** 回复评论*/
var TO_ADD_REPLAY_FOR_TASK_COMMENT_ACTION =
	webpath_h5app + 'rs/inner/appTaskComment/toAddReplyForTaskComment'

/** 任务评论*/
var TO_QUERY_TASK_COMMENT_REPLAY_ACTION =
	webpath_h5app + 'rs/inner/appTaskComment/toQueryTaskCommentReply'
/** 任务添加评论*/
var TO_ADD_COMMENT_FOR_TASK_INFO_ACTION =
	webpath_h5app + 'rs/inner/appTaskComment/toAddCommentForTaskInfo'
/** 任务报名提交*/
var TO_ADD_SINGNER_FOR_TASK_ACTION =
	webpath_h5app + 'rs/inner/appTaskSign/toAddSignerForTask'

/***************首页--话题*****************/
/** 话题提交评论*/
var TO_ADD_COMMENT_FOR_TOPIC_ACTION =
	webpath_h5app + 'rs/inner/appTopicComment/toAddCommentForTopic'
/** 话题评论点赞*/
var TO_GOOD_FOR_TOPIC_COMMENT_ACTION =
	webpath_h5app + 'rs/inner/appTopicComment/toGoodForTopicComment'

/** 话题评论取消点赞*/
var TO_CANCLE_GOOD_FOR_TOPIC_COMMENT_ACTION =
	webpath_h5app + 'rs/inner/appTopicComment/toCancleGoodForTopicComment'
/** 话题详情*/
var QUERY_TOPIC_INFO_ACTION =
	webpath_h5app + 'rs/inner/appTopicInfo/queryTopicInfo'
/** 查询话题*/
var TO_QUERY_TOPIC_COMMENT_PAGE_ACTION =
	webpath_h5app + 'rs/inner/appTopicComment/toQueryTopicCommentPage'

//排号城市列表
var QUEUE_ACTION = webpath_cater + 'wap3/gotoQueuedNewPage.action'
//查询排号的市别等相关信息
var QUEUE_PAGE_INFO_ACTION =
	webpath_cater + 'wap3/gotoQueuedNewPageForOpt.action'
//排号门店列表
var QUEUE_INITSTOREINFO_ACTION = webpath_cater + 'wap/getAppMethod.action'
//初始化排号界面
var INIT_QUEUE_PAGE_ACTION = webpath_cater + 'wap3/initQueuedPage.action'
//获取排号数
var GET_NEW_QUEUE_NUMBER_ACTION =
	webpath_cater + 'wap3/getNewQueuedNumber.action'
//提交新的排号订单
var SUBMIT_QUEUE_NEW_ORDER_ACTION =
	webpath_cater + 'terminus/submitQueuedNewOrder.action'
//微信----获取排号信息
var GET_PAIHAO_INFO_ACTION = webpath_cater + 'parase/getPaihaoInfo.action'
//微信----获取排号数量
var GET_QUEUE_NUM_ACTION = webpath_cater + 'parase/getQueueNum.action'
//微信---绑定微信
var WECHAT_BIND_ACTION = webpath_cater + 'parase/wechatbind.action'
//微信 智能客服
var ToZHKF = webpath_cater + 'toZHKF.action'

//微信--鉴权获取微信用户地址
var IFLYTEK_WEIXIN_OATUH_AUTHORIZE_URL =
	'https://open.weixin.qq.com/connect/oauth2/authorize?appid=@appId&redirect_uri=@redirectUri&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect'

//微信--智慧客服获取微信及订单信息
var QUEUE_IFLYTEK_SCAN_QR_INFO = webpath_cater + 'iflytek/qr/scan/info.action'

//微信--允许跳转智慧客服预订餐门店配置
var QUEUE_IFLYTEK_STORE_ALLOWABLE =
	webpath_cater + 'iflytek/qr/scan/allowable.action'

//微信--智慧客服获取微信及订单信息
var QUEUE_IFLYTEK_SCAN_QR_INFO = webpath_cater + 'iflytek/qr/scan/info.action'

/** 步请求后台获取菜品信息。后台判断有用户是否登录状态*/
var QUEUE_CATEGORY_FIND_ACTION =
	webpath_cater + 'terminus/dish/category/find.action'
//四宫格价格计算
var DISH_FOURPOT_PRICE_ACTION = webpath_cater + 'ws/pad/getTzxDishPrice.action'
//菜品口味定制
var DISH_LOADDISHTASTE_ACTION =
	webpath_cater + 'terminus/dish/personal/config/find.action'
//根据定位信息的经纬度 获取当前城市信息
var STORELIST_GETCURRENTCITYNAME_ACTIVE =
	webpath_cater + 'wap3/togetNearestCity.action'
//订餐门店列表获取门店
var STORELIST_LOADALLSTORES_ACTION =
	webpath_cater + 'terminus/allStores/allStoreslist.action'
//订餐信息填写判断是否营业
var FILLOUT_DOBUSINESS_ACTION = webpath_cater + 'storecfg/shutNetDinning.action'
//个性化需求标签
var GET_LABEL_STORE_URL = webpath_cater + 'LableStore/getStoreLable.action'
//确认订单
var CONFIRMORDER_ACTION = webpath_cater + 'terminus/initConfirmOrder.action'
//外卖
var CHECKCODE_ACTION = webpath_cater + 'wap/checkCode.action'
//外卖切换选项卡
var TAKEOUT_CHANGE_INIT = webpath_cater + 'terminus/takeout/init.action'
//外卖自取停业时间
var OUTSIDESTOP_ACTION = webpath_cater + 'storecfg/shutNetDinningExt.action'
//外卖
var PRICESELF_ACTION =
	webpath_cater + 'terminus/takeout/saveSelfTakeOrder.action'
//外卖时间选择
var TIMELIMIT_ACTION = webpath_cater + 'wap/findOrderTimeLimit.action'
//外卖外送费
var COUNTDELIVERYFEE_ACTION =
	webpath_cater + 'terminus/takeout/countDeliveryFee.action'
////////
var STORE_LIST_ACTION = webpath_cater + 'terminus/store/list.action'
//外卖门店列表
var FINDSELECTSTORELIST_ACTION =
	webpath_cater + 'terminus/allStores/allStoreslist.action'
//保存外卖订单
var SAVE_TAKEOUT_ORDER_ACTION =
	webpath_cater + 'terminus/takeout/saveTakeoutOrder.action'
//增加发票
var ADD_INVOICE_ACTION = webpath_cater + 'terminus/invoice/add.action'
//删除发票
var DELETE_INVOICE_ACTION = webpath_cater + 'terminus/invoice/delete.action'
//查询发票数据
var FIND_INVOICE_ACTION = webpath_cater + 'terminus/invoice/find.action'

//外卖客如云地址
var WEIXIN_TAKEOUT_KERUYUN_URL =
	'http://weixin.keruyun.com/shop/wmList?uniqueId=WM&shopId=810015089&brandId=11342'
//订餐信息填写
var INITORDERPAGE_ACTION = webpath_cater + 'terminus/initOrderPage.action'
var GETSTATUS_ACTION = webpath_cater + 'terminus/getStatus.action'
var TABLETYPELIST_ACTION = webpath_cater + 'terminus/tableTypeList.action'
//订餐信息填写确认
var SEATINGORDER_ACTION = webpath_cater + 'terminus/seatingOrder.action'
//支付订单
var INITPAYORDER_ACTION = webpath_cater + 'terminus/initPayOrder.action'
var TOWXPAYRESULT_ACTION = webpath_cater + 'terminus/toWxPayResult.action'
var PAYINIT_ACTION = webpath_cater + 'terminus/payInit.action'
//菜品历史订单
var ORDERHISTORY_ACTION = webpath_cater + 'terminus/orderhistory.action'
//外卖历史订单
var TAKEOUT_ORDERHISTORY_ACTION =
	webpath_cater + 'terminus/takeout/historyOrder.action'
/*再来一单*/
//var ADD_ORDER_DISHES_ACTION = webpath_cater + 'terminus/addOrderDishes.action';

/** informationEntry.js*/
var GET_APP_METHOD_ACTION = webpath_cater + 'wap/getAppMethod.action'
/** informationEntry.js*/
var CHECK_CODE_ACTION = webpath_cater + 'wap/checkCode.action'
/**显示门店位置 map.js */
var FIND_SELECT_STORE_LIST_ACTION =
	webpath_cater + 'wap/findSelectStoreList.action'
/**显示门店位置 map.js */
var REDIRECT_ACTION = webpath_cater + 'wap/redirect.action'
/** stores.js*/
var BAI_DU_REDIRECT_ACTION =
	webpath_cater + 'terminus/area/baidu/redirect.action'

/** 城市列表获取*/
var STORE_CITY_LIST_URL = webpath_cater + 'terminus/store/city/list.action'
/** */
var STORE_STORE_LIST_URL = webpath_cater + 'terminus/store/list.action'
/** */
var CATER_TAKEOUT_FIND_ACTION = webpath_cater + 'terminus/takeout/find.action'
/** */
var IMAGE_ACTION = webpath_cater + 'terminus/store/find/image.action'
/**加载单个门店数据*/
var LOAD_STORE_DETAILS_ACTION = webpath_cater + 'terminus/store/find.action'
/**加载门店的评价信息*/
var LOAD_STORE_APPRAISE_ACTION =
	webpath_cater + 'terminus/store/appraise/query.action'
/** */
var LOAD_GOODFOR_STORE_ACTION =
	webpath_cater + 'terminus/store/appraise/goodForStore.action'
/** 美图打印url http://ymt.haidilao.com:81 */
var BEAUTIFUL_PICTURE_ACTION = webpath_cater + 'ymtDeal/ymtPrintPage.action'

//－－－－－－－－－－－－－－－－－－－－－公共URL(cater)－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
/** 手机号验证*/
var CATER_VALIDATE_PHONE =
	webpath_cater + 'terminus/personal/center/validatephone.action'
/** 以前使用获取用户信息结构，现在直接获取SNS*/
//var CATER_CENTER_INDEX_URL = webpath_cater + 'terminus/personal/center/index.action';
/** 个人标签信息*/
var CATER_TAG_FIND_URL = webpath_cater + 'terminus/personal/tag/find.action'
/** 全部标签信息*/
var CATER_TAG_FIND_ALL_URL =
	webpath_cater + 'terminus/personal/tag/find/all.action'
/** 保存标签信息*/
var CATER_TAG_MERGE_URL = webpath_cater + 'terminus/personal/tag/merge.action'
/**客服 */
var CATER_COMPLAINTS_PRAISE_PERSONAL =
	webpath_cater + 'common/doComplaintsPraiseByPersonal.action'
/*客服*/
var SEND_COMPLAIN_PRIAISE = webpath_cater + 'sendComplainPraise.action'
/** 提交建议*/
var DO_COMPLAINTS_PRAISE_BY_PERSONAL_ACTION =
	webpath_cater + 'wap/doComplaintsPraiseByPersonal.action'
/**标签 */
var MERGE_ACTION = webpath_cater + 'terminus/external/address/merge.action'

/** */
/** 登录*/
var CATER_HOME_LOGIN = webpath_cater + 'terminus/resign-login.html?sourcePara=0'

/** 登录*/
var CATER_HOME_MOBILE_LOGIN = webpath_cater + 'terminus/mobile-login.html'

/** 积分抽奖url*/
var CATER_INTERRATE_TURNTABLE_URL =
	webpath_cater + 'lottery/turntable.html?v=20160927'
/** HI底盘*/
var CATER_SKIP_PARTY_URL =
	webpath_cater + 'personal/skip/party.action?skip=squareMblogList'
/** Hi说说*/
var CATER_SKIP_PARTY_NEW_BLOG_URL =
	webpath_cater + 'personal/skip/party.action?skip=newBlog'
/** 微信公众号－微信结果通知*/
var WX_PAY_RESULT_NEW_URL = webpath_cater + 'terminus/toWxPayResultNew.action'
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */

//－－－－－－－－－－－－－－－－－－－－－公共URL(sns)－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
/** 查询用户信息*/
var SNS_QUERY_USER_INFO = WEBROOT_SNS + 'userInterface/queryUserInfo.action'
/** 更新用户信息*/
var SNS_UPDATE_USER_INFO = WEBROOT_SNS + 'userInterface/updateUserInfo.action'
/** 修改用户密码*/
var SNS_UPDATE_USER_PWD = WEBROOT_SNS + 'userInterface/updateUserPwd.action'
/** 更新用户头像*/
var SNS_UPLOAD_HEAD_IMG = WEBROOT_SNS + 'userInterface/uploadHeadImg.action'
/***/
var INIT_ACTION = webpath_cater + 'terminus/store/init.action'
/*外卖套餐获取锅底小料数量*/
var TACKOUT_COMBO_ACTION = webpath_cater + 'terminus/takeout/packInit.action'
//遗失物品
var CATER_LOST_AND_FOUND_ADD = YSWP_ULR + '/Cater/LostAndFound/addLost.action'
var CATER_LOST_AND_FOUND_SEARCH =
	YSWP_ULR + '/Cater/LostAndFound/searchLost.action'
var CATER_LOST_AND_FOUND_DOFOUND =
	YSWP_ULR + '/Cater/LostAndFound/doFound.action'
var CATER_LOST_AND_FOUND_ADD_FOR_PAD =
	SERVER_URL + '/Cater/LostAndFound/addLost.action'

//订餐导航
var CATER_INVITATION_MODEL_SEARCH =
	YSWP_ULR + '/Cater/InvitationModel/findModel.action'
var CATER_INVITATION_MODEL_ADD =
	YSWP_ULR + '/Cater/InvitationModel/addModel.action'
var CATER_INVITATION_MODEL_UPDATE =
	YSWP_ULR + '/Cater/InvitationModel/updateModelState.action'
var CATER_INVITATION_MODEL_DEL =
	YSWP_ULR + '/Cater/InvitationModel/delModel.action'
// h5点歌扣减积分值
var CATER_MUSIC_DEDUCT_POINT =
	SERVER_URL + '/Cater/ws/external/duochang/getPointByCustomerKey.action'

var CATER_ZHILAN_LOTTERY_URL =
	ZNCJ + '/Megabucks/activity/loginTigerLotteryView.htmls'

var CATER_ZHILAN_WITHDRAW_URL =
	'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdbbef6e38c3a075f&redirect_uri=http%3A%2F%2Feasylink.bayss.cn%2F%2Fwx%2Flogin%2FshowHdlIndex.htmls&response_type=code&scope=snsapi_userinfo&state=@motoken#wechat_redirect'

var CATER_PROMPT_URL = SERVER_URL + '/Cater/Prompt/entity.action'
//请求即将过期总积分数据
var GET_POINT_TOTAL_EXPIRY_ACTION =
	WEBROOT_SNS + 'excInterface/queryMemberExpiryPtsInfo.action'
	
	
// 本地存储失效，去后台获取票据
var INITINFO = SERVER_URL + '/Cater/wap/initInfo.action'
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */

//－－－－－－－－－－－－－－－－－－－－－公共URL－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

/**
 * 获取url中的参数
 */
function getQueryString(name) {
	var svalue = window.location.href.match(
		new RegExp('[?&]' + name + '=([^&]*)(&?)', 'i')
	)
	return svalue ? svalue[1] : ''
}
/**
 * 页面加载失败，刷新重试
 */
function timeOut() {
	//	var bodyT = document.getElementsByTagName('body');
	var newdivBG = document.createElement('div')
	var newdivT = document.createElement('div')
	var newh3 = document.createElement('h3')
	var newP = document.createElement('p')
	var newBtn = document.createElement('button')
	newh3.innerHTML = '网络加载失败'
	newP.innerHTML = '请再次刷新或检查网络'
	newBtn.innerHTML = '去刷新'

	newdivBG.setAttribute('class', 'failureLoadBG')
	newh3.setAttribute('class', 'failureH3')
	newP.setAttribute('class', 'failureLoadtext')
	newBtn.setAttribute('class', 'failureLoadBtn')
	newBtn.setAttribute('id', 'failureLoadBTN')

	newdivT.appendChild(newh3)
	newdivT.appendChild(newP)
	newdivT.appendChild(newBtn)
	newdivBG.appendChild(newdivT)
	//	bodyT.appendChild(newdivBG);
	document.body.appendChild(newdivBG)
	//	var shuxin = document.getElementsByClassName('failureLoadBtn')[0];
	var shuBTN = document.getElementById('failureLoadBTN')
	shuBTN.onclick = function() {
		getLoadding()
		window.location.href = getQueryString()
	}
}

//弹框
function bounced(text) {
var alertBox =
	'<div class="alert-background">' +
	'<div class="change-soupBase">' +
	'<div class="alert-tex">' +
	text +
	'<div>' +
	'</div>' +
	'</div>'
$('body').append(alertBox)
setTimeout(function() {
	$('.alert-background').remove()
}, 2000)
}

//－－－－－－－－－－－－－－－－－－－－－页面跳转公共功能－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
if(typeof GobackSource == 'undefined') {
	var GobackSource = {}
	/**
	 * app主页或微信公众号主页 ：0
	 */
	GobackSource.GOBACK_HOME_PAGE_SOURCE = 0
	/**
	 * 排号列表中的排号按钮 ：1
	 */
	GobackSource.GOBACK_ORDER_LIST_SOURCE = 1
	/**
	 * 排号列表中的我的记录按钮 ：2
	 */
	GobackSource.GOBACK_ORDER_LIST_RECORD_SOURCE = 2
	/**
	 * 客服 ：3
	 */
	GobackSource.GOBACK_CUSTOM_SERVICE_SOURCE = 3
	/**
	 * 我的积分 ：4
	 */
	GobackSource.GOBACK_MY_INTEGRAL_SOURCE = 4
	/**
	 * 积分抽奖 ：5
	 */
	GobackSource.GOBACK_INTEGRAL_PRIZE_DRAW_SOURCE = 5
	/**
	 * 美图打印 ：6
	 */
	GobackSource.GOBACK_BEAUTIFUL_PICTURE_PRINT_SOURCE = 6
	/**
	 * 游戏 ：7
	 */
	GobackSource.GOBACK_BEAUTIFUL_HIGAME_PRINT_SOURCE = 7
	/**
	 * 我的订单 ：8
	 */
	GobackSource.GOBACK_MY_ORDER_SOURCE = 8
	/**
	 * 话题详情 : 9
	 */
	GobackSource.GOBACK_TOPIC_PAGE_SOURCE = 9
	/**
	 * 美食互动 :10
	 */
	GobackSource.GOBACK_FOOD_DETAIL_SOURCE = 10
	/**
	 * 任务详情报名 : 11
	 */
	GobackSource.GOBACK_ACTIVITY_RULES_SOURCE = 11
	/**
	 * 任务详情评论 : 12
	 */
	GobackSource.GOBACK_TASK_COMMENT_SOURCE = 12

	/**
	 * 订餐－门店详情评论 ：13
	 */
	GobackSource.GOBACK_ORDER_SHOP_DETAIL_SOURCE = 13
	/**
	 * 排号－门店详情评论 ：14
	 */
	GobackSource.GOBACK_QUEUE_SHOP_DETAIL_SOURCE = 14
	/**
	 * 门店(更多)－门店详情评论 ：15
	 */
	GobackSource.GOBACK_MORE_SHOP_DETAIL_SOURCE = 15
	/**
	 * 暂时不用，
	 */
	GobackSource.GOBACK_QUEUE_SHOP_DETAIL_SOURCE_WM = 16
	/**
	 * 更多－外卖
	 */
	GobackSource.GOBACK_RTORES_SHOP_DETAIL_SOURCE_WM = 17
	/**
	 * 个人中心－我到订单－去支付：18
	 */
	GobackSource.GOBACK_MY_ORDER_GOTO_PAY_SOURCE = 18
	/**
	 * 微信预点餐－登录－HI地盘：20
	 */
	GobackSource.GOBACK_WE_CHAT_HIDP_SOURCE = 20
	/**
	 * 微信小艾机器人查询我的卡包：21
	 */
	GobackSource.GOBACK_WE_CARD_SOURCE = 21
	/**
	 * app更多游戏----登录：22
	 */
	GobackSource.GOBACK_WE_HIGAME_SOURCE = 22
	/**
	 * 微信公众号入口,客服 ：53
	 */
	GobackSource.GOBACK_CUSTOM_SERVICE_SOURCE_HOME = 53
	/**
	 * 微信公众号入口,我的积分 ：54
	 */
	GobackSource.GOBACK_MY_INTEGRAL_SOURCE_HOME = 54
	/**
	 * 微信公众号入口,积分抽奖 ：55
	 */
	GobackSource.GOBACK_INTEGRAL_PRIZE_DRAW_SOURCE_HOME = 55
	/**
	 * 微信公众号入口,我的订单 ：58
	 */
	GobackSource.GOBACK_MY_ORDER_SOURCE_HOME = 58
	/**
	 * 微信公众号入口,积分商城 ：61
	 */
	GobackSource.GOBACK_INTEGRATE_EXCHANGE_NEW_SOURCE_HOME = 61
	/**
	 * 美食互动（回复） :70
	 */
	GobackSource.GOBACK_FOOD_DETAIL_SOURCE_HF = 70
	/**
	 * 任务详情（回复） :70
	 */
	GobackSource.GOBACK_ACTIVITY_RULES_SOURCE_RW = 71
	/**
	 * 详情登录来回跳(订餐) ： 80
	 */
	GobackSource.GOBACK_LOGIN_SHOPDETIL_SOURCE_DC = 80
	/**
	 * 详情登录来回跳(排号) ： 80
	 */
	GobackSource.GOBACK_LOGIN_SHOPDETIL_SOURCE_PH = 81
	/**
	 * 详情登录来回跳(门店) ： 80
	 */
	GobackSource.GOBACK_LOGIN_SHOPDETIL_SOURCE_MD = 82
	/**
	 * 扫一扫页面
	 */
	GobackSource.GOBACK_SAOYISAO_PAGE_SOURCE = 83
	/**
	 * 新排号
	 */
	GobackSource.GOBACK_ORDER_LIST_SOURCEURL = 85
	/**
	 * 来源登录页 978
	 */
	GobackSource.SOURCE_915 = 915
	/**
	 * 来源登录页 978
	 */

	GobackSource.SOURCE_978 = 978
	/**
	 * 来源登录页 979
	 */
	GobackSource.SOURCE_979 = 979
	/**
	 * 来源登录页 918
	 */
	GobackSource.SOURCE_918 = 918
	/**
	 * 来源登录页 919
	 */
	GobackSource.SOURCE_919 = 919
	/**
	 * 来源登录页 920
	 */
	GobackSource.SOURCE_920 = 920
	/**
	 * 来源登录页 930
	 */
	GobackSource.SOURCE_930 = 930
	/**
	 * 来源登录页 929
	 */
	GobackSource.SOURCE_929 = 929
	/**
	 * 来源登录页 980
	 */
	GobackSource.SOURCE_980 = 980
	/**
	 * 来源外卖页-->个人中心－我到订单－去支付：
	 */
	GobackSource.SOURCE_982 = 982
	/**
	 * 来源外卖页-->返回更多页面 983
	 */
	GobackSource.SOURCE_983 = 983
	/**
	 * 来源外卖页 984
	 */
	GobackSource.SOURCE_984 = 984
	/**
	 * 来源登录页 985
	 */
	GobackSource.SOURCE_985 = 985
	/**
	 * 来源登录页 986
	 */
	GobackSource.SOURCE_986 = 986
	/**
	 * 来源登录页 987
	 */
	GobackSource.SOURCE_987 = 987
	/**
	 * 来源登录页 988
	 */
	GobackSource.SOURCE_988 = 988
	/**
	 * 来源登录页 989
	 */
	GobackSource.SOURCE_989 = 989
	/**
	 * 来源登录页 990
	 */
	GobackSource.SOURCE_990 = 990
	/**
	 * 来源登录页 991
	 */
	GobackSource.SOURCE_991 = 991
	/**
	 * 来源登录页 992
	 */
	GobackSource.SOURCE_992 = 992
	/**
	 * 来源登录页 993
	 */
	GobackSource.SOURCE_993 = 993
	/**
	 * 来源登录页 995
	 */
	GobackSource.SOURCE_995 = 995
	/**
	 * 来源登录页 996
	 */
	GobackSource.SOURCE_996 = 996
	/**
	 * 来源登录页 998
	 */
	GobackSource.SOURCE_998 = 998
	/**
	 * 来源登录页 999
	 */
	GobackSource.SOURCE_999 = 999
	/**
	 * 来源登录页 1000
	 */
	GobackSource.SOURCE = 1000

	/**
	 * 来源微信红包领取页面
	 */
	GobackSource.SOURCE_2000 = 2000 // 来源微信红包领取页面

	/**
	 * 来源h5点播页面登录
	 */
	GobackSource.SOURCE_3000 = 3000 // 来源h5点播页面登录

	/**
	 * 来源智岚积分抽奖登录
	 */
	GobackSource.SOURCE_3500 = 3500 // 来源智岚积分抽奖登录
}

/**
 * 获取url中的参数
 */
function getRequestPara() {
	var url = location.search //获取url中"?"符后的字串
	var theRequest = {}
	if (url.indexOf('?') != -1) {
		var str = url.substr(1)
		strs = str.split('&')
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
		}
	}
	return theRequest
}

/**
 * 返回预点餐微信主页
 * @param {Object} baseUrl  传递terminus的根目录，如果已经是根目录传""即可
 */
function gobackWeChatHomePage(baseUrl) {
	window.location.href = baseUrl + 'weChatHome.html'
}
/**
 * 返回到源来页面
 * @param {Object} baseUrl  传递terminus的根目录，如果已经是根目录传""即可
 */
function gobackSourcePage(baseUrl) {
	var sourcePara = GobackSource.SOURCE - parseInt(getRequestPara().sourcePara)
	sourcePageJump(baseUrl, sourcePara, 1)
}
/**
 * 跳转到指定页面
 * @param {Object} baseUrl 传递terminus的根目录，如果已经是根目录传""即可
 */
function gotoJumpPage(baseUrl) {
	var sourcePara = parseInt(getRequestPara().sourcePara)
	sourcePageJump(baseUrl, sourcePara, 1)
}
/**
 * 跳转到指定页面，但需要带参数
 * @param {Object} baseUrl terminus的根目录
 * @param {Object} otherPara 需要其它参数
 */
function gotoJumpParaPage(baseUrl, sourcePara) {
	sourcePageJump(baseUrl, sourcePara, 2)
}

function sourcePageJump(baseUrl, sourcePara, paraIndex) {
	var endUrl = ''
	var locationSearchPara = location.search
	if(paraIndex == 2) {
		locationSearchPara = '?sourcePara=' + sourcePara
	}
	var clearEndUrl = false
	switch(sourcePara) {
		case GobackSource.GOBACK_HOME_PAGE_SOURCE:
			endUrl = 'personl/PersonlIndex.html'
			break
		case GobackSource.GOBACK_ORDER_LIST_SOURCE: //排号列表中的排号按钮
			endUrl = 'reservation/queueFillout.html'
			break
		case GobackSource.GOBACK_ORDER_LIST_SOURCEURL: //新排号列表中的排号按钮
			endUrl = '../paiNo/dist/index.html#/'
			break
		case GobackSource.GOBACK_ORDER_LIST_RECORD_SOURCE: //排号列表中的我的记录按钮
			endUrl = 'personl/myorder.html'
			break
		case GobackSource.GOBACK_CUSTOM_SERVICE_SOURCE: //客服
		case GobackSource.GOBACK_CUSTOM_SERVICE_SOURCE_HOME: //客服
			if(isWeiXin()) {
				endUrl = 'kf.html'
			} else {
				endUrl = 'kf.html'
				//				endUrl = getSuggestUrl();
			}
			baseUrl = ''
			clearEndUrl = true
			break
		case GobackSource.GOBACK_MY_INTEGRAL_SOURCE: //我的积分
		case GobackSource.GOBACK_MY_INTEGRAL_SOURCE_HOME: //我的积分
			endUrl = 'personl/integrate/integrateExchange_new.html'; // 跳转积分商城
			break;
		case GobackSource.GOBACK_INTEGRAL_PRIZE_DRAW_SOURCE: //积分抽奖
			endUrl = 'personl/integrate/intergrateShopdetail.html'
			break
		case GobackSource.GOBACK_INTEGRATE_EXCHANGE_NEW_SOURCE_HOME: //积分抽奖
			endUrl = 'personl/integrate/integrateExchange_new.html'
			break
		case GobackSource.GOBACK_INTEGRAL_PRIZE_DRAW_SOURCE_HOME: //积分抽奖
			endUrl = '../lottery/turntable.html'
			break
		case GobackSource.GOBACK_BEAUTIFUL_PICTURE_PRINT_SOURCE: //美图打印
			endUrl = 'gomeituprint.html'
			break
		case GobackSource.GOBACK_BEAUTIFUL_HIGAME_PRINT_SOURCE: //游戏
			endUrl = 'shopApplication.html'
			break
		case GobackSource.GOBACK_MY_ORDER_SOURCE: //我的订单
		case GobackSource.GOBACK_MY_ORDER_SOURCE_HOME: //我的订单
			endUrl = 'personl/myorder.html'
			break
		case GobackSource.GOBACK_SAOYISAO_PAGE_SOURCE: //扫一扫
			endurl = 'h5app/topic/TopicComment.html'
			break
		case GobackSource.GOBACK_TOPIC_PAGE_SOURCE: //话题详情
			endUrl = 'h5app/topic/TopicComment.html'
			break
		case GobackSource.GOBACK_FOOD_DETAIL_SOURCE: //美食互动
			endUrl = 'h5app/delicacy/FoodComment.html'
			break
		case GobackSource.GOBACK_ACTIVITY_RULES_SOURCE: //任务详情报名
			endUrl = 'h5app/task/MySignUp.html'
			break
		case GobackSource.GOBACK_TASK_COMMENT_SOURCE: //任务详情写评
			endUrl = 'h5app/task/TaskComment.html'
			break

		case GobackSource.GOBACK_ORDER_SHOP_DETAIL_SOURCE: //订餐－门店详情评论
		case GobackSource.GOBACK_QUEUE_SHOP_DETAIL_SOURCE: //排号－门店详情评论
		case GobackSource.GOBACK_MORE_SHOP_DETAIL_SOURCE: //门店(更多)－门店详情评论
			endUrl = 'shopDetail-comment.html'
			break
		case GobackSource.SOURCE_982: //个人中心－我到订单－去支付(需单独处理)
			endUrl =
				'personl/myorder.html?sourcePara=' + GobackSource.GOBACK_MY_ORDER_SOURCE
			clearEndUrl = true
			break
		case GobackSource.SOURCE_980: //微信预点餐－登录－HI地盘：20
			endUrl = 'weChatHome.html'
			break
		case GobackSource.GOBACK_LOGIN_SHOPDETIL_SOURCE_DC:
		case GobackSource.GOBACK_LOGIN_SHOPDETIL_SOURCE_PH:
		case GobackSource.GOBACK_LOGIN_SHOPDETIL_SOURCE_MD:
		case GobackSource.SOURCE_918:
		case GobackSource.SOURCE_919:
		case GobackSource.SOURCE_920:
		case GobackSource.SOURCE_985:
		case GobackSource.SOURCE_986:
		case GobackSource.SOURCE_987:
			endUrl = 'shopDetail.html'
			break
		case GobackSource.GOBACK_ACTIVITY_RULES_SOURCE_RW: //任务详情（回复） :71
		case GobackSource.SOURCE_929:
		case GobackSource.SOURCE_988:
		case GobackSource.SOURCE_989:
			endUrl = 'h5app/task/ActivityRules.html'
			break
		case GobackSource.GOBACK_FOOD_DETAIL_SOURCE_HF: //美食互动（回复） :70
		case GobackSource.SOURCE_930:
		case GobackSource.SOURCE_990:
			endUrl = 'h5app/delicacy/FoodDetail.html'
			break
		case GobackSource.SOURCE_991:
			endUrl = 'h5app/topic/TopicPage.html'
			break
		case GobackSource.SOURCE_995:
			// endUrl = 'personl/integrate/mypointsIndex.html'
			endUrl = 'personl/integrate/integrateExchange_new.html'
			clearEndUrl = true
			break
		case GobackSource.GOBACK_WE_CHAT_HIDP_SOURCE: //微信预点餐－登录－HI地盘：20
		case GobackSource.SOURCE_992:
		case GobackSource.SOURCE_996:
			endUrl = 'personl/PersonlIndex.html'
			clearEndUrl = true
			break
		case GobackSource.GOBACK_WE_CARD_SOURCE: //微信小艾机器人查询我的卡包：21
			endUrl = 'personl/mycard/mycardIndex.html'
			clearEndUrl = true
			break
		case GobackSource.GOBACK_QUEUE_SHOP_DETAIL_SOURCE_WM: //排号－门店详情评论 (点击外卖)：16
		case GobackSource.SOURCE_984:
			endUrl = '../paiNo/dist/index.html'
			break
		case GobackSource.SOURCE_998:
		case GobackSource.SOURCE_999:
			endUrl = '../paiNo/dist/index.html'
			break
		case GobackSource.SOURCE_983: //来源外卖页-->返回更多页面 983
			endUrl = 'more.html'
			break
		case GobackSource.GOBACK_WE_HIGAME_SOURCE:
		case GobackSource.SOURCE_978:
			endUrl = 'more.html'
			break
		case GobackSource.SOURCE_3000: // 跳转h5点播页面
			var customer = JSON.parse(localStorage.getItem('customer_yy') || '{}')
			/*
			networkRequest(CATER_MUSIC_DEDUCT_POINT, {
				customer_key: customer.customerKey1
			}, null, true, function success(response) {
				response = response || {};
			*/
			var data = {}
			data.user_id = customer.customerKey1
			data.sex = customer.sex
			data.user_name = customer.nickName
			data.avatar_url = customer.logo
			data.mobile = customer.mobile
			data.points = 0 //response.point;
			data.deduct_point = 0 //response.deduct_point;

			window.parent.postMessage(data, '*')
			/*
			}, function error(xhr, type, errorThrown) {
				closeLoadding();
				mui.toast("登录失败");
			});
			*/
			return

			break
		case GobackSource.SOURCE_3500: // 跳转h5点播页面
			var customer = JSON.parse(localStorage.getItem('customer_yy') || '{}')
			window.location.href =
				CATER_ZHILAN_LOTTERY_URL +
				'?storeId=' +
				getRequestPara().storeId +
				'&login=true&token=' +
				encodeURIComponent(customer.motoken)
			return

			break
		default:
			endUrl = ''
			break
	}
	if(endUrl == '') {
		//app主页或微信公众号主页
		gobackHomePage(baseUrl)
	} else if(clearEndUrl) {
		window.location.href = baseUrl + endUrl
	} else {
		window.location.href = baseUrl + endUrl + locationSearchPara
		//		window.location.href = baseUrl + endUrl + '?sourcePara=' + sourcePara;
	}
}

function gobackHomePage(baseUrl) {
	if(!isWeiXin()) {
		window.location.href = baseUrl + 'h5app/delicacy/HomePage.html'
	} else {
		if(isZhiFuBao()) {
			AlipayJSBridge.call('closeWebview')
		} else {
			WeixinJSBridge.call('closeWindow') //微信关闭页面
		}
	}
}
/**
 * 判断是否登录，未登录则跳转登录页面
 * @param {Object} baseUrl terminus根目录下
 * @param {Object} sourcePara  是哪里跳转过来的的。默认用：GobackSource.GOBACK_HOME_PAGE_SOURCE
 */
function gotoResignLoginPage(baseUrl, sourcePara) {
  localStorage.setItem('baseUrlData',location.href);
  localStorage.setItem('baseSoucePara',sourcePara);
  if(isCustomerNullBase('wx')) {
    window.location.href = baseUrl + 'resign-login.html?sourcePara=' + sourcePara;
    sleep(500);
  }
}
/**
 * 停顿执行后面数据
 * @param {Object} d  毫秒值
 */
function sleep(d) {
	for (var t = Date.now(); Date.now() - t <= d; );
}

function pushHistory() {
	var url = window.location.href
	var state = {
		title: 'title',
		url: url
	}
	window.history.pushState(state, 'title', url)
}
//－－－－－－－－－－－－－－－－－－－－－页面跳转公共功能－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

//－－－－－－－－－－－－－－－－－－－－－公共弹框1－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

/**
 * 添加并开启公共loading框
 */
function getLoadding() {
	if (null != document.getElementById('loadEffect')) {
		//如果已经有loading加载来，则不再进行loading处理
		return false
	}
	var bodyR = document.getElementsByTagName('html')[0]
	var newdivWrapper = document.createElement('div')
	var newdivR = document.createElement('div')
	var newP = document.createElement('p')
	newP.innerHTML = '正在加载中...'
	newdivWrapper.setAttribute('class', 'loadEffect_wrapper')
	newP.setAttribute('class', 'loadEffect_p')
	newdivR.setAttribute('class', 'loadEffect')
	newdivWrapper.setAttribute('id', 'loadEffect')
	newdivWrapper.style.background = 'rgba(0,0,0,0.5)'

	for (var i = 0; i <= 11; i++) {
		var newspanR = document.createElement('span')
		newdivR.appendChild(newspanR)
	}
	newdivR.appendChild(newP)
	newdivWrapper.appendChild(newdivR)
	bodyR.appendChild(newdivWrapper)
}
/**
 * 关闭公共loading框
 */
function closeLoadding() {
	setTimeout(function() {
		if (null != document.getElementById('loadEffect')) {
			document
				.getElementsByTagName('html')[0]
				.removeChild(document.getElementById('loadEffect'))
		}
	}, 500)
}

//－－－－－－－－－－－－－－－－－－－－－公共弹框2－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
var publicContentText
var Pimg = '<img src="' + img_section_url + 'img/xing.png" class="xingImg" />'
var Pbutton =
	'<button type="button" class="public-alert-button-min button-bottom-left">订外卖</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right">去排号</button>'
//var buttonMax = '<button type="button" class="public-alert-button-max">去点菜</button>';
var buttonMaxTc1 =
	'<button type="button" class="public-alert-button-max">查看订单</button>'
var buttonMaxTc2 =
	'<button type="button" class="public-alert-button-max">知道了</button>'
var buttonMaxTc3 =
	'<button type="button" class="public-alert-button-max">去付款</button>'
var buttonMaxTc4 =
	'<button type="button" class="public-alert-button-max">查看我的订单</button>'

var buttonMin =
	'<button type="button" class="public-alert-button-min button-bottom-left">订外卖</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right">去排号</button>'
var buttonDetermine =
	'<button type="button" class="public-alert-button-min button-bottom-left">取消</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right">确定</button>'
var buttonDeterminePot =
	'<button type="button" class="public-alert-button-min button-bottom-left cancelPot">取消</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right confirmPot">确定</button>'
var buttonGotoPay =
	'<button type="button" class="public-alert-button-min button-bottom-left">查看我的订单</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right">去支付</button>'
var buttonGotoTakeout =
	'<button type="button" class="public-alert-button-min button-bottom-left">查看我的订单</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right">知道了</button>'
var buttonGobackBtn =
	'<button type="button" class="public-alert-button-min button-bottom-left">知道了</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right">返回</button>'
var buttonGobackBtn2 =
	'<button type="button" class="public-alert-button-min button-bottom-left">我的排号</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right">返回</button>'
var goToChooseDishes =
	'<button type="button" class="public-alert-button-min button-bottom-left button_left_dishe">查看订单</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right button_right_dishe">去点菜</button>'
var goToOpenPosition =
	'<button type="button" class="public-alert-button-min button-bottom-left button_left_pos">手动选择地址</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right button_right_pos">知道了</button>'
var buttonMycardmine =
	'<button type="button" class="public-alert-button-min button-bottom-left mycardCancle">取消</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right mycardSure">确定</button>'
var buttonkf =
	'<button type="button" class="public-alert-button-min button-bottom-left wehome">取消</button>' +
	'<button type="button" class="public-alert-button-min button-bottom-right person">首页</button>'

var describe = ''
var describe2 = ''
var describeAdd =
	'<span>请保持电话畅通，客服会尽快与您取得联系！如有疑问拨打4008107107。</span>'
var describeAdd1 = '<span>订餐成功，我们会及时和您联系确认订单信息.</span>'
var describeAdd2 =
	'<span style="margin-top: 0px;">在线支付最高限额3000元，如超限请到门店现场支付!</span>'

var publicContentImg_smile =
	'<img src="' + img_section_url + 'img/Smile.png" />'
var publicContentImg_sad =
	'<img src="' + img_section_url + 'img/sad.png" class="sadImg" />'
var publicContentImg_xing =
	'<img src="' +
	img_section_url +
	'img/xing.png" class="xingImg" />' +
	'<p style="position:absolute;top:112px;">' +
	'<span class="startvalue" style="font-size:20px;display:inline;color:#fff;"></span>' +
	'<span style="font-size:20px;color:#fff;display:inline"> -- </span>' +
	'<span class="endvalue" style="font-size:20px;display:inline;color:#fff;"></span>' +
	'</p>'

//var takeoutDishTime = '<p style="font-size:12px;color: #bc0909;">提示 2017.1.27-2017.1.28暂不受理外送、自取业务</p>';
var takeoutDishTime =
	'<p style="font-size:12px;color: #bc0909; display:none">提示 2017.1.27-2017.1.28暂不受理外送、自取业务</p>'

function popup(variable) {
	switch (variable) {
		case 0:
			publicContentText = '很遗憾,网络订餐已满。'
			Pbutton = buttonMin
			Pimg = publicContentImg_sad
			break
		case 1:
			publicContentText =
				'恭喜您，订座成功！<button type="button" class="mui-btn  Btn OBtn sendOrder analyze_action" style="display: block;margin: 10px auto;border: 1px solid #d34d4d;">发送请柬</button>'
			Pbutton = goToChooseDishes
			Pimg = publicContentImg_smile
			break
		case 2:
			publicContentText = '订单已提交成功！'
			Pbutton = buttonMaxTc1
			Pimg = publicContentImg_smile
			describe = describeAdd
			break
		case 3:
			publicContentText = ''
			Pimg = publicContentImg_xing
			describe = takeoutDishTime
			Pbutton = buttonMaxTc2
			break
		case 4:
			publicContentText = '您是否要放弃当前选择的锅底？'
			Pimg = ''
			Pbutton = buttonDeterminePot
			break
		case 5:
			publicContentText = '您还需要选择锅底和小料吗？'
			Pimg = ''
			Pbutton = buttonDetermine
			break
		case 6:
			publicContentText = '订单已提交成功！'
			Pbutton = buttonMaxTc3
			Pimg = publicContentImg_smile
			describe = describeAdd1
			describe2 = describeAdd2
			break
		case 7:
			publicContentText = '确定取消此订单吗？'
			Pimg = ''
			Pbutton = buttonDetermine
			break
		case 8:
			publicContentText = '确定支付吗?'
			Pimg = ''
			Pbutton = buttonMaxTc3
			break
		case 9:
			publicContentText = '确认删除此条地址吗？'
			Pimg = ''
			Pbutton = buttonDetermine
			break
		case 10:
			publicContentText = '确定删除此发票抬头吗?'
			Pimg = ''
			Pbutton = buttonDetermine
			break
		case 11:
			publicContentText = '没有获取到订单信息，请重新下单!'
			Pimg = ''
			Pbutton = buttonMaxTc4
			break
		case 12:
			publicContentText = '订单已提交成功！'
			Pbutton = buttonMaxTc2
			Pimg = publicContentImg_smile
			describe = describeAdd
			break
		case 13:
			publicContentText = '订单已提交成功！'
			Pbutton = buttonGotoTakeout
			Pimg = publicContentImg_smile
			describe = describeAdd
			break
		case 14:
			publicContentText = '订单已提交成功！'
			Pbutton = buttonGotoPay
			Pimg = publicContentImg_smile
			describe = describeAdd1
			describe2 = describeAdd2
			break
		case 15:
			publicContentText = '提示!'
			Pimg = ''
			Pbutton = buttonGobackBtn
			break
		case 16:
			publicContentText = '提示!'
			Pimg = ''
			Pbutton = buttonGobackBtn2
			break
		case 17:
			publicContentText =
				'请在系统设置中打开“定位服务”允许海底捞外卖获取您的位置， 或手动选择左上角的城市！'
			Pimg = ''
			Pbutton = goToOpenPosition
			break
		case 18:
			publicContentText = '您不是海底捞会员，点击去注册？'
			Pimg = publicContentImg_sad
			Pbutton = buttonDetermine
			break
		case 19:
			publicContentText =
				'<span>温馨提示</span><span>尊敬的顾客，您所购买的欢乐e卡仅限于线上充值。相关发票在门店消费时开具，赠卡类不再开具发票。</span>'
			Pimg = ''
			Pbutton = buttonMycardmine
			break
		case 20:
			publicContentText =
				'亲,您的意见我们已经收到<br/>我们一定会加油努力的奥,么么哒！'
			Pimg = ''
			Pbutton = buttonkf
			break
		case 21:
			publicContentText = '恭喜您，订座成功！'
			Pbutton = goToChooseDishes
			Pimg = publicContentImg_smile
			break
		case 22:
			publicContentText = '订单已提交成功！'
			Pbutton = buttonMaxTc4
			Pimg = publicContentImg_smile
			describe = describeAdd1
			describe2 = describeAdd2
			break
	}

	var publicAlert =
		'<div class="public-alert alert">' +
		'<div class="public-alert-container">' +
		'<div class="public-alert-content">' +
		Pimg +
		'<p>' +
		publicContentText +
		'</p>' +
		describe +
		describe2 +
		'</div>' +
		'</div>' +
		'<div class="public-alert-footer">' +
		Pbutton +
		'</div>' +
		'<div class="close-bg public-alert-close close_alert_window">×</div>' +
		'</div>'

	var backdropS = '<div class="mui-backdrop" style="display: block;"></div>'
	$('body').append(backdropS)
	$('body').append(publicAlert)
	if (
		variable == 5 ||
		variable == 4 ||
		variable == 3 ||
		variable == 15 ||
		variable == 16 ||
		variable == 1 ||
		variable == 17 ||
		variable == 18 ||
		variable == 19 ||
		variable == 20
	) {
		$('.close_alert_window').css('display', 'none')
	}
	//	if(variable == 3){
	//		$('.public-alert-container').css('height','220px');
	//	}
	//	$('.public-alert .close-bg').bind('touched',function(){
	//		$('.mui-backdrop').remove();
	//		$('.alert').remove();
	//	});
	$('.close_alert_window').on('touchstart', function() {
		$('.mui-backdrop').remove()
		$('.alert').remove()
	})

	changeHeight()

	function changeHeight() {
		//		$('.close-bg').css('margin-left',($('.public-alert').width() - $('.close-bg').width())*0.50);
		var windowWidth = $(window).width()
		$('.close-bg').css('margin-left', (windowWidth - 45) / 2.6)
	}
	$(window).resize(function() {
		changeHeight()
	})
}
//关闭上面的popup
function closeAlertPopup() {
	$('.mui-backdrop').remove()
	$(this)
		.parents('.public-alert')
		.remove()
}

/**
 * 一个按钮弹框
 * @param {Object} alertMsg
 * @param {Object} midBtn
 * @param {Object} onMidClick  点击事件监听
 */
function publicAlertMsgOne(alertMsg, midBtn, onMidClick) {
	publicAlertMsg(alertMsg, 1, midBtn, '', onMidClick, null)
}
/**
 *两个按钮弹框
 * @param {Object} alertMsg  头提示信息
 * @param {Object} leftBtn
 * @param {Object} rightBtn
 * @param {Object} onLeftClick
 * @param {Object} onRightClick
 */
function publicAlertMsgTwo(
	alertMsg,
	leftBtn,
	rightBtn,
	onLeftClick,
	onRightClick
) {
	publicAlertMsg(alertMsg, 2, leftBtn, rightBtn, onLeftClick, onRightClick)
}

function publicAlertMsg(
	alertMsg,
	index,
	leftBtn,
	rightBtn,
	onLeftClick,
	onRightClick
) {
	var publicBtn =
		'<button type="button" class="public-alert-button-max">' +
		leftBtn +
		'</button>'
	if (index == 2) {
		publicBtn =
			'<button type="button" class="public-alert-button-min button-bottom-left button_bottom_left">' +
			leftBtn +
			'</button>' +
			'<button type="button" class="public-alert-button-min button-bottom-right button_bottom_right">' +
			rightBtn +
			'</button>'
	}

	var publicAlert =
		'<div class="public-alert alert aler_msg_body">' +
		'<div class="public-alert-container">' +
		'<div class="public-alert-content">' +
		'<img src="' +
		img_section_url +
		'img/Smile.png" /><p>' +
		alertMsg +
		'</p>' +
		'</div>' +
		'</div>' +
		'<div class="public-alert-footer">' +
		publicBtn +
		'</div>' +
		'</div>'

	var backdropS =
		'<div class="mui-backdrop alert_backdrop" style="display: block;"></div>'
	$('body').append(backdropS)
	$('body').append(publicAlert)

	if (index == 2) {
		$('.button_bottom_left').on('touchstart', function() {
			removeAlertMsg()
			if (onLeftClick != null) {
				onLeftClick()
			}
		})
		$('.button_bottom_right').on('touchstart', function() {
			removeAlertMsg()
			if (onRightClick != null) {
				onRightClick()
			}
		})
	} else {
		$('.public-alert-button-max').on('touchstart', function() {
			removeAlertMsg()
			if (onLeftClick != null) {
				onLeftClick()
			}
		})
	}
	var removeAlertMsg = function() {
		$('.alert_backdrop').remove()
		$('.aler_msg_body').remove()
	}
}
//－－－－－－－－－－－－－－－－－－－－－公共弹框－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
//－－－－－－－－－－－－－－－－－－－－－公共功能－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

/*判断是否微信浏览*/
document.onreadystatechange = statechange

function statechange() {
//	if(document.readyState == 'complete') {
	var hheader = document.getElementsByClassName('header-hidden')
	var hshare = document.getElementById('share')
	if (hheader.length > 0 && hheader) {
		if (isWeiXin()) {
			document.getElementsByClassName('clear-margin')[0].style.marginTop = '0'
			document.getElementsByClassName('clear-margin')[0].style.paddingTop = '0'
		} else {
			hheader[0].style.display = 'block'
		}
	} else {
		if (isWeiXin()) {
			document.getElementsByClassName('mui-icon-left-nav')[0].style.display =
				'none'
			if (hshare) {
				hshare.style.display = 'none'
			}
		}
	}

	//微信的话获取以下url中的openid
	if (isWeiXin()) {
		//weixin_user_id=oh3Ysv1Hun1pSfxx9Vwz-s6r6JqA
		var weixin_user_id = getRequestPara().weixin_user_id
		if (weixin_user_id) {
			localStorage.setItem('weixin_user_id', weixin_user_id)
		}
	}
}
//  //MUI禁用Android物理返回键
//  mui.init({
//      keyEventBind: {
//          backbutton: false
//      }
//  });
function isWeiXin() {
	var ua = window.navigator.userAgent.toLowerCase()
	if (
		ua.match(/MicroMessenger/i) == 'micromessenger' ||
		getAppRuntimeContext() == 'TAOBAO'
	) {
		return true
	} else {
		return false
	}
}

function isWeiXin2() {
	var ua = window.navigator.userAgent.toLowerCase()
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true
	} else {
		return false
	}
}

function isZhiFuBao() {
	if (getAppRuntimeContext() == 'TAOBAO') {
		return true
	} else {
		return false
	}
}

function getOs(ua) {
	//var OsObject = "";
	//baiduboxapp  ucbrowser
	if (ua.indexOf('msie') > 0) {
		return 'msie'
		//微信内核
	} else if (ua.indexOf('micromessenger') > -1) {
		return 'micromessenger'
	} else if (ua.indexOf('baiduboxapp') > -1) {
		return 'baiduboxapp'
	} else if (ua.indexOf('ucbrowser') > -1) {
		return 'ucbrowser'
	} else if (ua.indexOf('firefox') > -1) {
		return 'firefox'
	} else if (ua.indexOf('chrome') > -1) {
		return 'chrome'
	} else if (ua.indexOf('presto') > -1) {
		return 'presto '
	} else if (ua.indexOf('safari') > -1) {
		return 'safari'
	} else if (ua.indexOf('camino') > -1) {
		return 'camino'
	} else if (ua.indexOf('gecko/') > -1) {
		return 'gecko'
	} else {
		return 'mozilla'
	}
}
/**获取手机类型*/
function getMType() {
	var ua = navigator.userAgent.toLowerCase()
	if (ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1) {
		return 'iphone'
	} else if (ua.indexOf('ipad') > -1 || ua.indexOf('mac') > -1) {
		return 'ipad'
	} else if (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) {
		return 'android'
	} else {
		return 'web'
	}
}
/**获取手机类型*/
function getMTypeNo() {
	var ua = navigator.userAgent.toLowerCase()
	if (ua.indexOf('micromessenger') > -1) {
		return 'X'
	} else if (ua.indexOf('alipay') > -1) {
		return 'alipay'
	} else if (ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1) {
		return 'S0'
	} else if (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) {
		return 'S1'
	} else {
		return 'W'
	}
}
/**获得浏览器参数*/
function getBrowserInfo() {
	// ua "mozilla/5.0
	var Sys = {}
	var ua = navigator.userAgent.toLowerCase() //.replace("mozilla","");

	//var re = /(msie|firefox|chrome|opera|version|mozilla).*?([\d.]+)/;
	//var m = ua.match(re);
	Sys.browser = getOs(ua) //m[1].replace(/version/, "safari");
	Sys.mType = getMType(ua)
	Sys.userAgent = ua
	var ui = ua.indexOf(Sys.browser) + Sys.browser.length + 1

	Sys.ver = ua.substring(ui)
	Sys.ver = Sys.ver.substring(0, Sys.ver.indexOf(' '))
	return Sys
}

function getNatigator() {
	var ua = window.navigator.userAgent.toLowerCase()
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true
	} else {
		return false
	}
}
/**
 * 获得加密customerkey
 * @param encrypt
 * @returns
 */
function getCustomereEncryKey() {
	if (isCustomerNull()) {
		return ''
	}
	return customer.customerKey2
}
/**
 * 获得加密customerId
 */
function getCustomerId() {
	if (isCustomerNull()) {
		return ''
	}
	return customer.customerId
}

function getCustomereSencondEncryKey() {
	if (isCustomerNull()) {
		return ''
	}
	return encodeURI(customer.customerKey2)
}
/**
 * 获得customerkey
 * @param encrypt
 * @returns
 */
function getCustomerKey() {
	if (isCustomerNull()) {
		return ''
	}
	return customer.customerKey1
}

function getCustomerMobile() {
	if (isCustomerNull()) {
		return ''
	}
	return JSON.parse(window.localStorage.getItem(customer_cachekey)).mobile
}

/** 暂时未用到*/
function getAppRuntimeContext() {
	var ua = window.navigator.userAgent.toLowerCase()
	if (ua.match('micromessenger/') == 'micromessenger/') {
		return 'WEIXIN'
	} else if (ua.match('alipayclient/') == 'alipayclient/') {
		return 'TAOBAO'
	} else if (ua.match('mobile/') == 'mobile/') {
		return 'APP'
	} else if (ua.match('mobile safari/') == 'mobile safari/') {
		return 'WEB'
	}
}

//－－－－－－－－－－－－－－－－－－－－－公共功能－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
function showInfo() {
	var str = ''
	var storage = window.localStorage
	for (var i = 0, len = storage.length; i < len; i++) {
		var key = storage.key(i)
		var value = storage.getItem(key)
		if (
			key == 'common_promotion_carousel' ||
			key == 'common_promotion_listpage1' ||
			key == 'appLoginUserPhone' ||
			key == 'loginUserPhone' ||
			key == 'appLoginUserDate'
		) {
		} else {
			str += key + '=' + value + ','
		}
	}
	return str
}

//初始化调用
initLocalStorageCustomer()

function initLocalStorageCustomer() {
if (customer == null) {
		customer = getLocalStorageCustomer()
	}
}

function getLocalStorageCustomer() {
	var ckey = window.localStorage.getItem(customer_cachekey)
	if (ckey) {
		return JSON.parse(ckey)
	}
}

function clearLocalStorageCustomer() {
	window.localStorage.removeItem(customer_cachekey)
}
function getCookie(name){
  var strcookie = document.cookie;//获取cookie字符串
  var arrcookie = strcookie.split("; ");//分割
  //遍历匹配
  for ( var i = 0; i < arrcookie.length; i++) {
  var arr = arrcookie[i].split("=");
    if (arr[0] == name){
    	return arr[1];
    }
  }
  return "";
}
function delCookie(name) {    
    setCookie(name, "", 1,'/');    
}
function setCookie(c_name,value,expiredays,path) {
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+
  ((path == null)?"":";path="+path);
}
/** 登录对象是否为空*/
function isCustomerNull() {
	return isCustomerNullBase('null')
}
/** 登录对象是否为空  typeData */
function isCustomerNullBase(typeData) {
  var ckey = window.localStorage.getItem(customer_cachekey);
  var weixin_user_id = getRequestPara().weixin_user_id;
  if(weixin_user_id) {
    localStorage.setItem('weixin_user_id', weixin_user_id);
    setCookie('weixin_user_id',weixin_user_id,365,'/');
  }
  if (ckey == null || ckey == '') {
    ckey = unescape(getCookie(customer_cachekey));
    if (ckey != null && ckey != ""){
      window.localStorage.setItem(customer_cachekey,ckey);
  if(customer == null || customer == '') {
    if(ckey == null || ckey == '') {
      return true;
    } else {
      customer = JSON.parse(ckey); //用户对象
    }
  }
  if(customer.token == null) {
    if(ckey == null || ckey == '') {
      return true;
    } else {
      customer = JSON.parse(ckey); //用户对象
    }
  }
  return false;
    } else if (customer == null || customer == "") {
      if (typeData == 'wx') {
        window.location.href = SERVER_URL+"/Cater/terminus/blank-login.html"+location.search;
      } else {
        if(customer == null || customer == '') {
          if(ckey == null || ckey == '') {
            return true;
          } else {
            customer = JSON.parse(ckey); //用户对象
          }
        }
        if(customer.token == null) {
          if(ckey == null || ckey == '') {
            return true;
          } else {
            customer = JSON.parse(ckey); //用户对象
          }
        }
        return false;
      }
    }
  } else {
    if(customer == null || customer == '') {
          if(ckey == null || ckey == '') {
            return true;
          } else {
            customer = JSON.parse(ckey); //用户对象
          }
        }
        if(customer.token == null) {
          if(ckey == null || ckey == '') {
            return true;
          } else {
            customer = JSON.parse(ckey); //用户对象
          }
        }
      return false;
  }
}

/** 获取登录等token*/
function getCustomerToken() {
	var token = ''
	if (!isCustomerNull()) {
		token = customer.token
	}
	return token
}

function getCustomerLogo() {
	var logo = ''
	if (!isCustomerNull()) {
		logo = JSON.parse(window.localStorage.getItem(customer_cachekey)).logo
	}
	return logo
}

function getCustomerNickname() {
	if (!isCustomerNull()) {
		return JSON.parse(window.localStorage.getItem(customer_cachekey)).nickName
	}
	return ''
}

function getCustomerSex() {
	if (!isCustomerNull()) {
		return JSON.parse(window.localStorage.getItem(customer_cachekey)).sex
	}
	return ''
}
//－－－－－－－－－－－－－－－－－－－－－公共网络请求－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
function tokenInfoCheck(result, cur_url, data, callback) {
	return tokenInfoCheck2(result, cur_url, data, callback, 1)
}

function tokenInfoCheck2(result, cur_url, data, callback, tag) {
	if (result && result.hasOwnProperty('command')) {
		if (tag == 1) {
			if (result.command == 'updateinfo') {
				customer.customerKey1 = result.customerKey1
				customer.token = result.token
				data.token = customer.token
				customer.customerKey2 = result.customerKey2
				var str = JSON.stringify(customer)
				//var customer=JSON.parse(data);
				window.localStorage.setItem('lastloginsession', result.sessionid)
				window.localStorage.setItem(customer_cachekey, str)
				ajaxTokenPost2(cur_url, data, callback) //为什么还需要
			} else if (result.command == 'relogin') {
				clearLocalStorageCustomer()
				// window.location.href = CATER_HOME_LOGIN;
				relogin()
			}
		} else {
			clearLocalStorageCustomer()
			// window.location.href = CATER_HOME_LOGIN;
			relogin()
		}
		return false
	} else if (result == null) {
		closeLoadding()
		mui.toast('登录超时，请重新登录！')
		clearLocalStorageCustomer()
		setTimeout(function() {
			// window.location.href = CATER_HOME_LOGIN;
			relogin()
		}, 1000)
		return false
	} else {
		return true
	}
}

/** ajax post提交数据，并对返回结果进行判断是否跳转登录页面处理。可以考虑通用，形成公共调用类 */
var ajaxPost = function(url, data, callback) {
	$.ajax({
		type: REQUEST_METHOD_POST,
		url: url,
		data: data,
		dataType: REQUEST_DATA_TYPE,
		timeout: REQUEST_TIMEOUT,
		headers: CONTENT_TYPE_TEXT,
		async: true,
		success: function(result) {
			if(result.resultMessage && result.resultMessage.messageCode == '8888') {
				// 必须登录
				window.location.href = result.resultData.body.result
			}
			callback(result)
		},
		error: function(xhr, type) {
			closeLoadding()
			log('Ajax error! xhr=>' + JSON.stringify(xhr))
		}
	})
}
/** ajax post 自动为postdata参数添加 token 参数  默认同步访问*/
var ajaxTokenPost = function(url, data, callback) {
	ajaxAsyncTokenPostBase(url, data, callback, null, false, 1)
}
/** ajax post 自动为postdata参数添加 token 参数 */
var ajaxTokenPost2 = function(url, data, callback) {
	ajaxAsyncTokenPostBase(url, data, callback, null, false, 2)
}
//异步访问
var ajaxAsyncTokenPost = function(url, data, successCallback) {
	ajaxAsyncTokenPostBase(url, data, successCallback, null, true, 1)
}
var headdata = {}
var ajaxAsyncTokenPostBase = function(url, data, callback, errorCallback, asyncType, tag) {
	var cur_url = url;

	if(isCustomerNull()) {
		return false;
	}
	customer = JSON.parse(localStorage.getItem(customer_cachekey));
	data.token = customer.token;
	$.ajax({
		url: url,
		data: data,
		type: REQUEST_METHOD_POST,
		dataType: REQUEST_DATA_TYPE,
		timeout: REQUEST_TIMEOUT,
		headers: CONTENT_TYPE_TEXT,
		async: asyncType,
		success: function(result) {
			if(result && result.hasOwnProperty("command")) {
				if(tag == 1) {
					if(result.command == "updateinfo") {
						customer.customerKey1 = result.customerKey1;
						customer.token = result.token;
						data.token = customer.token;
						customer.customerKey2 = result.customerKey2;
						var str = JSON.stringify(customer);
						window.localStorage.setItem("lastloginsession", result.sessionid);
						window.localStorage.setItem(customer_cachekey, str);
						ajaxTokenPost2(cur_url, data, callback); //为什么还需要
					} else if(result.command == "relogin") {
						clearLocalStorageCustomer();
						relogin();
					}
				} else {
					clearLocalStorageCustomer();
					relogin();
				}
				return false;
			} else if(result == null) {
				closeLoadding();
				mui.toast("登录超时，请重新登录！");
				clearLocalStorageCustomer();
				setTimeout(function() {
					relogin();
				}, 1000);
				return false;
			} else {
				callback(result);
			}
		},
		error: function(xhr, type) {
			closeLoadding();
			log('Ajax error! xhr=>' + xhr);
			if(errorCallback != null) {
				errorCallback(xhr, type);
			} else {
				//        publicAlertMsgOne('登录超时请重新　~_~', "知道啦", null);
				clearLocalStorageCustomer();
				// window.location.href = CATER_HOME_LOGIN;
				relogin();
			}
		}
	});
}

function getOffetTop(element) {
	var offset = $(element).offset()
	if(undefined != offset) {
		return offset.top
	} else {
		return 0
	}
}
  

//log日志方法封装
function log(msg) {
	if (DEBUG) {
		console.log(msg)
	}
}

//－－－－－－－－－－－－－－－－－－－－－公共网络请求－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
var networkRequest = function(url, data, contentType, isAsync, successCallback, failCallback) {
	networkRequestType(url, data, contentType, isAsync, successCallback, failCallback, REQUEST_DATA_TYPE);
}

/** ajax post 异步请求，并对返回结果进行判断是否跳转登录页面处理。可以考虑通用，形成公共调用类 */
var networkRequestType = function(url, data, contentType, isAsync, successCallback, failCallback, requestDataType) {
	if(url === "" || url === null) {
		mui.alert("请求地址为空");
	}

	var mContentType = "";
	if(contentType != null) {
		mContentType = contentType;
	} else {
		mContentType = CONTENT_TYPE_TEXT; //默认为文本模式
	}
	var mData = {};
	if(data != null) {
		mData = data;
	}
	$.ajax({
		type: REQUEST_METHOD_POST,
		dataType: requestDataType,
		data: mData,
		url: url,
		async: isAsync,
		headers: mContentType,
		success: function(result) {
			successCallback(result);
		},
		error: function(xhr, type, errorThrown) {
			if(failCallback == null) {
				log('Ajax error! xhr=>' + JSON.stringify(xhr));
				closeLoadding();
				mui.toast("网络异常，请稍后再试！");
			} else {
				failCallback(xhr, type, errorThrown);
			}
		}
	});
};
/**
 * 从服务器上加载切片
 * @param {Object} data 图片数据  key img标签的id  value 图片路径
 */
function loadSectionImg(data) {
	if (data) {
		mui.each(data, function(key, value) {
			$('#' + key).attr('src', img_section_url + value)
		})
	}
}
/**
 * 从服务器上加载切片
 * @param {Object} data 图片数据  key img标签的id  value 图片路径
 */
function loadSectionBg(data) {
	if (data) {
		mui.each(data, function(key, value) {
			$('#' + key).css('background', 'url(' + img_section_url + value + ')')
			$('#' + key).css('backgroundRepeat', 'no-repeat')
			$('#' + key).css('backgroundSize', 'cover')
		})
	}
}
/**
 * 未获取到图片则用默认图片
 * @param {Object} data
 */
function loadDefultImg() {
	var img = event.srcElement
	img.src = img_section_url + 'img/shopHead-Defult.png'
	img.onerror = null
}

/**
 *
 * 埋点统计
 */
function maiDianStatistics($el) {
	var code = $el.attr('data-code')
	var description = $el.attr('description')
	if(!code) {
		return
	}
	var buNodeType = $el.get(0).tagName //节点类型
	var endAtString = new Date().getTime()

	var version = ''
	var mType = getMType() //系统类型
	var uuid = ''
	var userLocation = sessionStorage.getItem('takeout.city.cuspoint')
	var reqFrom = ''
	var model = ''
	var vendor = ''
	if(isWeiXin2()) {
		//微信
		uuid = localStorage.getItem('weixin_user_id') //微信的openId
		reqFrom = 'wx'
	} else if(isZhiFuBao()) {
		//支付宝
		uuid = localStorage.getItem('alipayUserId') //支付宝用户id;
		reqFrom = 'ali'
	} else {
		//app
		uuid = localStorage.getItem('sys_uuid')
		if(!uuid) {
			getUserSysInfo()
			uuid = localStorage.getItem('sys_uuid')
		}
		if(uuid) {
			reqFrom = 'app'
			version = localStorage.getItem('sys_version')
			model = localStorage.getItem('sys_model') //设备型号
			vendor = localStorage.getItem('sys_vendor') //设备型号
		} else {
			reqFrom = 'web'
		}
	}
	localStorage.setItem('reqFrom', reqFrom)
	var data = {
		lastButtonCode: code, //埋点编码
		buDesction: description, //埋点描述
		buNodeType: buNodeType, //节点类型：如li div
		userLocation: userLocation, //用户当前定位经纬度
		endAt: endAtString, //触发时间
		customerkey: getCustomerKey(), //用户唯一标识
		pNumber: getCustomerMobile(), //用户手机号
		sex: getCustomerSex(), //用户性别
		version: version, //系统版本号
		mType: mType, //系统类型 安卓、ios
		uuid: uuid, //设备唯一标识
		model: model, //设备型号
		vendor: vendor, //设备型号
		dataSource: reqFrom //数据来源,如：微信：wx ,支付宝：ali ,app:app
	}

	log('当前点击埋点数据:' + JSON.stringify(data))
	saveLocalStorage(data)
}

//将埋点缓存到本地
function saveLocalStorage(data) {
	if (data) {
		var tempJson = parseStringToJsonObj()
		if (tempJson) {
			tempJson.push(data)
			localStorage.setItem('maidian', JSON.stringify(tempJson))
		} else {
			var tempJosnArry = []
			tempJosnArry.push(data)
			localStorage.setItem('maidian', JSON.stringify(tempJosnArry))
		}
		var size = isMaidianCacheSize()
		if (size >= 1) {
			sendMaidianToServer()
		}
	}
}

//清楚本地埋点缓存
function removeLocalStorage() {
	localStorage.removeItem('maidian')
}

//将埋点从字符串解析成json对象
function parseStringToJsonObj() {
	var maidianStr = localStorage.getItem('maidian')
	if (maidianStr) {
		return JSON.parse(maidianStr)
	}
	return null
}

//获取本地缓存数据的大小
function isMaidianCacheSize() {
	var tempJson = parseStringToJsonObj()
	if (tempJson) {
		return tempJson.length
	}
	return 0
}

function getUserSysInfo() {
	try {
		//获取并保存设备和系统相关信息
		localStorage.setItem('sys_model', plus.device.model) //设备型号
		localStorage.setItem('sys_vendor', plus.device.vendor) //设备型号
		localStorage.setItem('sys_uuid', plus.device.uuid) //UUID
		localStorage.setItem('sys_version', plus.os.version) //
		localStorage.setItem('sys_name', plus.os.name) //
	} catch (e) {
		//TODO handle the exception
	}
}

//把埋点发送到埋点服务器
function sendMaidianToServer() {
	var data = parseStringToJsonObj()
	var list = {
		dataList: JSON.stringify(data),
		reqFrom: localStorage.getItem('reqFrom')
	}
	$.ajax({
		url: MAI_DIAN_URL,
		data: list,
		dataType: REQUEST_DATA_TYPE,
		type: REQUEST_METHOD_POST,
		timeout: REQUEST_TIMEOUT,
		headers: CONTENT_TYPE_TEXT,
		async: true,
		success: function(result) {
			removeLocalStorage()
		},
		error: function(xhr, type) {
			if (SERVER_URL == 'http://wect.haidilao.com') {
				removeLocalStorage()
			}
		}
	})
}

function getSuggestUrl() {
	return (
		SUGGEST_BASE_URL +
		getCustomerMobile() +
		'/' +
		encodeURIComponent(getCustomerNickname())
	)
}

function relogin() {
	var sourcePara = getRequestPara().sourcePara,
		skipUrl

	if (sourcePara == '3500')
		skipUrl = CATER_HOME_MOBILE_LOGIN + '?sourcePara=' + sourcePara
	else skipUrl = CATER_HOME_LOGIN

	window.location.href = skipUrl
}