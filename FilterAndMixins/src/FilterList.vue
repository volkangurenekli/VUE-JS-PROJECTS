<template>
  <div>
    <hr />
    <hr />
    <input type="text" v-model="searchText" />
    <ul>
      <li v-for="city in filtered" :key="city">{{city|toUpper}}</li>
    </ul>
  </div>
</template>

<script>
import { mixin } from "./mixin";
export default {
  mixins: [mixin]
};
</script>

<style>
</style>
