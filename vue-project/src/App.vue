<!--1.模板：html结构-->
<template>
  <div id="app">
    <app></app>
    <users></users>
    <foot></foot>
  </div>
</template>
<!--2.行为：处理逻辑-->
<script>
// 局部注册组件
  import Users from './components/Users'
  import headers from './components/header'
import footer from './components/footer'

export default {
  name: 'App',
  data(){
    return{
      title:"这是我的第一个vue脚手架项目",
    }
  },
  //局部注册组件，要注册组件
  components:{
    //随意取得名称：导入的名称
    "users":Users,
    'app':headers,
    'foot':footer
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
