<template>
  <div>
    <p class="text-center">Bu çok güzel bir anıdır...</p>
    <p class="text-center">{{content}}</p>
    <div class="memory">
      <slot name="heading"></slot>
    </div>
    <div class="memory">
      <slot name="paragraph"></slot>
    </div>
    <div class="memory">
      <slot name="author">
        <h3 class="text-center">Author</h3>
        <p class="text-center">Any content</p>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["content"]
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
