<script>
export default {
  name: 'NavTop',
  data() {
    return {
      NavArr: [
        { name: '欢迎', color: '#ff6347' },
        { name: '首页', color: '#49b1f5' },  
        { name: '日历', color: '#8a2be2' },  
        { name: '留言墙', color: '#ff8c00' },
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

<style scoped>
.NavBox {
  height: 100%;
  padding: 6px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.599);
  box-shadow: 0 10px 10px rgba(186, 184, 184, 0.101);
}

.logoName {
  font-family: 'Source Han Sans', '微软雅黑', sans-serif; /* 选择现代简洁的中文字体 */
  letter-spacing: 1px; /* 适度调整字间距，避免过于紧凑 */
  font-weight: 700; /* 字重稍微降低，避免太厚重，700较为适合 */
  font-size: 24px; /* 根据设计需要，适当增大字体大小 */
  color: #333; /* 选择深灰色，显得稳重和清晰 */
  margin-left: 50px; /* 左边距适当调整，使文字更加居中或协调 */
  text-transform: none; /* 中文不需要全大写，保持原有形式 */
  line-height: 1.5; /* 增加行高，避免文字挤在一起 */
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* 微弱阴影，增加层次感 */
}


.logoName:hover {
  transition: 0.2s ease-in-out;
  color: #49b1f5;
}

.searchBox {
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  scale: 1;
  transition: .5s ease-in-out;
}

.searchBox:hover {
  scale: 1.1;
}

.ulBox {
  display: flex;
  width: 100%;
  list-style: none;
  height: 100%;
}

li {
  font-size: 15px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  width: 80px;
  height: 45px;
  user-select: none;
  font-family: 'STHeiti', 'PingFang SC', sans-serif;
  position: relative;
  transition: color 0.3s ease; /* 添加文字颜色的过渡效果 */
}

li::after {
  content: ''; 
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%; 
  height: 3px; 
  background-color: transparent; 
  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

/* 鼠标悬停时，显示下划线 */
li:hover::after {
  width: 100%;
  background-color: var(--underline-color); /* 使用 CSS 变量设置颜色 */
}

/* 鼠标悬停时，文字颜色也可以变化 */
li:hover {
  color: var(--underline-color);
}
</style>
