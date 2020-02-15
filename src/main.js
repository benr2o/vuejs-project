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
      date: "2012-04-25",
      time: "2h 23min",
      langue: "Américain",
      director_id: 0,
      style: "Sci-Fi / Action",
      desc:
        "Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents. Les Avengers ont beau constituer la plus fantastique des équipes, il leur reste encore à apprendre à travailler ensemble, et non les uns contre les autres, d'autant que le redoutable Loki a réussi à accéder au Cube Cosmique et à son pouvoir illimité...",
      img:
        "https://occ-0-590-586.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd1ZQ7VuC9clk91edoXjp8YiMob36S1TrzKeJD0fgvJILpOxWpymgR8HVxsgykDmfDg0iJeiNhyPZxveWHuFSejWeLUy.jpg?r=796",
      trailer: "https://www.youtube.com/watch?v=b-kTeJhHOhc",
      vote: 1
    },
    {
      id: 1,
      title: "Avengers: l'ère d'Ultron",
      date: "2015-04-22",
      langue: "Americain",
      time: "2h 21min",
      director_id: 0,
      style: "Sci-Fi / Action",
      desc:
        "Alors que Tony Stark tente de relancer un programme de maintien de la paix jusque-là suspendu, les choses tournent mal et les super-héros Iron Man, Captain America, Thor, Hulk, Black Widow et Hawkeye vont devoir à nouveau unir leurs forces pour combattre le plus puissant de leurs adversaires : le terrible Ultron, un être technologique terrifiant qui s’est juré d’éradiquer l’espèce humaine. Afin d’empêcher celui-ci d’accomplir ses sombres desseins, des alliances inattendues se scellent, les entraînant dans une incroyable aventure et une haletante course contre le temps…",
      img:
        "https://blog.comic-con-paris.com/wp-content/uploads/2019/03/ob_6392cc_avengers-l-ere-d-ultron-1080x674.jpg",
      trailer: "https://www.youtube.com/watch?v=tmeOjFno6Do",
      vote: 1
    },
    {
      id: 2,
      title: "Avengers: Infinity War",
      date: "2018-04-25",
      langue: "Americain",
      time: "2h 36min",
      director_id: 1,
      style: "Sci-Fi / Action",
      desc:
        "Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.",
      img:
        "https://www.geekzone.fr/wp-content/uploads/2018/04/infinity_war.jpg",
      trailer: "https://www.youtube.com/watch?v=eIWs2IUr3Vs",
      vote: 1
    }
  ],
  directors: [
    {
      id: 0,
      name: "Joss Whedon",
      live: "New York",
      born: "1964-06-23"
    },
    {
      id: 1,
      name: "Joseph Vincent Russo",
      live: "Cleveland, Ohio - Etats-Unis",
      born: "1971-07-08"
    }
  ]
};

new Vue({
  render: h => h(App), router
}).$mount('#app')
