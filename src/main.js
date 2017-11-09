import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import 'src/common/css/bootstrap.css'
import 'src/common/css/bootstrap-theme.css'
import 'src/common/css/reset.css'
import Useslider from 'src/components/useslider/Useslider.vue'
import Usetabs from 'src/components/usetabs/Usetabs.vue'
import Usenavbar from 'src/components/usenavbar/Usenavbar.vue'
import Usealert from 'src/components/usealert/Usealert.vue'

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
  },
  '/usealert': {
    component: Usealert
  }
})
router.start(app, '#app')
