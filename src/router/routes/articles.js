export default [
  {
    path: '/articles',
    component: () => import('@/layouts/vertical/LayoutVertical.vue'),
    children: [
      {
        path: '/articles',
        name: 'apps-articles-list',
        component: () => import('@/views/apps/articles/ArticlesList.vue'),
        meta: {
          pageTitle: 'Liste des articles',
          breadcrumb: [
            { text: 'Articles' },
            { text: 'Liste', active: true },
          ],
        }
      },
      {
        path: '/articles/create',
        name: 'apps-articles-create',
        component: () => import('@/views/apps/articles/ArticleEdition.vue'),
        meta: {
          pageTitle: 'Créer un article',
          breadcrumb: [
            { text: 'Articles' },
            { text: 'Création', active: true },
          ],
        }
      },
      {
        path: '/articles/edit/:id',
        name: 'apps-articles-edit',
        component: () => import('@/views/apps/articles/ArticleEdition.vue'),
        meta: {
          pageTitle: 'Editer un article',
          breadcrumb: [
            { text: 'Articles' },
            { text: 'Edition', active: true },
          ],
        }
      }
    ]
  }
]