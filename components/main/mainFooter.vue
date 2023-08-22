<template>
  <section class="section_footer">
    <footer class="container footer">
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
                <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div class="powered_item">
                    <img src="../../assets/images/poweredBy/powered_1.svg" alt="powered_by_1">
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div class="powered_item">
                    <img src="../../assets/images/poweredBy/powered_2.svg" alt="powered_by_2">
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div class="powered_item">
                    <img src="../../assets/images/poweredBy/powered_3.svg" alt="powered_by_3">
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div class="powered_item">
                    <img src="../../assets/images/poweredBy/powered_4.svg" alt="powered_by_4">
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div class="powered_item">
                    <img src="../../assets/images/poweredBy/powered_5.svg" alt="powered_by_5">
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                  <div class="powered_item">
                    <img src="../../assets/images/poweredBy/powered_6.svg" alt="powered_by_6">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <div class="footer_content_left">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                  <ul class="footer_list_wrapper">
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
                <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                  <ul class="footer_list_wrapper">
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
                <div class="col-12 footer_social_media">
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
    </footer>

    <section class="section_copyright">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-6"><p>© 2023 DFL Deutsche Fußball Liga GmbH</p></div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">

          </div>
        </div>
      </div>
    </section>
  </section>

</template>

<script>
export default {
  name: "mainFooter"
}
</script>

<style scoped>
.section_footer {
  padding: 30px 0;
  background-color: #191e24;
}

.footer {
  border-bottom: 1px solid var(--dark-font-color);;
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


.footer_social_media {
  display: flex;
  gap: 30px;
  margin: 25px 0;
}

.footer_list_wrapper li {
  padding: 5px 0;
}

.footer_list_wrapper li a {
  color: var(--grey-font-color);
}

.section_copyright {
  margin-top: 20px;
}


</style>
