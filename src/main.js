import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/details', component: MovieDetails },
]

const router = new VueRouter({
  routes
})

window.shared_data = {
  movies: [
    {
        title: "Avengers",
        date: 2012,
        real: "Joss Whedon",
        desc: "Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix dans le monde, veut former une équipe d'irréductibles pour empêcher la destruction du monde. Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents.",
        show: false,
        edit: false
    }, {
        title: "Harry Potter 1",
        date: 2009,
        real: "Chris Columbus",
        desc: "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier.",
        show: false,
        edit: false
    }
  ]
}

new Vue({
  render: h => h(App), router
}).$mount('#app')
