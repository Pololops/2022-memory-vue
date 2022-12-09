<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <button class="modal__button" @click="props.onClick">
    {{ props.text }}
  </button>
</template>
