<template>
    <li>
        <div v-show="!m.edit">
            <h2>{{ m.title }}</h2> 
            <sub>{{ m.date }}</sub> 
        </div>
        <div class="front-color"></div>
        <div v-show="m.edit"> 
            <input class="form-control" type="text" v-model="m.title"> 
            <input class="w-25 mt-1 form-control" type="date" v-model="m.date"> 
            <textarea class="w-100 rounded mt-1" type="text" v-model="m.desc"></textarea> 
        </div> 
        <div v-if="m.show && !m.edit"> 
            {{ m.desc }} 
        </div> 
        <div class="d-flex justify-content-end"> 
            <router-link :to="'/details/' + m.id" tag="button" class="btn btn-success m-1">Détails</router-link>
            <button type="button" class="btn btn-danger m-1" v-on:click="deleteMovie(i)">Supprimer</button>
            <button type="button" class="btn btn-warning m-1" v-on:click="editMovie(i)">Editer</button> 
        </div> 
        <hr> 
    </li>
</template>    
<script>
    export default {
        props: ['m', 'i'],
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
        }
    }
</script>