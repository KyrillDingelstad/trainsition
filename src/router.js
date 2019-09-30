import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Praktijk from './views/Praktijk.vue'
import Zwanger from './views/Zwanger.vue'
import Bevalling from './views/Bevalling.vue'
import Kraamtijd from './views/Kraamtijd.vue'
import Anticonceptie from './views/Anticonceptie.vue'
import Nieuws from './views/Nieuws.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/praktijk',
      name: 'praktijk',
      component: Praktijk
    },
    {
      path: '/zwanger',
      name: 'zwanger',
      component: Zwanger
    },
    {
      path: '/bevalling',
      name: 'bevalling',
      component: Bevalling
    },
    {
      path: '/kraamtijd',
      name: 'kraamtijd',
      component: Kraamtijd
    },
    {
      path: '/anticonceptie',
      name: 'anticonceptie',
      component: Anticonceptie
    },
    {
      path: '/nieuws',
      name: 'nieuws',
      component: Nieuws
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
