<template>
    <div>
        <div class="container">
            <h1>Film List :</h1>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Recherche</span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default" v-model="search">
            </div>
            <ul>
                <div class="row justify-content-center">
                    <MovieItem v-for="(m,i) of filteredMovie" v-bind:key="m.title" v-bind:m="m" v-bind:i="i" v-on:delete-movie="deleteMovie(i)"
                        v-on:show-movie="showMovie(i)" v-on:edit-movie="editMovie(i)">
                    </MovieItem>
                </div>
            </ul>
        </div>
    </div>
</template>


<script>
import MovieItem from './Item.vue'

export default {
    data() {
        return {
            movies: window.shared_data.movies,
            directors: window.shared_data.directors,
            search: '',
        }
    },
    props: ['m', 'i'],
    components: {
        MovieItem
    },
    methods: {
        deleteMovie(i) {
            this.movies.splice(i, 1);
        }
    },
    computed: {
      filteredMovie() {
          return this.movies.filter(post => {
              return post.title.toLowerCase().includes(this.search.toLowerCase())
                    || this.directors[post.director_id].name.toLowerCase().includes(this.search.toLowerCase())
                    || post.date.toString().includes(this.search.toLowerCase())
          })
      }
    },
}
</script>