<template>
  <section class="section_score_match">
    <div class="container">
      <div class="row">
        <div v-for="tour in tours" :key="tour.id">
          <button @click="loadTour(tour.id)">{{ tour.name }}</button>
        </div>

        <div v-if="currentTour">
          <!-- Отображение данных currentTour -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: "scorebarMatch",
  async mounted() {
    await this.fetchTours();
  },
  methods: {
    ...mapActions('tours', ['fetchTours', 'fetchTourById']),

    async loadTour(id) {
      await this.fetchTourById(id);
    },
  },
  computed: {
    ...mapState('tours', ['tours', 'currentTour']),
  },
}
</script>

<style scoped>
.section_score_match {
  padding: 50px 0;
  background-color: #f0f0f0;
}

.btn_score_match {
  background-color: var(--main-theme-color);
  padding: 5px 15px;
  border-radius: 50px;
  width: 60px;
  color: var(--white-font-color);
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  border: none;
  margin: 5px;
}
</style>
