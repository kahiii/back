import http from '@axios'

class Article {
  http = http
  async getArticles(queryParams) {
    const { q = '', limit = 10, page = 1 } = queryParams
    const res = await http.get(`http://localhost:9999/api/articles?q=${q}&limit=${limit}&page=${page}`)
    return res.data.articles
  }

  async getArticle(query) {
    const res = await http.get(`http://localhost:9999/api/article/${query}`)
    return res.data.article
  }

  async createArticle(...article) {
    const res = await http.post('http://localhost:9999/api/article/create', ...article)
    return res.data.articles
  }

  async updateArticle(...article) {
    const res = await http.put('http://localhost:9999/api/article/update', ...article)
    return res.data.articles
  }
}

export default new Article()