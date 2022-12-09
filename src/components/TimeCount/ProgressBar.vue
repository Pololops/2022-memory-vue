<script setup lang="ts">
import "./styles.scss";

defineProps({
  time: {
    type: Number,
    required: true,
  },
  maxTime: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    class="time-counter__progress"
    :style="{ width: `${((100 * time) / maxTime - 100) * -1}%` }"
  ></div>
</template>
