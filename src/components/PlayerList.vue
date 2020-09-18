<!-- ADD A TEST TO CHECK IF THE PLAYER LIST IS VALID SIZE BEFORE CALLING PLAYER TEAMS.. IF NOT VALID SIZE OR NOT EVEN NUMBER THEN DON
DONT CALL PLAYER TEAMS ; SHOW A COUNT WITH THE AMOUNT OF PLAYER SELECTED SO FAR AND RED FOR BAD NUMBERS AND GREEN FOR GOOD ONES -->
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
      <back-to-top bottom="50px" right="100px" visibleoffset="-1">
        <md-button class="md-raised md-primary">AGAIN</md-button>
      </back-to-top>
    </div>
    <div v-else>
      <div class="md-layout" v-if="8 - numberPlayers >= 1">
        <strong>Pick {{ 8 - numberPlayers }} or more players on the list:</strong>
        <back-to-top bottom="50px" right="50px" visibleoffset="1200">
          <md-button class="md-raised md-primary">TOP</md-button>
        </back-to-top>
      </div>
      <div class="md-layout" v-else>
        <back-to-top bottom="50px" right="50px" visibleoffset="-1">
          <md-button class="md-raised md-primary">INVOKE</md-button>
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
