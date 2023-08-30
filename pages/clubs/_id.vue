<template>
  <div>
    <!-- Clubs Main Description -->
    <section class="main_clubs_description">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="clubs_description_image">
              <img
                :src="getclubs.cover !== null ? getclubs.cover : require('../../assets/images/placeholder/football_team_placeholder.png')"
                :alt="getclubs.title_en">
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <h2>{{ getclubs.title_az }}</h2>

            <div class="clubs_description_info">
              <img :src="getclubs.logo" :alt="getclubs.title_az">

              <div class="description_info_text">
                <dl>
                  <dt>Təsis ili:</dt>
                  <dd>{{ getclubs.origin_date ? getclubs.origin_date : "Məlumat daxil edilmeyib" }}</dd>

                  <dt>Stadion:</dt>
                  <dd>{{
                      getclubs.stadion && getclubs.stadion.title_az !== null ? getclubs.stadion.title_az : 'Məlumat daxil edilmeyib'
                    }}
                  </dd>

                  <dt>Təlimçi:</dt>
                  <dd v-if="getclubs.trainer !== null">
                    <span>{{ getclubs.trainer.name_az }}</span> <span>{{ getclubs.trainer.surname_az }}</span>
                  </dd>
                  <dd v-if="getclubs.trainer == null">Məlumat daxil edilmeyib</dd>
                  <dt>Klubun websit-i:</dt>
                  <dd><a :href="getclubs.website" target="_blank">keçid et</a></dd>
                </dl>

                <ul class="social_network_container">
                  <li>
                    <a :href="getclubs.social_platforms.facebook">
                      <img src="../../assets/icons/social_media/facebook.svg" alt="facebook_image">
                    </a>
                  </li>

                  <li>
                    <a :href="getclubs.social_platforms.instagram">
                      <img src="../../assets/icons/social_media/instagram.svg" alt="instagram_image">
                    </a>
                  </li>

                  <li>
                    <a :href="getclubs.social_platforms.youtube">
                      <img src="../../assets/icons/social_media/youtube.svg" alt="youtube_image">
                    </a>
                  </li>

                  <li>
                    <a :href="getclubs.social_platforms.twitter">
                      <img src="../../assets/icons/social_media/twitter.svg" alt="twitter_image">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clubs Main Statistic -->
    <section class="main_clubs_statistic">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="clubs_statistic_wrapper">
              <div class="clubs_statistic_wrapper_text">
                <p>AKT. PLATZIERUNG</p>
                <span>11</span>
              </div>
              <img src="../../assets/icons/statistics/statistic.png" alt="statistic_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="clubs_statistic_wrapper">
              <div class="clubs_statistic_wrapper_text">
                <p>SIEGE</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/plus.png" alt="plus_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="clubs_statistic_wrapper">
              <div class="clubs_statistic_wrapper_text">
                <p>UNENTSCHIEDEN</p>
                <span>1</span>
              </div>
              <img src="../../assets/icons/statistics/close.png" alt="close_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="clubs_statistic_wrapper">
              <div class="clubs_statistic_wrapper_text">
                <p>NIEDERLAGEN</p>
                <span>3</span>
              </div>
              <img src="../../assets/icons/statistics/minus-button.png" alt="minus_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="clubs_statistic_wrapper">
              <div class="clubs_statistic_wrapper_text">
                <p>TORE/SPIEL</p>
                <span>0.50</span>
              </div>
              <img src="../../assets/icons/statistics/ball.png" alt="ball_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="clubs_statistic_wrapper">
              <div class="clubs_statistic_wrapper_text">
                <p>GELB</p>
                <span>7</span>
              </div>
              <img src="../../assets/icons/statistics/yellow-card.png" alt="yellow-card_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="clubs_statistic_wrapper">
              <div class="clubs_statistic_wrapper_text">
                <p>GELB-ROT</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/yellow-red-card.png" alt="yellow-red-card_image">
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="clubs_statistic_wrapper">
              <div class="clubs_statistic_wrapper_text">
                <p>ROT</p>
                <span>0</span>
              </div>
              <img src="../../assets/icons/statistics/red-card.png" alt="yellow-red-card_image">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Club Main Inside -->
    <section class="main_clubs_inside">
      <div class="container">
        <div class="row">
          <div class="tabs">
            <button
              @click="setActiveTab('players')"
              :class="{ active: activeTab === 'players' }">Komanda Oyuncuları
            </button>
            <button
              @click="setActiveTab('trainer')"
              :class="{ active: activeTab === 'trainer' }">Məşqçisi
            </button>

            <button
              @click="setActiveTab('stadion')"
              :class="{ active: activeTab === 'stadion' }">Stadion
            </button>
            <!--     Komanda Oyuncuları-->
            <div v-if="activeTab === 'players'" key="players">
              <table class="club_players">
                <thead>
                <tr>
                  <th>Nr.</th>
                  <th>Ad</th>
                  <th>Milliyyət</th>
                  <th>Doğum tarixi</th>
                  <th>Sm</th>
                  <th>Kg</th>
                  <th>Zaman</th>
                  <th>Mövqe</th>
                  <th>green ball</th>
                  <th>Sarı kart</th>
                  <th>Sarı-Qırmızı kart</th>
                  <th>Qırmızı kart</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(player,index) in getclubs.players" :key="index">
                  <td>{{ player.id }}</td>
                  <nuxt-link :to='/players/ + player.id' target="_blank"
                             style="color: var(--dark-font-color) !important;">
                    <td>{{ player.name_az }} {{ player.surname_az }}</td>
                  </nuxt-link>
                  <td>{{ 'Azerbaijan' }}</td>
                  <td>{{ '04.03.2002' }}</td>
                  <td>{{ '180' }}</td>
                  <td>{{ '89' }}</td>
                  <td>{{ '0' }}</td>
                  <td>{{ player.position.title_az }}</td>
                  <td>{{ '0' }}</td>
                  <td>{{ '0' }}</td>
                  <td>{{ '0' }}</td>
                  <td>{{ '0' }}</td>
                </tr>
                </tbody>
              </table>
            </div>

            <!--         Məşqçisi-->
            <div v-if="activeTab === 'trainer'" key="trainer">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                    <div class="trainer_image_container">
                      <img
                        :src="getclubs.trainer && getclubs.trainer.photo ? getclubs.trainer.photo : require('../../assets/images/placeholder/trainer_placeholder.jpg')"
                        :alt="getclubs.trainer.name_en">
                    </div>
                  </div>

                  <div class="col-12 col-sm-6 col-md-8 col-lg-8">
                    <div class="trainer_text_container">
                      <h1>{{ getclubs.trainer.name_az }} {{ getclubs.trainer.surname_az }}</h1>
                      <dl>
                        <dt>Doğulduğu tarix:</dt>
                        <dd>{{ "API YOXDU" }}</dd>

                        <dt>Milliyyət:</dt>
                        <dd>{{
                            getclubs.trainer && getclubs.trainer.nationally ? getclubs.trainer.nationally : "Məlumat daxil edilmeyib"
                          }}
                        </dd>

                        <dt>Kluba daxil olduzu zaman:</dt>
                        <dd>{{ "API YOXDU" }}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--         Stadion-->
            <div v-if="activeTab === 'stadion'" key="stadion" class="stadion_main_container">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-7 col-lg-8">
                    <div class="stadion_image_container">
                      <h2>{{
                          getclubs.stadion && getclubs.stadion.title_az !== null ? getclubs.stadion.title_az : 'Məlumat daxil edilmeyib'
                        }}</h2>
                      <img
                        :src="getclubs.stadion && getclubs.stadion.img ? getclubs.stadion.img : require('../../assets/images/placeholder/stadium_placeholder.jpg')"
                        :alt="getclubs.stadion && getclubs.stadion.title_en ? getclubs.stadion.title_en : 'stadion_image' ">
                    </div>
                  </div>

                  <div class="col-12 col-sm-12 col-md-5 col-lg-4">
                    <div class="stadion_text_container">
                      <dl>
                        <dt><strong>Ünvan:</strong></dt>
                        <dd>{{
                            getclubs.stadion && getclubs.stadion.title_az ? getclubs.stadion.title_az : "Məlumat daxil edilmeyib"
                          }}
                        </dd>

                        <dt><strong>tutumu:</strong></dt>
                        <dd>{{
                            getclubs.stadion && getclubs.stadion.capacity ? getclubs.stadion.capacity : "Məlumat daxil edilmeyib"
                          }}
                        </dd>

                        <dt><strong>Tikilme ili:</strong></dt>
                        <dd>{{ "API YOXDU" }}</dd>
                      </dl>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="stadion_map_container">
                      <div class="map">
                        <iframe
                          src="https://maps.google.de/maps?q=Ziegeleistrasse+76-78,4020,Linz&amp;z=13&amp;t=k&amp;output=embed"
                          width="100%" height="335" frameborder="0" style="border:0"
                          allowfullscreen="allowfullscreen">
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import clubItem from "../../components/games/GameItem";
import {mapGetters, mapState} from "vuex";

