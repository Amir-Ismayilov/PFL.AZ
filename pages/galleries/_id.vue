<template>
  <div>
    <section class="section_all_pictures">
      <div class="container">
        <div class="row">
          <h1>{{ getGalleries.title_az }}</h1>
          <div v-for="(imageItem, index) in getGalleries.items" :key="index">
            <img :src="imageItem.src">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  // name: "_id.vue",
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({galleries: "module/galleries/getAllGalleries"}),
  },

  async asyncData({store, route}) {
    await store.dispatch('module/galleries/getGalleriesArray')
    let response = await store.dispatch('module/galleries/getGalleriesByIdApi', route.params.id)
    return {getGalleries: response}
  },
}
</script>

<style scoped>
.section_all_pictures {
  padding: 50px 0;
}

.section_all_pictures h1 {
  text-align: center;
  color: var(--main-theme-color);
  margin-bottom: 20px;
}
</style>
