/**
 * Created by limei on 2017/7/13.
 */
import Vue from 'vue'
import vueRouter from 'vue-router'
import Index from './index'

Vue.use(vueRouter)
export default new vueRouter({
  hashbang: false,
  //mode:'history',
  /*base:'/mineCatalog/',*/
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      redirect: '/home',
    },
  ]
});