export default {
  // name: "_id.vue",
  components: {
    clubItem,
  },
  data() {
    return {
      activeTab: 'players'
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    }
  },
  computed: {
    ...mapGetters({games: "module/clubs/getAllClubs"}),
  },

  async asyncData({store, route}) {
    await store.dispatch('module/clubs/getClubsArray')
    let response = await store.dispatch('module/clubs/getClubsByIdApi', route.params.id)
    return {getclubs: response}
  },
}
</script>

<style scoped>
.clubs_description_image {
  margin-bottom: 20px;
}

.clubs_description_image img {
  width: 100%;
  height: 250px;
  object-fit: contain;
}

.main_clubs_description {
  background: var(--main-theme-color);
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
}

.clubs_description_info {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  text-align: left;
}

.clubs_description_info > img {
  width: 155px;
  height: 155px;
  object-fit: contain;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
}

dt {
  color: var(--white-font-color);
  /*display: inline-block;*/
  /*margin-right: 7px;*/
  /*font-weight: normal;*/
  /*font-size: 14px;*/
  /*float: left;*/
  /*clear: left;*/
}

dd {
  color: var(--grey-font-color);
  /*display: inline-block;*/
  /*font-size: 14px;*/
  /*float: left;*/
}

.social_network_container {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.description_info_text {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.main_clubs_statistic {
  background: #ffffff;
  padding: 30px 0;
  margin-bottom: 25px;
}

.clubs_statistic_wrapper {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
}

.clubs_statistic_wrapper p {
  text-transform: uppercase;
  font-size: 14px;
  color: var(--dark-font-color);
  -moz-opacity: 0.4;
  -khtml-opacity: 0.4;
  -webkit-opacity: 0.4;
  opacity: 0.4;
  zoom: 1;
  filter: alpha(opacity=40);
}

.clubs_statistic_wrapper span {
  display: block;
  font-size: 40px;
  text-align: right;
  color: var(--dark-font-color);
}

.clubs_statistic_wrapper img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}


.main_clubs_inside {
  background-color: var(--grey-font-color);
  padding: 50px 0;
}

.tabs {
  padding: 30px;
  background-color: var(--white-font-color);
}

.tabs button {
  padding: 10px 15px;
  color: var(--grey-font-color);
  background-color: var(--dark-font-color);
  border: none;
  font-size: 16px;
  font-weight: normal;
  transition: 0.5s;
}

.tabs button:hover {
  background-color: var(--red-font-color);
}

button.active {
  background-color: var(--main-theme-color);
}

.club_players {
  width: 100%;
  margin-top: 50px;
}

.club_players thead {
  border-bottom: 2px solid #9a9a9a;
}

.club_players thead tr th {
  font-weight: bold;
  color: var(--dark-font-color);
  text-align: center;
  padding: 0 10px;
  font-size: 16px;
}

.club_players thead tr th, td {
  text-align: center;
  padding: 10px;
}


.trainer_image_container, .trainer_text_container {
  margin-top: 50px;
}

.trainer_text_container h1 {
  font-size: 26px;
  color: var(--red-font-color);
}

.trainer_text_container dd {
  color: var(--dark-font-color);
}

.trainer_text_container dt {
  color: var(--dark-font-color);
}

.trainer_image_container img {
  width: 160px;
  height: 160px;
  border: 4px solid var(--main-theme-color);
  object-fit: contain;
  border-radius: 50%;
}


.stadion_image_container {
  margin: 50px 0;
}

.stadion_image_container h2 {
  color: var(--main-theme-color);
}

.stadion_image_container img {
  width: 100%;
  object-fit: contain;
}

.stadion_text_container {
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stadion_text_container dt {
  color: var(--dark-font-color);
  border-bottom: 1px solid var(--grey-font-color);
}

.stadion_text_container dd {
  color: var(--dark-font-color);
  border-bottom: 1px solid var(--grey-font-color);
}

.stadion_map_container {
  padding: 30px 0;
  border-top: 1px dashed var(--grey-font-color);
  border-bottom: 1px dashed var(--grey-font-color);
}
</style>
