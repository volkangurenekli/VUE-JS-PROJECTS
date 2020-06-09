<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>{{name | toUpper }}</h3>
        <p>{{description | toUpper | toLower}}</p>
        <input type="text" v-model="searchText" />
        <ul>
          <li v-for="city in filtered" :key="city">{{city|toUpper}}</li>
        </ul>
        <filterlist></filterlist>
      </div>
    </div>
  </div>
</template>

<script>
import FilterList from "./FilterList";
import { cities } from "./cities";

export default {
  components: {
    filterlist: FilterList
  },
  computed: {
    filtered() {
      return this.cities.filter(element => {
        return element.toLowerCase().match(this.searchText);
      });
    }
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    }
  },
  data() {
    return {
      name: "Volkan Gürenekli",
      description: "React Developer | PROGON SOFTWARE",
      searchText: "",
      cities
    };
  },
  created() {
    console.log("App created");
  }
};
</script>

<style>
</style>
