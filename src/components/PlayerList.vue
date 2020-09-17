<template>
  <div>
    <div v-if="shamanPowerInvoked">
      <div class="md-layout">
        <div class="md-layout-item team1">
          <h1 class="sh-h-team1">TEAM1</h1>
          <PlayerCard v-for="player in team1" v-bind:key="player.id" v-bind:player="player" />
        </div>
        <div class="md-layout-item team2">
          <h1 class="sh-h-team2">TEAM2</h1>

          <PlayerCard v-for="player in team2" v-bind:key="player.id" v-bind:player="player" />
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="md-layout"
        v-if="numberPlayers >= 1"
      >Pick at least {{ numberPlayers }} players on the list:</div>
      <h1 class="sh-pick" v-else />
      <div class="md-layout">
        <PlayerCard v-for="player in playerData" v-bind:key="player.id" v-bind:player="player" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import PlayerCard from "./PlayerCard.vue";
import _ from "lodash";

export default {
  created() {
    _.forEach(store.state.allPlayers, function (p) {
      p.skills = p.defense + p.attack + p.cardio + p.lead;
    });
  },
  computed: {
    shamanPowerInvoked() {
      return this.$store.state.shamanPowerInvoked;
    },
    team1() {
      return this.$store.state.team1;
    },
    team2() {
      return this.$store.state.team2;
    },
    numberPlayers() {
      return 8 - _.size(this.$store.state.selectedPlayers);
    },
  },
  components: {
    PlayerCard,
  },
  data() {
    return {
      playerData: store.state.allPlayers,
    };
  },
};
</script>

<style lang="scss" scoped>
.md-layout {
  justify-content: center;
  font-size: 24px;
  margin-top: 25px;
}
.md-layout-item.team1 {
  border: white;
  border-style: solid;
  border-width: 12px;
  color: red;
  font-size: 24px;
}

.md-layout-item.team2 {
  border: white;
  border-style: solid;
  border-width: 12px;
  border-left: none;
  color: blue;
  font-size: 24px;
}

.sh-h-team2 {
  margin-top: 30px;
  margin-bottom: 1px;
  background-color: blue;
  width: 180px;
  height: 60px;
  margin-left: 360px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
}

.sh-h-team1 {
  margin-top: 30px;
  margin-bottom: 1px;
  background-color: red;
  width: 180px;
  height: 60px;
  margin-left: 360px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
}
</style>
