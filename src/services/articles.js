import http from '@axios'

class Article {
  http = http
  async getArticles(queryParams) {
    const { q = '', limit = 10, page = 1 } = queryParams
    const res = await http.get(`https://couleurdesmauxv2.herokuapp.com/api/articles?q=${q}&limit=${limit}&page=${page}`)
    return res.data.articles
  }

  async getArticle(query) {
    const res = await http.get(`https://couleurdesmauxv2.herokuapp.com/api/article/${query}`)
    return res.data.article
  }

  async createArticle(...article) {
    const res = await http.post('https://couleurdesmauxv2.herokuapp.com/api/article/create', ...article)
    return res.data.articles
  }

  async updateArticle(id, article) {
    const res = await http.put(`https://couleurdesmauxv2.herokuapp.com/api/article/update/${id}`, article)
    return res.data.articles
  }
}

export default new Article()