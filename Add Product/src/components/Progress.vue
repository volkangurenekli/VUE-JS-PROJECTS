<template>
  <div>
    <br />
    <div class="progress">
      <div
        class="progress-bar bg-info"
        role="progressbar"
        :style="{width: number +'%'}"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >{{number}}%</div>
    </div>
    <br />
  </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      number: 0
    };
  },

  created() {
    eventBus.$on("progress", length => {
      this.number = length * 10;
    });
  }
};
</script>