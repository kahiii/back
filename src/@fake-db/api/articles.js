import mock from '@datas/mock'
import { articles } from '@datas/datas/articles'
import { users } from '@datas/datas/users'

mock.onGet('/apps/articles').reply(config => {
  const {
    q = '',
  } = config.params

  const queryLowered = q.toLowerCase()

  const filteredData = articles.filter(article => article.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(queryLowered))
  filteredData.map(article => {
    const author = users.filter(user => user.id === article.author.id)[0]
    article.author = {
      id: author.id,
      fullname: author.fullname,
      avatar: author.avatar
    }
  })

  return [
    200,
    {
      articles: filteredData
    }
  ]
})

mock.onGet('/apps/article/:id').reply(config => {
  const {
    id = ''
  } = config.params

  const filteredArticle = articles.filter(article => article.id === id )[0]
  const author = users.filter(user => user.id === filteredArticle.author.id)[0]
  
  filteredArticle.author = {
    id: author.id,
    fullname: author.fullname,
    avatar: author.avatar
  }
  
  return [
    200,
    {
      article: filteredArticle
    }
  ]
})

mock.onGet('/apps/article/update').reply(config => {
  console.log(config.params)
  return [
    200,
    {
      article: ''
    }
  ]
})