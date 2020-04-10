<template>
  <div class="row">
<!--       <div class="col-xs-12">
          <div>
              <h1>Gotta Catch Em All</h1>
              <h6>You may Save & Load your Data</h6>
              <h6>Click Collection to see your Pokemon</h6>
              <h6>Click Pokemon to get more Pokemon</h6>
              <hr>
              <p>Total Pokemon Collected: 0</p>
          </div>
      </div> -->
      HOME {{count}}
      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    increment: function(){
      this.$store.commit("increment")
    },
    decrement: function(){
      this.$store.commit("decrement")
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>