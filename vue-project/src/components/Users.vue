<template>
  <div class="users">
    <ul>
      <li v-for="user in users">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"users",
    data(){
      return{
        users:['mike','hony','joy']
      }
    }
  }
</script>

<style scoped>

</style>
