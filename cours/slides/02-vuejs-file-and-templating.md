---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 02 - Fichier VueJS et templating

---

## Fichier VueJS

```vue
<script setup>                       // Partie JS dynamique
  import { ref } from 'vue';
  const title = ref('Hello');
</script>

<template>                     // Template HTML
  <h1>{{ title }}</h1>
</template>

<style>                        // Style du composant
  h1 {
    font-size: 3em;
  }
</style>
```

---

## VueJS project

```plaintext
./
- package.json
- package-lock.json
- index.html
- public
    - Documents statiques (favicon, images, etc.)
- src
    - main.js
    - App.vue
    - Tous les autres composants VueJS 
```

---

## Variable display

```vue
<script setup>
  const title = 'Hello';
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ title.length > 0 ? title.toLowerCase() : 'Bonjour' }}</p>
</template>
```

---

## Attribute binding

```vue
<script setup>
  const image = {
    url: 'https://www.iut-rodez.fr/sites/default/files/upload/iut/Photos/photoiut0725_1.png',
    alt: 'Vue de l\'accueil de l\'IUT',
  };
</script>

<template>
  <img v-bind:src="image.url" v-bind:alt="image.alt" />
  <img :src="image.url" :alt="image.alt" />
</template>
```

---

## Loops

```vue
<script setup>
  const list = ['Hello', 'Bonjour', 'Hola']
</script>

<template>
  <p v-for="item in list" :key="`list-${item}`" >{{ item }}</p>
</template>
```
