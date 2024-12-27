<script>
export default {
  name: 'NavTop',
  data() {
    return {
      NavArr: [
        { name: '欢迎', color: '#ff6347' },
        { name: '首页', color: '#49b1f5' },  
        { name: '日历', color: '#ffb6c1' },  
        { name: '留言墙', color: '#ff8c00' },
        { name: '关于我', color: '#a2d8e6'},
        { name: '登录', color: '#ff1493' }
      ],
      logoName: 'XiaoYoe',
      isModalVisible: false, // 控制弹窗显示
      searchQuery: '', // 搜索框的输入内容
    };
  },
  methods: {
    // 页面标签跳转
    goNavPage(index, item) {
      console.log('index:', index)
      console.log('item:', item)
      if (index === 0) {
        this.$router.push('/')
      }
      else if (index === 1) {
        this.$router.push('/Home')
      }
      else if (index === 2) {
        this.$router.push('/DynamicCalendar')
      }
      else if (index === 3) {
        this.$router.push('/MessageWall')
      }
      else if (index === 4) {
        this.$router.push('/My')
      }
      else if (index === 5) {
        this.$router.push('/Landing')
      }
    },
    // 打开搜索弹窗
    openModal() {
      this.isModalVisible = true;
    },
    // 关闭弹窗
    closeModal() {
      this.isModalVisible = false;
      this.searchQuery = ''; // 清空搜索框内容
    },
    // 进行百度搜索
    search() {
      if (this.searchQuery.trim()) {
        const searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(this.searchQuery)}`;
        window.open(searchUrl, '_blank'); // 在新标签页中打开搜索结果
        this.closeModal(); // 关闭弹窗
      } else {
        alert('请输入搜索内容');
      }
    },
  },
}

</script>

<template>
  <div class="navMain">
    <div class="NavBox">
      <div class="logoName">
        {{ logoName }}
      </div>
      <div class="nav">
        <ul class="ulBox">
          <li
            v-for="(item, index) in NavArr"
            :key="index"
            @click="goNavPage(index, item)"
            :style="{ '--underline-color': item.color }"
          >
            <div class="navIconBox">
              {{ item.name }}
            </div>
          </li>
          <div class="searchBox" @click="openModal">
            <svg
              t="1731164825324"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="14716"
              width="50"
              height="30"
            >
            <path
              d="M666.185143 696.173714a44.836571 44.836571 0 0 1 63.341714-0.585143l109.494857 107.593143a44.763429 44.763429 0 1 1-62.756571 63.926857l-109.568-107.52a44.763429 44.763429 0 0 1-0.512-63.414857z m-232.594286-571.757714a300.836571 300.836571 0 1 1 0 601.6 300.836571 300.836571 0 0 1 0-601.6z m0 89.6a211.236571 211.236571 0 1 0 0 422.4 211.236571 211.236571 0 0 0 0-422.4z"
              p-id="14717"
              fill="#2c2c2c"
            />
            </svg>
          </div>
        </ul>
      </div>
    </div>

    <!-- 弹窗 -->
    <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-card">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="请输入搜索内容"
          class="search-input"
        />
        <div class="modal-actions">
          <button @click="search" class="search-btn">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/less/NavTop.less";
</style>
