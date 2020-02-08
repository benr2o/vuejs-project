<template>
    <div>
        <div class="container">
            <form class="mt-5">
                <fieldset>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" v-model="movie.title" class="form-control" id="title" aria-describedby="title" placeholder="Title" autofocus>
                    </div>
                    <div class="form-group">
                        <label for="date">Date</label>
                        <input type="date" v-model="movie.date" class="form-control" id="date" aria-describedby="date" placeholder="1 janvier 2020">
                    </div>
                    <div class="form-group">
                        <label for="title">Style</label>
                        <input type="text" v-model="movie.style" class="form-control" id="style" aria-describedby="style" placeholder="Style">
                    </div>
                    <div class="form-group">
                        <label for="title">Langue</label>
                        <input type="text" v-model="movie.langue" class="form-control" id="langue" aria-describedby="langue" placeholder="Langue">
                    </div>
                    <div class="form-group">
                        <label for="title">URL Image (plz don't put bad image)</label>
                        <input type="text" v-model="movie.img" class="form-control" id="img" aria-describedby="img" placeholder="Image">
                    </div>
                    <div class="form-group">
                        <label for="title">URL Trailer</label>
                        <input type="text" v-model="movie.trailer" class="form-control" id="trailer" aria-describedby="trailer" placeholder="Trailer">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea v-model="movie.desc" class="form-control" id="description" rows="3"></textarea>
                    </div>
                    <h1>Director</h1>
                    <div class="ml-5 form-group">
                        <label for="director">Director name</label>
                        <input type="text" v-model="movie.dire.name" class="form-control" id="director" aria-describedby="director" placeholder="Director">
                    </div>
                    <div class="ml-5 form-group">
                        <label for="director">Director live</label>
                        <input type="text" v-model="movie.dire.live" class="form-control" id="director" aria-describedby="director" placeholder="Director">
                    </div>
                    <div class="ml-5 form-group">
                        <label for="director">Director born</label>
                        <input type="date" v-model="movie.dire.born" class="form-control" id="director" aria-describedby="director" placeholder="Director">
                    </div>
                    <router-link :to="'/details/' + movie.id" class="btn btn-primary">Submit</router-link>
                </fieldset>
            </form>
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
        computed: {
            movie() {
                return this.movies[this.$route.params.id];
            }
        },
    }
</script>