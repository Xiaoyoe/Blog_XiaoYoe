<template>
   <div class="HomeCard">
        <div class="HomeCardLeftBox">
            <img :src="RandowImgArr" alt="RandomImg" @click="getMockData()">
        </div>
        <div class="HomeCardRigthBox">
            <!-- 标题盒子 -->
            <div class="CardTextTitle">
                <span>{{ContentObject.title}}</span>
            </div>
            <!-- 内容盒子 -->
            <div class="CardRigthText">
                <div class="TextSpan">
                    {{ContentObject.content}}
                </div>
            </div>
            <!-- 底部盒子 -->
            <div class="CardRigthBottomBox">
                <div class="timeN">
                    <div class="icon">
                        <svg @click="test()" t="1731312797569" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1518" width="15" height="24"><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM533.333333 362.666667a21.333333 21.333333 0 0 0-42.666666 0v170.666666a21.333333 21.333333 0 0 0 6.250666 15.082667l128 128a21.333333 21.333333 0 0 0 30.165334-30.165333L533.333333 524.501333V362.666667z" fill="#2c2c2c" p-id="1519"></path></svg>
                    </div>
                    {{ContentObject.date}}
                </div>
                 <div class="userN">
                    XiaoYoe
                </div>
            </div>
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
            ContentObject:{
                title:'新年好',
                content:'亲爱的自己，生命的年轮又圆满一个圆周时。我只盼你可以毫无遗漏的拥抱自己。别再疏离自己。亲爱的自己，从前想成为一座山，如今想成为一棵树。而无论想成为什么，我都希望自己可以有一股韧劲。逢失泄气也好，逢雨湿颓也好。但凭着这股韧劲，我坚信自己会把往日遮蔽的阴影一扫而空，重新拥有一副新的光景。重新晒太阳。祝我们一直都拥有重新晒太阳的勇气。',
                date:'2023-10-1'
           }, // 文章内容
        }
    },
    methods:{
        // 获取随机动漫图片api api接口由前端群 大佬星V提供~~~~~
        async getRandomImg(){
            const res = await axios.get('https://xin.xingvvhuang.cn/suijiimg.php?action=json&msg=1');
            const data = res.data.data[0].imgurl
            this.RandowImgArr = data
        },
        // 模拟数据
        async getMockData(){
            const res =await axios.get('/api/cardContentData')
            const {title,content,date} = res.data.data
            this.ContentObject = {title,content,date}
            console.log(res.data.data)
        },
        test(){
            console.log(this.ContentObject)
        }
    },
    mounted(){
        // 页面加载后调用图片刷新api
        // this.getRandomImg()
        this.getMockData()
    }
}
</script>

<style scoped>
.HomeCard{
    height: 252px;
    width: 100%;
    box-sizing: border-box;
    background: #fffffff1;
    border-radius: 8px;
    margin-top: 20px;
    box-shadow: 0 0px 10px rgba(231, 198, 198, 0.76);
    display: flex;
}
/* 左边图片盒子样式 */
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
/* 右边文章盒子内容样式 */
.HomeCardRigthBox{
    width: 60%;
    height: 252px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}
/* 标题盒子 */
.HomeCardRigthBox .CardTextTitle{
    height: 50px;
    width: 100%;
    font-size: 25px;
    font-family: "微软雅黑";
    display: flex;
    align-items: center;
    line-clamp: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;    /* 超出部分使用省略号表示 */
}
.HomeCardRigthBox .CardTextTitle span{
    margin-left: 20px;
}
/* 文本盒子 */
.CardRigthText{
    height: 171px;
    margin: 2px 0;
    overflow: hidden;
}
.TextSpan{
    -webkit-line-clamp: 5; 
    box-sizing: border-box;
    padding: 20px;
}
/* 底部盒子 */
.CardRigthBottomBox{
    height: 31px;
    width: 100%;
    display: flex;
    align-items: center;
}
.CardRigthBottomBox .userN{
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.CardRigthBottomBox .timeN{
    display: flex;
    align-items: center;
}
.timeN .icon{
    margin-top: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
}
</style>