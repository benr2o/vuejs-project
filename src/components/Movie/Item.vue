<template>
    <li class="col-5 ">
        <div class="card mb-3">
            <h3 class="card-header">{{m.title}}</h3>
            <img style="height: 200px; width: 100%; display: block;" :src="m.img" alt="Card image">
            <div class="card-body">
                <router-link :to="'/details/' + m.id" class="btn btn-primary mr-1">Details</router-link>
                <button type="button" class="btn btn-danger" v-on:click="deleteMovie(i)">Supprimer</button> 
            </div>
        </div>
    </li>
</template>    
<script>
    export default {
        props: ['m', 'i'],
        methods: {
            deleteMovie(i) {
                this.$emit('delete-movie', i);
            },
        }
    }
</script>