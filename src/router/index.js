import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultView from '../views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      props: route => ({
        googleCseCx:route.query.google_cse_cx ?? import.meta.env.VITE_GOOGLE_CSE_CX
      })
    },
    {
      path: '/index.html',
      name: 'Index',
      component: HomeView,
      props: route => ({
        googleCseCx:route.query.google_cse_cx ?? import.meta.env.VITE_GOOGLE_CSE_CX
      })
    },
    {
        path: '/search',
        name: 'Results',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: ResultView,
        props: route => ({
          query:route.query.q,
          googleCseCx:route.query.google_cse_cx ?? import.meta.env.VITE_GOOGLE_CSE_CX
        })
    }
  ],
})

export default router
