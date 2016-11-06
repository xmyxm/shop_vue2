// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


//引入页面模块
import Hello from './components/Hello.vue'
import DataTest from './components/DataTest.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Sort from './components/SortBlock.vue'
import Cart from './components/CartBlock.vue'
import User from './components/UserBlock.vue'
import Login from './components/Login.vue'
//引入UI模块
import ui_num from './ui-components/ui-num.vue'
import ui_switch from './ui-components/ui-switch.vue'
import TestBlock from './components/TestBlock'
//引入路由
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// store 只需要在根组件引入一次
import store from './vuex/store.js'

//注册router组件
Vue.use(VueRouter)
Vue.use(VueResource)

//路由集合
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail/:id',
    name:'detail',
    component: Detail
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/test',
    component: TestBlock
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/home'
  }
];

//实例化路由对象
const router  = new VueRouter({
	base: '/admin/',
	mode: 'history',
	linkActiveClass: 'is-active',
	routes
});


//开启路由
//router.start(App,'#app')

router.beforeEach((to, from, next) => {
	//console.log(to);
	//console.log(from);
	//console.log(next);
  if(/(cart|user)/.test(to.path)){
      const user = store.getters.getUser;
      if (user && user.id >0) {
        console.log('用户ID：'+user.id);
        next()
      } else {
        //console.log('插入user对象');
        // store.commit('UPDATEUSER', {id:5421});
        // 判断是否登录，（可以通过接口，Vuex状态 token）
         next('/login')
      }
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
