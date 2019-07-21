import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import Button from './common/Button.vue'
import LineBreak from './common/LineBreak.vue'
import Block from './common/Block.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faEnvelope, faGithub, faLinkedinIn)

Vue.component('font-awesome-icon', FontAwesomeIcon)


const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueRouter)

Vue.component('v-button', Button)
Vue.component('line-break', LineBreak)
Vue.component('v-block', Block)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
