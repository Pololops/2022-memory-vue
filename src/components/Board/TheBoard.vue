<script setup lang="ts">
import "./styles.scss";

import { useStore } from "../../store/index";
import Card from "../Card/OneCard.vue";

const store = useStore();
</script>

<template>
  <ul class="board" v-if="store.cards.length > 0">
    <Card
      v-for="card in store.cards"
      :key="card.id"
      :id="card.id"
      :image="card.url"
      :isFlipped="card.isFlipped"
      :isSucceed="card.isSucceed"
      :isFailed="card.isFailed"
    />
  </ul>
</template>
