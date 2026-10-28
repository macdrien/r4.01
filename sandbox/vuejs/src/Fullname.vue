<script setup>
import {computed} from "vue";

const { firstname, lastname } = defineProps(['firstname', 'lastname'])
const fullname = computed(() => firstname + ' ' + lastname)
</script>

<template>
  <p>{{ firstname }} and {{ lastname }}</p>
  <p>{{ fullname }}</p>
</template>
