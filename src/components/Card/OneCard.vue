<script setup lang="ts">
import "./styles.scss";
import { useStore } from "@/store";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isFlipped: {
    type: Boolean,
    required: false,
    default: false,
  },
  isSucceed: {
    type: Boolean,
    require: false,
    default: false,
  },
  isFailed: {
    type: Boolean,
    require: false,
    default: false,
  },
});

const store = useStore();

function onClickHandler() {
  if (store.gameIsOn && !props.isFlipped && store.turn.length < 2) {
    store.flipCard(props.id);
  }
}
</script>

<template>
  <li
    class="card"
    :class="`${isFlipped ? ` flipped` : ``}${isSucceed ? ` success` : ``}${
      isFailed ? ` fail` : ``
    }`"
    @click="onClickHandler"
  >
    <div class="card__inner">
      <div class="card__inner__face card__inner__face--back"></div>
      <div
        class="card__inner__face card__inner__face--front"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
  </li>
</template>
