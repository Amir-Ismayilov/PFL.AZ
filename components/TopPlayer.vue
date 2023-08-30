<template>
  <div>
    <!-- Main Image -->
    <div class="main_image_container" v-if="currentBombarder">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <img class="top_player_main_image" :src="currentBombarderImage" :alt="currentBombarderImage.name_en"/>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="player_slide_info_container">
              <div class="player_slide_score">
                <img src="../assets/icons/statistics/ball.png" alt="ball_image">
                <p>{{ currentBombarder.goals }} Qol</p>
              </div>

              <div class="player_slide_body">
                <strong>{{ currentBombarder.number }}</strong>
                <span><b>{{ currentBombarder.name_az }}</b> <b>{{ currentBombarder.surname_az }}</b></span>
                <dl>
                  <dt>Doğum tarixi:</dt>
                  <dd>{{ currentBombarder.birth_date }}</dd>
                  <dt>Milliyyət:</dt>
                  <dd>{{ currentBombarder.nationally ? currentBombarder.nationally : "Məlumat daxil edilmeyib" }}</dd>
                  <dt>Mövqeyi:</dt>
                  <dd>{{ currentBombarder.position.title_az }}</dd>
                </dl>
              </div>
              <nuxt-link class="btn_details" :to='`/players/`+ currentBombarder.id'>Ətraflı</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Top Player Navigation -->
    <div class="container">
      <div class="row">
        <div class="top_player_navigation">
          <div class="top_player_wrapper" :class="{ 'active': index === currentBombarderIndex }"
               v-for="(bombarder, index) in bombardersAll.slice(-10)" :key="index">
            <img
              class="top_player_image"
              :src="bombarder.image ? bombarder.image : placeholderImage"
              :alt="bombarder.name_en" @click="setCurrentBombarder(index)"
            />
            <p>{{ bombarder.number }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      bombardersAll: "module/bombarders/getAllBombarders",
    }),
    currentBombarder() {
      return this.bombardersAll[this.currentBombarderIndex];
    },
    currentBombarderImage() {
      return this.currentBombarder?.image || require('assets/images/placeholder/player_placeholder.svg');
    },
    placeholderImage() {
      return require('assets/images/placeholder/player_placeholder.svg');
    }
  },
  data() {
    return {
      currentBombarderIndex: 0,
    };
  },
  methods: {
    setCurrentBombarder(index) {
      this.currentBombarderIndex = index;
    },
  },
};
</script>


<style scoped>
.main_image_container {
  position: relative;
}

.top_player_main_image {
  width: 100%;
  height: 400px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.player_slide_score {
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: var(--main-theme-color);
  padding: 10px 15px;
  margin-bottom: 15px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.player_slide_score > img {
  width: 75px;
  height: 75px;
  object-fit: contain;
}

.player_slide_score p {
  font-size: 48px;
  line-height: 70px;
  color: #ffffff;
}

.player_slide_body {
  min-height: 200px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.player_slide_body strong {
  font-size: 62px;
  font-weight: normal;
  line-height: 51px;
  float: left;
  margin-right: 10px;
}

.player_slide_body span {
  font-size: 20px;
  display: block;
}

.player_slide_body span b {
  display: block;
  font-weight: normal;
  text-transform: uppercase;
  white-space: nowrap;
}

.player_slide_body dl {
  margin-top: 10px;
}

.player_slide_body dt {
  font-weight: bold;
}

.player_slide_body dd {
  font-weight: normal;
}

.btn_details {
  position: absolute;
  bottom: 10px;
  right: -80px;
  background-color: rgba(43, 43, 43, 0.9);
  font-size: 14px;
  margin-top: 10px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--white-font-color);
}

.player_slide_info_container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 320px;
}

.top_player_navigation {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.top_player_wrapper {
  position: relative;
  border: 1px solid var(--white-font-color);
  width: 10%;
  background-color: var(--dark-font-color);
  opacity: 0.5;
  transition: 0.5s;
}

.top_player_wrapper:hover {
  opacity: 0.75;
}

.top_player_wrapper.active {
  opacity: 1;
}

.top_player_wrapper p {
  position: absolute;
  user-select: none;
  color: var(--main-theme-color);
  top: 10px;
  right: 10px;
}

.top_player_image {
  width: 100%;
  max-height: 170px;
  object-fit: contain;
}

@media only screen and (max-width: 768px) {
  .player_slide_info_container {
    max-width: 100%;
  }

  .player_slide_score {
    justify-content: space-between;
  }

  .btn_details {
    position: relative;
    top: unset;
    right: unset;
    text-align: center;
    border-radius: unset;
    margin-top: 5px;
    padding: 10px 15px;
    display: inline-table;
  }

  .top_player_wrapper {
    width: 20%;
  }
}
</style>
