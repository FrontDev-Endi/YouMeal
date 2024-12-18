<script setup>
defineProps({
  img: String,
  title: String,
  price: Number,
  gram: Number,
  quantity: Number,
  minus: Function,
  plus: Function,
});
</script>

<template>
  <div class="cart">
    <img :src="img" class="img" />
    <div class="container">
      <div class="info">
        <h1>{{ title }}</h1>
        <p class="gram">{{ gram }}g</p>
        <p class="price">{{ price }}$</p>
      </div>
      <div class="counter">
        <button class="minus" @click="minus()">-</button>
        <h2 class="quantity">{{ quantity }}</h2>
        <button class="plus" @click="plus()">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  display: flex;
  border-bottom: 1px solid #f2f2f3;
  border-top: 1px solid #f2f2f3;
  /* width: 268px; */
  width: 100%;
  height: 84px;
  img {
    border-radius: 8px;
    width: 64px;
    height: 52px;
    margin-top: auto;
    margin-bottom: auto;
  }
  .container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    .info {
      margin-left: 6px;
      margin-top: auto;
      margin-bottom: auto;
      h1 {
        font-weight: 400;
        font-size: 12px;
        color: var(--black);
        width: 85px;
      }
      .gram {
        font-weight: 400;
        font-size: 12px;
        color: #b1b1b1;
      }
      .price {
        font-weight: 400;
        font-size: 12px;
        color: var(--black);
      }
    }
    .counter {
      width: 84px;
      height: 40px;
      display: flex;
      background: var(--grey);
      border-radius: 12px;
      /* margin-left: 31px; */
      margin-top: auto;
      margin-bottom: auto;
      .quantity {
        font-weight: 400;
        font-size: 16px;
        color: var(--black);
        margin: auto;
      }
      .minus {
        padding-left: 12px;
      }
      .plus {
        padding-right: 12px;
      }
    }
  }
}
</style>
