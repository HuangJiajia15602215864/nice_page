<template>
  <div class="card">
    <!-- 封面页 -->
    <div class="card-outside">
      <div class="card-outside-container">
        <!-- 正面 -->
        <div class="card-front">
          <div class="card-front-top">
            <img src="./1.png" alt="">
          </div>

          <div class="card-front-footer">
            悬浮查看
          </div>
        </div>
        <!-- 正面结束 -->
        <!-- 反面 -->
        <div class="card-back">
          43657
        </div>
      </div>
    </div>
    <!-- 封面页结束 -->
    <!-- 封底页 -->
    <div class="card-inside">
      <div class="card-inside-container">
        <h3>For urban lovers</h3>
        <p>Hans your smile,had been flurried my time passag </p>
        <p>love one i think the smile boy</p>
      </div>
    </div>
    <!-- 封底页结束 -->
  </div>
</template>
<script>
  export default {
    name: 'card',
    data() {
      return {

      }
    },
    methods: {

    }
  }

</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .card {
    width: 300px;
    height: 340px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s ease;
  }

  .card-outside {
    box-shadow: -15px -15px 25px rgba(108, 99, 255, .1), 15px 15px 25px rgba(108, 99, 255, .2);
  }

  .card-outside,
  .card-inside {
    position: absolute;
    right: 0;
    width: 300px;
    height: 340px;
  }

  .card-outside {
    z-index: 100;
    /* 透视表示从那个位置看元素，加了透视动画效果才能更清晰
    并且透视必须加给父盒子 */
    perspective: 1000px;
  }

  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    background-color: #6C63FF;
  }

  .card-outside-container {
    width: 100%;
    height: 100%;
    /* transform-style控制子元素是否开启三维立体环境 */
    transform-style: preserve-3d;
    /* 旋转的中心点 */
    transform-origin: left;
    transition: all 1s ease;
  }

  .card:hover .card-outside-container {
    transform: rotateY(-180deg);
  }


  .card-front-top {
    width: 100%;
    height: 260px;
    background-color: pink;
    /* 裁剪路径变成多边形 */
    clip-path: polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%);
  }

  .card-front-footer {
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-top: 40px;
  }

  .card-front-top img {
    width: 110%;
    height: 100%;
  }

  .card-back {
    /* 卡片的背面要旋转180°让卡片展开的时候背面的视频可以出现 */
    transform: rotateY(180deg);
  }

  .video-container {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);
  }

  .card-inside {
    /* 让封底页实现在封面页的下面 */
    z-index: 99;
  }

</style>
