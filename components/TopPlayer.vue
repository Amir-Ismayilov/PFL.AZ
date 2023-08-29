<template>
  <div>
    <!-- Main Image -->
    <div class="main-image" v-if="currentBombarder">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <img :src="currentBombarderImage" alt="Bombarder"/>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="player_slide_info_container">
              <div class="player_slide_score">
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
                <nuxt-link :to='`/players/`+ currentBombarder.id'>Ətraflı</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider -->
    <swiper :options="swiperOptions" ref="mySwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="(bombarder, index) in bombardersAll" :key="index">
        <img class="slider_img"
             :src="bombarder.image ? bombarder.image : placeholderImage"
             alt="Bombarder" @click="setCurrentBombarder(index)"
        />
        <p>{{ bombarder.goals }}</p>
      </swiper-slide>
    </swiper>
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
      swiperOptions: {
        slideToClickedSlide: true,
        slidesPerView: 5,
        spaceBetween: 10,
        centeredSlides: true,
        windowWidth: 0,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
      },
    };
  },
  mounted() {
    // Инициализация размера экрана при монтировании
    this.windowWidth = window.innerWidth;

    // Обновление размера экрана при изменении размера окна
    window.addEventListener('resize', this.updateWindowWidth);

    // Инициализация опций swiper
    this.updateSwiperOptions();
  },
  beforeDestroy() {
    // Удаление обработчика событий перед уничтожением компонента
    window.removeEventListener('resize', this.updateWindowWidth);
  },
  methods: {
    setCurrentBombarder(index) {
      this.currentBombarderIndex = index;
    },
    onSlideChange(swiper) {
      if (swiper) {
        this.currentBombarderIndex = swiper.activeIndex;
      }
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
      this.updateSwiperOptions();
    },
    updateSwiperOptions() {
      if (this.windowWidth <= 600) {
        this.swiperOptions.slidesPerView = 1;
      } else if (this.windowWidth <= 960) {
        this.swiperOptions.slidesPerView = 3;
      } else {
        this.swiperOptions.slidesPerView = 5;
      }
    },
  },
};
</script>


<style scoped>
.main-image {
  position: relative;
}

.main-image img {
  width: 100%;
  height: 400px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.slider_img {
  width: 150px;
  height: 180px;
  object-fit: contain;
}

.swiper-slide {
  display: flex;
  user-select: none;
  background: #797979;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
}

.player_slide_score {
  background-color: var(--main-theme-color);
  padding: 10px 15px 0 0;
  margin-bottom: 15px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.player_slide_score p {
  font-size: 48px;
  line-height: 70px;
  color: #ffffff;
}

.player_slide_body {
  position: relative;
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

.player_slide_body a {
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 400px;
}
</style>
