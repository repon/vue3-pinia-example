<script setup>
import ProductList from "./components/ProductList.vue";
</script>

<template>
  <div id="app">
    <h1>Pinia入門（カート）</h1>
    <hr>
    <h2>商品一覧</h2>
    <ProductList />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
