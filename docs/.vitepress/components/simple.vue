<template>
  <div class="vca__container" v-click-away="onClickAway" @click="onClick">
    <h2 :class="[outside ? 'outside' : 'inside']" v-text="message" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import VueClickAway from "vue3-click-away";
export default {
  setup() {
    const outside = ref(null);
    const message = computed(() => {
      if (outside.value === null) {
        return "Click Anywhere (Inside or Outside)";
      }
      return outside.value ? "You Clicked Outside" : "You Clicked Inside";
    });

    const onClickAway = () => {
      outside.value = true;
    };

    const onClick = () => {
      outside.value = false;
    };

    return { outside, message, onClick, onClickAway };
  },
  directives: {
    ClickAway: VueClickAway,
  },
};
</script>

<style scoped>
.vca__container {
  padding: 10px;
  border: 2px dashed red;
}

h2 {
  cursor: pointer;
  border-bottom: none;
  text-align: center;
}
</style>