<script>
  import My_Squirtle from '../components/My_Squirtle.vue';

  export default {
    components:{
      My_Squirtle
    },

  }
  
</script>
<template>
<div>
    <head>
      <meta charset="utf-8">
      <title>Pokemon Collector</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <body>
      <div id="app">
        <div class="container">

          <div class="row">
              <div class="col-xs-12">
                  <div>
                      <h1>My Pokemon Collection</h1>
                          <br>
                          <div v-if="collection = false">
                              <!-- Use this div if you don't have any -->
                              <p>You don't have any pokemon! Go buy some from the store.</p>
                          </div>
                          <div v-else-if="collection = true">
                              <!-- Else use this one and put Pokemon here -->
                          </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </body>
</div>
</template>
