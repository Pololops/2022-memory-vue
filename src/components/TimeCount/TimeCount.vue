<script setup lang="ts">
import "./styles.scss";
import { ref, onUnmounted, watch } from "vue";
import ProgressBar from "./ProgressBar.vue";

const maxTime = ref(100);
const isModalVisible = ref(true);
const time = ref(maxTime);

onUnmounted(() => {
  clearInterval(timerInterval);
});

let timerInterval: ReturnType<typeof setInterval>;
watch(isModalVisible, () => {
  if (!isModalVisible.value) {
    // Decrease time by 1 every second
    timerInterval = setInterval(() => {
      time.value -= 1 / maxTime.value;
    }, 10);
  } else {
    time.value = maxTime.value;
  }
});

watch(time, () => {
  if (time.value <= 0) {
    clearInterval(timerInterval);
    // dispatch(stopGame());
  }
});
</script>

<template>
  <div class="time-counter">
    <ProgressBar :time="time" :maxTime="maxTime" />
  </div>
</template>
