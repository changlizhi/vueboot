import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import 'src/common/css/bootstrap.css'
import Useslider from 'components/useslider/Useslider.vue'
import Usetabs from 'components/usetabs/Usetabs.vue'

Vue.use(VueRouter)
let app = Vue.extend(App)

let router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/': {
    component: Useslider
  },
  '/usetabs': {
    component: Usetabs
  }
})
router.start(app, '#app')
