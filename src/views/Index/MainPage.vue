<script>
import NavTop from '@/views/NavBar/NavTop.vue'

export default {
  name: 'Index',
  components: {
    NavTop,
  },
  data() {
    return {
      headUrl: 'https://wx3.sinaimg.cn/mw690/005LlktZly1hr9jdazs2ej30zk0zkx24.jpg',
    }
  },
  methods: {
    goHome() {
      this.$router.push('/Home')
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    refreshPage() {
      window.location.reload();
    },
  },
}
</script>

<template>
  <!-- 首页组件 -->
  <div class="index-main">
    <!-- <NavTop /> -->
    <div class="main-card">
      <div class="head-portrait" @click="goHome()">
        <div class="circle-border"></div>
        <img :src="headUrl" alt="Darling">
      </div>
      <div class="text-box" @click="goHome()">
        <span>XiaoYoe</span>
      </div>
    </div>
    <div class="down-icon-main" @click="goHome">
      <svg t="1731152041123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10879" width="35" height="35">
        <path d="M212.735637 512c0 165.242462 133.950781 299.193243 299.194267 299.193243 165.242462 0 299.193243-133.950781 299.193243-299.193243s-133.950781-299.194266-299.193243-299.194266-299.194266 133.951805-299.194267 299.194266z" fill="#e89abe" p-id="10880" />
        <path d="M511.929904 67.88511c-244.872057 0-444.115913 199.243857-444.115914 444.11489 0 244.87001 199.243857 444.11489 444.115914 444.11489 244.964154 0 444.112843-199.24488 444.112843-444.11489 0.001023-244.871033-199.242833-444.11489-444.112843-444.11489z" fill="#e89abe" p-id="10881" />
      </svg>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/less/index.less';
</style>
