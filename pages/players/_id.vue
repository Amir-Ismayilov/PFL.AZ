<template>
  <div>
    <!-- Players Main Description -->
    <section class="section_player_cart">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <div class="section_player_cart_image">
              <img :src="getplayers.image ? getplayers.image : require('../../assets/images/placeholder/player_placeholder.svg')"
                   :alt="getplayers.name_en">
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-8 col-lg-8">
            <div class="section_player_cart_text">
              <div class="player_number_name">
                <h1>{{ getplayers.id }}</h1>
                <h2>{{ getplayers.name_az }} {{ getplayers.surname_az }}</h2>
              </div>

              <div class="players_description_info_container">
                <div class="players_clubs_image">
                  <nuxt-link :to='/clubs/ + getplayers.club.id'>
                    <img :src="getplayers.club.logo" :alt="getplayers.club.title_en">
                  </nuxt-link>
                </div>

                <div class="description_info_text">
                  <dl>
                    <dt>Anadan olub:</dt>
                    <dd>{{ "04.03.2002" }}</dd>

                    <dt>Cəki:</dt>
                    <dd>{{ "64" + " kg" }}</dd>

                    <dt>Boy:</dt>
                    <dd>{{ "175" + " Sm" }}</dd>

                    <dt>milliyyət:</dt>
                    <dd>{{ "Azerbaycan" }}</dd>

                    <dt>Vəzifə:</dt>
                    <dd>{{ getplayers.position.title_az }}</dd>

                    <dt>Karyeraya baslama vaxti:</dt>
                    <dd>{{ "05.04.2022" }}</dd>

                    <dt>indiki klub:</dt>
                    <dd>{{ getplayers.club.title_az }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Players Main Statistic -->
    <section class="section_players_statistic">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="players_statistic_wrapper">
              <div class="players_statistic_wrapper_text">
                <p>GATES</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/statistic.png" alt="statistic_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="players_statistic_wrapper">
              <div class="players_statistic_wrapper_text">
                <p>ELFER</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/ball.png" alt="ball_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="players_statistic_wrapper">
              <div class="players_statistic_wrapper_text">
                <p>EIN</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/top-up.png" alt="top-up_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="players_statistic_wrapper">
              <div class="players_statistic_wrapper_text">
                <p>OUT OF</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/down.png" alt="down_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="players_statistic_wrapper">
              <div class="players_statistic_wrapper_text">
                <p>MINUTES</p>
                <span>360</span>
              </div>
              <img src="../../assets/icons/statistics/stopwatch.png" alt="stopwatch_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="players_statistic_wrapper">
              <div class="players_statistic_wrapper_text">
                <p>YELLOW</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/yellow-card.png" alt="yellow-card_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="players_statistic_wrapper">
              <div class="players_statistic_wrapper_text">
                <p>YELLOW RED</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/yellow-red-card.png" alt="yellow-red-card_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="players_statistic_wrapper">
              <div class="players_statistic_wrapper_text">
                <p>RED</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/red-card.png" alt="red-card_image">
            </div>
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
  computed: {
    ...mapGetters({games: "module/clubs/getAllClubs"}),
  },
  async asyncData({store, route}) {
    let response = await store.dispatch('module/players/getPlayersByIdApi', route.params.id)
    return {getplayers: response}
  },
}
</script>

<style scoped>
.section_player_cart {
  background: var(--main-theme-color);
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
}

.section_player_cart_image img {
  width: 100%;
  height: 330px;
  object-fit: contain;
}


.section_player_cart_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.player_number_name {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.player_number_name h1 {
  font-weight: normal;
  font-size: 82px;
  -moz-opacity: 0.5;
  -khtml-opacity: 0.5;
  -webkit-opacity: 0.5;
  opacity: 0.5;
  zoom: 1;
  filter: alpha(opacity=50);
}

.player_number_name h2 {
  font-weight: normal;
  font-size: 42px;
}

.players_description_info_container {
  display: flex;
  gap: 50px;
  justify-content: center;
  text-align: left;
}

.players_clubs_image img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
}

dt {
  color: var(--white-font-color);
  display: inline-block;
  margin-right: 7px;
  font-weight: normal;
  font-size: 14px;
  float: left;
  clear: left;
}

dd {
  color: var(--grey-font-color);
  display: inline-block;
  font-size: 14px;
  float: left;
}


.section_players_statistic {
  background: #ffffff;
  padding: 30px 0;
  margin-bottom: 25px;
}

.players_statistic_wrapper {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
}

.players_statistic_wrapper p {
  font-size: 14px;
  text-transform: uppercase;
  color: var(--dark-font-color);
  -moz-opacity: 0.4;
  -khtml-opacity: 0.4;
  -webkit-opacity: 0.4;
  opacity: 0.4;
  zoom: 1;
  filter: alpha(opacity=40);
}

.players_statistic_wrapper span {
  display: block;
  font-size: 40px;
  text-align: right;
  color: var(--dark-font-color);
}

.players_statistic_wrapper img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
</style>
