// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/LandingPage.vue'),
      },
      {
        path: '/LogIn',
        name: 'LogIn',
        component: () => import('@/views/LogIn.vue'),
      },
      {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      },
    ],
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
