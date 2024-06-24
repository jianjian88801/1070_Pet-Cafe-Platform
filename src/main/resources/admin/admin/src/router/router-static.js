import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discusschongwuxinxi from '@/views/modules/discusschongwuxinxi/list'
    import chongwuxinxi from '@/views/modules/chongwuxinxi/list'
    import kanhufuwu from '@/views/modules/kanhufuwu/list'
    import discusskafeicaipin from '@/views/modules/discusskafeicaipin/list'
    import chongwutiyan from '@/views/modules/chongwutiyan/list'
    import caipinleixing from '@/views/modules/caipinleixing/list'
    import zhoubianshangpin from '@/views/modules/zhoubianshangpin/list'
    import shangpinruku from '@/views/modules/shangpinruku/list'
    import jiankangzhuangkuang from '@/views/modules/jiankangzhuangkuang/list'
    import storeup from '@/views/modules/storeup/list'
    import kanhushi from '@/views/modules/kanhushi/list'
    import discusszhoubianshangpin from '@/views/modules/discusszhoubianshangpin/list'
    import shangpingoumai from '@/views/modules/shangpingoumai/list'
    import kafeicaipin from '@/views/modules/kafeicaipin/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chongwudingdan from '@/views/modules/chongwudingdan/list'
    import hudongxiangmu from '@/views/modules/hudongxiangmu/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import config from '@/views/modules/config/list'
    import caipindingdan from '@/views/modules/caipindingdan/list'
    import chongwujiyang from '@/views/modules/chongwujiyang/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/discusschongwuxinxi',
        name: '宠物信息评论',
        component: discusschongwuxinxi
      }
      ,{
	path: '/chongwuxinxi',
        name: '宠物信息',
        component: chongwuxinxi
      }
      ,{
	path: '/kanhufuwu',
        name: '看护服务',
        component: kanhufuwu
      }
      ,{
	path: '/discusskafeicaipin',
        name: '咖啡菜品评论',
        component: discusskafeicaipin
      }
      ,{
	path: '/chongwutiyan',
        name: '宠物体验',
        component: chongwutiyan
      }
      ,{
	path: '/caipinleixing',
        name: '菜品类型',
        component: caipinleixing
      }
      ,{
	path: '/zhoubianshangpin',
        name: '周边商品',
        component: zhoubianshangpin
      }
      ,{
	path: '/shangpinruku',
        name: '商品入库',
        component: shangpinruku
      }
      ,{
	path: '/jiankangzhuangkuang',
        name: '健康状况',
        component: jiankangzhuangkuang
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/kanhushi',
        name: '看护师',
        component: kanhushi
      }
      ,{
	path: '/discusszhoubianshangpin',
        name: '周边商品评论',
        component: discusszhoubianshangpin
      }
      ,{
	path: '/shangpingoumai',
        name: '商品购买',
        component: shangpingoumai
      }
      ,{
	path: '/kafeicaipin',
        name: '咖啡菜品',
        component: kafeicaipin
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/chongwudingdan',
        name: '宠物订单',
        component: chongwudingdan
      }
      ,{
	path: '/hudongxiangmu',
        name: '互动项目',
        component: hudongxiangmu
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/caipindingdan',
        name: '菜品订单',
        component: caipindingdan
      }
      ,{
	path: '/chongwujiyang',
        name: '宠物寄养',
        component: chongwujiyang
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
