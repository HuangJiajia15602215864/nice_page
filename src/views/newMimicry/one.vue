<template>
  <div id="newMimicryOne">
    <div class="card left"></div>
    <div class="card right"></div>
  </div>
</template>
<script>
  export default {
    name: 'newMimicryOne',
    data() {
      return {

      }
    },
    methods: {

    }
  }

</script>
<style>
  #newMimicryOne {
    /* 定义变量 */
    --bgColor: #E7E9F5;

    /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */
    --whiteShadow: -15px -15px 25px rgba(239, 242, 249, 1);
    --blackShadow: 15px 15px 25px rgba(216, 218, 231, 1);
  }

  /* 设置一些页面的布局样式 */
  #newMimicryOne {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--bgColor);
  }

  .card {
    width: 30vh;
    height: 30vh;
    margin: 45px;
    background-color: var(--bgColor);
    border-radius: 30px;
  }

  /* 主要部分 */
  .left {
    /* 设置外阴影 */
    box-shadow: var(--blackShadow),
      var(--whiteShadow);
  }

  .right {
    /* 设置内阴影 */
    box-shadow: inset var(--blackShadow),
      inset var(--whiteShadow);
  }

</style>
