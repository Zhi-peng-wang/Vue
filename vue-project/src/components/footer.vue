<template>
  <footer>
    <p>{{bootom}}</p>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    data () {
      return {
        bootom:"footer 2019 vue Demo"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    background: #222222;
    padding: 6px;
  }
  p{
    text-align: center;
    color: lightgreen;
  }
</style>
