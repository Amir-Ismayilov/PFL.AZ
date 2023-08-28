const state = {
  bombarders: []
}

const getters = {
  getAllBombarders: (state) => {
    return state.bombarders
  }
}

const actions = {
  async getBombardersArray(context) {
    const {data} = await this.$axios.$get('/bombarders');
    context.commit('setBombarders', [data])
    return data;
  },

  // async getBombardersByIdApi({commit}, id) {
  //   const {data}= await this.$axios.$get(`/bombarders/show/${id}`);
  //   return data;
  // },
}

const mutations = {
  setBombarders: (state, [data = null]) => {
    if (data) {
      state.bombarders = data
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
