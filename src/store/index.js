import Vue from 'vue';
import Vuex from 'vuex';
import PlayersData from "../assets/players.json";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedPlayers: [],
        team1: [],
        team2: [],
        allPlayers: PlayersData,
        shamanPowerInvoked: false,
    },
    mutations: {
        addPlayer(state, id) {
            state.selectedPlayers.push(id);
        },
        addPlayerTeam1(state, id) {
            state.team1.push(id);
        },
        addPlayerTeam2(state, id) {
            state.team2.push(id);
        },
        cleanTeams(state) {
            state.team1 = [];
            state.team2 = [];
            state.selectedPlayers = [];
        },
        addPlayerSkills(state, id, skills) {
            console.log(state, id, skills);
        },
        removePlayer(state, id) {
            state.selectedPlayers.splice(state.selectedPlayers.indexOf(id), 1);
        },
        shamanPowerInvoked(state, boolean) {
            state.shamanPowerInvoked = boolean;
        }
    }
});
