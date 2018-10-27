import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Listing from './views/Listing.vue'
import Edit from './views/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Listing
    },
    {
      path: '/listing',
      name: 'listing',
      component: Listing
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }
  ]
})
