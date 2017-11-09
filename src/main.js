import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import 'src/common/css/bootstrap.css'
import 'src/common/css/bootstrap-theme.css'
import 'src/common/css/reset.css'
import Useslider from 'components/useslider/Useslider.vue'
import Usetabs from 'components/usetabs/Usetabs.vue'
import Usenavbar from 'components/usenavbar/Usenavbar.vue'

Vue.use(VueRouter)
let app = Vue.extend(App)

let router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/': {
    component: App
  },
  '/usetabs': {
    component: Usetabs
  },
  '/useslider': {
    component: Useslider
  },
  '/usenavbar': {
    component: Usenavbar
  }
})
router.start(app, '#app')
