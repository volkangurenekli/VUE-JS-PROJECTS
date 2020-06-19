<template>
  <div>
    <Tags v-model="tags" color="warning" />
    <h5>{{ tags }}</h5>
  </div>
</template>

<script>
import Tags from "./components/Tags";
export default {
  components: {
    Tags
  },
  data() {
    return { tags: "VueJs,Tag,Component" };
  }
};
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
