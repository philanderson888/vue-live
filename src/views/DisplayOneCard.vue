<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">This displays one card</h1>
        <p>
          <strong>Well here goes with displaying one card!!!</strong>
          I'm following this tutorial
          <a
            href="https://medium.com/fullstackio/tutorial-shuffle-a-deck-of-cards-in-vue-js-b65da4c59b1"
          >https://medium.com/fullstackio/tutorial-shuffle-a-deck-of-cards-in-vue-js-b65da4c59b1</a> and hoping it goes well! Have not really got started yet though!!!
        </p>
      </div>
    </section>
    <section class="page-break top-page">
      <div class="container">
        <p class="subtitle">Here is a card! Not styled yet!</p>
        <div>
          <div>
            <span>♣</span>
            <span>A</span>
            <span>♣</span>
          </div>
        </div>
      </div>
    </section>
    <section class="page-break">
      <div class="container">
        <p class="subtitle">Here is a card! Styled!</p>
        <div class="deck">
          <div class="card">
            <span class="card__suit card__suit--top">♣</span>
            <span class="card__number">A</span>
            <span class="card__suit card__suit--bottom">♣</span>
          </div>
        </div>
      </div>
    </section>

    <section class="page-break">
      <div class="container">
        <p class="subtitle">Here is a card! As a clickable item!</p>
        <a href="#">
          <div class="deck">
            <div class="card">
              <span class="card__suit card__suit--top">♣</span>
              <span class="card__number">A</span>
              <span class="card__suit card__suit--bottom">♣</span>
            </div>
          </div>
        </a>
      </div>
    </section>
    <section class="page-break">
      <p class="subtitle">Displaying all cards</p>
      <div class="deck">
        <div
          v-for="card in cards"
          :key="card.id"
          class="card"
          :class="{ 'black': card.suit === '♠' || card.suit ===  '♣',
                          'red': card.suit === '♥' || card.suit ===  '♦' }"
        >
          <span class="card__suit card__suit--top">{{ card.suit }}</span>
          <span class="card__number">{{ card.rank }}</span>
          <span class="card__suit card__suit--bottom">{{ card.suit }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "displayonecard",
  data: function() {
    return {
      ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      suits: ["♥", "♦", "♠", "♣"],
      cards: []
    };
  },
  methods: {
    displayInitialDeck() {
      let id = 1;
      this.cards = [];
      for (let s = 0; s < this.suits.length; s++) {
        for (let r = 0; r < this.ranks.length; r++) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s]
          };
          this.cards.push(card);
          id++;
        }
      }
    }
  },
  created() {
    this.displayInitialDeck();
  }
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700");

html,
body,
#app {
  height: 100%;
  background: ghostwhite;
}

.title {
  font-family: Roboto Slab, sans-serif;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
  font-weight: 300;
  font-size: 3rem;
}

.vue-logo {
  height: 55px;
  position: relative;
  top: 10px;
}

.speed-buttons {
  text-align: center;
  padding-top: 30px;
}
.speed-buttons .button {
  height: 2.5em;
}

.main-buttons {
  display: block;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
}

.count-section {
  position: absolute;
  top: 10px;
  right: 10px;
}

.page-break {
  margin: 20vh 0;
}

.top-page {
  margin: 0;
}

.fas {
  padding-left: 5px;
}

.deck {
  margin-left: 30px;
  padding-top: 30px;
}

.deck {
  margin-left: 40px;
}

.card {
  width: 75px;
  height: 100px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
}

.card__suit {
  width: 100%;
  display: block;
}

.card__suit--top {
  text-align: left;
  padding-left: 5px;
}

.card__suit--bottom {
  position: absolute;
  bottom: 0px;
  text-align: left;
  transform: rotate(180deg);
  padding-left: 5px;
}

.card__number {
  width: 100%;
  position: absolute;
  top: 38%;
  text-align: center;
}

.red {
  color: #ff0000;
}

.black {
  color: #000;
}

.twitter-section {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.twitter-section .fa-twitter-square {
  color: #00d1b2;
  font-size: 30px;
}

.shuffleSlow-move {
  transition: transform 2s;
}

.shuffleMedium-move {
  transition: transform 1s;
}

.shuffleFast-move {
  transition: transform 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1210px) {
  .deck {
    position: initial;
    top: 0;
  }

  .twitter-section {
    display: none;
  }
}
</style>