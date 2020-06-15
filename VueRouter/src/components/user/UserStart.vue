<template>
  <div class="container">
    <h3>User Start Component</h3>
    <hr />
    <ul class="list-group">
      <router-link class="list-group-item activex" tag="li" to="/user/1"
        >User 1</router-link
      >
      <router-link class="list-group-item activex" tag="li" to="/user/2"
        >User 2</router-link
      >
      <router-link class="list-group-item activex" tag="li" to="/user/3"
        >User 3</router-link
      >
      <router-link class="list-group-item activex" tag="li" to="/user/4"
        >User 4</router-link
      >
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.activex {
  cursor: pointer;
}
.activex:hover {
  background-color: antiquewhite;
}
</style>
