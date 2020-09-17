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
  width: 90px;
  margin-top: 200px;
  margin-left: -40px;
}
</style>
