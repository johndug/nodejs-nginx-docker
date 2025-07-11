<template>
   <div class="product">
    <div class="product-image">
        <img :src="product.image" alt="product image">
    </div>
    <div class="product-name">
        {{ product.name }}
    </div>
    <div class="product-price">
        {{ product.price }}
    </div>
   </div>
</template>

<script setup lang="ts">
import { Product } from "../types/Product";

const props = defineProps<{
    product: Product;
}>();

</script>

<style scoped>

</style>