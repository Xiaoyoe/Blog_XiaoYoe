<template>
<div class="essay-box">
    <div class="essay-detail">
    <div v-if="essay" class="essay-content">
      <h1>{{ essay.title }}</h1>
        <div v-html="contentHtml" class="markdown-content">
        </div>
    </div>


    <div v-else class="loading">加载中...</div>
  </div>
</div>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'Essay',
  props: ['slug'], // 接收路由中的 slug 参数
  data() {
    return {
      essay: null, // 存储文章数据
      contentHtml: '', // 存储转换后的 HTML 内容
    };
  },
  created() {
    this.fetchEssay(); // 页面加载时获取文章内容
  },
  watch: {
    // 监听 slug 参数的变化，并重新加载文章内容
    slug: 'fetchEssay',
  },
  methods: {
    async fetchEssay() {
      console.log(2)
      const essayName = this.slug; // 使用路由参数作为文件名
      console.log(essayName);
      console.log(1)
      // 动态导入 Markdown 文件
      try {
        const markdownContent = await import(`@/assets/markdown/${essayName}.md`);
        const essayData = {
          title: essayName, // 标题可以根据需要设置
          content: markdownContent.default, // `default` 是文件的内容
        };

        this.essay = essayData;
        this.renderMarkdown(essayData.content);
      } catch (error) {
        console.error("加载 Markdown 文件失败", error);
      }
    },

    // 将 Markdown 内容转换为 HTML
    renderMarkdown(markdownContent) {
      this.contentHtml = marked(markdownContent); // 使用 marked 解析 Markdown 内容
    },
  },
};
</script>

<style scoped lang="less">
@import '@/assets/less/essay.less';
</style>
