<template>
  <div class="users">
    <ul>
      <li v-for="user in u" v-on:click="user.show=!user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteUser">删除</button>
  </div>
</template>
<!--
     传值：string, number, boolean
     引用：array，object
-->
<script>
  export default {
    name:"users",
    // props:["u"],  不是官方文档的写法
    props:{
      u:{
        //类型为数组
        type:Array,
        //是否规整
        required:true
      }
    },
    data(){
      return{

      }
    },
    methods:{
      deleteUser:function () {
        this.u.pop();
      }
    }
  }
</script>

<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222222;
    margin: 10px;
  }
</style>
