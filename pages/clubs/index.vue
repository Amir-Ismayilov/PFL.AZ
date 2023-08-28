<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-3" v-for="(club,index) in clubs" :key="index">
          <ClubsItem :clubsId="club.id"
                     :clubsImage="club.logo"
                     :clubsName="club.title_az"
                     :clubsWebsite="club.website"
                     :clubsPlayers="club.players"
          />
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import ClubsItem from "../../components/clubs/ClubsItem";
import {mapState, mapGetters} from "vuex";


export default {
  name: "clubs",
  components: {
    ClubsItem,
  },
  data() {
    return { }
  },
  computed: {
    ...mapGetters({clubs: "module/clubs/getAllClubs"}),
  },
}
</script>

<style scoped>

</style>
