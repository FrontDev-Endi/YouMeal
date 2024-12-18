<script setup>
import { inject } from "vue";
import Cart from "./Cart.vue";
defineProps({
  hotdogs: Array,
});

const { addToCart } = inject("add-to-cart");
</script>

<template>
  <div class="hotdog">
    <h1>Hot dogs</h1>
    <div class="menu">
      <Cart
        v-for="hotdog in hotdogs"
        :key="hotdog.key"
        :img="hotdog.image"
        :price="hotdog.price"
        :title="hotdog.Name"
        :gram="hotdog.gram"
        :onclick="() => addToCart(hotdog)"
      />
    </div>
  </div>
</template>

<!-- <style scoped>
.hotdog {
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-top: 50px;
  h1 {
    color: var(--black);
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    margin-right: auto;
    margin-left: 150px;
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 24px;
    width: 100%;
  }
}
</style> -->

<style scoped>
.hotdog {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  width: 60%;
  z-index: 1;
  h1 {
    color: var(--black);
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    margin-right: auto;
    margin-left: 150px;
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    /* gap: 30px; */
    gap: 3%;
    margin-top: 24px;
  }
}

@media (max-width: 1600px) {
  .hotdog {
    .menu{
      width: 100%;
      gap: 3%;
    }
  }
}

@media (max-width: 1100px) {
  .hotdog {
    padding-top: 0px;
  }
}
@media (max-width: 680px) {
  .hotdog {
    h1 {
      margin-left: 100px;
      font-size: calc(var(--index)* 2.5);
    }
  }
}
@media (max-width: 480px) {
  .hotdog {
    h1 {
      margin-left: 50px;
    }
  }
}
</style>