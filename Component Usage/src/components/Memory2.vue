<template>
  <div>
    <div class="memory">
      <h1>MEMORY 2 COMPONENT</h1>
    </div>
  </div>
</template>
<script>
export default {
  activated: () => {
    console.log("activated");
  },
  deactivated: () => {
    console.log("deactivated");
  }
};
</script>
<style scoped>
div {
  border: 1px solid #ccc;
  padding: 20px 20px;
  margin: 20px;
}

div .memory {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #666;
  padding: 20px 20px;
  margin-top: 20px;
}
</style>
