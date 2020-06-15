<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />
    <p>User ID: {{ id }}</p>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <router-link
      class="btn btn-primary"
      tag="button"
      :to="{
        name: 'UserEdit',
        params: { id },
        query: { firstName, lastName },
        hash: '#data',
      }"
      >Edit
    </router-link>
    <hr />
    <button class="btn btn-success" @click="navigate()">GO TO HOME</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      firstName: "Volkan",
      lastName: "Gürenekli",
    };
  },
  methods: {
    navigate() {
      // this.$router.push("/");
      // this.$router.push({ path: "/" });
      this.$router.push({ name: "HomePage" });
    },
  },
  /*
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    },
  },
  */
};
</script>
