<script setup lang="ts">
import { onMounted, ref } from 'vue'

const opacity = ref(0)

function handleClick() {
  window.scrollTo(0, 0)
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
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
  >
    &uarr;
  </div>
</template>

<style lang="less" scoped>
.backtop {
    position: fixed;
    bottom: 25px;
    right: 25px;
    cursor: pointer;
    z-index: 999;
    text-align: center;
    color: white;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: oklch(0.685 0.169 237.323);
    opacity: v-bind(opacity);
    /* 在移动端隐藏组件 */
    @media (max-width: 768px) {
      display: none;
    }
}
</style>
