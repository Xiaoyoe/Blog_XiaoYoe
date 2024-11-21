<script>
export default {
  name: 'Index',
  components: {

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
  },
}
</script>

<template>
  <!-- 首页组件 -->
  <div class="index-main">
    <div class="main-card">
      <div class="head-portrait">
        <img :src="headUrl" alt="Darling">
      </div>
      <div class="text-box">
        <span>XiaoYoe</span>
      </div>
    </div>
    <div class="down-icon-main" @click="goHome">
      <svg t="1731152041123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10879" width="35" height="35"><path d="M212.735637 512c0 165.242462 133.950781 299.193243 299.194267 299.193243 165.242462 0 299.193243-133.950781 299.193243-299.193243s-133.950781-299.194266-299.193243-299.194266-299.194266 133.951805-299.194267 299.194266z m0 0" fill="#e89abe" p-id="10880" /><path d="M511.929904 67.88511c-244.872057 0-444.115913 199.243857-444.115914 444.11489 0 244.87001 199.243857 444.11489 444.115914 444.11489 244.964154 0 444.112843-199.24488 444.112843-444.11489 0.001023-244.871033-199.242833-444.11489-444.112843-444.11489z m0 842.417385c-219.630163 0-398.303518-178.673355-398.303519-398.301472S292.300764 113.698528 511.929904 113.698528c219.629139 0 398.301472 178.673355 398.301471 398.301472s-178.7675 398.302495-398.301471 398.302495z m0 0" fill="#e89abe" p-id="10881" /></svg>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/less/index.less';
</style>
