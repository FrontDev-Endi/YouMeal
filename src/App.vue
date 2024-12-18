<script setup>
import Preloader from "./components/Preloader.vue";
import Header from "./components/Header/Header.vue";
import Categories from "./components/Categories/Categories.vue";
import Basket from "./components/Basket/Basket.vue";
import Footer from "./components/Footer/Footer.vue";
import { ref, provide, computed } from "vue";
const basket = ref([]);
const removeFromCart = (item) => {
  const index = basket.value.indexOf(item);
  basket.value.splice(index, 1);
};
const addToCart = (item) => {
  if (!basket.value.includes(item)) {
    basket.value.push(item);
    item.quantity = 1;
  } else {
    const index = basket.value.indexOf(item);
    basket.value[index].quantity += 1;
    if (basket.value[index].quantity > 10) {
      basket.value[index].quantity = 10;
    }
  }
};
const total = computed(() =>
  basket.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

provide("add-to-cart", {
  addToCart,
  removeFromCart,
  basket,
  total,
});
</script>

<template>
  <Preloader />
  <Header />
  <Categories />
  <div class="combo">
    <Basket />
    <router-view class="content" />
  </div>
  <Footer />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  .combo {
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
  }
}

@media (max-width: 1100px) {
  #app {
    .combo {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .content {
        margin-left: auto;
        margin-right: auto;
        /* margin-top: 100px; */
      }
    }
  }
}
</style>
