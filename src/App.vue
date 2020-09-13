<template>
  <div id="app">
    <Teams />
    <PlayerList />
  </div>
</template>

<script>
import PlayerList from "./components/PlayerList.vue";
import Teams from "./components/Teams.vue";

export default {
  name: "App",
  components: {
    PlayerList,
    Teams,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}
</style>
