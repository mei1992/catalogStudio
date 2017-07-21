import Vue from 'vue'
import mainContent from './main.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

new Vue({
  el: '#app',
  router,
  template: '<mainContent/>',
  components: {mainContent}
})
