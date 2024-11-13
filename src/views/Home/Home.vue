<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      content_arr: [],
    }
  },
  mounted() {
    this.getMockData()
    this.getImg()
  },
  methods: {
    onImageLoad(item) {
      item.imgLoaded = true
      console.log('Image loaded:', item.img)
    },
    getImg() {
      axios
        .get('https://xin.xingvvhuang.cn/suijiimg.php?action=json&msg=8')
        .then(
          (response) => {
            this.content_arr.forEach((item, index) => {
              item.img = response.data.data[index].imgurl
              item.imgLoaded = false // 初始化图片加载状态
            })
          },
          (err) => {
            console.log(err)
          },
        )
    },
    async getMockData() {
      await axios.get('/api/cardContentData').then(
        (res) => {
          this.content_arr = res.data.data
          console.log('--data===>', this.content_arr)
        },
        (err) => {
          console.log(err)
        },
      )
    },
  },
}
</script>

<template>
  <div class="home-main">
    <div class="home-main-box">
      <div class="card-box">
        <div v-for="item in content_arr" :key="item.id" class="home-card">
          <div class="home-card-left-box">
            <img
              v-if="!item.imgLoaded"
              :src="require('@/assets/img/02.jpg')"
              alt="placeHolder"
            >
            <img :src="item.img" alt="realUrl" @load="onImageLoad(item)">
          </div>
          <div class="home-card-right-box">
            <div class="card-text-title">
              <span :title="item.title">{{ item.title }}</span>
            </div>
            <div class="card-right-text">
              <div class="text-span">
                {{ item.content }}
              </div>
            </div>
            <div class="card-right-bottom-box">
              <div class="time-n">
                <div class="icon" />
                <img
                  src="@/assets/img/time.svg"
                  alt=""
                  style="margin-right: 4px"
                >
                {{ item.date }}
              </div>
              <div class="user-n">
                XiaoYoe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="user-box">
        <div class="user-card">
          <div class="user-card-box">
            <div class="user-card-small-box">
              <img
                src="https://wx3.sinaimg.cn/mw690/005LlktZly1hr9jdazs2ej30zk0zkx24.jpg"
                alt=""
              >
              <div class="name-box">
                小约
              </div>
              <div class="user-text">
                我会搞砸一切并坐在美丽的废墟上休息一天
              </div>
            </div>
            <div class="social-tag">
              <!-- 标签盒子 -->
            </div>
            <div class="social-tag">
              <!-- 标签盒子 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/less/home.less';
</style>
