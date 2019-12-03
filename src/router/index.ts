import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/myProject',
    children: [
      {
        path: 'myProject',
        name: 'myProject',
        component: () => import(/* webpackChunkName: "login" */ '../views/Home/views/myProject/myProject.vue')
      },
      {
        path: 'myPartake',
        name: 'myPartake',
        component: () => import(/* webpackChunkName: "login" */ '../views/Home/views/myPartake/myPartake.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/Login.vue')
  },
  {
    path: '/mobeilEdit',
    name: 'mobeilEdit',
    component: () => import(/* webpackChunkName: "login" */ '../views/mobeilEdit/mobeilEdit.vue')
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
