<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "../public/common/js/flexble.js"
import "../public/common/css/reset.css"
export default {
    components:{

    }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
}

</style>
