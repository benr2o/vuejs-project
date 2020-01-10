<template>
    <div>
        <div class="img-container">
            <img :src="movie.img"/>
            <p id="title">{{movie.title}}</p>
        </div>
        <p>Date de sortie: {{movie.date}}</p>
        <p>Réalisateur: {{movie.real}}</p>
        <p>Description: {{movie.desc}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movies: window.shared_data.movies,
            }
        },
        methods: {
            deleteMovie(i) {
                this.$emit('delete-movie', i);
            }
        },
        computed: {
            movie() {
                return this.movies[this.$route.params.id];
            }
        },
    }
</script>