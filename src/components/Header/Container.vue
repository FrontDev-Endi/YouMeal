<script setup>
import Content from "./Content.vue";
</script>

<template>
  <header class="content">
    <div class="logo">
      <img src="/Group 7.svg" alt="logo" />
    </div>
    <Content />
  </header>
</template>

<style scoped>
.content {
  .logo {
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
}

@media (max-width: 1024px) {
  .content {
    .logo {
      img {
        width: 150px;
      }
    }
  }
}

@media (max-width: 768px) {
  .content {
    .logo {
      img {
        width: 150px;
        height: 29px;
      }
    }
  }
}

/* @media (max-width: 640px) {
  .content {
    .logo {
      img{
        width: 80px;
      }
    }
  }
}

@media (max-width: 480px) {
  .content {
    .logo {
      padding-top: 15px;
      img{
        width: 60px;
      }
    }
  }
}

@media (max-width: 384px) {
  .content {
    .logo {
      padding-top: 11px;
      img{
        width: 50px;
      }
    }
  }
} */
</style>
