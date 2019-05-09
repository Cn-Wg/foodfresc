<template>
  <div id="app">
     
    <router-view/>
    <TabBar/>
  </div>
</template>

<script>
import "../public/common/js/flexble.js"
import "../public/common/css/reset.css"
import TabBar from './common/TabBar'
export default {
    components:{
      TabBar
    }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
}
.animated {
   animation-duration: 1s;
}
</style>
