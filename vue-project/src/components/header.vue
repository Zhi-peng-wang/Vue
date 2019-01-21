<template>
  <header v-on:click="changeTitle">
    <h1>{{title1}}{{title}}</h1>
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    props:{
      title: {
        type:String
      }
    },
    data () {
      return {
        title1:"vue.js Demo"
      }
    },
    methods:{
      changeTitle:function () {
        // this.title="这是传值"
        //首先注册一个事件 "事件名称",  "子组件向父组件传的内容是啥"
        //在父组件中将该事件绑定实现
        this.$emit("titleChanged","子组件向父组件传值了");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
  h1{
    text-align: center;
    color: #222222;
  }
</style>
