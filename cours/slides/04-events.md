---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 04 - Event handling

---

## Event handling

```vue
<script setup>
  import { ref } from 'vue';
  const firstname = ref('John');
  function firstnameUpdate(event) {
      firstname.value = event.target.value;
  }
</script>
<template>
  <input
      type="text"
      :value="firstname"
      v-on:change="firstnameUpdate"
  />
</template>
```

---

## Event shortcut

```vue
<script setup>
  import { ref } from 'vue';
  const firstname = ref('John');
</script>
<template>
  <input
      type="text"
      :value="firstname" 
      @change="event => { firstname.value = event.target.value }"
  />
</template>
```

---

## Events

- input, change, etc.
- click
- focus
- ...
