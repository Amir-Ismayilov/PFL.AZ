<template>
  <div>

    <!-- Clubs Main Description -->
    <section class="main_clubs_description">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="clubs_description_image">
              <img :src="getclubs.cover" :alt="getclubs.title_az">
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <h2>{{ getclubs.title_az }}</h2>

            <div class="clubs_description_info">
              <img :src="getclubs.logo" :alt="getclubs.title_az">

              <div class="description_info_text">
                <dl>
                  <dt>Təsis ili:</dt>
                  <dd>{{ getclubs.origin_date }}</dd>

                  <dt>Stadion:</dt>
                  <dd>{{
                      getclubs.stadion && getclubs.stadion.title_az !== null ? getclubs.stadion.title_az : 'Məlumat daxil edilmeyib'
                    }}
                  </dd>

                  <dt>Təlimçi:</dt>
                  <dd>
                    <span>{{
                        getclubs.trainer && getclubs.trainer.name_az !== null ? getclubs.trainer.name_az : 'Məlumat daxil edilmeyib'
                      }}</span>
                    <span>{{
                        getclubs.trainer && getclubs.trainer.surname_az !== null ? getclubs.trainer.surname_az : 'Məlumat daxil edilmeyib'
                      }}</span>
                  </dd>
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
          <Tabs>
            <template v-slot:headers>
              <button @click="selectedTab = 'Tab1'">Tab 1</button>
              <button @click="selectedTab = 'Tab2'">Tab 2</button>
            </template>

            <Tab name="Tab1" :selected="selectedTab === 'Tab1'">
              Content of Tab 1
            </Tab>

            <Tab name="Tab2" :selected="selectedTab === 'Tab2'">
              Content of Tab 2
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import clubItem from "../../components/games/GameItem";
import Tabs from '../../components/clubs/Tabs.vue';
import Tab from '../../components/clubs/Tab.vue';
import {mapGetters, mapState} from "vuex";

export default {
  // name: "_id.vue",
  components: {
    clubItem,
    Tabs,
    Tab
  },
  data() {
    return {
      selectedTab: 'Tab1'
    };
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
.clubs_description_image img {
  width: 100%;
}

.main_clubs_description {
  background: var(--main-theme-color);
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
}

.clubs_description_info {
  display: flex;
  gap: 50px;
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

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e5e5e5;
}

button:focus {
  outline: none;
}
</style>
