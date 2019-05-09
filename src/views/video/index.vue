<template>
<<<<<<< HEAD
    <div id="aa">
        <div class="oll">
        <div class="ss">
            <div class="ii"><h2>全场换购</h2></div>
              <h3>还差3.1元</h3>
        </div>
          <h2 class="jj">全场满49元可换购1件</h2>
          <div class="os">
          <span class="as"> 查看换购 </span>  
          <span class="ll">></span>
          </div>
          </div>


      <div class="azz">
          <div class="w">
              <div class="q">
               <input type="checkbox">
               <img src="http://picpro-sz.34580.com/sz/ImageUrl/147886/120.jpeg" alt="">
              </div>

               <div class="l">
                   <h2>【两杯装】八喜香草口味冰淇淋283g/杯【两杯装】八喜香草口味冰淇淋283g</h2>
                   <h3>283g*2杯/组</h3>
                   <ul>
                      <span>￥</span><p>45.90</p>
                     <div class="des"><p>-</p><span>1</span><p>+</p></div>
                   </ul>
               </div>
                  
          </div>  
           <p>特价商品 库存有限 请尽快下单</p>
    </div>

    <div class="ren">
        <div class="xxa">
            <input type="checkbox">
             <span>全选</span>       
        </div>

     <div class="ql">
        <div class="ssq">
            <h2>合计</h2>
            <span>￥</span><p>45.90</p>
        </div>
         <div class="aas">
            <h2>已省</h2>
            <span>￥</span><p>0.00</p><p class="ola">(已免邮费)</p>
        </div>
     </div>

       <div class="az"><div>去结算</div><p>(1)</p></div>
    </div>
</div>              

=======
  <div>
    <div class="header">
      <div>
       
          <router-link to="/search" >
          <div class="search">
         <i class="fa fa-search" aria-hidden="true"></i>酸奶低至买一送一
         </div>
        </router-link>
      </div>
    </div>
    <div class="contents">
      <ul class="left">
        <li v-for="n in 16" :key="n" :class="{'list':bool===n}" @click="borderLeft(n)">推选分类</li>
      </ul>
      <div class="right">
        <component :is="t"></component>
      </div>
    </div>
  </div>
>>>>>>> han
</template>
<script>
import One from '../elect'
export default {
  data() {
    return {
         list: [],
         bool: 0,
         t:One 
     };
    
  },
  created(){
      console.log("aa")
			    this.$jsonp("https://api1.34580.com/sz/Products/HotCategoryRequest").then((res)=>{
			    			console.log(res)
			    		})
			    },

  methods: {
    borderLeft(n) {
      this.bool = n;
    }
  },
  components:{
      One
  }
};
</script>
<<<<<<< HEAD
<style lang="scss">
    #aa{
        width: 100%;
        height: 100%;
        background: #f4f3f3
    }
    .oll{
        width: 7rem;
        height:1.32rem;
        background: white;
        margin: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .oll>.os>.as{
      margin-top: 0.4rem;
      color: green;
      font-size: 0.3rem;
    }
   .oll>.ss{
      width: 2rem;
      height: 1rem;
    

  }
    .oll>.ss>h3{
        margin: 0.2rem;
        font-size: 0.25rem;
        text-align: center;
     }
     .oll>.ss>.ii{
         width: 1.6rem;
         height: 0.5rem;
         border:1px solid red;
         border-radius:0.3rem; 
         text-align: center;
         line-height:0.5rem; 
         margin-left:0.2rem;
     }
    
     .oll>.ss>.ii>h2{
         display: inline-block;
         font-size: 0.25rem;
         color:red;
         
     }
     .oll>.jj{
       font-size: 0.3rem;
     }
     .azz{
          width: 7rem;
          height: 3.5rem;
          margin: 0.2rem;
          background: white;
     }
     .w{
        width: 7rem;
        height: 3rem;
        background: white;
        // margin: 0.2rem;
        display: flex;
        justify-content:space-around;
        align-items: center;
     }
     .w>.q{
         width: 1.5rem;
         height:1.5rem ;
         display:flex;
     }
     .l{
         width: 4.3rem;
         height: 1.5rem;
       
     }
     .l>h2{
         width:4rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 0.3rem;
     }
     .l>h3{
         font-size: 0.3rem;
         color:#ccc
     }
     .l>ul{
         display: flex;
     }
     .l>ul>span{
         color:red;
     }
     .l>ul>p{
         color:red;
     }
   .des{
       width: 0.8rem;
       height: 0.3rem;
       margin-left:2.5rem;
       display: flex;
       justify-content: space-between;
 }
   .ren{
       width: 100%;
       height: 1rem;
       background: white;
       position: fixed;
       bottom: 1rem;
       display: flex;
       justify-content: space-around;
       align-items: center;
   }
.xxa{
    display: flex;
}
 .ssq{
     display: flex;
 }
 .ssq>h2{
   font-size: 0.3rem;
 }
  .ssq>span{
      color:red;
  }
  .ssq>p{
      color:red;
  }
 .aas{
     display: flex;
     color:black;
 }
 .aas>h2{
      font-size: 0.2rem;
     
 }
.aas>.ola{
    color:#999;
}
.az{
    display: flex;
    width: 1.5rem;
    height: 0.6rem;
    background: #d25b5b;
    border-radius:0.4rem;
    color:white;
    line-height: 0.6rem;
    padding-left: 0.2rem;
}
=======
<style lang="scss" scoped>
$t: 50;
.header {
  height: 0.96rem;
  width: 100%;
  border-bottom: 0.01rem solid #ddd;
}
.search {
  background: rgba(51, 51, 51, 0.06);
  height: 0.64rem;
  width: 7.18rem;
  border-radius: 2rem;
  font-size: 30px;
  text-align: center;
  line-height: 0.64rem;
  color: #999;
  margin-top: 0.16rem;
  i {
    font-size: 50px;
  }
}
.contents {
  display: flex;
}
.left {
  width: 90 / $t + rem;
  height: 618.33 / $t + rem;
  overflow: auto;
  border-right: 0.02rem solid #ddd;
  li {
    width: 99 / $t + rem;
    height: 46 / $t + rem;
    background: #f2f2f2;
    margin: 0;
    border-bottom: 0.02rem solid #ddd;
    line-height: 46 / $t + rem;
    text-align: center;
    font-size: 32px;
  }
}

.list {
   background:white !important;
  border-left: 0.05rem solid #45ac2a;
}
.right{
    flex: 1;
    height: 618.33/$t + rem;
  
    }
>>>>>>> han
</style>