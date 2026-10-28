<script setup>
import { ref } from "vue";

const selected = ref(true);
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <input type="checkbox"
         :checked="selected"
         v-on:click="() => selected = !selected"
   />
  <p>{{ selected ? 'Hello' : 'Good bye' }}</p>
</template>

<style scoped></style>
