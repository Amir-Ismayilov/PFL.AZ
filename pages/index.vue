<template>
  <div>
    <polls/>

    <!-- Bombarders Area -->
    <section class="section_bombarders_area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Bombardirlər</h1>
          </div>

          <TopPlayer />
<!--          <div v-for="(bombarder,index) in bombardersAll.slice(0, 10)" :key="index">-->
<!--            <p><span>Goals</span> {{ bombarder.goals }}</p>-->
<!--          </div>-->
        </div>
      </div>
    </section>

    <!-- News Area -->
    <section class="section_news_area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Son xəbərlər</h1>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4" v-for="(news,index) in this.newsAll.slice(-3)" :key="index">
            <NewsItem :newsId="news.id"
                      :newsImage="news.img"
                      :newsDescription="news.title_az"
                      :newsContent="news.content_az"
                      :newsPublishDate="news.published_date">
            </NewsItem>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import polls from "../components/polls";
import TopPlayer from '~/components/TopPlayer';

import NewsItem from "../components/news/NewsItem";
import {mapGetters} from "vuex";

export default {
  name: 'IndexPage',
  components: {
    NewsItem,
    TopPlayer,
    polls
  },
  computed: {
    ...mapGetters({
        newsAll: "module/news/getAllNews",
        bombardersAll: "module/bombarders/getAllBombarders"
      }),
  },
}
</script>

<style>
.section_bombarders_area {
  padding: 50px 0;
}

.section_bombarders_area h1, .section_news_area h1 {
  max-width: 300px;
  margin: 0 auto 25px auto;
  text-align: center;
  color: var(--dark-font-color);
  border-bottom: 1px solid var(--dark-font-color);
}
</style>
