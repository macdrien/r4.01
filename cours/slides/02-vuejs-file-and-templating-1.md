---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 01 - Fichier VueJS et templating #1

---

## Fichier VueJS

```vue
<script>                       // Partie JS dynamique
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
