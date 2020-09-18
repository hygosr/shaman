<!-- SHOW A COUNT WITH THE AMOUNT OF PLAYER SELECTED SO FAR AND RED FOR BAD NUMBERS AND GREEN FOR GOOD ONES -->
<template>
  <div>
    <div v-if="shamanPowerInvoked">
      <div class="md-layout">
        <div class="md-layout-item team1">
          <h1>TEAM1</h1>
          <PlayerCard v-for="player in team1" v-bind:key="player.id" v-bind:player="player" />
        </div>
        <div class="md-layout-item team2">
          <h1>TEAM2</h1>
          <PlayerCard v-for="player in team2" v-bind:key="player.id" v-bind:player="player" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="md-layout">
        <strong>Pick at least 8 players for the match:</strong>
        <back-to-top bottom="50px" right="50px" visibleoffset="1200">
          <md-button class="md-raised md-primary">TOP</md-button>
        </back-to-top>
      </div>
      <div class="md-layout">
        <PlayerCard v-for="player in allPlayers" v-bind:key="player.id" v-bind:player="player" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import PlayerCard from "./PlayerCard.vue";
import BackToTop from "vue-backtotop";
import _ from "lodash";

export default {
  created() {
    _.forEach(store.state.allPlayers, function (p) {
      p.skills = p.defense + p.attack + p.cardio + p.lead;
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
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
      return _.size(this.$store.state.selectedPlayers);
    },
  },
  components: {
    PlayerCard,
    BackToTop,
  },
  data() {
    return {
      allPlayers: store.state.allPlayers,
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
</style>
