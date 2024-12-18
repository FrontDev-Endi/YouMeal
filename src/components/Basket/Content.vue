<script setup>
import Cart from "./Cart.vue";
import { inject } from "vue";
const { basket, removeFromCart } = inject("add-to-cart");
const minus = (item) => {
  if (item.quantity > 0) {
    item.quantity--;
  }
  if (item.quantity === 0) {
    removeFromCart(item);
  }
};
const plus = (item) => {
  if (item.quantity < 10) {
    item.quantity++;
  }
};
</script>

<template>
  <div class="content">
    <Cart
      v-for="item in basket"
      :img="item.image"
      :title="item.Name"
      :price="item.price"
      :gram="item.gram"
      :key="item.key"
      :quantity="item.quantity"
      :minus="minus.bind(null, item)"
      :plus="plus.bind(null, item)"
    />
  </div>
</template>

<style scoped>
.content {
  width: 268px;
  height: 252px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}

.content::-webkit-scrollbar {
  background: transparent;
  width: 5px;
  height: 5px;
}

.content::-webkit-scrollbar-thumb {
  background: var(--yellow);
  border-radius: 50px;
  width: 5px;
}
</style>
