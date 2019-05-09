<template>
    <div id="aa">
        <div class="dd">
            <input type="text" class="cd" id="demo">
            <img src="https:/wechatx.34580.com/static/img/home_search_cont.427135f.png" alt="">
        </div>

        <div class="al">
            <ul>
                <li>默认</li>
                <li>最新</li>
                <li>销量</li>
                <li>价格</li>
            </ul>
        </div>

        <div class="da">
            <dl>
                <dt><img src="http://picpro-sz.34580.com/sz/ImageUrl/148139/500.jpeg" alt=""></dt>
                <dd>
                    <p class="po">好得睐京酱鸡柳250g/袋好得睐京酱鸡柳250g/袋</p>
                    <span>250g/袋</span>
                    <div class="aaw">
                         <div class="ff"><span>￥</span><p>45.90</p></div>
                         <i class="fa fa-superpowers" aria-hidden="true"></i>
                    </div>
                </dd>
            </dl>

            <dl>
                <dt><img src="http://picpro-sz.34580.com/sz/ImageUrl/148139/500.jpeg" alt=""></dt>
                <dd>
                    <p class="po">好得睐京酱鸡柳250g/袋好得睐京酱鸡柳250g/袋</p>
                    <span>250g/袋</span>
                    <div class="aaw">
                         <div class="ff"><span>￥</span><p>45.90</p></div>
                         <i class="fa fa-superpowers" aria-hidden="true"></i>
                    </div>
                </dd>
            </dl>

            <dl>
                <dt><img src="http://picpro-sz.34580.com/sz/ImageUrl/148139/500.jpeg" alt=""></dt>
                <dd>
                    <p class="po">好得睐京酱鸡柳250g/袋好得睐京酱鸡柳250g/袋</p>
                    <span>250g/袋</span>
                    <div class="aaw">
                         <div class="ff"><span>￥</span><p>45.90</p></div>
                         <i class="fa fa-superpowers" aria-hidden="true"></i>
                    </div>
                </dd>
            </dl>

            <dl>
                <dt><img src="http://picpro-sz.34580.com/sz/ImageUrl/148139/500.jpeg" alt=""></dt>
                <dd>
                    <p class="po">好得睐京酱鸡柳250g/袋好得睐京酱鸡柳250g/袋</p>
                    <span>250g/袋</span>
                    <div class="aaw">
                         <div class="ff"><span>￥</span><p>45.90</p></div>
                         <i class="fa fa-superpowers" aria-hidden="true"></i>
                    </div>
                </dd>
            </dl>
             <dl>
                <dt><img src="http://picpro-sz.34580.com/sz/ImageUrl/148139/500.jpeg" alt=""></dt>
                <dd>
                    <p class="po">好得睐京酱鸡柳250g/袋好得睐京酱鸡柳250g/袋</p>
                    <span>250g/袋</span>
                    <div class="aaw">
                         <div class="ff"><span>￥</span><p>45.90</p></div>
                         <i class="fa fa-superpowers" aria-hidden="true"></i>
                    </div>
                </dd>
            </dl>
            
        </div>
        
        <div class="fffs">
            <span>点击加载更多</span>
        </div>

        <a class="aqa"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scope>
#aa{
    width: 100%;
    height: 100%;
    background: #f4f3f3;
    margin-bottom:1.5rem;
    margin-top:2rem;
    flex:1;
    overflow: auto
}
.dd{
    width: 100%;
    height: 1rem;
    background: #f4f3f3;
    border:1px solid #999;
    position: fixed;
    top:0;
    z-index: 99999;
}
.cd{
    width: 7.1rem;
    height: 0.64rem;
    border-radius: 0.3rem;
    margin-left:0.25rem;
    margin-top:0.2rem;
}
#demo{
    background: #e9e5e5;
}
#aa>.dd>img{
    width: 2.44rem;
    height: 0.36rem;
    position: fixed;
    top:0.35rem;
    left:2.5rem;
   
}
#aa>.al{
    width: 100%;
    height: 1rem;
    background: white;
    position: fixed;
    top:1rem;
}
#aa>.al>ul{
    display: flex;
    justify-content: space-around;
    position: relative;
}
#aa>.al>ul>li{
    font-size: 0.35rem;
    width: 0.94rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    
    }
#aa>.al>ul>li:nth-child(1){
border-bottom:5px solid green;
}    
.da{
    width: 100%;
    min-height:18rem;
    background: #e9e5e5;
}
.da>dl{
width: 3.4rem;
height: 5.75rem;
background:white;
margin: 0.15rem;
border-radius:0.2rem;
float: left;
}
.da>dl>dt>img{
    width: 3.4rem;
    height: 3.51rem;;
}
.da>dl>dd>.po{
        width:2.5rem;
        height: 0.5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size:0.3rem;
        margin-top:0.2rem;
}
.da>dl>dd{
    margin-left:0.2rem;
}
.aaw{
    display: flex;
    justify-content: space-between;
}
.aaw>.ff{
     display: flex;
     margin-top:0.3rem;
     color:red;
}
#aa>.fffs{
    width: 100%;
    height: 0.8rem;
}
#aa>.fffs>span{
    width: 6rem;
    height: 0.8rem;
    background:green;
    display: block;
    /* z-index:1000; */
    border-radius: 0.3rem;
    /* text-align: start; */
    color:white;
    /* line-height: 0.8rem; */
    margin-left:0.8rem;
    font-size:0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.aqa{
    width: 0.6rem;
    height:0.6rem;
    background: orangered;
    position: absolute;
    bottom:3rem;
    display: flex;
    justify-content: center;
    align-items: center;
   font-size:0.5rem;
}

</style>