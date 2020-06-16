<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <hr />
        <hr />
        <app-result :counter="counter" />
      </div>
      <div class="col-md-6">
        <hr />
        <hr />
        <app-counter @counterEvent="counter += $event" />
      </div>
    </div>
  </div>
</template>

<script>
import Result from "./components/Result";
import Counter from "./components/Counter";
export default {
  data() {
    return {
      counter: 0
    };
  },
  components: {
    appResult: Result,
    appCounter: Counter
  }
};
</script>

<style>
</style>
