<script setup lang="ts">
import "./styles.scss";
import { ref, onUnmounted, watch, watchEffect } from "vue";
import { useStore } from "@/store";
import ProgressBar from "./ProgressBar.vue";

const store = useStore();

const time = ref(store.counter);
const isCounterRunning = ref(false);

let timerInterval: ReturnType<typeof setInterval>;
watchEffect(() => {
  if (!store.isModalVisible) {
    time.value = store.counter;
    isCounterRunning.value = true;
    // Decrease time by 1 every second
    timerInterval = setInterval(() => {
      time.value -= 1 / 100;
    }, 10);
  } else {
    clearInterval(timerInterval);
    isCounterRunning.value = false;
  }
});

watch(time, () => {
  if (time.value <= 0) {
    clearInterval(timerInterval);
    store.stopGame();
  }
});
</script>

<template>
  <div class="time-counter">
    <ProgressBar
      :time="time"
      :maxTime="store.counter"
      :isCounterRunning="isCounterRunning"
    />
  </div>
</template>
