<template>
  <div>
    <back-to-top bottom="50px" right="150px" visibleoffset="-1">
      <md-button class="md-raised md-primary">INVOKE</md-button>
    </back-to-top>
    <md-snackbar v-if="false" :md-position="center" :md-duration="40000">
      <span class="sh-testing">
        We need an even number of at least 8 players!
        <span class="sh-smile">&#128549;</span>
      </span>
      <md-button class="md-primary" @click="showSnackbar = false">Alright!</md-button>
    </md-snackbar>
  </div>
</template>

<script>
import store from "../store";
import _ from "lodash";

function playerSelector(team1, team2, players) {
  team1.push(_.first(players));

  team2.push(_.first(_.reverse(players)));

  _.pull(players, _.first(players));
  _.pull(players, _.first(_.reverse(players)));
}

export default {
  methods: {
    invokeShamanPower() {
      const weekPlayers = [];
      _.forEach(store.state.selectedPlayers, function (value) {
        var selectedPlayer = _.find(store.state.allPlayers, { id: value });
        weekPlayers.push(selectedPlayer);
      });
      const weekTopPlayers = _.sortBy(weekPlayers, (o) => o.skills);
      var keepTeamOrder = true;

      while (!_.isEmpty(weekTopPlayers)) {
        if (keepTeamOrder) {
          playerSelector(store.state.team1, store.state.team2, weekTopPlayers);
          keepTeamOrder = false;
        } else {
          playerSelector(store.state.team2, store.state.team1, weekTopPlayers);
          keepTeamOrder = true;
        }
      }
      store.commit("shamanPowerInvoked", true);
    },
  },
};
</script>