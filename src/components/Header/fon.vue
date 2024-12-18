<template>
  <div class="fon"></div>
</template>

<style scoped>
.fon {
  border-radius: 0 0 100% 100%;
  background: var(--yellow);
  position: absolute;
  z-index: -1;
  width: 100%;
  /* height: 466px; */
  height: 50vh;
}

@media (max-width: 1024px) {
  .fon {
    height: 44vh;
  }
}

@media(max-width: 850px){
  .fon {
    height: 42vh;
  }
}

@media (max-width: 780px) {
  .fon {
    height: 40vh;
  }
}

@media (max-width: 650px) {
  .fon{
    height: 47vh;
  }
}

/* @media (max-width: 480px) {
  .fon{
    height: 200px;
  }
} */

/* @media (max-width: 384px) {
  .fon{
    height: 150px;
  }
} */
</style>
