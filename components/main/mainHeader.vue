<template>
  <div>
    <section class="section_navigation">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-8 col-lg-9">
            <ul class="social_media_container">
              <li>
                <a href="https://www.bundesliga.at/">BUNDESLIGA.AT</a>
                <div class="social_media_wrapper">
                  <a href="https://www.facebook.com/bundesliga74" target="_blank">
                    <fa :icon="['fab', 'square-facebook']"/>
                  </a>
                  <a href="https://www.instagram.com/oesterreichische.bundesliga/" target="_blank">
                    <fa :icon="['fab', 'instagram']"/>
                  </a>
                  <a href="https://www.tiktok.com/@bundesliga.at" target="_blank">
                    <fa :icon="['fab', 'tiktok']"/>
                  </a>
                  <a href="https://twitter.com/OEFBL" target="_blank">
                    <fa :icon="['fab', 'twitter']"/>
                  </a>
                  <a href="https://www.youtube.com/c/ÖsterreichischeFußballBundesliga" target="_blank">
                    <fa :icon="['fab', 'youtube']"/>
                  </a>
                </div>
              </li>

              <li>
                <a href="https://www.2liga.at/">2LIGA.AT</a>
                <div class="social_media_wrapper">
                  <a href="https://www.facebook.com/2Liga.at" target="_blank">
                    <fa :icon="['fab', 'square-facebook']"/>
                  </a>
                  <a href="https://www.instagram.com/2liga.at/" target="_blank">
                    <fa :icon="['fab', 'instagram']"/>
                  </a>
                  <a href="https://twitter.com/OEFBL" target="_blank">
                    <fa :icon="['fab', 'twitter']"/>
                  </a>
                  <a href="https://www.youtube.com/c/ÖsterreichischeFußballBundesliga" target="_blank">
                    <fa :icon="['fab', 'youtube']"/>
                  </a>
                </div>
              </li>

              <li>
                <a href="https://www.oefbl.at/">OEFBL.AT</a>
                <div class="social_media_wrapper">
                  <a href="https://twitter.com/OEFBL" target="_blank">
                    <fa :icon="['fab', 'twitter']"/>
                  </a>
                  <a href="https://www.linkedin.com/company/oefbl/mycompany/?viewAsMember=true" target="_blank">
                    <fa :icon="['fab', 'linkedin']"/>
                  </a>
                  <a href="https://www.youtube.com/c/ÖsterreichischeFußballBundesliga" target="_blank">
                    <fa :icon="['fab', 'youtube']"/>
                  </a>
                </div>
              </li>

              <li><a href="https://www.ebundesliga.at/">eBUNDESLIGA.AT</a></li>
            </ul>
          </div>

          <div class="col-12 col-sm-12 col-md-4 col-lg-3">
            <div class="search_container">
              <input type="text" placeholder="axtariş et">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section_main_header">
      <div class="container">
        <div class="row">
          <header>
            <div class="logo_main_wrapper">
              <nuxt-link to="/">
                <img src="../../assets/icons/logo_white.png" alt="main_logo">
              </nuxt-link>
            </div>

            <div class="header_clubs_container">
              <div class="header_clubs_logo" v-for="(club,index) in clubs.slice(-10)" :key="index">
                <nuxt-link :to='/clubs/ + club.id'>
                  <img :src="club.logo" :alt="club.title_en">
                </nuxt-link>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>

    <section class="section_main_menu">
      <div class="container">
        <div class="row">
          <nav class="col-12 col-sm-12 col-md-12 col-lg-12">
            <ul>
              <li>
                <nuxt-link to="/">home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/polls">polls</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">tabelle</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/games">games</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/clubs">clubs</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/news">news</nuxt-link>
              </li>
              <li>
                <DropdownMenu/>
              </li>
              <li>
                <nuxt-link to="/contacts">contacts</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DropdownMenu from '../../components/DropdownMenu.vue'

export default {
  name: "mainHeader",
  components: {
    DropdownMenu
  },
  computed: {
    ...mapGetters({clubs: "module/clubs/getAllClubs"}),
  },
}
</script>

<style scoped>
.section_navigation {
  background: #2b2b2b;
  padding: 5px 0;
}

.social_media_container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.social_media_container li {
  display: flex;
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0 10px;
}

.social_media_container li:last-child {
  border-right: unset;
}

.social_media_wrapper {
  padding: 0 5px;
}

.social_media_wrapper a {
  font-size: 15px;
  color: var(--grey-font-color);
}

.search_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.search_container input {
  height: 30px;
  width: 100%;
  padding-left: 10px;
  font-size: 12px;
  color: var(--dark-font-color);
  background: rgba(255, 255, 255, 0.7);
}

.section_main_header {
  padding: 20px 0;
  background: var(--dark-font-color);
}

.section_main_header header {
  display: flex;
  gap: 15px;
  justify-content: space-between;
}

.header_clubs_container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.header_clubs_logo img {
  width: 100%;
  display: block;
  object-fit: contain;
  height: auto;
  max-width: 42px;
  margin: 0 auto;
}

.logo_main_wrapper img {
  width: 100px;
  height: 100%;
  object-fit: contain;
}

.logo_main_wrapper a {
  display: block;
  height: 100%;
}

.section_main_menu {
  background: #f4f4f4;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #d5d5d5;
  padding: 20px 0;
}

.section_main_menu ul {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.section_main_menu ul li a {
  font-size: 14px;
  text-transform: uppercase;
  border-right: 1px solid var(--dark-font-color);
  padding-right: 20px;
  cursor: pointer;
  color: var(--dark-font-color);
}

.section_main_menu ul li:last-child a {
  border-right: none;
}
</style>
