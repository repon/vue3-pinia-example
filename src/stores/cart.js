import { defineStore } from "pinia";

export const useStoreCart = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addCart(product) {
      this.items.push(product);
    },
  },
});
