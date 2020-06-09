import { cities } from "./cities";
export const mixin = {
  created() {
    console.log("mixin created");
  },
  computed: {
    filtered() {
      return this.cities.filter((element) => {
        return element.toLowerCase().match(this.searchText);
      });
    },
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    },
  },
  data() {
    return {
      searchText: "",
      cities: cities,
    };
  },
};
