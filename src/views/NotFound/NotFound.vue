<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="error-code">
        <span>4</span>
        <span class="highlight">0</span>
        <span>4</span>
      </div>
      <h2 class="message">哎呀！页面走丢啦！</h2>
      <p class="description">
        好像是链接出了点问题，别担心！我们可以带你回到首页~
      </p>
      <router-link to="/" class="btn-home">
        返回首页
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff94c2, #ffb8b8); /* 甜美渐变色 */
  font-family: 'Comic Sans MS', sans-serif; /* 俏皮字体 */
  color: #fff;
  overflow: hidden;
}

.not-found-content {
  text-align: center;
  position: relative;
  padding: 40px 50px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.8s ease-out;
  max-width: 550px;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: #ff6fb8;
  position: relative;
  animation: bounceIn 1s ease-out infinite; /* 让数字跳动 */
}

.error-code span {
  margin: 0 20px;
}

.error-code .highlight {
  color: #ff6fb8; /* 高亮色 */
  animation: pulse 1.2s infinite ease-in-out; /* 高亮数字呼吸动画 */
}

.message {
  font-size: 28px;
  margin-top: 20px;
  color: #ff6fb8;
  font-weight: 600;
}

.description {
  font-size: 16px;
  margin-top: 10px;
  color: #555;
}

.btn-home {
  display: inline-block;
  margin-top: 40px;
  padding: 18px 40px;
  font-size: 18px;
  background-color: #ff6fb8;
  color: #fff;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.btn-home:hover {
  background-color: #ff94c2;
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-home:before {
  content: '🥳';
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  opacity: 0.8;
  animation: swing 1.2s ease-in-out infinite;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}

@keyframes swing {
  0%, 100% {
    transform: translateY(-50%) rotate(0deg);
  }
  50% {
    transform: translateY(-50%) rotate(10deg);
  }
}
</style>
