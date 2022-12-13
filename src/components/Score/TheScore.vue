<script setup lang="ts">
import { useStore } from "@/store";
import "./styles.scss";

const store = useStore();
</script>

<template>
  <p class="score">
    Votre score est de {{ store.score }} point{{ store.score > 1 ? "s" : "" }}
  </p>
</template>
