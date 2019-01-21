// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
// import Users from './components/Users'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
//配置路由
const router = new VueRouter({
  //在vue2.0中这里是routes而不是routers，否则<router-view>标签是真的不会显示的
  routes:[
    {path:'/',component:Home},
    {path:'/helloworld', component:HelloWorld},
  ],
  mode:"history"
});

//全局注册组件
// Vue.component("users", Users);



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
});
//index.html -> main.js ->App.vue
