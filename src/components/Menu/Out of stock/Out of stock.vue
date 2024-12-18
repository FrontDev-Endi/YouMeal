<template>
  <div class="out-of-stock">
    <h1>Out of stock</h1>
  </div>
</template>

<style scoped>
.out-of-stock {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  h1 {
    color: var(--black);
    font-weight: 700;
    /* font-size: 70px; */
    font-size: calc(var(--index)* 2.7);
    line-height: 48px;
  }
}
</style>