<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <img class="football" src="http://upload.wikimedia.org/wikipedia/en/e/ec/Soccer_ball.svg" />
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

.football {
  width: 60px;
  margin-top: 220px;
  margin-left: -65px;
}
</style>
