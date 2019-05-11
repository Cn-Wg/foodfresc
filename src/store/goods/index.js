export default {
    state: {
        todo:localStorage.cartInfo ? JSON.parse(localStorage.cartInfo) : [],
        allComplete: true
    },
    getters: { //显示总的钱 显示总的数量
        money(state) {
            var money = 0;
            state.todo.forEach((item) => {
                if (item.published) {
                    money += item.salesQuantityStart * (item.unitPeriodMoney*10)/10 ;
                }
            })
            return money;
        },
        sum(state) {
            var sum = 0;
            state.todo.forEach((item) => {
                if (item.published) {
                    sum += item.salesQuantityStart;
                }
            })
            return sum;

        },
        arr(state) {
            var arr = true
            state.todo.filter((item) => {
                if (!item.published) {
                    arr = false;
                } else {
                    arr = true
                }
                return state.allComplete = arr
            })
        },

    },
    mutations: {
        listAdd(state, obj) {
            console.log(obj)
            // if (state.todo.length === 0) {
                localStorage.cartInfo = JSON.stringify(state.todo)
            //     return;
            // }
            // var flag = false; //false 表示加入的商品在购物车中不存在
            // state.todo.forEach((item) => {
            //     if (item.pictureId === obj.pictureId) { //加入的商品在购物车中存在
            //         item.salesQuantityStart++
            //         flag = true;
            //     }
            // })
            // if (!flag) {
            //     localStorage.cartInfo = JSON.stringify(state.todo)
            // }
            console.log(state.todo)
        },

        remove(state, id) {
            state.todo.splice(id,1)
        },
        statechange(state, value) {
            state.todo.map(item => {
                item.published = value
            })
        },
        change(state, obj) {
     
            state.todo.forEach((item) => {
                if (item.pictureId === obj.id) {
                    
                    if (obj.flag) {
                        item.salesQuantityStart++
                    } //flag 是true +1  false -1
                    else {
                        if (item.salesQuantityStart > 0) {
                            item.salesQuantityStart--
                        }
                    }
                }
            })
        },
<<<<<<< HEAD
=======
        changeIndex(state, index) {
            state.curIndex = index;
        },
        listAdd(state,params){
            console.log(params)
        }

>>>>>>> zx
    },
    actions: {

    }
}