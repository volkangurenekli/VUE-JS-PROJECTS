<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <div class="margin" />
    <p id="#data">Edit ID: {{ id }}</p>
    <p>Edit First Name: {{ firstName }}</p>
    <p>Edit Last Name: {{ lastName }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      firstName: this.$route.query.firstName,
      lastName: this.$route.query.lastName,
    };
  },
};
</script>
<style scoped>
.margin {
  margin-top: 100px;
}
</style>
