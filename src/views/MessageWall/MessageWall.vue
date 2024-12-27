<template>
  <div class="message-box">
    <NavTop />
    <div class="message-wall-box">
      <!-- 留言墙内容和图片部分 -->
      <div class="message-wall-content">
        <!-- 显示留言列表 -->
        <div class="messages-list">
          <div v-for="(message, index) in messages" :key="index" class="message-item">
            <!-- 姓名和邮箱放在同一行 -->
            <div class="message-header">
              <p><strong>姓名：</strong>{{ message.name }}</p>
              <p><strong>邮箱：</strong>{{ message.email }}</p>
              <div @click="confirmDelete(index)" class="message-btn"></div>
            </div>
            <!-- 留言内容单独一块区域 -->
            <div class="message-content">
              <p><strong>留言：</strong>{{ message.content }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 留言输入框和标题 -->
      <div class="message-wall">
        <!-- 留言墙标题单独一格 -->
        <h1 class="wall-title">留言墙</h1>

        <!-- 留言输入框和图片放在同一个盒子内，用flex分开 -->
        <div class="message-input-and-image">
          <!-- 留言输入框 -->
          <div class="message-input">
            <input v-model="newName" type="text" placeholder="请输入姓名" class="input-field" />
            <input v-model="newEmail" type="email" placeholder="请输入邮箱" class="input-field" />
            <textarea v-model="newMessage" placeholder="写下你的留言..." rows="4" cols="50"></textarea>
            <button @click="addMessage">添加留言</button>
          </div>

          <!-- 图片展示区域 -->
          <div class="image-section">
            <img src="@/assets/img/01.gif" alt="留言墙图片" class="message-image" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavTop from '@/views/NavBar/NavTop.vue'

export default {
  name: 'MessageWall',
  components: { NavTop },
  data() {
    return {
      newName: '',       // 存储输入的姓名
      newEmail: '',      // 存储输入的邮箱
      newMessage: '',    // 存储输入的留言内容
          messages: [
      {
        name: '张三',
        email: 'zhangsan@example.com',
        content: '这个网站真的很不错，留言功能做得很好！'
      },
      {
        name: '李四',
        email: 'lisi@example.com',
        content: '我觉得这个留言墙设计得非常直观，使用起来很方便！'
      },
      {
        name: '王五',
        email: 'wangwu@example.com',
        content: '我有个小建议，希望能加入表情符号功能！'
      },
      {
        name: '赵六',
        email: 'zhaoliu@example.com',
        content: '留言墙设计得很简洁，感觉很舒服，希望以后会有更多互动功能！'
      }
    ]
    };
  },
  methods: {
    // 添加留言的方法
    addMessage() {
      if (this.newName.trim() !== '' && this.newEmail.trim() !== '' && this.newMessage.trim() !== '') {
        this.messages.unshift({
          name: this.newName,
          email: this.newEmail,
          content: this.newMessage
        }); // 将留言添加到 messages 数组中
        this.newName = ''; // 清空姓名输入框
        this.newEmail = ''; // 清空邮箱输入框
        this.newMessage = ''; // 清空留言输入框
      } else {
        alert('所有字段都不能为空！'); // 提示字段不能为空
      }
    },
    // 删除留言的方法，带有确认框
    confirmDelete(index) {
      const confirmed = window.confirm('确定要删除这个留言吗？');
      if (confirmed) {
        this.messages.splice(index, 1); // 删除留言
      }
    }
  }
};
</script>

<style scoped>
@import "@/assets/less/MessageWall.less";
</style>
