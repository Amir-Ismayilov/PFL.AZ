<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="(game,index) in games" :key="index">
          <GameItem :gamesId="game.id"
                    :gamesClubImage_1="game.club_1.logo"
                    :gamesClubImage_2="game.club_2.logo"
                    :gamesPublishDate="game.PublishDate"
                    :gamesClubScore_1="game.club_score_1"
                    :gamesClubScore_2="game.club_score_2"
                    :gamesClubName_1="game.club_1.title_az"
                    :gamesClubName_2="game.club_2.title_az"
                    :gamesTitle="game.title"
                    :index="index"/>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import GameItem from "../../components/games/GameItem";
import {mapState, mapGetters} from "vuex";

export default {
  name: "games",
  components: {
    GameItem,
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({games: "module/games/getAllGames"}),
  },
}
</script>

<style scoped>

</style>
