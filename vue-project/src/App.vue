<!--1.模板：html结构-->
<template>
  <div id="app">
    <ul>
      <!--使用a标签页面会自动刷新，所以不采用-->
      <!--<li><a href="/">home</a></li>-->
      <!--<li><a href="/helloworld">helloworld</a></li>-->
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/helloworld">helloworld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<!--2.行为：处理逻辑-->
<script>

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{

  },
}
</script>
<!--3.样式：解决样式-->
<!--//scoped 的意思是，该样式只在本域实现，如果去掉所有相关标签都会采用该样式-->
<style scoped>

</style>
