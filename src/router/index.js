import { createWebHistory, createRouter } from 'vue-router';
import Details from '@/views/Details.vue';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true,
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
