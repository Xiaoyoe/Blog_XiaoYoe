<template>
  <div class="container">
    <div class="back_box" @click="backIndex()">Back</div>
    <div class="box">
      <div class="left_box">
        <!-- 如果 isSuccess 为 true，显示成功信息 -->
        <div v-if="isSuccess">
          <div class="message">
            <p v-if="isLogin">登录成功</p>
            <p v-else>注册成功</p>
            <!-- 显示倒计时 -->
            <p style="font-size:30px"> {{ countdown }}后进行跳转...</p>
          </div>
        </div>

        <!-- 登录表单 -->
        <form v-else-if="isLogin" action="" method="post" @submit.prevent="mockLogin()">
          <div class="p_text">Login</div>
          <div class="inputBox">
            <input type="text" name="username" v-model="username" required />
            <label>Username</label>
          </div>
          <br />
          <br />
          <div class="inputBox">
            <input type="password" name="password" v-model="password" required />
            <label>Password</label>
          </div>
          <input class="sub" type="submit" value="Login" />
          <!-- 错误提示 -->
          <div v-if="errorMessage" class="error-message">
            <div class="p_text">{{ errorMessage }}</div>
          </div>
          <p @click="toggleForm">Don't have an account? Register</p>
        </form>

        <!-- 注册表单 -->
        <form v-else action="" method="post" @submit.prevent="mockRegister()">
          <div class="p_text">Register</div>
          <div class="inputBox">
            <input type="text" name="username" v-model="username" required />
            <label>Username</label>
          </div>
          <br />
          <br />
          <div class="inputBox">
            <input type="text" name="email" v-model="email" required />
            <label>Email</label>
          </div>
          <br />
          <br />
          <div class="inputBox">
            <input type="password" name="password" v-model="password" required />
            <label>Password</label>
          </div>
          <input class="sub" type="submit" value="Register" />
          <p @click="toggleForm">Already have an account? Login</p>
        </form>
      </div>
      <div class="right_box"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true, // 控制表单显示，默认为登录表单
      isSuccess: false, // 控制登录或注册是否成功
      countdown: 5, // 倒计时初始值为5秒
      username: '',
      email: '',    // 注册表单中需要的 email 字段
      password: '',
      errorMessage: '', // 错误信息
      // 模拟账号
      mockUsername: 'xiaoyoe',
      mockPassword: '123456',
      countdownTimer: null // 保存倒计时的定时器ID
    }
  },
  methods: {
    // 切换登录与注册表单
    toggleForm() {
      this.isLogin = !this.isLogin
      this.isSuccess = false  // 切换表单时清除成功状态
      this.countdown = 5  // 重置倒计时
      this.errorMessage = '' // 清空错误信息
    },
    backIndex() {
      this.$router.push('/home')
    },
    // 模拟登录
    mockLogin() {
      console.log("触发模拟登录的逻辑 进行逻辑判断.......")
      console.log("你输入的用户名：", this.username)
      console.log("你输入的密码", this.password)
      console.log("数据库中的用户名和密码为：", this.mockUsername, this.mockPassword)
      if (this.username === this.mockUsername && this.password === this.mockPassword) {
        this.isSuccess = true
        this.errorMessage = '' // 清空错误信息
        this.startCountdown()  // 启动倒计时
      } else {
        this.isSuccess = false
        this.errorMessage = '账户名或密码不正确，请重新输入。' // 设置错误提示

        // 清空表单
        this.username = ''
        this.password = ''
      }
    },
    // 模拟注册
    mockRegister() {
      console.log("触发模拟注册的逻辑 进行逻辑判断.......")
      // 模拟实际的注册逻辑
      this.isSuccess = true // 假设注册成功
      this.errorMessage = '' // 清空错误信息
      this.startCountdown() // 跳转倒计时
    },
    // 跳转倒计时
    startCountdown() {
      this.countdownTimer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--
        } else {
          clearInterval(this.countdownTimer) // 倒计时结束，清除定时器
          this.$router.push('/home')
        }
      }, 1000)
    }
  },
  beforeDestroy() {
    // 在组件销毁前清除定时器
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer)
    }
  }
}
</script>

<style scoped lang="less">
@import '@/assets/less/Landing.less';

/* 可根据需要调整倒计时的样式 */
.message p {
  font-size: 30px;
  color: #ff6f61; /* 给倒计时加点颜色 */
}
</style>
