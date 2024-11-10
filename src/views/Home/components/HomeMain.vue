<template>
    <div class="HomeMain">
        <div class="HomeMainBox">
            <div class="CardBox">
                <HomeCard/>
                <HomeCard/>
                <HomeCard/>
            </div>
            <div class="UserBox">
                <div class="UserCard">
                    <div class="UserCardBox">
                        <!-- 头像 名字 个签盒子 -->
                        <div class="UserCardSmallBox">
                            <img src="https://wx3.sinaimg.cn/mw690/005LlktZly1hr9jdazs2ej30zk0zkx24.jpg" alt="">
                            <div class="nameBox">
                                小约
                            </div>
                            <div class="userText">
                                我会搞砸一切并坐在美丽的废墟上休息一天
                            </div>
                        </div>
                        <!-- 其他标签盒子 -->
                        <div class="socialTag">
                            <!-- 我是盒子 -->
                        </div>
                        <div class="socialTag">
                            <!-- 我是盒子 -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.HomeMain{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.HomeMainBox{
    height: 100%;
    width: 80vw;
    display: flex;
}
.CardBox{
    flex: 0.8;
}
.UserBox{
    margin-top: 20px;
    box-sizing: border-box;
    margin-left: 20px;
    backdrop-filter: blur(2px);
    flex: 0.2;
    box-sizing: border-box;
}
.UserCard{
    width: 100%;
    background: #ffffffe5;
    height: 523px;
    box-shadow: 0 0px 10px rgba(231, 198, 198, 0.76);    
    border-radius: 8px;

}
.UserCardBox{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.UserCardSmallBox{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
}
.UserCardSmallBox .nameBox{
    font-size: 20px;
    font-weight: 800;
    margin: 15px 0;
}
.UserCardSmallBox .userText{
    font-size: 14px;
    text-align: center;
}
.UserCardSmallBox img{
    width: 120px;
    border-radius: 50%;
    margin-top: 10px;
}
/* 标签盒子 */
.socialTag{
    background: lightblue;
    height: 30px;
    margin-top: 10px;
    width: 90%;
    text-align: center;
    line-height: 30px;
}
</style>

<script>
import HomeCard from '@/views/Home/components/HomeCard.vue'
export default {
    name:'HomeMain',
    components:{
        HomeCard
    }
}
</script>