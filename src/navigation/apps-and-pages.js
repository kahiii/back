export default [
  {
    header: 'Apps & Pages',
  },
  {
    title: 'Email',
    route: 'apps-email',
    icon: 'envelope',
    isBookmarked: true,
  },
  {
    title: 'Todo',
    route: 'apps-todo',
    icon: 'user',
  },
  {
    title: 'Calendrier',
    route: 'apps-calendar',
    icon: 'calendar-alt',
    isBookmarked: true,
  },
  {
    title: 'Notes de frais',
    icon: 'user',
    children: [
      {
        title: 'Liste',
        route: 'apps-invoice-list',
      },
      {
        title: 'Ajouter',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
  {
    title: 'Témoignages',
    icon: 'user',
    children: [
      {
        title: 'Liste',
        route: 'apps-e-commerce-shop',
      },
      {
        title: 'Créer',
        route: { name: 'apps-e-commerce-product-details', params: { slug: 'apple-watch-series-5-27' } },
      },
    ],
  },
  {
    title: 'Utilisateurs',
    icon: 'user',
    route: 'apps-users-list',
  },
]
