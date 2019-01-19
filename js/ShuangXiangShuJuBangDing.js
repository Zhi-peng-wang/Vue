new Vue({
    el:"#vue-app",
    data:{
        name:"hello",
        age:""
    } ,
    methods:{
        logName:function () {
            // console.log("你正在输入姓名");
            // console.log(this.$refs.name.value);
            //此方法采用获取
            // this.name=this.$refs.name.value;

        },
        logAge:function () {
            // console.log("你正在输入年龄");
            //此方法采用获取
            // this.age=this.$refs.age.value;

        },
    }
});