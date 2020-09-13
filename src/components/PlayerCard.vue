<template>
  <md-card v-if="shamanPowerInvoked" :style="'pointerEvents: none'" />
  <md-card
    v-else
    md-with-hover
    class="md-primary"
    md-theme="green-card"
    v-on:click.native="handleClick"
    v-bind:class="{ 'md-card-active' : isActive }"
  >
    <strong>
      <md-badge v-if="isActive" md-content="In" />
    </strong>
    <md-ripple>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title" :style="{marginTop: '22px'}">{{ player.skills }}</div>
          <country-flag
            v-bind:country="player.country"
            size="big"
            v-bind:rounded="true"
            :style="{marginTop: '25px', marginLeft: '5px'}"
          />
        </md-card-header-text>

        <md-card-media md-big>
          <img
            :src="require('../assets/pics/' + player.picture)"
            :style="{width: '130px', height: '130px'}"
          />
        </md-card-media>
      </md-card-header>
      <div class="md-subhead">{{ player.name }}</div>
      <div class="skillsPanel">
        <div class="md-layout">
          <div class="md-layout-item md-layout-item-left">
            <strong>{{player.attack}}</strong> ATT
            <br />
            <br />
            <strong>{{player.defense}}</strong> DEF
          </div>
          <div class="md-layout-item">
            <strong>{{player.cardio}}</strong> STAM
            <br />
            <br />
            <strong>{{player.lead}}</strong> LEAD
          </div>
        </div>
      </div>
    </md-ripple>
  </md-card>
</template>

<script>
import store from "../store";

export default {
  props: ["player"],

  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleClick() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        store.commit("addPlayer", this.player.id);
      } else {
        store.commit("removePlayer", this.player.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 260px;
  height: 350px;
  margin: 10px;
  display: inline-block;
  margin-bottom: 40px;
  margin-top: 40px;
  margin-left: 40px;
  border-width: 3px;
  border-style: solid;
  background-image: url("../assets/card.png");
}
.md-card-active {
  border-width: 3px;
  border-style: solid;
  border-color: greenyellow;
  opacity: 0.9;
}
.md-card .md-subhead {
  font-family: "Roboto";
  font-size: 28px;
  font-weight: 500;
  color: black;
  opacity: 1;
  margin-top: -6px;
}
.md-card .md-title {
  font-family: "Roboto";
  font-size: 60px;
  color: black;
  text-align: center;
  top: 20px;
}
.skillsPanel {
  color: black;
  margin-top: 45px;
  font-size: 24px;
}
.md-layout-item-left {
  border-right: 1px brown solid;
}
.md-badge {
  background-color: greenyellow;
  text-align: center;
  align-items: center;
  padding: 35px;
  top: -35px;
  left: -35px;
  font-size: 24px;
  font-weight: bold;
}

.big-flag {
  transform: scale(1.3);
  -ms-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
}
</style>
