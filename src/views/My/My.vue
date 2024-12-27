<template>
    <div class="my-page-box">
        <NavTop />
        <div class="profile-container">
            <!-- 个人信息 -->
            <div class="profile-card">
                <div class="avatar-container">
                    <img src="https://wx3.sinaimg.cn/mw690/005LlktZly1hr9jdazs2ej30zk0zkx24.jpg" alt="Avatar"
                        class="avatar" />
                </div>
                <h1 class="name">XiaoYoe</h1>
                <p class="description">
                    哇塞哇塞 平平无奇 只会睡觉
                </p>
                <p class="description">
                    目前专注于 Vue.js，并在不断探索最新的前端技术和设计趋势。
                </p>

                <!-- 技能展示 -->
                <div class="skills-container">
                    <h3 class="skills-title">技能树</h3>
                    <div class="skills-list">
                        <div class="skill-card">HTML</div>
                        <div class="skill-card">CSS</div>
                        <div class="skill-card">JavaScript</div>
                        <div class="skill-card">Vue</div>
                        <div class="skill-card">Pinia</div>
                        <div class="skill-card">Node</div>
                        <div class="skill-card">Git</div>
                        <div class="skill-card">Wxml</div>
                    </div>
                </div>

                <!-- 项目展示 -->
                <div class="projects-container">
                    <h3 class="projects-title">我的项目</h3>
                    <div class="projects-list">
                        <div class="project-card">
                            <h4 class="project-name">音乐播放器</h4>
                            <p class="project-description">
                                介绍了微信小程序毕业设计的整体流程，包括项目选题、技术选型、开发过程、部署上线及常见问题解决方案。适合正在进行微信小程序开发的同学参考。
                            </p>
                            <a href="https://github.com/Xiaoyoe/NetEase-Cloud-Music-Applet" target="_blank"
                                class="project-link">查看项目</a>
                        </div>
                        <div class="project-card">
                            <h4 class="project-name">个人博客</h4>
                            <p class="project-description">
                                使用 Vue和 Css 纯手撸构建的个人博客。
                            </p>
                            <a href="https://github.com/Xiaoyoe/Blog_XiaoYoe" target="_blank"
                                class="project-link">查看项目</a>
                        </div>
                    </div>
                </div>

                <!-- 博客文章 -->
                <div class="blog-container">
                    <h3 class="blog-title">其他分享</h3>
                    <div class="blog-list">
                        <div class="blog-item">
                            <h4 class="blog-title-item">B站MG动画</h4>
                            <p class="blog-description">
                                MG动画（Motion Graphics Animation）是一种利用动态图形、文字、影像等元素进行创意表现的动画形式，广泛应用于广告、视频、电影等领域。在
                                B站等平台，MG动画常常用来生动地传递信息、讲解复杂概念，具有很高的创意和表现力。
                            </p>
                            <a href="https://www.bilibili.com/video/BV1HN411y7PA/?spm_id_from=333.1387.homepage.video_card.click"
                                class="blog-link">阅读全文</a>
                        </div>
                        <div class="blog-item">
                            <h4 class="blog-title-item">语雀 学习笔记分享</h4>
                            <p class="blog-description">
                                在这篇文章中，我分享了我在语雀平台上整理的前端学习笔记，涵盖了 Vue 3、CSS 等前端技术的关键点和实践经验，希望能帮助大家更高效地掌握前端开发的核心知识。
                            </p>
                            <a href="http://localhost:8080/#/404" class="blog-link">阅读全文</a>
                        </div>
                    </div>
                </div>

                <!-- 社交链接 -->
                <div class="contact-container">
                    <h3 class="contact-title">联系我</h3>
                    <div class="social-links">
                        <div class="social-tag">
                            <div class="social-tag-box">
                                <a href="https://music.163.com/#/user/home?id=532594681" target="_blank"><i
                                        class="icon-netease">
                                        <svg t="1731459913800" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="2546" width="200" height="200">
                                            <path
                                                d="M350.375 62h323.25C774.5 62 812 72.5 846.875 92A204.375 204.375 0 0 1 932 177.125c19.5 34.875 30 72.375 30 173.25v323.25c0 100.125-10.5 136.5-30 173.25A204.375 204.375 0 0 1 846.875 932c-37.5 19.5-73.125 30-173.25 30h-323.25C249.5 962 212 951.5 177.125 932A204.375 204.375 0 0 1 92 846.875C72.5 812 62 774.5 62 673.625v-323.25C62 249.5 72.5 212 92 177.125A204.375 204.375 0 0 1 177.125 92C212 72.5 249.5 62 350.375 62z"
                                                fill="#D81E06" p-id="2547"></path>
                                            <path
                                                d="M645.125 177.875a156.75 156.75 0 0 1 58.875 28.5 43.875 43.875 0 0 1 15 18.375 37.5 37.5 0 0 1-3.375 34.875 37.5 37.5 0 0 1-51.375 11.625c-4.125-2.625-7.125-6.375-11.25-8.625a67.875 67.875 0 0 0-37.5-12.375 37.5 37.5 0 0 0-24 12.375 26.625 26.625 0 0 0-7.125 24l13.875 52.125a201 201 0 0 1 94.5 27.75 269.625 269.625 0 0 1 72.375 64.875 225 225 0 0 1 37.5 75A249.375 249.375 0 0 1 812 593a275.25 275.25 0 0 1-15 72 282 282 0 0 1-112.5 138 300 300 0 0 1-124.125 43.5 310.5 310.5 0 0 1-91.125 0 300 300 0 0 1-164.25-87 322.5 322.5 0 0 1-85.125-297.375 316.5 316.5 0 0 1 189.75-225 50.25 50.25 0 0 1 42 2.25A37.5 37.5 0 0 1 467 274.625a37.5 37.5 0 0 1-24 30.75 241.5 241.5 0 0 0-153.375 193.5 246 246 0 0 0 13.5 119.25 242.25 242.25 0 0 0 112.5 129.75A219.375 219.375 0 0 0 518 772.625a255.75 255.75 0 0 0 85.875-15.375 203.625 203.625 0 0 0 111-95.25 166.5 166.5 0 0 0 14.25-33.75 187.5 187.5 0 0 0 0-104.25 158.25 158.25 0 0 0-47.625-73.125A208.5 208.5 0 0 0 650 428a120.375 120.375 0 0 0-31.5-12c7.5 30 15.75 60 23.625 90.375l3.75 21.75a127.875 127.875 0 0 1-103.125 129.75 122.625 122.625 0 0 1-90-16.875 135.375 135.375 0 0 1-53.25-69 163.875 163.875 0 0 1-9-49.125 169.5 169.5 0 0 1 28.5-103.5 187.5 187.5 0 0 1 104.25-72l-9-34.875a103.5 103.5 0 0 1 5.625-75 108.375 108.375 0 0 1 27-34.125A110.25 110.25 0 0 1 587 178.625a112.5 112.5 0 0 1 58.125-0.75z"
                                                fill="#FFFFFF" p-id="2548"></path>
                                            <path
                                                d="M490.25 451.625a87.75 87.75 0 0 0-22.125 42 112.5 112.5 0 0 0 0 43.5 64.875 64.875 0 0 0 24.75 40.5 47.625 47.625 0 0 0 37.5 7.125A52.5 52.5 0 0 0 572.75 536a135 135 0 0 0-3.375-17.25L543.5 420.875a119.625 119.625 0 0 0-53.25 30.75z"
                                                fill="#D81E06" p-id="2549"></path>
                                        </svg>
                                    </i></a>
                                <a href="https://gitee.com/XiaoYoe" target="_blank"><i class="icon-gitee">
                                        <svg t="1731459990816" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="4998" width="200" height="200">
                                            <path
                                                d="M512 992C246.895625 992 32 777.104375 32 512S246.895625 32 512 32s480 214.895625 480 480-214.895625 480-480 480z m242.9521875-533.3278125h-272.56875a23.7121875 23.7121875 0 0 0-23.71125 23.7121875l-0.024375 59.255625c0 13.08 10.6078125 23.7121875 23.6878125 23.7121875h165.96c13.104375 0 23.7121875 10.6078125 23.7121875 23.6878125v11.855625a71.1121875 71.1121875 0 0 1-71.1121875 71.1121875h-225.215625a23.7121875 23.7121875 0 0 1-23.6878125-23.7121875V423.1278125a71.1121875 71.1121875 0 0 1 71.0878125-71.1121875h331.824375a23.7121875 23.7121875 0 0 0 23.6878125-23.71125l0.0721875-59.2565625a23.7121875 23.7121875 0 0 0-23.68875-23.7121875H423.08a177.76875 177.76875 0 0 0-177.76875 177.7921875V754.953125c0 13.1034375 10.60875 23.7121875 23.713125 23.7121875h349.63125a159.984375 159.984375 0 0 0 159.984375-159.984375V482.36a23.7121875 23.7121875 0 0 0-23.7121875-23.6878125z"
                                                fill="#C71D23" p-id="4999"></path>
                                        </svg>
                                    </i></a>
                                <a href="https://space.bilibili.com/105125425?spm_id_from=333.1007.0.0"
                                    target="_blank"><i class="icon-bilibili">
                                        <svg t="1731459860346" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="1482" width="200" height="200">
                                            <path
                                                d="M1019.54782609 345.3106087c-3.20556522-142.1133913-127.15408696-169.36069565-127.15408696-169.36069566s-96.70121739-0.53426087-222.25252174-1.60278261l91.3586087-88.15304347s14.42504348-18.16486957-10.15095652-38.46678261c-24.576-20.30191304-26.17878261-11.21947826-34.72695653-5.87686957-7.47965217 5.3426087-117.00313043 112.72904348-136.23652174 131.96243479-49.68626087 0-101.50956522-0.53426087-151.73008695-0.53426087h17.63060869S315.392 43.98747826 306.84382609 38.1106087s-9.61669565-14.42504348-34.72695652 5.87686956c-24.576 20.30191304-10.15095652 38.46678261-10.15095653 38.46678261l93.49565218 90.82434783c-101.50956522 0-189.12834783 0.53426087-229.73217392 2.13704347C-5.69878261 213.34817391 4.45217391 345.3106087 4.45217391 345.3106087s1.60278261 283.15826087 0 426.34017391c14.42504348 143.18191304 124.48278261 166.15513043 124.48278261 166.15513043s43.8093913 1.06852174 76.39930435 1.06852174c3.20556522 9.08243478 5.87686957 53.96034783 56.0973913 53.96034783 49.68626087 0 56.0973913-53.96034783 56.09739131-53.96034783s365.96869565-1.60278261 396.42156522-1.60278261c1.60278261 15.49356522 9.08243478 56.63165217 59.30295652 56.09739131 49.68626087-1.06852174 53.42608696-59.30295652 53.42608695-59.30295652s17.09634783-1.60278261 67.85113044 0c118.60591304-21.90469565 125.55130435-160.81252174 125.55130435-160.81252174s-2.13704348-285.82956522-0.53426087-427.94295652z m-102.04382609 453.05321739c0 22.43895652-17.6306087 40.60382609-39.53530435 40.60382608h-721.25217391c-21.90469565 0-39.53530435-18.16486957-39.53530435-40.60382608V320.20034783c0-22.43895652 17.6306087-40.60382609 39.53530435-40.60382609h721.25217391c21.90469565 0 39.53530435 18.16486957 39.53530435 40.60382609v478.16347826z"
                                                fill="#1296db" p-id="1483"></path>
                                            <path
                                                d="M409.088 418.816l-203.264 38.912 17.408 76.288 201.216-38.912zM518.656 621.056c-49.664 106.496-94.208 26.112-94.208 26.112l-33.28 21.504s65.536 89.6 128 21.504c73.728 68.096 130.048-22.016 130.048-22.016l-30.208-19.456c0-0.512-52.736 75.776-100.352-27.648zM619.008 495.104l201.728 38.912 16.896-76.288-202.752-38.912z"
                                                fill="#1296db" p-id="1484"></path>
                                        </svg></i>
                                </a>
                                <a href="https://github.com/Xiaoyoe" target="_blank"><i class="icon-github">
                                        <svg t="1731460026341" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="6111" width="200" height="200">
                                            <path
                                                d="M20.48 503.72608c0 214.4256 137.4208 396.73856 328.94976 463.6672 25.8048 6.5536 21.87264-11.8784 21.87264-24.33024v-85.07392c-148.93056 17.44896-154.86976-81.1008-164.94592-97.52576-20.23424-34.52928-67.91168-43.33568-53.69856-59.76064 33.91488-17.44896 68.48512 4.42368 108.46208 63.61088 28.95872 42.88512 85.44256 35.6352 114.15552 28.4672a138.8544 138.8544 0 0 1 38.0928-66.7648c-154.25536-27.60704-218.60352-121.77408-218.60352-233.79968 0-54.31296 17.94048-104.2432 53.0432-144.54784-22.36416-66.43712 2.08896-123.24864 5.3248-131.6864 63.81568-5.7344 130.00704 45.6704 135.168 49.68448 36.2496-9.78944 77.57824-14.9504 123.82208-14.9504 46.4896 0 88.064 5.3248 124.5184 15.23712 12.288-9.4208 73.80992-53.53472 133.12-48.128 3.15392 8.43776 27.0336 63.93856 6.02112 129.4336 35.59424 40.38656 53.69856 90.76736 53.69856 145.24416 0 112.18944-64.7168 206.4384-219.42272 233.71776a140.0832 140.0832 0 0 1 41.7792 99.9424v123.4944c0.86016 9.87136 0 19.6608 16.50688 19.6608 194.31424-65.49504 334.2336-249.15968 334.2336-465.5104C1002.57792 232.48896 782.66368 12.77952 511.5904 12.77952 240.18944 12.65664 20.48 232.40704 20.48 503.72608z"
                                                fill="#000000" opacity=".65" p-id="6112"></path>
                                        </svg>
                                    </i></a>
                                <a href="https://weixin.qq.com" target="_blank"><i class="icon-weixin">
                                        <svg t="1731459977531" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="4037" width="200" height="200">
                                            <path
                                                d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                                                fill="#28C445" p-id="4038"></path>
                                            <path
                                                d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                                                fill="#28C445" p-id="4039"></path>
                                        </svg>
                                    </i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 动态文本 -->
            <div class="dynamic-text">
                <!-- 新增导航条 -->
                <div class="macos-nav">
                    <span class="circle red"></span>
                    <span class="circle yellow"></span>
                    <span class="circle green"></span>
                </div>

                <h2 class="dynamic-text-header">关于我自己</h2>
                <p class="dynamic-text-body">欢迎来到我的博客！我是一个热爱前端开发的学习者，特别关注 Vue 2 和 Vue 3
                    相关的开发实践。在这里，我会分享我在前端技术领域的学习心得、项目经验，以及我对新技术的理解。</p>
                <p class="dynamic-text-body">我最初接触编程时，前端就成了我最感兴趣的方向。从学习 HTML、CSS 到掌握 JavaScript，再到深入 Vue.js
                    框架，我逐渐建立起了前端开发的知识体系。在 Vue 2 和 Vue 3 的实践中，我积累了大量的经验，尤其是 Vue 组件化开发、路由管理、状态管理（Vuex）等方面的使用。</p>
                <p class="dynamic-text-body">在 CSS 和 LESS 方面，我注重提升页面的布局、响应式设计和样式的优化。我特别喜欢使用 LESS 预处理器来提高 CSS
                    代码的可维护性，并通过模块化的方式使样式更加清晰易懂。</p>
            </div>


        </div>
    </div>

