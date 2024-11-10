<template>
   <div class="HomeCard">
        <div class="HomeCardLeftBox">
            <img :src="RandowImgArr" alt="RandomImg">
        </div>
        <div class="HomeCardRigthBox">
            123
        </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'HomeCard',
    data(){
        return{
            RandowImgArr:require('@/assets/02.jpg'), // api接口随机动漫图片
        }
    },
    methods:{
        // 获取随机动漫图片api api接口由前端群 大佬星V提供~~~~~
        async getRandomImg(){
            const res = await axios.get('https://xin.xingvvhuang.cn/suijiimg.php?action=json&msg=1');
            const data = res.data.data[0].imgurl
            this.RandowImgArr = data
        }
    },
    mounted(){
        // 页面加载后调用图片刷新api
        this.getRandomImg()
    }
}
</script>

<style scoped>
.HomeCard{
    height: 252px;
    width: 100%;
    background: #fffffff1;
    border-radius: 8px;
    margin-top: 20px;
    box-shadow: 0 0px 10px rgba(231, 198, 198, 0.76);
    display: flex;
}
.HomeCardLeftBox{
    height: 252px;
    width: 40%;
    overflow: hidden;
}
.HomeCardLeftBox img{
    width: 100%;                /* 图片宽度占满容器 */
    height: 100%;               /* 图片高度占满容器 */
    /* 图片自适应填充容器，保持比例，覆盖整个区域 */
    /* object-fit: cover;           */
    object-position: center center;  /* 图片居中显示 */
    border-radius: 8px 0 0 8px;
    transform: scale(1);

    transition: .5s ease-in-out;
}
.HomeCardLeftBox img:hover{
    transform: scale(1.1);
}
</style>