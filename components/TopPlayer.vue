<template>
  <div>
    <!-- Отображение большой картинки -->
    <div class="main-image">
      <img :src="currentBombarder.image" alt="Bombarder" />
    </div>

    <!-- Слайдер изображений -->
    <div class="slider">
      <button @click="prevSlide">Назад</button>
      <div class="slides">
        <img
          v-for="(bombarder, index) in visibleBombarders"
          :key="index"
          :src="bombarder.image"
          alt="Bombarder"
          @click="setCurrentBombarder(index)"
        />
      </div>
      <button @click="nextSlide">Вперед</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "TopPlayer",
  data() {
    return {
      currentBombarderIndex: 0
    };
  },
  created() {
    if (this.bombardersAll && this.bombardersAll.length > 0) {
      this.currentPlayer = this.bombardersAll[0];
    }
  },
  computed: {
    ...mapGetters({
      bombardersAll: "module/bombarders/getAllBombarders"
    }),
    currentBombarder() {
      return this.bombardersAll[this.currentBombarderIndex];
    },
    visibleBombarders() {
      const start = this.currentBombarderIndex;
      const end = start + 5; // Показывать 5 изображений в слайдере (или другое число на ваше усмотрение)
      return this.bombardersAll.slice(start, end);
    }
  },
  methods: {
    setCurrentBombarder(index) {
      this.currentBombarderIndex = index;
    },
    prevSlide() {
      if (this.currentBombarderIndex > 0) {
        this.currentBombarderIndex--;
      }
    },
    nextSlide() {
      if (this.currentBombarderIndex < this.bombardersAll.length - 1) {
        this.currentBombarderIndex++;
      }
    }
  }
}
</script>

<style scoped>
.main-image img {
  width: 100%;
  max-width: 800px;
  display: block;
  margin: 0 auto;
}

.slider {
  display: flex;
  align-items: center;
}

.slider button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
}

.slider button:hover {
  background-color: #555;
}

.slides {
  display: flex;
}

.slides img {
  max-width: 150px;
  margin: 0 5px;
  cursor: pointer;
  transition: transform 0.3s;
}

.slides img:hover {
  transform: scale(1.1);
}
</style>
