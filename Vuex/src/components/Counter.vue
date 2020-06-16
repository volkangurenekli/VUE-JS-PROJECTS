<template>
  <div>
    <div class="container emit center">
      <button class="btn btn-danger" @click="decrementEmit">- $emit</button>
      <button class="btn btn-success" @click="incrementEmit">+ $emit</button>
    </div>
    <div class="container state">
      <button class="btn btn-danger" @click="decrementState">- $store.state</button>
      <button class="btn btn-success" @click="incrementState">+ $store.state</button>
    </div>
    <div class="container getter">
      <button class="btn btn-danger" @click="decrementGetter">- getter</button>
      <button class="btn btn-success" @click="incrementGetter">+ getter</button>
    </div>
    <div class="container mutuation">
      <button class="btn btn-danger" @click="decrementMutuation">- mutuation</button>
      <button class="btn btn-success" @click="incrementMutuation">+ mutuation</button>
    </div>
    <div class="container action">
      <button class="btn btn-danger" @click="decrementAction({time : 2000})">- actions</button>
      <button class="btn btn-success" @click="incrementAction({time : 2000})">+ actions</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  methods: {
    ...mapMutations({
      incrementMutuation: "incrementMutuation",
      decrementMutuation: "decrementMutuation"
    }),
    ...mapActions({
      incrementAction: "incrementAction", //this.$store.dispatch("incrementAction");
      decrementAction: "decrementAction" //this.$store.dispatch("decrementAction");
    }),
    incrementEmit() {
      this.$emit("counterEvent", 1);
    },
    decrementEmit() {
      this.$emit("counterEvent", -1);
    },
    incrementState() {
      this.$store.state.counter++;
    },
    decrementState() {
      this.$store.state.counter--;
    },
    incrementGetter() {
      this.$store.state.counter++;
    },
    decrementGetter() {
      this.$store.state.counter--;
    }
  }
};
</script>

<style scoped>
.container {
  margin: 5px;
  padding: 10px;
  font-size: 20px;
  color: #000;
  width: 100%;
  display: flex;
}
.emit {
  background-color: #fbbd08;
}
.state {
  background-color: #faadc8;
}
.getter {
  background-color: #aaadc8;
}
.mutuation {
  background-color: #42a0c8;
}
.action {
  background-color: #4221c2;
}
button {
  margin: 0px 5px 0px 5px;
}
</style>
