import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/Home/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import( '../pages/Search/SearchPage.vue')
  },
  {
    path: '/bingo/:id',
    name: 'Bingo',
    component: () => import( '../pages/Bingo/BingoPage.vue')
  },
  {
    path: '/sections',
    name: 'Sections',
    component: () => import( '../pages/Sections/SectionsPage.vue')
  }, 
  {
    path: '/history',
    name: 'History',
    component: () => import( '../pages/History/HistoryPage.vue')
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () => import( '../pages/Profile/ProfilePage.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import( '../pages/Registration/RegistrationPage.vue')
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: () => import( '../pages/Error404/Error404Page.vue') 
  },
  { 
    path: '/:pathMatch(.*)', 
    name: 'bad-not-found', 
    component: () => import( '../pages/Error404/Error404Page.vue') 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
