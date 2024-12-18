<script setup>
import { inject } from "vue";
import Cart from "./Cart.vue";
defineProps({
  appetizers: Array,
});
const { addToCart } = inject("add-to-cart");
</script>

<template>
  <div class="appetizer">
    <h1>Appetizers</h1>
    <div class="menu">
      <Cart
        v-for="appetizer in appetizers"
        :key="appetizer.id"
        :img="appetizer.image"
        :price="appetizer.price"
        :title="appetizer.Name"
        :gram="appetizer.gram"
        :onclick="() => addToCart(appetizer)"
      />
    </div>
  </div>
</template>

<!-- <style scoped>
.appetizer {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  width: 60%;
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
.appetizer {
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
  .appetizer {
    .menu{
      width: 100%;
      gap: 3%;
    }
  }
}

@media (max-width: 1100px) {
  .appetizer {
    padding-top: 0px;
  }
}
@media (max-width: 680px) {
  .appetizer {
    h1 {
      margin-left: 100px;
      font-size: calc(var(--index)* 2.5);
    }
  }
}
@media (max-width: 480px) {
  .appetizer {
    h1 {
      margin-left: 50px;
    }
  }
}
</style>