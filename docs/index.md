# Vue Click Away

## Overview

Detect if a click event happened outside of an element. Compatible with Vue 3.x.

## Requirements

- Vue 3.x

## Installation

<div class="mb-2">

```
npm i vue3-click-away
```

</div>


<div class="mb-2">

```
yarn add vue3-click-away
```
</div>

## Usage

:::tip
By default the module exports a plugin, but you can also use this as a mixin which is documented below or as a directive.
:::

<div class="mb-2">

```js
import { createApp } from "vue";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";

const app = createApp(App);

app.use(VueClickAway)
app.mount('#app')
```
</div>

<div class="mb-2">

```vue
<template>
  <div v-click-away="onClickAway">
    ...
  </div>
</template>

<script>
export default {
  methods: {
    onClickAway(event) {
      console.log(event)
    }
  }
}
</script>
```
</div>

or with Vue Composition API & Typescript

<div class="mb-2">

```vue
<template>
  <div v-click-away="onClickAway">
    ...
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const onClickAway = (event) => {
      console.log(event)
    }

    return { onClickAway }
  } 
})
</script>
```
</div>

### Mixin

<div class="mb-2">

```html
<template>
  <div v-click-away="onClickAway">
    ...
  </div>
</template>
```
</div>


<div class="mb-2">

```js
import { mixin as VueClickAway } from "vue3-click-away";
export default {
  mixins: [VueClickAway],
  methods: {
    onClickAway(event) {
      console.log(event);
    }
  }
}
```
</div>

## Examples

### Simple Example

<div class="mb-4">
  <simple />
</div>

### Popup/Modal Example

<div class="mb-4">
  <popup />
</div>

<script>
import Simple from "./.vitepress/components/simple.vue";
import Popup from "./.vitepress/components/popup.vue";
export default {
  components: {
    Popup,
    Simple
  }
}
</script>

<style>
  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
