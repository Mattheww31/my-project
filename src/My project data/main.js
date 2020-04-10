// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Collection from './components/Collection.vue';
import Store from './components/Store.vue';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false

export const store = new Vuex.Store({
    state: {
      storearray: [{name:'squirtle',
                    level: 1,
                    type: 'info',
      },
      {name: 'bulbasaur',
        level: 1,
        type: 'success',
      },
      {name: 'charmander',
        level: 1,
        type: 'danger',
      },
      {name: 'pikachu',
        level: 1,
        type: 'warning',
      },
    ],
      collectionarray: [4],
    },
    mutations:{
      addPokemon: state => {
        return state.collectionarray.push(4);
      }
    },


})









const routes = [
  {
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/Collection',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/Store',
    name: 'Store',
    component: Store
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
