import { defineStore } from "pinia";
import initialState from "../state";
import type { CardFromData } from "../state/index";
import {
  cancelWrongCombination,
  duplicateCards,
  isAllCardsFound,
  resetCards,
  shuffleCards,
  validateCombination,
} from "../utils/cardsOperations";

export const useStore = defineStore("store", {
  state: () => initialState,
  actions: {
    getCards(data: CardFromData[]) {
      const cards = duplicateCards(data);
      const initializedCards = resetCards(cards);

      this.$state.cards = initializedCards;
    },

    flipCard(cardId: number) {
      const updatedTurn = [...this.$state.turn];

      const updatedCards = this.$state.cards.map((card) => {
        if (card.id === cardId) {
          // Add id and name of flipped card into the "turn" key of state, as buffer
          updatedTurn.push({ id: card.id, name: card.name });

          return { ...card, isFlipped: true };
        }
        return card;
      });

      this.$state.cards = updatedCards;
      this.$state.turn = updatedTurn;
    },

    startGame() {
      const newsCards = resetCards(this.$state.cards);
      const shuffledNewCards = shuffleCards(newsCards);

      this.$state.cards = shuffledNewCards;
      this.$state.score = 0;
      this.$state.gameIsOn = true;
      this.$state.isModalVisible = false;
      this.$state.turnNumber += 1;
    },

    testCombination() {
      const updatedCards = validateCombination(
        this.$state.cards,
        this.$state.turn
      );

      this.$state.cards = updatedCards;
    },

    searchNotFoundCard() {
      const isCardsFound = isAllCardsFound(this.$state.cards);

      if (isCardsFound) {
        this.stopGame();
      }
    },

    initNextTurn() {
      const updatedCards = cancelWrongCombination(this.$state.cards);

      this.$state.cards = updatedCards;
      this.$state.turn = [];
    },

    stopGame() {
      sessionStorage.setItem("score", JSON.stringify(this.$state.score));

      this.$state.gameIsOn = false;
      this.$state.isModalVisible = true;
    },

    increaseScore() {
      this.$state.score += 10;
    },
    decreaseScore() {
      if (this.$state.score >= 5) this.$state.score -= 5;
    },
  },
});
