<template>
  <div class='box'>
    <Csshouye class='zuocedaohang'></Csshouye>
    <div class='content'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Csshouye from 'src/components/csshouye/Csshouye'
  export default {
    components: {
      Csshouye
    }
  }
</script>

<style scoped>
  .box {
    display: flex;
    width: 100%;
    height: 600px;
    background-color: #F7F8FA;
  }
  .zuocedaohang {
    flex: 0 0 200px;
    border: 1px solid #C1C1C1;
  }
  .content {
    flex: 1;
  }
</style>
