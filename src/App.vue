<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      counter: 0,
      search: '',
    }
  },
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
