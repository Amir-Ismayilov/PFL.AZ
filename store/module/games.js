const state = {
  games: []
}

const getters = {
  getAllGames: (state) => {
    return state.games
  }
}

const actions = {
  async getGamesArray(context) {
    const {data} = await this.$axios.$get('/games');
    context.commit('setGames', [data])
    return data;
  },

  async getGamesByIdApi({commit}, id) {
    const {data}= await this.$axios.$get(`/games/show/${id}`);
    return data;
  },
}

const mutations = {
  setGames: (state, [data = null]) => {
    if (data) {
      state.games = data
    }
  },
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
