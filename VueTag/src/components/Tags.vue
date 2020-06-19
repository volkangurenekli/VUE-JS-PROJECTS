<template>
  <div class="tag-container">
    <Tag
      v-for="(tag, index) in tags"
      :key="tag"
      :tag="tag"
      :index="index"
      :tagColor="color"
      @deleteTag="deleteTag($event)"
    />

    <input type="text" @keydown.enter="addTag" @keydown.backspace="removeTag" />
    <span class="error" v-if="error">Daha Önce Eklenmiş!!</span>
  </div>
</template>

<script>
import Tag from "./Tag";
export default {
  props: {
    value: {
      required: false
    },
    color: {
      type: String,
      required: false,
      default: "primary"
    }
  },
  components: {
    Tag
  },
  data() {
    return {
      tags: [],
      error: false
    };
  },
  created() {
    if (this.value && this.value.length > 0) {
      this.tags = this.value.split(",");
    }
  },
  watch: {
    tags(value) {
      this.$emit("input", value.join(","));
    }
  },

  methods: {
    addTag(e) {
      let input = e.target;
      let matched = false;

      if (input.value.length > 0) {
        this.tags.forEach(tag => {
          if (tag.toLowerCase() === input.value.toLowerCase()) {
            matched = true;
          }
        });
        if (!matched) {
          this.tags.push(input.value);
          input.value = null;
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2735);
        }
      }
    },
    removeTag(e) {
      e.target.value.length <= 0
        ? this.tags.splice(this.tags.length - 1, 1)
        : null;
    },
    deleteTag(index) {
      this.tags.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.tag-container {
  border: 1px solid #ccc;
  padding: 20px;
}

input {
  padding: 8px;
  font-size: 16px !important;
  width: 9%;
  border-width: 2px;
  border-style: solid;
  text-align: left;
  background-color: #f8f8f8;
  border-color: #ccc;
  color: #000;
}

.error {
  margin: 0px 0px 0px 10px;
  background-color: #fb0808;
  width: 6%;
  padding: 3px;
  color: #fff;
  letter-spacing: 0.5px;
  border-radius: 5%;
  box-shadow: 1px 1px 3px 2px rgba(141, 137, 137, 0.164);
  text-align: center;
}
</style>
