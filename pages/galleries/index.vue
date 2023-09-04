<template>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-3" v-for="(gallery,index) in galleries" :key="index">
            <GalleriesItem :galleriesId="gallery.id"
                           :galleriesImage="gallery.image"
                           :galleriesTitle="gallery.title_az"
            />
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import {mapGetters} from "vuex";
import GalleriesItem from "../../components/galleries/GalleriesItem";

export default {
  name: "galleries",
  components: {
    GalleriesItem,
  },
  computed: {
    ...mapGetters({galleries: "module/galleries/getAllGalleries"}),
  },
}
</script>

<style scoped>

</style>
