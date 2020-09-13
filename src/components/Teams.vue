<template>
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

    <div class="md-layout">
      <div class="md-layout-item md-layout-item-left">
        <img src="../assets/logo.png" />
      </div>
      <div class="md-layout-item">
        <md-button class="sh-bottom" v-on:click.native="handleClick">{{ shaman_text }}</md-button>
      </div>
    </div>
    <md-snackbar
      v-if="showSnackbar"
      :md-position="position"
      :md-duration="4"
      :md-active.sync="showSnackbar"
    >
      <span class="sh-testing">
        We need an even number of at least 8 players!
        <span class="sh-smile">&#128549;</span>
      </span>
      <md-button class="md-primary" @click="showSnackbar = false">Alright!</md-button>
    </md-snackbar>
  </div>
</template>

<script>
function playerSelector(team1, team2, players) {
  team1.push(_.first(players));

  team2.push(_.first(_.reverse(players)));

  _.pull(players, _.first(players));
  _.pull(players, _.first(_.reverse(players)));
}

import store from "../store";
import _ from "lodash";

export default {
  data: () => ({
    showSnackbar: false,
    position: "center",
    duration: 50,
    isInfinity: false,
    shaman_text: "Invoke Shaman Power!!!",
  }),

  methods: {
    handleClick() {
      this.isValidTeamSize =
        _.size(store.state.selectedPlayers) >= 8 &&
        _.size(store.state.selectedPlayers) % 2 == 0;

      this.showSnackbar = !this.isValidTeamSize;

      if (this.isValidTeamSize) {
        if (store.state.shamanPowerInvoked) {
          store.commit("cleanTeams");
          store.commit("shamanPowerInvoked", false);
          this.shaman_text = "Invoke Shaman Power!!!";
        } else {
          const weekPlayers = [];

          _.forEach(store.state.selectedPlayers, function (value) {
            var selectedPlayer = _.find(store.state.allPlayers, { id: value });
            weekPlayers.push(selectedPlayer);
          });
          const weekTopPlayers = _.sortBy(weekPlayers, (o) => o.skills);
          var keepTeamOrder = true;

          while (!_.isEmpty(weekTopPlayers)) {
            if (keepTeamOrder) {
              playerSelector(
                store.state.team1,
                store.state.team2,
                weekTopPlayers
              );
              keepTeamOrder = false;
            } else {
              playerSelector(
                store.state.team2,
                store.state.team1,
                weekTopPlayers
              );
              keepTeamOrder = true;
            }
          }
          store.commit("shamanPowerInvoked", true);
          this.shaman_text = "Invoke Shaman Again";
        }
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.sh-bottom {
  width: 1000px;
  height: 120px;
  margin: 8px;
  margin-top: 180px;
  margin-right: 200px;
  border-width: 4px;
  border-style: solid;
  border-color: black;
  background: greenyellow;
  font-size: 60px;
}
.sh-testing {
  font-size: 18px;
  align-items: center;
}
.material-icons {
  color: yellowgreen;
}
.sh-smile {
  font-size: 24px;
}
</style>

