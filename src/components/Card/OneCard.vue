<script setup lang="ts">
import "./styles.scss";
import { ref } from "vue";

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

const gameIsOn = ref(false);
const turn = ref([]);

function onClickHandler() {
  if (gameIsOn.value && !props.isFlipped && turn.value.length < 2) {
    console.log(props.id);
  }
}
</script>

<template>
  <li
    class="card"
    :class="`${
      isFlipped
        ? ' flipped'
        : '' + isSucceed
        ? ' success'
        : '' + isFailed
        ? ' fail'
        : ''
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
