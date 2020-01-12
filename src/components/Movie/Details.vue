<template>
    <div>
        <div class="img-cover">
            <img class="cover" :src="movie.img"/>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <h1 class="display-1 text-uppercase">{{movie.title}}</h1>
            </div>
            <p>{{movie.date}} / {{movie.time}} </p>
            <p>De <strong>{{movie.dire}}</strong></p>
            <h2>SYNOPSIS:</h2>
            <p>{{movie.desc}}</p>
            <div class="row col">
                <a role="button" class="btn btn-primary" :href="movie.trailer" target="_blank">Bande d'annonce</a>
                <div class="col d-flex flex-row-reverse">
                    <router-link :to="'/edit/' + movie.id" class="btn btn-warning">Éditer</router-link>
                </div>
            </div>
        </div>
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