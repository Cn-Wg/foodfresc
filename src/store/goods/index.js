export default {
  state: {
         todo:[
             {
             id:1,
             title:'http://picpro-sz.34580.com/sz/ImageUrl/147886/120.jpeg',
             complete:true,
             name:"【两杯装】八喜香草口味冰淇淋283g/杯【两杯装】八喜香草口味冰淇淋283g",
             pee:"283g*2杯/组",
             price:"45.0",
             sum:1
            },
            {
                id:2,
                title:'http://picpro-sz.34580.com/sz/ImageUrl/147886/120.jpeg',
                complete:true,
                name:"【两杯装】八喜香草口味冰淇淋283g/杯【两杯装】八喜香草口味冰淇淋283g",
                pee:"283g*2杯/组",
                price:"45.0",
                sum:1
            },
         ]
  },
  getters:{  //显示总的钱 显示总的数量
    money(state){
        var money = 0;
        state.todo.forEach((item)=>{
            money+=item.price*item.sum;
        })
        return money;
    },
    sum(state){
        var sum = 0;
        state.todo.forEach((item)=>{
            sum+=item.sum;
        })
        return sum;
  
    }
      

},
mutations: {
    add(state,obj) {  //把商品添加到购物车
            //第一次是添加，第二次是数量加1
            if(state.todo.length===0){
                state.todo.push(obj);
                return;
            }
            var flag=false; //false 表示加入的商品在购物车中不存在
            state.todo.forEach((item)=>{
                 if(item.id===obj.id){  //加入的商品在购物车中存在
                     item.sum++
                     flag=true;
                 }
            })
            if(!flag){
                state.todo.push(obj);
            }
    },
    select(v){
        return this.todo.every((item)=>item.complete);
        this.todo.forEach((item)=>{item.complete=v});
    },
    remove(state,id){
           state.todo = state.todo.filter((item)=>item.id!==id)
    },
    change(state,obj){
           state.todo.forEach((item)=>{
                  if(item.id===obj.id){ 
                   if(obj.flag){
                     item.sum++
                           }          //flag 是true +1  false -1
                    else{
                    if(item.sum>0){
                        item.sum--
                                }
                           }
                      }
           })
    }
},
actions: {

}
}