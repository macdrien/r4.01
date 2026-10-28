<script setup>
import Fullname from "@/Fullname.vue";
import Firstname from "@/Firstname.vue";
import {ref} from "vue";

const firstname = ref('John');
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <Firstname
    :initialFirstname="firstname"
    @submit="newFirstname => firstname = newFirstname"
  />

  <Fullname :firstname="firstname" lastname="Doe"/>
</template>

<style scoped></style>