</template>

<script>
    import NavTop from '@/views/NavBar/NavTop.vue'
    export default {
        components: {
            NavTop
        }
    }
</script>

<style scoped lang="less">
    .profile-container {
        position: relative;
        width: 100%;
        height: 93vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

    }

    .background-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        opacity: 0.2;
        z-index: -1;
    }

    /* 个人卡片样式 */
    .profile-card {
        border-radius: 15px;
        padding: 40px 30px;
        background: #fffffff1;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 800px;
        width: 100%;
        height: 70%;
        /* 默认高度 */
        overflow-y: hidden;
        /* 隐藏溢出的内容 */
        transition: height .8s ease-in-out, padding .7s ease-in-out, box-shadow 0.3s ease;
        /* 动画过渡 */
    }

    .profile-card:hover {
        padding: 40px 10px;
        height: 95%;
        /* 悬停时高度增加 */
        overflow-y: auto;
        /* 允许滚动，避免内容被裁剪 */
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        /* 悬停时阴影效果 */
    }


    /* 头像容器 */
    .avatar-container {
        position: relative;
        margin-bottom: 20px;
    }

    .avatar {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .name {
        font-size: 2.5rem;
        color: #333;
        margin-top: 15px;
        font-family: 'Pixel', sans-serif;
        text-shadow: 1px 1px 2px #ffb8b8, 0 0 25px #a2a9fa;
    }

    .description {
        font-size: 1.2rem;
        color: #444;
        margin-top: 10px;
        font-family: 'Poppins', sans-serif;
        line-height: 1.5;
    }

    .skills-container {
        margin-top: 40px;
    }

    .skills-title {
        font-size: 1.8rem;
        color: #ffb8b8;
        font-family: 'Pixel', sans-serif;
        margin-bottom: 15px;
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }

    .skill-card {
        background-color: #fff;
        color: #333;
        font-size: 1rem;
        padding: 10px 20px;
        border-radius: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, background-color 0.3s;
    }

    .skill-card:hover {
        transform: translateY(-5px);
        background-color: #ffb8b8;
        color: #fff;
    }

    .projects-container {
        margin-top: 40px;
    }

    .projects-title {
        font-size: 1.8rem;
        color: #ffb8b8;
        font-family: 'Pixel', sans-serif;
        margin-bottom: 15px;
    }

    .projects-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .project-card {
        background: #fffffff1;
        padding: 15px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .project-name {
        font-size: 1.5rem;
        color: #333;
    }

    .project-description {
        color: #555;
        font-size: 1rem;
        margin-top: 10px;
    }

    .project-link {
        color: #ffb8b8;
        text-decoration: none;
        font-weight: bold;
        margin-top: 10px;
    }

    .blog-container {
        margin-top: 40px;
    }

    .blog-title {
        font-size: 1.8rem;
        color: #ffb8b8;
        font-family: 'Pixel', sans-serif;
        margin-bottom: 15px;
    }

    .blog-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .blog-item {
        background-color: #fff;
        padding: 15px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .blog-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .blog-title-item {
        font-size: 1.5rem;
        color: #333;
    }

    .blog-description {
        color: #555;
        font-size: 1rem;
        margin-top: 10px;
    }

    .blog-link {
        color: #ffb8b8;
        text-decoration: none;
        font-weight: bold;
        margin-top: 10px;
    }

    .contact-container {
        margin-top: 40px;
    }

    .contact-title {
        font-size: 1.8rem;
        color: #ffb8b8;
        font-family: 'Pixel', sans-serif;
        margin-bottom: 15px;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    .social-icon {
        font-size: 2rem;
        color: #333;
        transition: transform 0.3s, color 0.3s;
    }

    .social-icon:hover {
        transform: scale(1.2);
        color: #ffb8b8;
    }

    .dynamic-text {
        margin-top: 40px;
        text-align: left;
        background: #fffffff1;
        height: 10px;
        padding: 30px;
        display: flex;
        align-items: center;
        margin-left: 10px;
        width: 20%;
        justify-content: center;
        flex-direction: column;
        transition: .8s ease-in-out;
        border-radius: 12px;
        overflow: hidden;
        /* 隐藏超出部分 */
    }

    .dynamic-text:hover {
        text-align: left;
        width: 40%;
        padding: 20px;
        height: 500px;
        /* 悬停时展开显示更多内容 */
        transform: translateY(-8px);
        /* 增加悬停时的浮动效果 */
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        /* 更强的悬停阴影 */
    }

    /* header 样式 */
    .dynamic-text-header {
        font-size: 1.8rem;
        margin-top: 30px;
        color: #ffb8b8;
        font-family: 'Pixel', sans-serif;
    }

    /* body 样式，初始设置为隐藏 */
    .dynamic-text-body {
        font-size: 1.2rem;
        color: #444;
        font-family: 'Poppins', sans-serif;
        line-height: 1.6;
        padding: 5px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
    }

    /* 悬停时显示完整内容 */
    .dynamic-text:hover .dynamic-text-body {
        max-height: 500px;
        /* 控制显示的最大高度 */
    }


    /* 标签盒子 */

    .social-tag {
        background-color: #fff;
        padding: 15px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 35px;



        .social-tag-follow-me {
            background: #49b1f5;
            height: 100%;
            width: 75%;
            border-radius: 13px;
            color: white;
            font-weight: 800;
            user-select: none;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            /* 添加 box-shadow 的过渡 */
        }

        .social-tag-follow-me:hover {
            background: #f58195d7;
            transform: scale(1.1) translateY(-5px);
            /* 向上平移 5px */
            box-shadow: 0 4px 8px rgba(255, 15, 15, 0.315);
            /* 添加阴影效果 */
        }

        .social-tag-box {
            width: 65%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 10px;

            .icon {
                width: 25px;
                height: 25px;
                display: flex;
                justify-content: center;
                transition: transform 0.3s ease;
            }

            .icon:hover {
                transform: scale(1.2);
            }
        }
    }

    .social-tag:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
</style>