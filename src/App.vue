<script>
import NavTop from '@/views/NavBar/NavTop.vue'

export default {
  components: {
    NavTop,
  },
}
</script>

<template>
  <div class="AppMain">
    <NavTop />
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  cursor: url(@/assets/global_assets/shubiao.ico), auto;
}

/* 网站背景图样式 */
.AppMain {
  position: relative;
  min-height: 100vh;
  width: 100%;
  /* 背景图像固定 */
  background-size: cover; /* 背景图像自适应填充，覆盖整个屏幕 */
  /* 背景图像居中 */
  /* 不重复背景图像 */
  /* 设置一个备用的背景颜色 */
  background: #f0f0f0 url(@/assets/img/04.png) no-repeat fixed center center;
}
</style>
