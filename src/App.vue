<script setup>
import { storeToRefs } from "pinia";
import HelloPinia from "./components/HelloPinia.vue";
import { useStoreCounter } from "./stores/counter";
const counter = useStoreCounter()
const { count, doubleCount, user } = storeToRefs(counter)
const { increment } = counter

const replace = () => {
  counter.$state = {
    count: 100,
    count2: 500,
    user: {
      name: 'abe takeshi'
    }
  }
}
</script>

<template>
  <h1>Pinia入門</h1>
  <p>Count:{{ count }}</p>
  <p>DoubleCount: {{ doubleCount }}</p>
  <div>
    <button @click="increment">Up</button>
  </div>
  <HelloPinia />
  <div>{{ user.name }}</div>
  <button @click="replace">Replace</button>
</template>

<style scoped>

</style>
