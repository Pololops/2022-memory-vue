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
  isCounterRunning: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div
    class="time-counter__progress"
    :class="isCounterRunning ? 'started' : 'stopped'"
    :style="{ width: `${((100 * time) / maxTime - 100) * -1}%` }"
  ></div>
</template>
