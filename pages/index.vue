<script lang="ts" setup>
import { storeToRefs } from "pinia";
// const { count, addCount } = useAddCount();

const store = useHomeStore();
const { count } = storeToRefs(store);
const { addCount } = store;
</script>

<template>
  <Home />
  <div>Store: {{ count }}</div>
  <button type="button" @click="addCount">Click</button>
</template>

<style scoped></style>
