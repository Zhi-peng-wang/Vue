var one = new Vue({
    el:"#vue-app-one",
    data:{
        title:"app one 内容"
    },
    methods:{

    },
    computed:{
        greet:function () {
            return "hello one"
        }
    }
});
var two = new Vue({
    el:"#vue-app-two",
    data:{
        title: "app two 内容"
    },
    methods:{
        change:function () {
            one.title = "已经改变名字了"
        }
    },
    computed:{
        greet:function () {
            return "hello two"
        }
    }
});

two.title = "网页加载时已经改变"
