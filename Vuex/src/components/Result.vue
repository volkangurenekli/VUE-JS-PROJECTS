<template>
  <section>
    <p class="container emit">$emit : {{ counter }}</p>
    <p class="container state">state : {{ stateCounter }}</p>
    <p class="container getter">getter : {{ getCounter }}</p>
    <p class="container mutuation">mutuation : {{ getCounter }}</p>
    <p class="container action">action : {{ getCounter }}</p>
    <div>
      <input type="text" v-model="value" />
      <h3>{{value}}</h3>
    </div>
    <h2>{{getClick}}</h2>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["counter"],

  computed: {
    ...mapGetters({ getCounter: "getCounter", getClick: "getClick" }),
    stateCounter() {
      return this.$store.state.counter;
    },
    value: {
      get() {
        return this.$store.getters.getValue;
      },
      set(value) {
        this.$store.dispatch("setValueActions", value);
      }
    }
  }
};
</script>
<style scoped>
h2 {
  margin-top: 100px;
  background-color: beige;
}
div {
  display: flex;
  background-color: lightcoral;
}
input {
  margin: 10px;
}
.container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  font-size: 20px;
  color: #000;
  width: 100%;
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
</style>
