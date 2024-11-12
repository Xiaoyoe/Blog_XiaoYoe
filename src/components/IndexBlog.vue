<template>
  <!-- 首页组件 -->
  <div class="IndexMain">
      <div class="mainCard">
          <div class="headPortrait">
              <img :src="headUrl" alt="Darling">
          </div>
          <div class="TextBox">
              <span>XiaoYoe</span>
          </div>
            
      </div>
  </div>
</template>

<script>
export default {
    name:'IndexBlog',
    data(){
        return{
            headUrl:'https://wx3.sinaimg.cn/mw690/005LlktZly1hr9jdazs2ej30zk0zkx24.jpg',
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.mainCard{
    height: 400px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px auto;
    flex-direction: column;
}
.headPortrait img {
    user-select:none;
    width: 130px;
    border-radius: 50%;
    transition: transform 0.6s ease-in-out; /* 添加平滑过渡 */
}
.headPortrait img:hover {
    transform: rotate(360deg); /* 鼠标悬停时旋转一圈 */
}
.TextBox{
    user-select: none;
    cursor: pointer;
    letter-spacing: 2px;
    word-spacing: 2px;
    font-size: 35px;
    margin-top: 20px;
    font-weight: 800;
    font-family: ZhuZiAYuanJWD,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Lato,Roboto,"PingFang SC",STZhongsong,"Lantinghei SC",sans-serif;
    background-image: linear-gradient(90deg,#673ab7,#e91e63,#4242f4);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    /* 
      设置元素的过渡动画，具体说明：
      - `letter-spacing 0.6s ease-in-out`: 使字母间距变化平滑过渡，持续时间为 0.6 秒，使用 ease-in-out 缓动函数。
      - `word-spacing 0.6s ease-in-out`: 使单词间距变化平滑过渡，持续时间为 0.6 秒，使用 ease-in-out 缓动函数。
      - `transform 0.6s ease-in-out`: 使 transform 变换（如旋转、位移等）变化平滑过渡，持续时间为 0.6 秒，使用 ease-in-out 缓动函数。
    */
    transition: letter-spacing 0.6s ease-in-out, word-spacing 0.6s ease-in-out, transform 0.6s ease-in-out;
}
.TextBox:hover{
    letter-spacing: 5px;
    word-spacing: 5px;
}
@keyframes rotateAnimation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(375deg);
    }
}
</style>

