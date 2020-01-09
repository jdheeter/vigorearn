import Vue from 'vue'
console.log(Vue.$lang)
// const props = (route) =>({Vue.$lang})
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { name: 'Home', path: '', component: () => import('pages/Index.vue') },
      { name: 'Register', path: '/register', component: () => import('pages/Register.vue') },
      { name: 'Learn', path: '/learn', component: () => import('pages/Learn.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
