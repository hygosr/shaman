<template>
  <div>
    <back-to-top
      bottom="50px"
      right="150px"
      visibleoffset="-1"
      v-if="numberPlayers >= 8 && numberPlayers % 2 == 0"
    >
      <md-button class="md-raised md-primary" v-on:click.native="invokeShamanPower">INVOKE</md-button>
    </back-to-top>
  </div>
</template>

<script>
import store from "../store";
import _ from "lodash";
import BackToTop from "vue-backtotop";

function playerSelector(team1, team2, players) {
  team1.push(_.first(players));

  team2.push(_.first(_.reverse(players)));

  _.pull(players, _.first(players));
  _.pull(players, _.first(_.reverse(players)));
}

export default {
  computed: {
    shamanPowerInvoked() {
      return this.$store.state.shamanPowerInvoked;
    },
    numberPlayers() {
      return _.size(this.$store.state.selectedPlayers);
    },
  },
  components: {
    BackToTop,
  },
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