<template>
  <div>
    <section class="section_main_footer">
      <footer class="container hr">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="footer_content_left">
              <div class="container">
                <div class="row">
                  <div class="logo_main_wrapper">
                    <img src="../../assets/icons/logo_white.png" alt="main_logo">
                    <div class="logo_main_wrapper_text">Peşəkar Futbol Liqası</div>
                  </div>
                  <h6>Powered by</h6>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                    <div class="powered_item">
                      <img src="../../assets/images/poweredBy/powered_1.svg" alt="powered_by_1">
                    </div>
                  </div>

                  <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                    <div class="powered_item">
                      <img src="../../assets/images/poweredBy/powered_2.svg" alt="powered_by_2">
                    </div>
                  </div>

                  <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                    <div class="powered_item">
                      <img src="../../assets/images/poweredBy/powered_3.svg" alt="powered_by_3">
                    </div>
                  </div>

                  <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                    <div class="powered_item">
                      <img src="../../assets/images/poweredBy/powered_4.svg" alt="powered_by_4">
                    </div>
                  </div>

                  <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                    <div class="powered_item">
                      <img src="../../assets/images/poweredBy/powered_5.svg" alt="powered_by_5">
                    </div>
                  </div>

                  <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                    <div class="powered_item">
                      <img src="../../assets/images/poweredBy/powered_6.svg" alt="powered_by_6">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="footer_content_right">
              <div class="container">
                <div class="row">
                  <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="footer_list_wrapper">
                      <ul>
                        <li>
                          <nuxt-link to="#">Advertising</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Cookies Settings</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Terms of Use</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Jobs</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Contact</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Player</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="footer_list_wrapper">
                      <ul>
                        <li>
                          <nuxt-link to="#">Legal Notices</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Privacy Statement</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Broadcasters</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Imprint</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">Partner</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="footer_social_media_container">
                      <ul>
                        <li><a href="#"><img src="../../assets/icons/social_media/facebook.svg"></a></li>
                      </ul>
                      <ul>
                        <li><a href="#"><img src="../../assets/icons/social_media/twitter.svg"></a></li>
                      </ul>
                      <ul>
                        <li><a href="#"><img src="../../assets/icons/social_media/youtube.svg"></a></li>
                      </ul>
                      <ul>
                        <li><a href="#"><img src="../../assets/icons/social_media/linkedin.svg"></a></li>
                      </ul>
                      <ul>
                        <li><a href="#"><img src="../../assets/icons/social_media/instagram.svg"></a></li>
                      </ul>
                      <ul>
                        <li><a href="#"><img src="../../assets/icons/social_media/tiktok.svg"></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>

    <section class="section_footer_copyright">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <span>© 2023 DSR All Rights Reserved</span>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "mainFooter"
}
</script>

<style scoped>
.section_main_footer {
  padding: 30px 0;
  background-color: #191e24;
}

.logo_main_wrapper img {
  width: 150px;
  height: 80px;
  object-fit: contain;
}

.logo_main_wrapper_text {
  margin-top: 10px;
  margin-bottom: 60px;
  color: var(--grey-font-color);
}

.powered_item img {
  display: block;
  width: 50px;
  height: 28px;
  object-fit: contain;
  margin: 15px auto;
}

.hr {
  border-bottom: 1px solid var(--dark-font-color);
}

.footer_social_media_container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 25px 0;
}

.footer_list_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer_list_wrapper li {
  padding: 5px 0;
}

.footer_list_wrapper li a {
  color: var(--grey-font-color);
}

.section_footer_copyright {
  margin-top: -20px;
  padding-bottom: 10px;
  background-color: #191e24;
}
</style>
