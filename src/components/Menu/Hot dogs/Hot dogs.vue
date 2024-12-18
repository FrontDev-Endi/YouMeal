<script setup>
import Collecshin from "./Collecshin.vue";
import { query, orderBy, collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { onMounted, ref } from "vue";
const hotdogs = ref([]);
onMounted(
  async () => {
    const q = query(collection(db, "Hot dogs"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      hotdogs.value.push(doc.data());
    });
  }
);
</script>

<template>
  <Collecshin :hotdogs="hotdogs" />
</template>
