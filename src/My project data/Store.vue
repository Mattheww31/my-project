<script>
  import Squirtle from '../components/Squirtle.vue';
  import Bulbasaur from '../components/Bulbasaur.vue';
  import Charmander from '../components/Charmander.vue';
  import Pikachu from '../components/Pikachu.vue';


  export default {
    components:{
      Squirtle,
      Bulbasaur,
      Charmander,
      Pikachu,
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

        <div class="row">
            <div class="col-xs-12">
                <div>
                    <h1>Pokemon Collection</h1>
                        <br>
                        <div>
                          <Squirtle></Squirtle>
                          <Bulbasaur></Bulbasaur>
                          <Charmander></Charmander>
                          <Pikachu></Pikachu>

                        </div>

                </div>
            </div>
        </div>

    </div>
  </body>
</div>
</template>
