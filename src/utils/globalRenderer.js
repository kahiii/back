module.exports = {
 methods: {
  resolveUserStatusVariant(status) {
      const warning = ['pending', 'draft']
      const success = ['active', 'published']
      const danger = ['inactive']

      if (warning.includes(status)) return 'warning'
      if (success.includes(status)) return 'success'
      if (danger.includes(status)) return 'danger'

      return 'primary'
    }
  },
  inputImageRenderer(file) {
    const reader = new FileReader()
    console.log('test')
    reader.addEventListener(
      'load',
      () => {
        this.article.picture = reader.result
      }
    )
    if (file) {
      reader.readAsDataURL(file)
    } 
  }
}
