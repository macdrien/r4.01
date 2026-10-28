<script setup>
import { defineEmits, ref } from 'vue';
const { initialFirstname } = defineProps(['initialFirstname'])
const emits = defineEmits(['submit']);
const firstname = ref(initialFirstname);
</script>

<template>
  <form @submit.prevent="emits('submit', firstname)">
    <input type="text" v-model="firstname"/>
    <button type="submit">Valider</button>
  </form>
</template>
