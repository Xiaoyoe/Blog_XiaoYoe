import Mock from 'mockjs'

// 模拟用户数据
Mock.mock('/api/user', 'get', {
  status: 200,
  data: {
    id: '@id',
    name: '@cname',
    email: '@email',
    createTime: '@date("yyyy-MM-dd")',
  },
})

// 模拟卡片文章内容数据(中文)
Mock.mock('/api/cardContentData', 'get', {
  'status': 200,
  'data|1-10': [
    // 生成1-10条数据
    {
      id: '@id',
      title: '@ctitle(2, 10)', // 生成 5 到 20 个中文字符的标题
      content: '@cparagraph(3, 6)', // 生成 3 到 6 句话的内容
      date: '@date("yyyy-MM-dd")', // 生成日期格式为 yyyy-MM-dd
      img: '',
    },
  ],
})

// 模拟卡片文章内容数据(英文)
Mock.mock('/api/cardContentData2', 'get', {
  'status': 200,
  'data|1': [
    {
      title: '@sentence(2, 3)', // 生成 3 到 5 个单词的英文标题
      content: '@paragraph(2, 3)', // 生成 3 到 5 个句子的英文段落
      date: '@date("yyyy-MM-dd")', // 生成日期格式
    },
  ],
})
