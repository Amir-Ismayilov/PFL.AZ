<template>
  <div>
    <section class="section_all_pictures">
      <div class="container">
        <div class="row">
          <h1>{{ getGalleries.title_az }}</h1>

          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 image"
            v-for="(imageItem, imageIndex) in getGalleries.items"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + imageItem.src + ')' }">
          </div>

          <gallery v-if="images.length > 0" :images="images" :index="index" @close="index = null"></gallery>

          <div class="btn_group">
            <nuxt-link
              v-if="current_index!==0" :to="/galleries/+this.galleries[this.current_index-1].id"
              class="btn_work">
              sonrakı
            </nuxt-link>

            <a v-else href="javascript:void(0)"
               class="btn_not_work"
               disabled="disabled">
              sonrakı
            </a>

            <nuxt-link
              v-if="current_index!==this.galleries.length-1" :to="/galleries/+this.galleries[this.current_index+1].id"
              class="btn_work">
              əvvəlki
            </nuxt-link>

            <a v-else href="javascript:void(0)"
               class="btn_not_work"
               disabled="disabled">əvvəlki
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import {mapGetters} from "vuex";
import galleries from "@/pages/galleries/index";
import VueGallery from 'vue-gallery';

export default {
  // name: "_id.vue",
  components: {
    'gallery': VueGallery
  },
  data() {
    return {
      current_index: 0,
      images: [],
      index: null
    };
  },

  computed: {
    ...mapGetters({galleries: "module/galleries/getAllGalleries"}),
  },

  mounted() {
    this.formatImages();
    this.current_index = this.galleries.findIndex(item => item.id === parseInt(this.$route.params.id));
  },

  methods: {
    formatImages() {
      if (this.getGalleries && this.getGalleries.items) {
        this.images = this.getGalleries.items.map(item => item.src);
      }
    }
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
  margin-bottom: 50px;
}

.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 5px solid #fff;
  height: 250px;
  cursor: pointer;
  transition: 0.5s;
}

.image:hover {
  filter: grayscale(50%);
  box-shadow: 0 2px 20px 0 var(--main-theme-color);
}

.blueimp-gallery > .slides > .slide > .slide-content {
  margin-left: -22px !important;
}
</style>
