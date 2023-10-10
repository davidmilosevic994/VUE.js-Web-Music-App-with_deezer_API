import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      topArtists: [],
      artists: [
        {artistNumber: 5578942, albumNumber: 489358925},
        {artistNumber: 246791, albumNumber: 496789121},
        {artistNumber: 13, albumNumber: 320098917},
        {artistNumber: 4050205, albumNumber: 285758422},
        {artistNumber: 416239, albumNumber: 77648602},
        {artistNumber: 384236, albumNumber: 492434915},
        {artistNumber: 9635624, albumNumber: 248216622},
        {artistNumber: 75798, albumNumber: 273425942},
      ]
    };
  },
  mutations,
  actions,
  getters,
};
