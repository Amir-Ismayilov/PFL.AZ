<template>
  <div>
    <section class="section_contacts_container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Əlaqə</h1>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="contacts_card">
              <h2>Telefon & Fax</h2>

              <p v-for="(tel,index) in contactsAll.tel" :key="index">
                <span>Tel: </span>{{ tel }}
              </p>

              <p v-for="(fax,index) in contactsAll.tel_and_fax" :key="index">
                <span>Tel/Faks: </span>{{ fax }}
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="contacts_card">
              <h2>Elektron Poct</h2>

              <p v-for="(email,index) in contactsAll.email" :key="index">
                {{ email }}
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="contacts_card">
              <h2>Ünvan</h2>
              <p>{{ contactsAll.address }}</p>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="login-box">
              <form @submit.prevent="handleSubmit" id="contact_form">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <h1>Bizə Yazın</h1>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="user-box">
                        <input type="text" v-model="user.name" id="name" name="name" required="" @blur="$v.user.name.$touch()">
                        <label>Name</label>
                        <!-- Вывод ошибки -->
                        <span v-if="$v.user.name.$error" class="error-text">Это поле обязательно</span>
                      </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="user-box">
                        <input type="text" v-model="user.surname" id="surname" name="surname" required="">
                        <label>Surname</label>
                      </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="user-box">
                        <input type="tel" v-model="user.telephone" id="telephone" name="telephone" required="">
                        <label>Phone</label>
                      </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="user-box">
                        <input type="email" v-model="user.email" id="email" name="email" required="">
                        <label>Email</label>
                      </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div class="user-box">
                        <input type="text" v-model="user.message" id="message" name="message" required="">
                        <label>Message</label>
                      </div>
                    </div>

                    <div class="col-12 btn_form_container">
                      <button class="btn btn_send">Göndər</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="contacts_map">
              <LeafletMap
                :latitude="contactsAll.map.lat"
                :longitude="contactsAll.map.long"
                :address="contactsAll.address"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import LeafletMap from '~/components/LeafletMap'
import {email, minLength, required} from "vuelidate/lib/validators";

export default {
  name: "index",
  components: {
    LeafletMap
  },
  validations: {
    user: {
      name: {required},
      surname: {required},
      telephone: {required},
      email: {required, email},
      message: {required, minLength: minLength(6)},
    }
  },
  data() {
    return {
      // Form Validation
      user: {
        name: "",
        surname: "",
        telephone: "",
        email: "",
        message: "",
      },
      submitted: false
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();  // активация всех валидаторов

      if (this.$v.$invalid) {
        this.$toast.error('Пожалуйста, заполните все поля правильно.');
        return;
      }

      this.$axios.$post('/contacts', {
        name: this.user.name,
        surname: this.user.surname,
        phone: this.user.telephone,
        email: this.user.email,
        message: this.user.message,
      })
        .then((response) => {
          document.getElementById("contact_form").reset(); // сброс формы
          this.$v.$reset();  // сброс состояния валидаторов
          this.$toast.success('Ваш запрос успешно отправлен.'); // вывод успешного уведомления
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.$toast.error('Ошибка: неверный запрос.');
          } else if (err.response.status === 500) {
            this.$toast.error('Ошибка сервера.');
          }
        });
    }
  },
  computed: {
    ...mapGetters({contactsAll: "module/contacts/getAllContacts"}),
  },
}
</script>

<style scoped>
.section_contacts_container {
  padding: 50px 0;
  background-color: var(--dark-font-color);
}

.section_contacts_container h1, .login-box h1 {
  text-align: center;
  color: var(--main-theme-color);
  margin-bottom: 50px;
}

.contacts_card {
  padding: 30px 20px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid var(--main-theme-color);
  min-height: 200px;
}

.contacts_card p {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
  color: var(--grey-font-color);
}

.login-box {
  margin: 50px 0;
}

.login-box .user-box {
  user-select: none;
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff !important;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: var(--red-font-color);
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}


.btn_form_container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.btn_send {
  color: var(--white-font-color);
  background-color: var(--main-theme-color);
  min-width: 200px;
}

@media only screen and (max-width: 768px) {
  .btn_send {
    min-width: 100%;
  }
}
</style>
