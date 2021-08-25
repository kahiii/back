import http from '@axios'

class Article {
  http = http

  async getArticles(queryParams) {
    const res = await http.get('http://localhost:9999/api/articles', {queryParams})
    return res.data.articles
  }

  async getArticle(queryParams) {
    const res = await http.get('/apps/article/:id', {params: queryParams})
    return res.data.article
  }

  async createArticle(queryParams) {
    const res = await http.get('/apps/article/create', {params: queryParams})
    return res.data.articles
  }

  async updateArticle(queryParams) {
    const res = await http.get('/apps/article/update/:id', {params: queryParams})
    return res.data.articles
  }
}

export default new Article()