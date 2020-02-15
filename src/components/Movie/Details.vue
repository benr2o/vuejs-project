<template>
    <div>
        <div class="img-cover">
            <img class="cover" :src="movie.img"/>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <h1 class="display-1 text-uppercase col-12 text-center">{{movie.title}}</h1>
                <p>{{movie.style}} - <strong>{{movie.langue}}</strong></p>
            </div>
            <p>{{movie.date}} / {{movie.time}}</p>
            <p>De <strong>{{director.name}} - {{director.live}} - {{director.born}}</strong></p>
            <h2>SYNOPSIS:</h2>
            <p>{{movie.desc}}</p>
            <div class="row col">
                <a role="button" class="btn btn-primary" :href="movie.trailer" target="_blank">Bande d'annonce</a>
                <div class="col d-flex flex-row-reverse">
                    <router-link :to="'/edit/' + movie.id" class="btn btn-warning">Éditer</router-link>
                </div>
            </div>
            <hr>
            <fieldset class="form-group col-3">
                <legend>Vote</legend>
                <label for="customRange1">Note : {{movie.vote}}/5</label>
                <input type="range"  min="1" max="5" v-model="movie.vote" class="custom-range" id="customRange1">
            </fieldset>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movies: window.shared_data.movies,
                directors: window.shared_data.directors
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
            },
            director() {
                return this.directors[this.movie.director_id];
            }
        },
    }
</script>