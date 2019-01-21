Vue.component("greeting",{
    template:"<p>{{name}}:大家好，介绍一下这是我的女朋友 <button v-on:click='changeName'>改名</button></p>",
    data:function () {
        return{
            name:"梓鹏",
        }
    },
    methods:{
        changeName:function () {
            this.name = "zipeng"
        }
    }
});
new Vue({
    el:"#vue-app-one"

});
new Vue({
    el:"#vue-app-two"

});