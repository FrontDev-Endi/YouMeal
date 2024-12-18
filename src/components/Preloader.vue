<script setup>
import { ref, onMounted } from "vue";

const loading = ref(true);
const loadingPercentage = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (loadingPercentage.value < 100) {
      loadingPercentage.value += 1;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
  }, 30);
});
</script>

<template>
  <Transition name="fade">
    <div v-if="loading" class="preloader">
      <div class="loading-line">
        <div
          class="loading-line-inner"
          :style="{ width: `${loadingPercentage}%` }"
        ></div>
      </div>
      <p class="loading-text">Loading... {{ loadingPercentage }}%</p>
    </div>
  </Transition>
</template>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff5e6; /* Светло-оранжевый фон */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-line {
  width: 300px;
  height: 4px;
  background-color: #ffe0b2; /* Светло-оранжевый цвет для фона линии */
  border-radius: 2px;
  overflow: hidden;
}

.loading-line-inner {
  height: 100%;
  background-color: var(--orenge); /* Оранжевый цвет для движущейся части */
  transition: width 0.3s ease-out;
}

.loading-text {
  margin-top: 20px;
  font-family: Arial, sans-serif;
  font-size: 18px;
  color: var(--orenge); /* Оранжевый цвет */
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
