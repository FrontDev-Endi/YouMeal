<script setup>
import Categorie from "./Categorie.vue";
</script>

<template>
  <div class="categories">
    <router-link to="/">
      <Categorie
        img="/public/Burgers.svg"
        title="Burgers"
        :class="{ active: $route.path === '/' }"
      />
    </router-link>
    <router-link to="/appetizers">
      <Categorie
        img="/public/Appetizers.svg"
        title="Appetizers"
        :class="{ active: $route.path === '/appetizers' }"
      />
    </router-link>
    <router-link to="/hotdogs">
      <Categorie
        img="/public/Hot dogs.svg"
        title="Hot dogs"
        :class="{ active: $route.path === '/hotdogs' }"
      />
    </router-link>
    <router-link to="/combo">
      <Categorie
        img="/public/Combo.svg"
        title="Combo"
        :class="{ active: $route.path === '/combo' }"
      />
    </router-link>
    <router-link to="/shawarma">
      <Categorie
        img="/public/Shawarma.svg"
        title="Shawarma"
        :class="{ active: $route.path === '/shawarma' }"
      />
    </router-link>
    <router-link to="/pizza">
      <Categorie
        img="/public/Pizza.svg"
        title="Pizza"
        :class="{ active: $route.path === '/pizza' }"
      />
    </router-link>
    <router-link to="/wok">
      <Categorie
        img="/public/Wok.svg"
        title="Wok"
        :class="{ active: $route.path === '/wok' }"
      />
    </router-link>
    <router-link to="/desserts">
      <Categorie
        img="/public/Desserts.svg"
        title="Desserts"
        :class="{ active: $route.path === '/desserts' }"
      />
    </router-link>
    <router-link to="/sauces">
      <Categorie
        img="/public/Sauces.svg"
        title="Sauces"
        :class="{ active: $route.path === '/sauces' }"
      />
    </router-link>
  </div>
</template>

<style scoped>
.categories {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 72%;
  margin-top: 113px;
  padding-bottom: 3px;
  .active {
    background: var(--yellow);
  }
}
.categories::-webkit-scrollbar {
  background: transparent;
  width: 20px;
  height: 10px;
}

.categories::-webkit-scrollbar-thumb {
  background: var(--yellow);
  border-radius: 50px;
  width: 10px;
}

.categories::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

@media (max-width: 1400px) {
  .categories {
    /* max-width: 1000px; */
    justify-content: flex-start;
    overflow-x: scroll;
  }
}

@media (max-width: 768px) {
  .categories {
    margin-top: 80px;
  }
  .categories::-webkit-scrollbar {
    background: transparent;
    width: 20px;
    height: 5px;
  }
}
</style>
