<template>
    <div class="navMain">
        <div class="NavBox">
            <div class="logoName">
                    {{logoName}}
            </div>
            <div class="nav">
                <ul class="ulBox">
                    <li v-for="(item, index) in NavArr" :key="index"  @click=goNavPage(index,item)>
                        <div class="navIconBox">
                            {{item}}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="searchBox">
                <svg  t="1731164825324" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14716" width="50" height="30"><path d="M666.185143 696.173714a44.836571 44.836571 0 0 1 63.341714-0.585143l109.494857 107.593143a44.763429 44.763429 0 1 1-62.756571 63.926857l-109.568-107.52a44.763429 44.763429 0 0 1-0.512-63.414857z m-232.594286-571.757714a300.836571 300.836571 0 1 1 0 601.6 300.836571 300.836571 0 0 1 0-601.6z m0 89.6a211.236571 211.236571 0 1 0 0 422.4 211.236571 211.236571 0 0 0 0-422.4z" p-id="14717" fill="#2c2c2c"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'NavTop',
    data(){
        return{
            NavArr:["欢迎","首页","友链","社交","关于我"],
            logoName: '小约',
        }
    },
    methods:{
        // 页面标签跳转
        goNavPage(index,item){
            console.log("index:",index)
            console.log("item:",item)
            if(index == 0){
                this.$router.push('/')
            }else if(index == 1){
                this.$router.push('/Home')
            }
        }
    },
}

</script>

<style scoped>
.NavBox{
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
.logoName{
    letter-spacing: 2px;  /* 字符间距为 2px */
    word-spacing: 2px;    /* 单词间距为 5px */
    font-weight: 800;
    font-size: 20px;
    font-family: ZhuZiAYuanJWD,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Lato,Roboto,"PingFang SC",STZhongsong,"Lantinghei SC",sans-serif;
    margin-left: 60px;
    /* 彩色字体 */
    /* background-image: linear-gradient(90deg,#673ab7,#e91e63,#4242f4);
    background-clip: text;
    -webkit-text-fill-color: transparent; */
}
.logoName:hover{
    transition: .2s ease-in-out;
    color: #49b1f5;
}
.searchBox{
    margin-right: 30px;
    font-size: 20px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ulBox{
    display: flex;
    width: 100%;
    list-style: none;
    height: 100%;
}
li{
    font-size: 15px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    width: 80px;
    height: 45px;
    user-select: none;
}
li:hover{
    color: white;
    background: #ffbbbbbc;
    border-radius: 10px;
    transition: .5s ease-in-out ;
}
</style>



