<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      // api接口随机动漫图片
       RandowImgArr:[require('@/assets/img/02.jpg')],
      // 文章内容
      content_arr: [],
    }
  },
  mounted() {
    // 页面加载后调用图片刷新api
    this.getRandomImg()
    this.getMockData()
  },
  methods: {
    // 获取随机动漫图片api api接口由前端群 大佬星V提供~~~~~
    async getRandomImg() {  
      await axios.get('https://xin.xingvvhuang.cn/suijiimg.php?action=json&msg=8').then( // 获取10张图片的地址（最大为10）
        (res) => {
          const data = res.data.data.map(item => item.imgurl)
          this.RandowImgArr = data
        },
        (err) => {
          console.log("Err:",err)
        }
      )
    },
    // 随机替换图片
    randomImgReplace(){
      // 如果图片还没返回来之前 默认为我设置的背景图
      if(this.RandowImgArr.length == 1 && this.RandowImgArr[0] === require('@/assets/img/02.jpg')){
        return this.RandowImgArr[0]
      }
      // 如果api已经返回了图片地址则替换图片内容
      const randomIndex = Math.floor(Math.random()* this.RandowImgArr.length)
      return this.RandowImgArr[randomIndex]
    },
    // 模拟数据
    async getMockData() {
      await axios.get('/api/cardContentData').then(
        (res) => {
          this.content_arr = res.data.data
          console.log(this.content_arr)
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
              :src="randomImgReplace()"
              alt="RandomImg"
              @click="getMockData()"
            >
          </div>
          <div class="home-card-right-box">
            <!-- 标题盒子 -->
            <div class="card-text-title">
              <span :title="item.title">{{ item.title }}</span>
            </div>
            <!-- 内容盒子 -->
            <div class="card-right-text">
              <div class="text-span">
                {{ item.content }}
              </div>
            </div>
            <!-- 底部盒子 -->
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
            <!-- 头像 名字 个签盒子 -->
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
            <!-- 其他标签盒子 -->
            <div class="social-tag">
              <!-- 我是盒子 -->
            </div>
            <div class="social-tag">
              <!-- 我是盒子 -->
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
