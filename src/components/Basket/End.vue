<script setup>
import { inject } from "vue";
const { total } = inject("add-to-cart");
</script>

<template>
  <div class="end">
    <div class="total">
      <h1>Total</h1>
      <h1>{{ total }}$</h1>
    </div>
    <button class="button">Checkout</button>
    <div class="delivery">
      <img src="/public/delivery.svg" />
      <h1>Free shipping</h1>
    </div>
  </div>
</template>

<style scoped>
.end {
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    h1 {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      color: var(--black);
      margin-left: 16px;
    }
    h1:nth-child(2) {
      text-align: right;
      margin-right: 16px;
      transition: all 0.3s ease;
    }
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    border-radius: 12px;
    padding: 11px 32px;
    margin-top: 24px;
    width: 268px;
    width: 90%;
    height: 40px;
    background: var(--orenge);
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: var(--white);
    margin-left: auto;
    margin-right: auto;
  }
  .delivery {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 16px;
    margin-top: 8px;
    flex-direction: row;
    gap: 8px;
  }
}
</style>
