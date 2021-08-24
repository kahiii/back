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
  }
}
