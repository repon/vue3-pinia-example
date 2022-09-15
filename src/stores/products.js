import { defineStore } from "pinia";
import shop from "../api/shop";

export const useStoreProducts = defineStore("products", {
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts() {
      shop.getProducts((products) => (this.products = products));
    },
  },
});
