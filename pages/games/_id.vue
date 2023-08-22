<template>
  <div>
    <!-- Games Main Description -->
    <section class="main_games_description">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-4 col-md-4 col-lg-4">
            <div class="game_1_area">
              <nuxt-link :to='/clubs/ + getgames.club_1.id '>
                <img :src="getgames.club_1.logo" :alt="getgames.club_1.title_en">
                <p>{{ getgames.club_1.title_az }}</p>
              </nuxt-link>
            </div>
          </div>

          <div class="col-4 col-sm-4 col-md-4 col-lg-4">
            <div class="game_score">
              <span>{{ getgames.club_score_1 }} : {{ getgames.club_score_2 }}</span>
            </div>
          </div>

          <div class="col-4 col-sm-4 col-md-4 col-lg-4">
            <div class="game_2_area">
              <nuxt-link :to='/clubs/ + getgames.club_2.id '>
                <p>{{ getgames.club_2.title_az }}</p>
                <img :src="getgames.club_2.logo" :alt="getgames.club_2.title_en">
              </nuxt-link>
            </div>
          </div>

          <div class="col-12">
            <div class="short_info_game">
              <p>Vaxt: {{ getgames.stadion.title_az }}</p>
              <p>Stadion: {{ getgames.stadion.title_az }}</p>
              <p>Hakim: {{ getgames.refeerer_main.name_az }} {{ getgames.refeerer_main.surname_az }}</p>
              <p>İzləyicilərin sayı: {{ getgames.spectator }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Games Inside -->
    <section id="game_inside">
      <div class="container">
        <div class="row">
          <div>
            <h1 class="bashliq">{{ getgames.club_1.id }}</h1>
            <h1 class="custom_date">{{ getgames.club_2.id }}</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gameItem from "../../components/games/GameItem";
// import games from "../games/index";
import {mapGetters, mapState} from "vuex";

export default {
  // name: "_id.vue",
  components: {
    gameItem
  },
  computed: {
    ...mapGetters({games: "module/games/getAllGames"}),
  },

  async asyncData({store, route}) {
    await store.dispatch('module/games/getGamesArray')
    let response = await store.dispatch('module/games/getGamesByIdApi', route.params.id)
    return {getgames: response}
  },
}
</script>

<style scoped>
.main_games_description {
  background: var(--main-theme-color);
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
}


.game_1_area a, .game_2_area a {
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
}


.game_1_area img, .game_2_area img {
  max-width: 90%;
  max-height: 200px;
  object-fit: contain;
}

.game_1_area p, .game_2_area p {
  font-family: 'NexaXBold', Arial, sans-serif;
  font-weight: normal;
  font-size: 23px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  color: var(--white-font-color);
  text-transform: uppercase;
}

.game_score {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 64px;
  font-family: 'NexaXBold', Arial, sans-serif;
  text-align: center;
  font-weight: normal;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  color: var(--white-font-color);
}

.short_info_game {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding-top: 50px;
}

.short_info_game p {
  color: var(--grey-font-color);
  font-size: 14px;
  line-height: 30px;
}
</style>
