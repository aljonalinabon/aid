import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AppInfoForm from '../components/application/AppInfoForm';
import AppInfoView from '../components/application/AppInfoView';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/application',
    name: 'AppInfoForm',
    component: AppInfoForm,
    // children: [
    //   {
    //     path: '/:id',
    //     name: 'ApplicationInfo',
    //     component: AppInfoForm
    //   }
    // ]
  },
  {
    path: '/applicationinfo',
    name: 'Application',
    component: AppInfoView,
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
    path: '*',
    name: 'PageNotFound',
    component: () => ('../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
