<template>
  <div>
    <mainHeader/>
    <transition name="fade" mode="out-in">
      <Nuxt :key="$route.path"/>
    </transition>
    <mainFooter/>
  </div>
</template>

<script>
import mainHeader from "../components/main/mainHeader";
import mainFooter from "../components/main/mainFooter";

export default {
  name: "default.vue",
  components: {
    mainHeader,
    mainFooter
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
