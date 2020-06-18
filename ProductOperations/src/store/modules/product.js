import Vue from "vue";
import { router } from "../../router";
const state = {
  products: []
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return key =>
      state.products.filter(element => {
        return element == key;
      });
  }
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
};

const actions = {
  initApp({ commit }) {
    Vue.http
      .get("https://vueproductopr.firebaseio.com/products.json")
      .then(response => {
        let data = response.body;
        for (let key in data) {
          data[key].key = key;
          commit("updateProductList", data[key]);
        }
      });
  },
  saveProduct({ dispatch, commit }, product) {
    Vue.http
      .post("https://vueproductopr.firebaseio.com/products.json", product)
      .then(response => {
        product.key = response.data.name;
        commit("updateProductList", product);
        let tradeResult = {
          purchase: product.price,
          sale: 0,
          count: product.count
        };
        dispatch("setTradeResult", tradeResult);
        router.replace("/");
      });
  },
  sellProduct({ state, commit, dispatch }, payload) {
    let product = state.products.filter(element => {
      return element.key == payload.key.key;
    });

    if (product) {
      let totalCount = product[0].count - payload.count;
      Vue.http
        .patch(
          "https://vueproductopr.firebaseio.com/products/" +
            payload.key.key +
            ".json",
          { count: totalCount }
        )
        .then(response => {
          product[0].count = totalCount;
          let tradeResult = {
            purchase: 0,
            sale: product[0].price,
            count: payload.count
          };
          dispatch("setTradeResult", tradeResult);
          router.replace("/");
        });
    }
  }
};

export default { state, getters, mutations, actions };
