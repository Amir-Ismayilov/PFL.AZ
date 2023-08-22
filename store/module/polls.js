const state = {
  polls: []
}

const getters = {
  getAllPolls: (state) => {
    return state.polls
  }
}

const actions = {
  async getPollsArray(context) {
    const {data} = await this.$axios.$get('/polls');
    context.commit('setPolls', [data])
    return data;
  },


  async getPollsByIdApi({commit}, id) {
    const {data}= await this.$axios.$get(`/polls/show/${id}`);
    return data;
  },
}

const mutations = {
  setPolls: (state, [data = null]) => {
    if (data) {
      state.polls = data
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
