<template>
  <div class="container">
    <h3>User Component</h3>
    <router-view></router-view>
    <router-view name="header-bottom" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    navigate() {
      // this.$router.push("/");
      // this.$router.push({ path: "/" });
      this.$router.push({ name: "HomePage" });
    },
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    },
  },
};
</script>
