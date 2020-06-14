<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName" />
        </div>
        <button class="btn btn-primary" @click="save()">Save</button>
        <button class="btn btn-primary" @click="saveCustom()">Save Custom</button>
        <br />
        <br />
        <button class="btn btn-primary" @click="saveWithResource()">Save with Resource</button>
        <br />
        <br />
        <button class="btn btn-success" @click="get()">Get Datas</button>
        <button class="btn btn-success" @click="getWithResource()">Get with Resource</button>
        <hr />
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users" :key="user.id">
            {{ user.data.userName }}
            <button class="btn btn-danger" @click="deleteUser(user.key)">X</button>
            <button class="btn btn-danger" @click="deleteWithResource(user.key)">delete</button>
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
      users: []
    };
  },
  methods: {
    save() {
      this.$http
        .post("users.json", {
          userName: this.userName
        })
        .then(response => console.log(response));
    },
    get() {
      this.users = [];
      this.$http.get("users.json", {}).then(response => {
        let data = response.data;
        for (let key in data) {
          this.users.push({
            key: key,
            data: data[key]
          });
        }
      });
    },
    deleteUser(key) {
      this.$http.delete(`users/${key}.json`, {}).then(response => {
        console.log(response);
        this.get();
      });
    },
    saveWithResource() {
      this.$resource("users.json").save({}, { userName: this.userName });
    },
    deleteWithResource(key) {
      console.log("deleteWithResource -> deleteWithResource", key);
      this.$resource.delete(key);

      this.$resource.delete("users/" + key + ".json");
    },
    getWithResource() {
      this.users = [];
      this.$resource("users.json")
        .get()
        .then(response => {
          let data = response.data;
          for (let key in data) {
            this.users.push({
              key: key,
              data: data[key]
            });
          }
        });
    },
    saveCustom() {
      this.resource.kaydet({}, { userName: this.userName });
    }
  },
  created() {
    const customActions = {
      kaydet: { method: "POST", url: "users.json" }
    };
    this.resource = this.$resource("users.json", {}, customActions);
  }
};
</script>

<style></style>
