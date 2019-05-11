export default {
    state:{
        list : []
    },  
    mutations:{
        listAdd(state,params){
            state.list.push(params)
        }
    },
    actions:{
        listAdd(state, params) {
            fetch("https://api1.34580.com/sz/product/detail?accesstoken=384eb6e0fd6dff1a&customerguid=5fc281aa-f73a-4fc9-b652-1ac1495bbe18&sourcetype=9&ssuId=" + params)
            .then(res => {
                return res.json();
            })
            .then(res => {
                state.commit("listAdd",res.result.productInfo)
            });
        }
    }
}