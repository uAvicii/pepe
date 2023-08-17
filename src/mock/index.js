import Mock from 'mockjs'

// 使用 Mock.mock() 定义接口的返回格式和数据
Mock.mock('/api/users', 'get', {
  'data|10': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|18-40': 1,
      email: '@email',
      imageUrl: '@image("350x100","#00ffff","@date")'
    }
  ]
})
