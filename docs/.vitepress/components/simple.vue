<template>
  <div>
    <h2 :class="[outside ? 'outside' : 'inside']" v-text="message" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import VueClickAway from "vue3-click-away";
export default {
  setup() {
    const outside = ref(false);
    const message = computed(() => (outside.value ? "Outside" : "Inside"));
    const onClickAway = () => {
      outside.value = false;
    };

    return { outside, message, onClickAway };
  },
};
</script>