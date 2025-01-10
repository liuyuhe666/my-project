<script setup lang="ts">
import { onMounted, ref } from 'vue'

const opacity = ref(0)

function handleClick() {
  window.scrollTo(0, 0)
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      opacity.value = 1
    }
    else {
      opacity.value = 0
    }
  })
})
</script>

<template>
  <div
    v-motion class="backtop" :enter="{ scale: 1 }"
    :hovered="{ scale: 1.2 }"
    @click="handleClick"
  />
</template>

<style lang="less" scoped>
.backtop {
    background-image: url('/backtop.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    bottom: 25px;
    right: 25px;
    cursor: pointer;
    height: 174px;
    position: fixed;
    text-align: center;
    width: 150px;
    z-index: 999;
    opacity: v-bind(opacity);
}
</style>
