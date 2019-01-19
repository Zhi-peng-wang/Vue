new Vue({
    el:"#vue-app",
    data:{
        a:0,
        b:0,
        age:20
    },
    methods:{//此方法中如果一个方法被使用则，所有的方法都会被执行，与computed进行比较
        // addToA:function () {
        //     console.log("add to A");
        //     return this.a + this.age;
        // },
        // addToB:function () {
        //     console.log("add to B");
        //     return this.b + this.age;
        // }
    },
    computed:{//计算属性，此方法相比于methods方法更加优化
        addToA:function () {
            return this.a + this.age;
        },
        addToB:function () {
            return this.b + this.age;
        }
    }
});