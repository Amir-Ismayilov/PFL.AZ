export const state = () => ({
  tours: [],
  currentTour: null,
});

export const actions = {
  async fetchTours({ commit }) {
    try {
      const data = await this.$axios.$get('/tours');
      commit('SET_TOURS', data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },

  async fetchTourById({ commit }, id) {
    try {
      const data = await this.$axios.$get(`/tours/show/${id}?withGames=true`);
      commit('SET_CURRENT_TOUR', data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
};

export const mutations = {
  SET_TOURS(state, tours) {
    state.tours = tours;
  },

  SET_CURRENT_TOUR(state, tour) {
    state.currentTour = tour;
  },
};
