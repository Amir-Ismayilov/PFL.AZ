<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="(news,index) in newsAll" :key="index">
          <NewsItem  :newsId="news.id"
                     :newsImage="news.img"
                     :newsDescription="news.title_az"
                     :newsContent="news.content_az"
                     :newsPublishDate="news.published_date"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
import NewsItem from "../../components/news/NewsItem";

export default {
  name: "index",
  components: {NewsItem},
  computed: {
    ...mapGetters({newsAll: "module/news/getAllNews"}),
  },
}
</script>

<style scoped>

</style>
