<script setup>
import Collecshin from "./Collecshin.vue";
import { query, orderBy, collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { onMounted, ref } from "vue";
const appetizers = ref([]);
onMounted(
  async () => {
    const q = query(collection(db, "Appetizers"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      appetizers.value.push(doc.data());
    });
  }
);
</script>

<template>
  <Collecshin :appetizers="appetizers" />
</template>