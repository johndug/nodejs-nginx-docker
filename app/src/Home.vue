<template>
    <h1>Products</h1>
    <div class="products">
        <Products v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { Product } from "./types/Product"
import Products from "./components/Products.vue"

const products = ref<Product[]>([])

const getProducts = async () => {
    const response = await fetch("http://localhost:8000/products")
    products.value = await response.json()
}

onMounted(() => {
    getProducts();
});
</script>

<style scoped>

</style>