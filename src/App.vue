<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="'/'" tag="a" class="navbar-brand">Ben's Studio</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <router-link :to="'/movies'" tag="a" class="nav-item nav-link">Movies</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
    computed: {
      filteredMovie() {
          return this.movies.filter(post => {
              return post.title.toLowerCase().includes(this.search.toLowerCase())
                      || post.real.toLowerCase().includes(this.search.toLowerCase())
                      || post.date.toString().includes(this.search)
          })
      }
    },
    methods: {
        showMovie(i) {
            this.movies[i].show = !this.movies[i].show;
        },
        editMovie(i) {
            this.movies[i].edit = !this.movies[i].edit;
        },
        deleteMovie(i) {
            this.movies.splice(i, 1);
        }
    }
}
</script>
