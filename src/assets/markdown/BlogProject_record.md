### 项目使用说明
**通过github或者gitee下载项目压缩包文件**

[**<font style="color:#DF2A3F;">https://github.com/Xiaoyoe/Blog_XiaoYoe</font>**](https://github.com/Xiaoyoe/Blog_XiaoYoe)**<font style="color:#DF2A3F;">  
</font>**[**<font style="color:#DF2A3F;">https://gitee.com/XiaoYoe/Blog_XiaoYoe</font>**](https://gitee.com/XiaoYoe/Blog_XiaoYoe)**<font style="color:#DF2A3F;">  
</font>****解压到本地之后通过编译器打开文件之后打开项目终端**

**<font style="color:#DF2A3F;">npm install	</font>**								// 安装依赖

**<font style="color:#DF2A3F;">npm dev serve	</font>****	**							// 启动项目

### 安装
npm -v

node -v

npm cache clean -f 							// 缓存清除

npm config get registry                                                //查看当前镜像配置

npm config set registry [http://registry.npmmirror.com](http://registry.npmmirror.com)	//切换镜像源（淘宝镜像被下架了）

npm i @vue/cli -g  	                                               // 全局安装

vue --version  		                                               // 查看vue版本

vue create projectName                                             // 创建项目（项目名称不能包含大写字母）

npm run serve 	                                                      // 本地部署

### Git
###### 查看是否安装git
git --version

###### 查看全局配置的用户名和电子邮件
git config --global user.name

git config --global user.email

###### 设置全局配置的用户名和电子邮件
git config --global user.name "Your Name"

git config --global user.email "your-email@example.com"

###### 设置远程仓库
git remote -v 	<font style="color:#74B602;">查看已经配置的远程仓库设置</font>

git remote add origin <Url>	<font style="color:#74B602;">设置远程仓库</font>

git remote add origin [https://github.com/Xiaoyoe/Blog_XiaoYoe.git](https://github.com/Xiaoyoe/Blog_XiaoYoe.git)

###### 初始化git仓库(新项目的时候才需要)
git init

###### 重新命名当前分支为Main
git branch -M main

###### 查看当前分支
git branch

##### 主要操作
###### 查看当前的状态
git status

###### 将已修改或者新增文件添加到暂存区
git add .

###### 提交更改代码+备注信息
git commit -m "备注（描述更改）"

###### 推送到远程仓库(main分支) 推送需要提前配置好地址 通过 git remote add origin <url> 进行配置
git <font style="color:#DF2A3F;">push</font> origin main

###### Git更新到本地项目 （俗称拉项目 更新项目）拉取远程仓库的最新内容。首先确认你当前所在的分支是正确的（通常是 main 或 master），然后执行 git pull 来从 GitHub 上拉取最新的更改
git <font style="color:#DF2A3F;">pull</font> origin main

### Mock.Js
######  官网文档：
[http://mockjs.com/](http://mockjs.com/)

###### 环境安装
npm install mockjs

npm install -g bower

###### 在src目录下创建一个mock文件 创建index.js文件
```javascript
import Mock from 'mockjs';

// 模拟用户数据
Mock.mock('/api/user', 'get',{
    'status':200,
    'data':{
        'id': '@id',
        'name': '@cname',
        'email': '@email',
        'createTime': '@date("yyyy-MM-dd")'
    }
});
```

###### 导入main.js
```javascript
// eslint-disable-next-line no-unused-vars
import Mock from './mock' // 引入mock模拟数据
```

###### 调用使用
```vue
async getMockData(){
            console.log("测试");
            const mockData =await axios.get('/api/user')
            console.log(mockData)
        }
```



### Question
###### <font style="color:rgb(32, 33, 36);">系统中禁止执行脚本 Vue create 无法加载文件 C:\Users\Administrator\AppData 因为在此系统中禁止执行脚本</font>
![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1731034065668-b0c85d29-3ceb-4c76-8015-1f6338266dbd.png)

Win+R 打开运行框

输入powerShell 打开管理员命令行 

输入 <font style="color:rgb(57, 57, 57);">set-ExecutionPolicy RemoteSigned</font>

 更改策略模式 “Y”

![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1731034129834-f327a569-af47-4071-b9ad-1bea7f626510.png)![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1731034336387-0630149b-c8b0-469c-9ddb-05c012bb0b89.png)

###### Eslint的严格模式取消的方法
在package.json文件中添加rules规则

<font style="color:rgb(209, 154, 102);">"vue/multi-word-component-names"</font><font style="color:rgb(171, 178, 191);">:</font><font style="color:rgb(152, 195, 121);">"off" // 关闭 multi-word-component-names 规则</font>

![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1731088221602-4ff1123d-f7bf-4347-8887-af0f5eba680e.png)







###### 别名路径联想提示设置
在编写代码过程中，一旦输入 @/, VScode会立刻联想src下的所有子目录和文件，统一文件路径访问不容易出错

在src文件目录下创建一个jsconfig.json文件

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*":[
        "src/*"
      ]
    }
  }
}
```

###### 通过js更改浏览器标题图标  

```vue
<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // 设置页面的 favicon
    this.setFavicon('/path/to/your/favicon.ico');
  },
  methods: {
    setFavicon(iconPath) {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.rel = 'icon';
      link.href = iconPath;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }
}
</script>
```











