const actions = {
  async getPlayersByIdApi({commit}, id) {
    const {data}= await this.$axios.$get(`/players/show/${id}`);
    return data;
  },
}

export default {
  namespaced: true,
  actions,
}
