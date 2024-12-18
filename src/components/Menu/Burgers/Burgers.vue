<script setup>
import Collecshin from "./Collecshin.vue";
import { query, orderBy, collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { onMounted, ref } from "vue";
const burgers = ref([]);
onMounted(
  async () => {
    const q = query(collection(db, "Burgers"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      burgers.value.push(doc.data());
    });
  }
);
</script>

<template>
  <Collecshin :burgers="burgers" />
</template>