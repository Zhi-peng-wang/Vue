<!--1.模板：html结构-->
<template>
  <div id="home">
    <!--// 子组件向父组件事件绑定 updateTitle($event) $event格式一定要这样写-->
    <app v-bind:title="title" v-on:titleChanged="updateTitle($event)"></app>
    <!--//u表示自定义去名称  users表示下面数据-->
    <!--//绑定数据，到对应的组件中，使用props获取-->
    <users v-bind:u="users"></users>
    <users v-bind:u="users"></users>
    <foot v-bind:title="title"></foot>
  </div>
</template>
<!--2.行为：处理逻辑-->
<script>
  // 局部注册组件
  import Users from './Users'
  import headers from './header'
  import footer from './footer'

  export default {
    name: 'home',
    data(){
      return{
        users:[
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          // {name:"hery",position:"web项目开发",show:false},
          {name:"hery",position:"web项目开发",show:false},
        ],
        title:"传递的是一个值，（number, string, boolean）"
      }
    },
    methods:{
      //e为形参 就是子组件向父组件传的值
      updateTitle:function (e) {
        this.title = e;
      }
    },
    // beforeCreate:function () {
    //   alert("组件实例化之前执行的函数");
    // },
    // created:function () {
    //   alert("组件实例化完毕，但是页面还未展示");
    // },
    // beforeMount:function () {
    //   alert("组件挂载前，页面仍未展示，但是虚拟Dom已经配置");
    // },
    // mounted:function () {
    //   alert("组件挂载后，此方法执行后，页面显示");
    // },
    // beforeUpdate:function () {
    //   alert("组件更新前，页面仍未更新，但是虚拟Dom已经配置");
    // },
    // updated:function () {
    //   alert("组件更新，此方法执行后，页面显示");
    // },
    // beforeDestroy:function () {
    //   alert("组件销毁前");
    // },
    // destroyed:function () {
    //   alert("组件销毁");
    // },
    //局部注册组件，要注册组件
    components:{
      //随意取得名称：导入的名称
      "users":Users,
      'app':headers,
      'foot':footer
    },
    //请求网络数据，在组件实例化完毕，但是页面还未展示时，采到数据
    created(){
      this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
        this.users = data.body;
      })
    }
  }
</script>
<!--3.样式：解决样式-->
//scoped 的意思是，该样式只在本域实现，如果去掉所有相关标签都会采用该样式
<style scoped>
  h1{
    color: red;
  }
</style>
