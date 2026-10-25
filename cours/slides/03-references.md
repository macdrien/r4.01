---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 03 - References

---

## References

```vue
<script setup>
  import { ref } from 'vue';
  const title = ref("Hello world");
</script>
<template>
  <h1>{{ title }}</h1>
</template>
```

---

## Computed

```vue
<script setup>
  import { computed, ref } from 'vue';
  const firstname = ref('John');
  const lastname = ref('Doe');
  const fullname = computed(() => firstname.value + ' ' + lastname.value);
</script>
<template>
  <h1>{{ fullname }}</h1>
  <p>{{ firstname }}</p>
  <p>{{ lastname }}</p>
</template>
```
