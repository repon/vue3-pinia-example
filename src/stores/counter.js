import { defineStore } from "pinia";
import { ref, computed } from "vue";

// export const useStoreCounter = defineStore("counter", () => {
//   const count = ref(1);

//   const increment = () => {
//     count.value++;
//   };

//   const doubleCount = computed(() => count.value * 2);

//   return { count, increment, doubleCount };
// });

export const useStoreCounter = defineStore("counter", {
  state: () => ({
    count: 1,
    count2: 2,
    user: {
      name: "John Doe",
    },
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
