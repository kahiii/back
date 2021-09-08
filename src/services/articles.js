import http from '@axios'

class Article {
  http = http
  async getArticles(queryParams) {
    const { q = '', limit = 10, page = 1 } = queryParams
    const res = await http.get(`${process.env.VUE_APP_BASE_API}/api/articles?q=${q}&limit=${limit}&page=${page}`)
    return res.data.articles
  }

  async getArticle(query) {
    const res = await http.get(`${process.env.VUE_APP_BASE_API}/api/article/${query}`)
    return res.data.article
  }

  async createArticle(...article) {
    const res = await http.post(`${process.env.VUE_APP_BASE_API}/api/article/create`, ...article)
    return res.data.articles
  }

  async updateArticle(id, ...article) {
    const formData = new FormData()
    formData.append('image', JSON.stringify(article.picture))
    const res = await http.put(`${process.env.VUE_APP_BASE_API}/api/article/update/${id}`, ...article)
    return res.data.articles
  }
}

export default new Article()