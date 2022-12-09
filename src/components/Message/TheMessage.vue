<script setup lang="ts">
import "./styles.scss";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p class="message">{{ props.text }}</p>
</template>
