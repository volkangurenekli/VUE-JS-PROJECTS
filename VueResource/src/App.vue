<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName" />
        </div>
        <button class="btn btn-primary" @click="save()">Save</button>
        <br />
        <br />
        <button class="btn btn-success" @click="get()">Get Datas</button>
        <hr />
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users" :key="user.id">
            {{ user.data.userName }}
            <button class="btn btn-danger" @click="deleteUser(user.key)">
              X
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      users: [],
    };
  },
  methods: {
    save() {
      this.$http
        .post("users.json", {
          userName: this.userName,
        })
        .then((response) => console.log(response));
    },
    get() {
      this.users = [];
      this.$http.get("users.json", {}).then((response) => {
        let data = response.data;
        for (let key in data) {
          this.users.push({
            key: key,
            data: data[key],
          });
        }
      });
    },
    deleteUser(key) {
      this.$http.delete(`users/${key}.json`, {}).then((response) => {
        console.log(response);
        this.get();
      });
    },
  },
};
</script>

<style></style>
