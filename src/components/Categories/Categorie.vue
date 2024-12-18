<script setup>
defineProps({
  img: String,
  title: String,
});
</script>

<template>
  <button class="categorie">
    <img :src="img" alt="" />
    <h1>{{ title }}</h1>
  </button>
</template>

<style scoped>
.categorie {
  display: flex;
  padding: 8px 16px;
  /* width: 156px;
  height: 40px; */
  justify-content: center;
  align-items: center;
  background: var(--white);
  border-radius: 50px;
  margin-right: 16px;

  h1 {
    margin-left: 8px;
    font-size: 20px;
    font-weight: 400;
  }
}
@media (max-width: 1800px) {
  .categorie {
    margin-right: 20px;
    padding: 8px 23px;
    h1 {
      font-size: 18px;
    }
  }
}

@media (max-width: 1550px) {
  .categorie {
    margin-right: 20px;
    padding: 8px 23px;
    h1 {
      font-size: 16px;
    }
  }
}

@media (max-width: 1440px) {
  .categorie {
    margin-right: 20px;
    padding: 8px 23px;

    h1 {
      font-size: 14px;
    }
  }
}

@media (max-width: 1024px) {
  .categorie {
    margin-right: 20px;
    padding: 8px 23px;
    h1 {
      font-size: 16px;
    }
  }
}

@media (max-width: 768px) {
  .categorie {
    margin-right: 12px;
    padding: 5px 23px;
    h1 {
      font-size: 12px;
    }
  }
}

/* @media (max-width: 640px) {
  .categorie {
    padding: 1px 15px;
    margin-right: 10px;
    img {
      width: 15px;
    }
    h1{
      font-size: 7px;
    }
  }
}

@media (max-width: 480px) {
  .categorie {
    padding: 1px 12px;
    margin-right: 10px;
    img {
      width: 12px;
    }
    h1{
      font-size: 6px;
    }
  }
} */
</style>
