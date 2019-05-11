export default {
    state:{
      arr_s:[],
    
    },
    mutations:{
      setLink(state,payload){
          state.arr_s=payload;
      }
    },
    actions:{
     getLink(context,id){
        fetch(`https://api1.34580.com/sz/ProductRequests/ProductMultiConditionRequest?accesstoken=ca410a7553d179e2&customerguid=39729f69-f31c-49fd-a7d1-675dcd9dbacc&sourcetype=9&json=%7B%22CategoryIds%22:[${id}],%22PageIndex%22:1,%22PageSize%22:20,%22OrderDirectionType%22:0,%22OrderFieldType%22:0,%22sourcetype%22:%229%22%7D`).then((res)=>{
            return res.json()
        }).then((res)=>{
            context.commit("setLink",res.Data.SourceData)
        })
     }
    },
    getters:{

    }
}