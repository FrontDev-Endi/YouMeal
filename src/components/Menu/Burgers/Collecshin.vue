<script setup>
import { inject } from "vue";
import Cart from "./Cart.vue";
defineProps({
  burgers: Array,
});

const { addToCart } = inject("add-to-cart");
</script>

<template>
  <div class="burger">
    <h1>Burgers</h1>
    <div class="menu">
      <Cart
        v-for="burger in burgers"
        :key="burger.key"
        :quantity="burger.quantity"
        :img="burger.image"
        :price="burger.price"
        :title="burger.Name"
        :gram="burger.gram"
        :onclick="() => addToCart(burger)"
      />
    </div>
  </div>
</template>

<style scoped>
.burger {
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
  .burger {
    .menu{
      width: 100%;
      gap: 3%;
    }
  }
}

@media (max-width: 1100px) {
  .burger {
    padding-top: 0px;
  }
}
@media (max-width: 680px) {
  .burger {
    h1 {
      margin-left: 100px;
      font-size: calc(var(--index)* 2.5);
    }
  }
}
@media (max-width: 480px) {
  .burger {
    h1 {
      margin-left: 50px;
    }
  }
}
</style>