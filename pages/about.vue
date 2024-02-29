<script lang="ts" setup>
const store = useHomeStore();
const { count } = store;
</script>

<template>
  <div>
    <AboutHeader />
    <div>Store: {{ count }}</div>
  </div>
</template>

<style scoped></style>
