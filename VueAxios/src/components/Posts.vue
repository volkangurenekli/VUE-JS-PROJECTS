<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr />
    <div
      class="d-flex flex-wrap flex-row justify-content-center align-items-center"
    >
      <div v-for="post in posts" :key="post" class="card m-1">
        <img class="card-img-top" :src="post.thumbnail" alt="" />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">
            {{ post.previewText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import axios from "axios";
import customAxios from "../CustomAxios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    customAxios.get("/posts.json").then((response) => {
      this.posts = response.data;
    });
  },
};
</script>
<style>
.card {
  width: 300px;
}
</style>
