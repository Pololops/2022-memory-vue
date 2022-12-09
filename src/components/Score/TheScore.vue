<script setup lang="ts">
import "./styles.scss";
import { ref } from "vue";

const score = ref(0);
</script>

<template>
  <p class="score">
    Votre score est de {{ score }} point{{ score > 1 ? "s" : "" }}
  </p>
</template>
