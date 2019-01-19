// 实例化vue对象
new Vue({
    el: "#vue-app",
    data:{
        name : "王志鹏你真帅！加油",
        job : "前端开发",
        web:"http://www.baidu.com",
        web2:"<a href='https://www.baidu.com/'>baidu</a>"
    },
    methods:{
        greet : function (time) {
            // alert("good"+time+"! "+this.name);
        }
    }
});

/*
* el : element 需要获取的元素，一定是html中的根容器元素
* data : 用于数据的储存
* methods : 用户存储各种方法
* */
