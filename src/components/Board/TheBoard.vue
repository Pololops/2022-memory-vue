<script setup lang="ts">
import "./styles.scss";
import { ref } from "vue";
import Card from "../Card/OneCard.vue";
import data from "../../assets/data/cards.json";

const cards = ref(data);
</script>

<template>
  <ul class="board" v-if="cards.length > 0">
    <Card
      v-for="card in cards"
      :key="card.id"
      :id="card.id"
      :image="card.url"
    />
    <!-- :isFlipped="card.isFlipped" -->
    <!-- :isSucceed="card.isSucceed" -->
    <!-- :isFailed="card.isFailed" -->
  </ul>
</template>
