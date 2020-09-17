<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <PlayerList />
  </div>
</template>

<script>
import PlayerList from "./components/PlayerList.vue";

export default {
  name: "App",
  components: {
    PlayerList,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}
</style>
