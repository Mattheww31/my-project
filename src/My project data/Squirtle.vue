
<template>
<div>
  <head>
    <meta charset="utf-8">
    <title>Pokemon Collector</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  </head>
  <body>
    <div class="col-sm-6 col-md-4">
       <div class="panel panel-info">
           <div class="panel-heading">
               <h3 class="panel-title">
                   Squirtle
                   <small>(Level: 1)</small>
               </h3>
           </div>
           <div class="panel-body">
               <div class="pull-right">
                   <button @click = "addPokemon"
                   class="btn btn-info">
                       Get
                   </button>
               </div>
           </div>
      </div>
    </div>
  </body>
</div>
</template>
<script>
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import { mapMutations } from 'vuex';


export default {
  name: 'squirtle',
  methods: {
    ...mapMutations([
      'addPokemon'
    ]),
    ...mapMutations({
      add: 'addPokemon'
    })
  }




}
</script>
