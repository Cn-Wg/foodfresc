<template>
  <div class="video-right">
    <div class="logo">
    </div>
   <div class="con">

   </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
//   created() {
//     this.$jsonp(
//       "https://api1.34580.com/sz/Products/HotCategoryRequest"
//     ).then(res => {
//       console.log(res);
//     });
//   }
};
</script>
<style lang="scss" scoped>
$t: 50;
.video-right {
 // width: /$t+rem;
  height: 100%;
  background: red;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8 / $t + rem;
  overflow: auto;
  .logo {
  width: 259 / $t + rem;
  height: 97 / $t + rem;
  background: yellow;
  }
}



</style>