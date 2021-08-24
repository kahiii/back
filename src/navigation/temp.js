export default [
  {
    title: 'Articles',
    icon: 'user',
    children: [
      {
        title: 'Liste des articles',
        route: { name: 'apps-articles-list' },
      },
      {
        title: 'Ajouter un article',
        route: { name: 'apps-articles-create' },
      },
    ],
  },
]