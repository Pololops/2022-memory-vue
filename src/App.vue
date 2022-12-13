<script setup lang="ts">
import { onMounted, watchEffect } from "vue";
import { useStore } from "./store/index";

import cards from "./assets/data/cards.json";

import Score from "./components/Score/TheScore.vue";
import Board from "./components/Board/TheBoard.vue";
import TimeCount from "./components/TimeCount/TimeCount.vue";
import Modal from "./components/Modal/TheModal.vue";
import Message from "./components/Message/TheMessage.vue";
import Button from "./components/Button/TheButton.vue";

const store = useStore();

function clickButtonHandler() {
  store.startGame();
}

onMounted(() => {
  store.getCards(cards);
});

watchEffect(() => {
  if (store.turn.length > 1) {
    const isTurnWin =
      store.turn[0].name === store.turn[1].name &&
      store.turn[0].id !== store.turn[1].id;

    store.testCombination();

    let timer = 0;
    if (isTurnWin) {
      store.increaseScore();
      store.searchNotFoundCard();
    } else {
      timer = 1500;
      store.decreaseScore();
    }

    setTimeout(() => {
      store.initNextTurn();
    }, timer);
  }
});
</script>

<template>
  <div class="app">
    <Score />
    <Board />
    <TimeCount />

    <component :is="store.isModalVisible && Modal">
      <Message
        :text="
          store.turnNumber < 1
            ? 'Bienvenue dans le jeu du Memory !'
            : `La partie est terminée ! Vous avez obtenu ${store.score} point${
                store.score > 1 ? 's' : ''
              }`
        "
      />
      <Button
        :text="
          store.turnNumber < 1
            ? 'Commencer une partie'
            : 'Recommencer une partie'
        "
        @click="clickButtonHandler"
      ></Button>
    </component>
  </div>
</template>
