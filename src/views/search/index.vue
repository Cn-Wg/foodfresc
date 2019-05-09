<template>
    <div class="t">
        <div class="head">
            <input type="text" class="inp" placeholder="送给妈妈的礼物"> <button class="bnt">搜索</button>
        </div>
    <h2 class="title_1">热搜</h2>
    <ul class="zu">
        <li>冰淇凌</li>
        <li>冰淇凌</li>
        <li>冰淇凌</li>
        <li>冰淇凌</li>
        <li>冰淇凌</li>
        <li>冰淇凌</li>
        <li>冰淇凌</li>
        <li>冰淇凌</li>
        <li>冰淇凌</li>
    </ul>
    <h4 class="title_2">最近搜索</h4> 
    <p>清空搜索历史</p>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
$t: 50;
.t{
  display: flex;
  flex-direction: column;
  align-items: center;

.head{
    display: flex;
    width: 100%;
    height: 56/$t+rem;
    background:white;
    align-items:center;
    justify-content:center;
    .inp{
        width: 282/$t+rem;
        height: 30/$t+rem;
        background: #f0f0f0;
          border: 0;
          border-radius: 10/$t+rem;
          font-size: 36px
    }
    .bnt{
        width: 60/$t+rem;
        height: 32/$t+rem;
        background: #4cd964;
        border-radius:8/$t+rem; 
        font-size: 30px
    }
}
.title_1{
    width: 364/$t+rem;
    height: 44/$t+rem;
    line-height: 44/$t+rem;
    font-size: 40px;
    margin-top:15/$t+rem; 
}
.zu{
    width: 100%;
    height: 143/$t+rem;
    li{
        width: 112/$t+rem;
        height:36/$t+rem;
        float: left;
        text-align: center;
        line-height: 20/$t+rem;
        background: white;
        margin: 6/$t+rem;
        font-size: 30px;
        line-height: 36/$t+rem;
    }
}
.title_2{
    width: 364/$t+rem;
    height: 44/$t+rem;
    line-height: 44/$t+rem;
    font-size: 40px;
    margin-top:15/$t+rem; 
}
p{
    width: 100%;
    height: 40/$t+rem;
    background: white;
    line-height: 40/$t+rem;
    text-align: center;
    font-size: 30px;
}
}
</style>