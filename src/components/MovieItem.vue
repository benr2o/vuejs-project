<template>
    <li>
        <div v-show="!m.edit">
            <h2>{{ m.title }}</h2> 
            <sub>{{ m.date }}</sub> 
        </div> 
        <div v-show="m.edit"> 
            <input class="form-control" type="text" v-model="m.title"> 
            <input class="w-25 mt-1 form-control" type="date" v-model="m.date"> 
            <textarea class="w-100 rounded mt-1" type="text" v-model="m.desc"></textarea> 
        </div> 
        <div v-if="m.show && !m.edit"> 
            {{ m.desc }} 
        </div> 
        <div class="d-flex justify-content-end"> 
            <router-link :to="'details'">Accueil</router-link>
            <button type="button" class="btn btn-danger m-1" v-on:click="deleteMovie(i)">Supprimer</button>
            <button type="button" class="btn btn-success m-1" v-on:click="showMovie(i)">Détails</button> 
            <button type="button" class="btn btn-warning m-1" v-on:click="editMovie(i)">Editer</button> 
        </div> 
        <hr> 
    </li>
</template>    

