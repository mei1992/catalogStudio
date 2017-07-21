/**
 * Created by limei on 2017/7/13.
 */
import Vue from 'vue'
import vueRouter from 'vue-router'
import Main from './main'
import List1 from '../../components/main/list1.vue'
import List2 from '../../components/main/list2.vue'

Vue.use(vueRouter)
export default new vueRouter({
  hashbang: false,
  //mode:'history',
  /*base:'/mineCatalog/',*/
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      //redirect: '/main',
      children: [
        {
          path: 'list1',
          component: List1
        },
        {
          path: 'list2',
          component: List2
        }
      ]
    },
  ]
});
