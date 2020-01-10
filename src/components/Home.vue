<template>
    <div>
        <h1>Film List :</h1>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Recherche</span>
            </div>
            <input type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" v-model="search">
        </div>
        <ul>
            <MovieItem v-for="(m,i) of filteredMovie" v-bind:key="m.title" v-bind:m="m" v-bind:i="i" v-on:delete-movie="deleteMovie(i)"
                v-on:show-movie="showMovie(i)" v-on:edit-movie="editMovie(i)">
            </MovieItem>
        </ul>
    </div>
</template>


<script>
import MovieItem from './MovieItem.vue'

export default {
    data() {
        return {
            movies: window.shared_data.movies,
            search: '',
        }
    },
    props: ['m', 'i'],
    components: {
        MovieItem
    },
    methods: {
        showMovie(i) {
            this.$emit('show-movie', i);
        },
        editMovie(i) {
            this.$emit('edit-movie', i);
        },
        deleteMovie(i) {
            this.$emit('delete-movie', i);
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
}
</script>