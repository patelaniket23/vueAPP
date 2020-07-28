import Vue from 'vue'
import Router from 'vue-router'
import VueNotes from '@/components/VueNotes'
import Test from '@/components/Test'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-273341.okta.com/oauth2/default',
  client_id: '0oamzx1sloX9fAOX74x6',
  redirect_uri: window.location.origin + '/callback'
})
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/notes',
      name: 'VueNotes',
      component: VueNotes,
      meta: {
        reuiresAuth: true
      }
    },
    {
      path: '/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})

Router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
