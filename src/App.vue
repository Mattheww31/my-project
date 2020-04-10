
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Collection from './components/Collection.vue';
import Store from './components/Store.vue';
import Squirtle from './components/Squirtle.vue';

export default {
  components:{
    Header,
    Home,
    Collection,
    Store,
    Squirtle,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
