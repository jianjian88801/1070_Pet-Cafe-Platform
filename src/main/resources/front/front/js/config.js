
var projectName = '宠物咖啡馆平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '咖啡菜品',
	url: './pages/kafeicaipin/list.html'
}, 
{
	name: '宠物信息',
	url: './pages/chongwuxinxi/list.html'
}, 
{
	name: '周边商品',
	url: './pages/zhoubianshangpin/list.html'
}, 

]

var adminurl =  "http://localhost:8080/springbootx9rzc/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"看护师","menuJump":"列表","tableName":"kanhushi"}],"menu":"看护师管理"},{"child":[{"buttons":["查看","修改","删除","新增","查看评论"],"menu":"咖啡菜品","menuJump":"列表","tableName":"kafeicaipin"}],"menu":"咖啡菜品管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"菜品类型","menuJump":"列表","tableName":"caipinleixing"}],"menu":"菜品类型管理"},{"child":[{"buttons":["查看","删除","审核"],"menu":"菜品订单","menuJump":"列表","tableName":"caipindingdan"}],"menu":"菜品订单管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"宠物信息","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息管理"},{"child":[{"buttons":["查看","删除","查看评论"],"menu":"宠物体验","menuJump":"列表","tableName":"chongwutiyan"}],"menu":"宠物体验管理"},{"child":[{"buttons":["审核","查看","删除"],"menu":"宠物订单","menuJump":"列表","tableName":"chongwudingdan"}],"menu":"宠物订单管理"},{"child":[{"buttons":["查看","删除","审核"],"menu":"宠物寄养","menuJump":"列表","tableName":"chongwujiyang"}],"menu":"宠物寄养管理"},{"child":[{"buttons":["查看","删除"],"menu":"健康状况","menuJump":"列表","tableName":"jiankangzhuangkuang"}],"menu":"健康状况管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"互动项目","menuJump":"列表","tableName":"hudongxiangmu"}],"menu":"互动项目管理"},{"child":[{"buttons":["查看"],"menu":"看护服务","menuJump":"列表","tableName":"kanhufuwu"}],"menu":"看护服务管理"},{"child":[{"buttons":["查看","修改","删除","新增","查看评论","入库"],"menu":"周边商品","menuJump":"列表","tableName":"zhoubianshangpin"}],"menu":"周边商品管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商品类型","menuJump":"列表","tableName":"shangpinleixing"}],"menu":"商品类型管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"商品购买","menuJump":"列表","tableName":"shangpingoumai"}],"menu":"商品购买管理"},{"child":[{"buttons":["查看","删除"],"menu":"商品入库","menuJump":"列表","tableName":"shangpinruku"}],"menu":"商品入库管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","点单"],"menu":"咖啡菜品列表","menuJump":"列表","tableName":"kafeicaipin"}],"menu":"咖啡菜品模块"},{"child":[{"buttons":["查看","体验","寄养"],"menu":"宠物信息列表","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息模块"},{"child":[{"buttons":["查看","购买"],"menu":"周边商品列表","menuJump":"列表","tableName":"zhoubianshangpin"}],"menu":"周边商品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"咖啡菜品","menuJump":"列表","tableName":"kafeicaipin"}],"menu":"咖啡菜品管理"},{"child":[{"buttons":["查看","支付"],"menu":"菜品订单","menuJump":"列表","tableName":"caipindingdan"}],"menu":"菜品订单管理"},{"child":[{"buttons":["宠物体验"],"menu":"宠物信息","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息管理"},{"child":[{"buttons":["查看","查看评论","删除","购买"],"menu":"宠物体验","menuJump":"列表","tableName":"chongwutiyan"}],"menu":"宠物体验管理"},{"child":[{"buttons":["查看","支付","寄养","删除"],"menu":"宠物订单","menuJump":"列表","tableName":"chongwudingdan"}],"menu":"宠物订单管理"},{"child":[{"buttons":["查看","删除"],"menu":"宠物寄养","menuJump":"列表","tableName":"chongwujiyang"}],"menu":"宠物寄养管理"},{"child":[{"buttons":["查看"],"menu":"健康状况","menuJump":"列表","tableName":"jiankangzhuangkuang"}],"menu":"健康状况管理"},{"child":[{"buttons":["查看"],"menu":"看护服务","menuJump":"列表","tableName":"kanhufuwu"}],"menu":"看护服务管理"},{"child":[{"buttons":["商品购买"],"menu":"周边商品","menuJump":"列表","tableName":"zhoubianshangpin"}],"menu":"周边商品管理"},{"child":[{"buttons":["查看","支付"],"menu":"商品购买","menuJump":"列表","tableName":"shangpingoumai"}],"menu":"商品购买管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","点单"],"menu":"咖啡菜品列表","menuJump":"列表","tableName":"kafeicaipin"}],"menu":"咖啡菜品模块"},{"child":[{"buttons":["查看","体验","寄养"],"menu":"宠物信息列表","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息模块"},{"child":[{"buttons":["查看","购买"],"menu":"周边商品列表","menuJump":"列表","tableName":"zhoubianshangpin"}],"menu":"周边商品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["查看评论"],"menu":"宠物体验","menuJump":"列表","tableName":"chongwutiyan"}],"menu":"宠物体验管理"},{"child":[{"buttons":["查看","健康状况","看护服务"],"menu":"宠物寄养","menuJump":"列表","tableName":"chongwujiyang"}],"menu":"宠物寄养管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"健康状况","menuJump":"列表","tableName":"jiankangzhuangkuang"}],"menu":"健康状况管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"看护服务","menuJump":"列表","tableName":"kanhufuwu"}],"menu":"看护服务管理"}],"frontMenu":[{"child":[{"buttons":["查看","点单"],"menu":"咖啡菜品列表","menuJump":"列表","tableName":"kafeicaipin"}],"menu":"咖啡菜品模块"},{"child":[{"buttons":["查看","体验","寄养"],"menu":"宠物信息列表","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息模块"},{"child":[{"buttons":["查看","购买"],"menu":"周边商品列表","menuJump":"列表","tableName":"zhoubianshangpin"}],"menu":"周边商品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"是","roleName":"看护师","tableName":"kanhushi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
