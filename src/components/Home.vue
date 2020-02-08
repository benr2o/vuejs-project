<template>
    <div class="row justify-content-center align-items-center mt-5">
        <div class="alert alert-success flex-column d-flex align-items-center">
            <h1>Tous les films qui ont fait vibrer les salles !</h1>
            <router-link :to="'/movies'" tag="a" class="display-4 text-white"><span>-></span>Movies </router-link>
        </div>
    </div>
</template>