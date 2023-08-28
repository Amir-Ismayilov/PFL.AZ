<template>
  <div>
    <mainHeader/>
    <scorebarMatch/>
    <transition name="fade" mode="out-in">
      <Nuxt :key="$route.path"/>
    </transition>
    <mainFooter/>
  </div>
</template>

<script>
import mainHeader from "../components/main/mainHeader";
import mainFooter from "../components/main/mainFooter";
import scorebarMatch from "../components/scorebarMatch";

export default {
  name: "default.vue",
  components: {
    mainHeader,
    mainFooter,
    scorebarMatch
  },
  mounted() {
    // For Loading
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>
