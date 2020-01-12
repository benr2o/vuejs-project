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
                        <input type="text" v-model="movie.date" class="form-control" id="date" aria-describedby="date" placeholder="1 janvier 2020">
                    </div>
                    <div class="form-group">
                        <label for="director">Director</label>
                        <input type="text" v-model="movie.dire" class="form-control" id="director" aria-describedby="director" placeholder="Director">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea v-model="movie.desc" class="form-control" id="description" rows="3"></textarea>
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