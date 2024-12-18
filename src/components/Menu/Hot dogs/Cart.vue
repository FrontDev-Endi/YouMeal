<script setup>
defineProps({
  img: String,
  price: Number,
  title: String,
  gram: Number,
  onClick: Function
});
</script>

<template>
  <div class="cart">
    <img :src="img" alt="image" />
    <h1 class="price">{{ price }}$</h1>
    <h2 class="name">{{ title }}</h2>
    <h3 class="weight">{{ gram }}g</h3>
    <button class="button" @click="onClick">Add to cart</button>
  </div>
</template>

<!-- <style scoped>
.cart {
  border-radius: 18px;
  padding: 8px 14px;
  width: 300px;
  height: 411px;
  background: var(--white);
  img {
    margin-top: 4px;
  }
  .price {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: var(--black);
    margin-top: 16px;
  }
  .name {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: var(--black);
    margin-top: 8px;
  }
  .weight {
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    color: #b1b1b1;
    margin-top: 30px;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    margin-top: 8px;
    border-radius: 12px;
    padding: 11px 92px;
    width: 276px;
    height: 40px;
    background: var(--grey);
  }
}
</style> -->

<style scoped>
.cart {
  display: block;
  border-radius: 18px;
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  min-width: 145px;
  height: auto;
  background: var(--white);

  img {
    margin-top: 4px;
    width: 100%;
    height: auto;
  }
  .price {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: var(--black);
    margin-top: 12px;
  }
  .name {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--black);
    margin-top: 6px;
  }
  .weight {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #b1b1b1;
    margin-top: 20px;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    margin-top: 8px;
    border-radius: 12px;
    padding: 10px;
    font-size: 14px;
    width: 100%;
    height: 36px;
    background: var(--grey);
    cursor: pointer;
  }
}

@media (max-width: 1600px) {
  .cart {
    width: 30%;
  }
}

@media (max-width: 1024px) {
  .cart {
    width: 48%;
  }
}

@media (max-width: 650px) {
  .cart {
    width: 100%;
  }
}
</style>