import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Movies from './components/Movie/Index'
import MovieDetails from './components/Movie/Details'
import MovieEdit from './components/Movie/Edit'

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/movies', component: Movies },
  { path: '/details/:id', component: MovieDetails },
  { path: '/edit/:id', component: MovieEdit},
]

const router = new VueRouter({
  routes
})

window.shared_data = {
  movies: [
    {
        id: 0,
        title: "The Avengers",
        date: "25 avril 2012",
        time: "2h 23min",
        dire: "Joss Whedon",
        desc: "Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents. Les Avengers ont beau constituer la plus fantastique des équipes, il leur reste encore à apprendre à travailler ensemble, et non les uns contre les autres, d'autant que le redoutable Loki a réussi à accéder au Cube Cosmique et à son pouvoir illimité...",
        img: "https://occ-0-590-586.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd1ZQ7VuC9clk91edoXjp8YiMob36S1TrzKeJD0fgvJILpOxWpymgR8HVxsgykDmfDg0iJeiNhyPZxveWHuFSejWeLUy.jpg?r=796",
        trailer: "https://www.youtube.com/watch?v=b-kTeJhHOhc",
        show: false,
        edit: false
    }, {
        id: 1,
        title: "Harry Potter 1",
        date: "5 décembre 2001",
        time: "2h 32min",
        dire: "Chris Columbus",
        desc: "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier.",
        img: "https://images.justwatch.com/backdrop/52992074/s1440/harry-potter-a-lecole-des-sorciers",
        trailer: "https://www.youtube.com/watch?v=ht5T2thYQFk",
        show: false,
        edit: false
    }
  ]
}

new Vue({
  render: h => h(App), router
}).$mount('#app')
