<template>
  <div class="galleries_wrapper">
    <nuxt-link :to="`/galleries/` + galleriesId">

      <div class="galleries_image">
        <img :src="galleriesImage" alt="img">
      </div>

      <div class="galleries_description">
        <span>{{ galleriesTitle }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "GalleriesItem",
  props: {
    galleriesId: Number,
    galleriesImage: String,
    galleriesTitle: String,
  }
}
</script>

<style scoped>
.galleries_wrapper a{
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 140px;
  margin: 10px 0px;
  padding: 20px;
  transition: 0.8s;
  color: var(--dark-font-color);
  box-shadow: 0 2px 8px #000e140d;
  cursor: pointer;
}

.galleries_wrapper a:hover {
  background-color: var(--main-theme-color);
  box-shadow: 0 2px 8px var(--main-theme-color);
  color: var(--white-font-color);
}

.galleries_description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.galleries_image img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
