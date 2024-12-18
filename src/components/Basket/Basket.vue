<script setup>
import { inject, ref, provide } from "vue";
import Content from "./Content.vue";
import End from "./End.vue";
const { basket } = inject("add-to-cart");

const openCart = () => {
  document.querySelector(".basket").classList.add("basket-open");
};

const closeCart = () => {
  document.querySelector(".basket").classList.remove("basket-open");
};
</script>

<template>
  <div class="basket">
    <div class="head" @click="openCart()">
      <h1>Basket</h1>
      <p class="number">{{ basket.length }}</p>
    </div>
    <div class="cont">
      <div class="content" v-if="basket.length > 0">
        <Content />
        <End />
      </div>
      <div class="empty" v-else>
        <h1>Shopping cart is empty</h1>
      </div>
    </div>
    <p class="fold" @click="closeCart()">Fold</p>
  </div>
</template>

<style scoped>
.basket {
  /* position: absolute; */
  margin-top: 122px;
  margin-left: 13%;
  border-radius: 18px;
  /* width: 16%; */
  width: 300px;
  height: 467px;
  background: var(--white);
  z-index: 1000;
  .head {
    display: flex;
    /* justify-content: space-between; */
    padding: 26px 16px;
    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 24px;
      color: var(--black);
    }
    .number {
      border-radius: 6px;
      margin-left: 130px;
      padding-top: 2px;
      width: 41px;
      height: 20px;
      background: var(--grey);
      font-weight: 400;
      font-size: 12px;
      text-align: center;
      color: var(--black);
      align-self: center;
    }
  }
  .empty {
    h1 {
      font-weight: 800;
      font-size: 34px;
      line-height: 50px;
      color: #d6d6d9;
      text-align: center;
      margin-top: 100px;
    }
  }
  .order-placed {
    img {
      display: flex;
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;
    }
    h1 {
      font-weight: 800;
      margin-top: 20px;
      font-size: 34px;
      line-height: 50px;
      /* color: rgba(1, 142, 69, 1); */
      color: rgba(176, 239, 143, 1);
      /* -webkit-text-stroke: 1px rgba(1, 142, 69, 1); */
      text-align: center;
    }
  }
  .fold {
    display: none;
    font-weight: 400;
    font-size: 14px;
    text-align: right;
    margin-right: 20px;
    margin-top: 150px;
    color: #b1b1b1;
  }
}

@media (max-width: 1100px) {
  .basket {
    width: 145px;
    height: 48px;
    margin-top: 20px;
    .head {
      padding: 16px 13px;
      h1 {
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        color: var(--black);
      }
      .number {
        border-radius: 6px;
        margin-left: 27px;
        padding: 1px 13px;
        width: 32px;
        height: 16px;
        background: var(--grey);
      }
    }
    .content {
      display: none;
    }
    .empty {
      display: none;
    }
  }
}

.basket-open {
  position: absolute;
  width: 300px;
  height: 467px;
  .head {
    display: flex;
    /* justify-content: space-between; */
    padding: 26px 16px;
    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 24px;
      color: var(--black);
    }
    .number {
      border-radius: 6px;
      margin-left: 130px;
      padding-top: 2px;
      width: 41px;
      height: 20px;
      background: var(--grey);
      font-weight: 400;
      font-size: 12px;
      text-align: center;
      color: var(--black);
      align-self: center;
    }
  }
  .cont {
    display: block;
    .content {
      display: block;
    }
    .empty {
      display: block;
    }
  }
  .fold {
    display: block;
    margin-top: -20px;
  }
}

@media (max-width: 375px) {
  .basket-open {
    width: 280px;
    margin-left: 20px;
  }
}
</style>
