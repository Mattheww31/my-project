<template>
  <div>
    COLLECTION {{count}}
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>
  </div>
</template>
<script>
import My_Squirtle from '../components/My_Squirtle.vue';

export default {
  name: 'Collection',
  components: {
    My_Squirtle
  },
  methods: {
    increment: function() {
      this.$store.commit("increment")
    },
    decrement: function() {
      this.$store.commit("decrement")
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}

</script>
<style>
</style>
