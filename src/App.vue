<script setup lang="ts">
import { ref, onMounted, watch, type Ref } from "vue";

import cards from "./assets/data/cards.json";

import Score from "./components/Score/TheScore.vue";
import Board from "./components/Board/TheBoard.vue";
import TimeCount from "./components/TimeCount/TimeCount.vue";
import Modal from "./components/Modal/TheModal.vue";
import Message from "./components/Message/TheMessage.vue";
import Button from "./components/Button/TheButton.vue";

type Turn = [] | { id: number; name: string }[];

const turn: Ref<Turn> = ref([]);
const turnNumber = ref(0);
const score = ref(0);
const isModalVisible = ref(true);

function clickButtonHandler() {
  //dispatch(startGame());
  console.log("Oh Putain !!!");
}

onMounted(() => {
  // dispatch(getScoreFromLocalStorage());
  // dispatch(getCards(cards));
});

watch(turn, () => {
  if (turn.value.length > 1) {
    const isTurnWin =
      turn.value[0].name === turn.value[1].name &&
      turn.value[0].id !== turn.value[1].id;

    // dispatch(testCombination());

    let timer = 0;
    if (isTurnWin) {
      // dispatch(increaseScore());
      // dispatch(searchNotFoundCard());
    } else {
      timer = 1500;
      // dispatch(decreaseScore());
    }

    setTimeout(() => {
      // dispatch(initNextTurn());
    }, timer);
  }
});
</script>

<template>
  <div class="app">
    <Score />
    <Board />
    <TimeCount />

    <component :is="isModalVisible && Modal">
      <Message
        :text="
          turnNumber < 1
            ? 'Bienvenue dans le jeu du Memory !'
            : `La partie est terminée ! Vous avez obtenu ${score} point${
                score > 1 ? 's' : ''
              }`
        "
      />
      <Button
        :text="
          turnNumber < 1 ? 'Commencer une partie' : 'Recommencer une partie'
        "
        @click="isModalVisible = !isModalVisible"
      ></Button>
    </component>
  </div>
</template>
