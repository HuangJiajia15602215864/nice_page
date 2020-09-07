<template>
  <div class="block">
    <canvas id="clock" width="200px" height="200px"></canvas>
  </div>
</template>
<script>
  export default {
    name: 'block',
    data() {
      return {
        clo: '',
        ctx: '',
        width: '',
        height: '',
        r: '',
      }
    },
    mounted() {
      this.clo = document.getElementById('clock');
      this.ctx = this.clo.getContext('2d');
      this.width = this.ctx.canvas.width;
      this.height = this.ctx.canvas.height;
      this.r = this.width / 2; //半径
      this.draw(); //避免第一秒无效果
      setInterval(this.draw, 1000); //定时器函数每秒调用一次
    },
    methods: {
      drawBackground() {
        this.ctx.save(); //为了保存清除之前时钟的环境
        this.ctx.translate(this.r, this.r); //切换中心点,此时（0，0）就在最中心了，不再是在左上角
        this.ctx.beginPath();
        this.ctx.lineWidth = 5; //线条的宽度
        this.ctx.arc(0, 0, this.r - 4, 0, 2 * Math.PI, false) //绘制最外圆
        this.ctx.stroke();
        //画小时数
        var hourNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        this.ctx.font = '18px Arial'; //设置文本大小
        this.ctx.textAlign = 'center'; //文本居中
        this.ctx.textBaseline = 'middle';
        hourNumber.forEach((number, i)=> {
          //求出每一个对应的弧度
          var rad = 2 * Math.PI / 12 * i;
          var x = Math.cos(rad) * (this.r - 30); //算出每个数字对应的坐标
          var y = Math.sin(rad) * (this.r - 30);
          this.ctx.fillText(number, x, y) //填充文本
        });
        //画每分钟对应的小点点
        for (var i = 0; i < 60; i++) {
          var rad = 2 * Math.PI / 60 * i;
          var x = Math.cos(rad) * (this.r - 10);
          var y = Math.sin(rad) * (this.r - 10);
          this.ctx.beginPath();
          if (i % 5 === 0) { //被5整除也就是小时数
            this.ctx.fillStyle =
              "#000"; //要加上，否则由于canvas是基于状态的，所以会把 这里的颜色也改成#ccc
            this.ctx.arc(x, y, 2.5, 0, 2 * Math.PI, true)
          } else {
            this.ctx.fillStyle = "#ccc"
            this.ctx.arc(x, y, 1.5, 0, 2 * Math.PI, true)
          }
          this.ctx.fill()
        }
      },
      drawHour(hour, minute) { //画时针函数
        this.ctx.save(); //保存画小时之前的环境
        this.ctx.beginPath();
        var rad = 2 * Math.PI / 12 * hour; //每一个小时要旋转的弧度
        var mrad = 2 * Math.PI / 12 / 60 * minute; //分钟数移动的弧度
        this.ctx.rotate(rad + mrad); //画布的旋转
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(0, 10); //移动原点到原点的下面一点，作为画时针的起始位置
        this.ctx.lineTo(0, -this.r / 2); //原点的位置在中心所以往上画要是负数
        this.ctx.lineCap = 'round'; //设置线条的结尾形状
        this.ctx.stroke();
        this.ctx.restore(); //返回画小时之前的画布的保存过的路径和属性状态
      },
      drawMinute(minute) { //画分针函数
        //为了区分开画布环境
        this.ctx.save();
        this.ctx.beginPath();
        var rad = 2 * Math.PI / 60 * minute; //每一个小时要旋转的弧度
        this.ctx.rotate(rad); //画布的旋转
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(0, 10); //移动原点到原点的下面一点，作为画时针的起始位置
        this.ctx.lineTo(0, -this.r + 20); //原点的位置在中心所以往上画要是负数,值越大画的越短
        this.ctx.lineCap = 'round'; //设置线条的结尾形状
        this.ctx.stroke();
        this.ctx.restore();
      },
      drawSecond(second) { //画秒针函数
        this.ctx.save();
        this.ctx.beginPath();
        var rad = 2 * Math.PI / 60 * second; //每一个小时要旋转的弧度
        this.ctx.rotate(rad); //画布的旋转
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "red"
        this.ctx.moveTo(0, 10); //移动原点到原点的下面一点，作为画时针的起始位置
        this.ctx.lineTo(0, -this.r + 20); //原点的位置在中心所以往上画要是负数,值越大画的越短
        this.ctx.lineCap = 'round'; //设置线条的结尾形状
        this.ctx.stroke();
        this.ctx.restore();
      },
      drawDot() { //画中心点
        this.ctx.beginPath();
        this.ctx.fillStyle = "#fff"
        this.ctx.arc(0, 0, 3, 0, 2 * Math.PI, false)
        this.ctx.fill()
      },
      draw() { //绘图函数
        this.ctx.clearRect(0, 0, this.width, this.height); //每秒清除一次canvas再画出时分秒
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        this.drawBackground()
        this.drawHour(hour, minute);
        this.drawMinute(minute);
        this.drawSecond(second);
        this.drawDot()
        this.ctx.restore(); //画完之后
      }
    }
  }

</script>
<style>
  .block {
    text-align: center;
  }

</style>
