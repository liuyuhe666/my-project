<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
    default: '',
  },
  alt: {
    type: String,
    required: true,
    default: '',
  },
})
const isLoading = ref(true)
</script>

<template>
  <div>
    <img v-show="isLoading" src="/loading.png" alt="loading" class="loading">
    <img v-show="!isLoading" :src="props.src" :alt="props.alt" @load="isLoading = false">
  </div>
</template>

<style scoped lang="less">
.loading {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
