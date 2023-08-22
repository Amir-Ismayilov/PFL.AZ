<template>
  <div>
    <section class="section_nav_top">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <ul class="social_media">
              <li>
                <a href="https://www.bundesliga.at/">BUNDESLIGA.AT</a>
                <div class="social_media_container">
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
                <div class="social_media_container">
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
                <div class="social_media_container">
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

          <div class="col-4">
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
            <div class="header_main">
              <div class="logo_main_wrapper">
                <img src="@/assets/icons/logo_white.png" alt="main_logo">
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>

    <section class="section_main_nav">
      <div class="container">
        <div class="row">
          <nav class="col-12">
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
                <nuxt-link to="#">spielplan</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">video</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">statistik</nuxt-link>
              </li>
              <li>
                <nuxt-link to="games">games</nuxt-link>
              </li>
              <li>
                <nuxt-link to="clubs">clubs</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "mainHeader"
}
</script>

<style scoped>
.section_nav_top {
  background: #2b2b2b;
  padding: 5px 0;
}

.social_media {
  display: flex;
  gap: 10px;
}

.social_media li {
  display: flex;
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0 10px;
}

.social_media li:last-child {
  border-right: unset;
}

.social_media_container {
  padding: 0 5px;
}

.social_media_container a {
  font-size: 15px;
  color: var(--grey-font-color);
}

.search_container input {
  font-family: 'Poppins', sans-serif;
  background: rgba(255, 255, 255, 0.7);
  color: var(--dark-font-color);
  height: 30px;
  padding-left: 10px;
  font-size: 12px;
  border: none;
}


.section_main_header {
  padding: 20px 0;
  background: var(--dark-font-color);
}

.logo_main_wrapper img {
  width: 100px;
  height: 50px;
  object-fit: contain;
}


.section_main_nav {
  background: #f4f4f4;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #d5d5d5;
  padding: 20px 0;
}

.section_main_nav ul {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.section_main_nav ul li a {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  border-right: 1px solid var(--dark-font-color);
  padding-right: 20px;
  cursor: pointer;
  color: var(--dark-font-color);
}

.section_main_nav ul li:last-child a {
  border-right: none;
}
</style>
