<template>
  <div id="list">
    <router-view/>
    <Footer/>
  </div>

</template>

<script>
import Footer from '@/common/TabBar'
export default {
  components:{
    Footer
  }
};
</script>

<style scoped>
#list {
  flex: 1;
  overflow: auto;
  width:100%;
  height:100%;
}
</style>