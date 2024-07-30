const routes = [
  {
    path: '/',
    redirect: '/question-1',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/question-1', component: () => import('pages/FirstQuestion.vue') },
      { path: '/question-2', component: () => import('pages/SecondQuestion.vue') },
      { path: '/question-3', component: () => import('pages/ThirdQuestion.vue') },
      { path: '/question-4', component: () => import('pages/FourthQuestion.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes;
