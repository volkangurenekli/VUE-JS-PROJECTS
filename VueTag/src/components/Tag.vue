<template>
  <span class="tag" :class="selectedTheme">
    <span class="content">{{ tag }}</span>
    <span class="close" @click="$emit('deleteTag', index)">X</span>
  </span>
</template>

<script>
export default {
  props: ["tag", "index", "tagColor"],
  data() {
    return {
      selectedTheme: null
    };
  },
  created() {
    this.selectedTheme = this.tagColor;
  }
};
</script>

<style scoped>
.success {
  background-color: #d5eddb;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}

.info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.tag {
  padding: 10px;
  cursor: default;
  font-size: 14px;
  letter-spacing: 0.5px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 2px rgba(141, 137, 137, 0.164);
  margin-right: 5px;
}

.close {
  color: #dd3444;
  width: 20px;
  height: 20px;
  border-radius: 20%;
  cursor: pointer;
  padding: 3px;
  margin-left: 10px;
}

.close:hover {
  background-color: #dd3444;
  color: #f8f8f8;
}
</style>
