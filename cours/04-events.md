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
      v-on:input="firstnameUpdate"
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
      @input="event => { firstname = event.target.value }"
  />
</template>
```

---

## Events

- input
- click
- focus
- ...

---

## Other events

```vue
<script setup>
  import { ref } from 'vue';
  const selected = ref(true);
</script>
<template>
  <input
      type="checkbox"
      :checked="selected" 
      @click="() => selected = !selected"
  />
</template>
```

---

## Inputs and v-model

Before

```vue
<script setup>
  import { ref } from 'vue';
  const firstname = ref('John');
  const selected = ref(true);
</script>
<template>
  <input type="text" :value="firstname"
         @input="event => { firstname = event.target.value }" />
  <input type="checkbox" :checked="selected"
         @click="() => { selected = !selected }" />
</template>
```

---

## Input and v-model

With v-model

```vue
<script setup>
  import { ref } from 'vue';
  const firstname = ref('John');
  const selected = ref(true);
</script>
<template>
  <input type="text" v-model="firstname"/>
  <input type="checkbox" v-model="selected" />
</template>
```