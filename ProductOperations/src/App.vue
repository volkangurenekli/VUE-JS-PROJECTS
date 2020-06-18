<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "../src/components/shared/Header";
import Footer from "../src/components/shared/Footer";

export default {
  components: { Header, Footer },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
  }
};
</script>

<style>
body {
  background-color: #a7a0bb5c;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave-active {
  transition: opacity.3s ease-out;
  opacity: 0;
}
</style>
