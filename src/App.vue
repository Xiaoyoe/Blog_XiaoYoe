<template>
  <div class="AppMain">
        <nav-top/>
    <router-view/>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop.vue'
export default {
  components:{
        NavTop,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  cursor: url(@/assets/global_assets/shubiao.ico),auto;
}
/* 首页上下浮动图标样式 */
.DownIcon{
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
/* 浏览器滚动条样式改变 */
::-webkit-scrollbar{
  width: 10px;
  height: 10px;
  background: lightskyblue;
}
::-webkit-scrollbar-track{
  background: white;
}
::-webkit-scrollbar-thumb{
  background: skyblue;
  border-radius: 35px;
}
/* 网站背景图样式 */
.AppMain{
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: url(@/assets/04.png);
  background-attachment: fixed;                   /* 背景图像固定 */
  background-size: cover;                        /* 背景图像自适应填充，覆盖整个屏幕 */
  background-position: center center;            /* 背景图像居中 */
  background-repeat: no-repeat;                  /* 不重复背景图像 */
  background-color: #f0f0f0;                     /* 设置一个备用的背景颜色 */
}
</style>
