<template>
  <div class="game-area">
    <h1 class="title">Where is Cat ?</h1>
    <h4 class="description">Choose one open card then click close card</h4>
    <h6 class="title">{{ JSON.stringify(answer.id) }}</h6>
    <div class="container">
      <transition-group name="rotate-all" class="card-container" appear>
        <app-card
          :class="{ shadow: selectedCard == card.id }"
          v-for="card in cards"
          :card="card"
          :key="card.id"
          @click.native="selectedCard = card.id"
        />
      </transition-group>
    </div>
    <div class="container">
      <transition name="rotate" mode="out-in">
        <component @click.native="showCard(answer)" :card="answer" :is="activeCard"></component>
      </transition>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
import DefaultCard from "./DefaultCard.vue";
export default {
  methods: {
    showCard(answer) {
      if (this.selectedCard == null) {
        alert("Please select a Card!");
      } else {
        this.activeCard = answer.component;
        setTimeout(() => {
          if (answer.id == this.selectedCard) {
            this.$emit("activeComponentEvent", "app-celebrate");
          } else {
            this.$emit("activeComponentEvent", "app-failure");
          }
        }, 1000);
      }
    }
  },
  components: {
    appCard: Card,
    appDefaultCard: DefaultCard
  },
  data() {
    return {
      selectedCard: null,
      answer: {},
      activeCard: "app-default-card",
      cards: [
        { id: 1, component: "app-card", image: "/src/assets/card-1.jpg" },
        { id: 2, component: "app-card", image: "/src/assets/card-2.jpg" },
        { id: 3, component: "app-card", image: "/src/assets/card-3.jpg" },
        { id: 4, component: "app-card", image: "/src/assets/card-4.jpg" },
        { id: 5, component: "app-card", image: "/src/assets/card-5.jpg" }
      ]
    };
  },
  created() {
    let answer = Math.ceil(Math.random() * this.cards.length);
    this.answer = this.cards[answer - 1];
  }
};
</script>
<style scoped>
.container,
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.title {
  text-align: center;
  font-family: sans-serif;
  color: red;
}
.description {
  text-align: center;
  color: red;
}
.shadow {
  box-shadow: 0px 5px 48px #30969f !important;
  transition: box-shadow 0.5s;
}

.rotate-all-enter {
}
.rotate-all-enter-active {
  animation: rotate-all ease-in-out 2s forwards;
}
.rotate-all-leave {
}
.rotate-all-leave-active {
}
@keyframes rotate-all {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(1080deg);
  }
}
/*************** Kapalı Kartın Animasyonlari için Gerekli Olan Transition Class tanimlari *************/
.rotate-enter {
}
.rotate-enter-active {
  animation: rotate-in 0.5s ease-in-out forwards;
}
.rotate-leave {
}
.rotate-leave-active {
  animation: rotate-out 0.5s ease-in-out forwards;
}
@keyframes rotate-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
@keyframes rotate-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
</style>
