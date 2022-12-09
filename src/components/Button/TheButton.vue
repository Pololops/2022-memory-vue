<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button class="modal__button">
    {{ props.text }}
  </button>
</template>
