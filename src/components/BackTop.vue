<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isShow = ref(false)

function handleClick() {
  window.scrollTo(0, 0)
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      isShow.value = true
    }
    else {
      isShow.value = false
    }
  })
})
</script>

<template>
  <div
    v-show="isShow"
    v-motion
    :enter="{ scale: 1 }"
    :hovered="{ scale: 1.2 }"
    class="backtop"
    @click="handleClick"
  >
    <i class="fa-solid fa-arrow-up" />
  </div>
</template>

<style lang="less" scoped>
.backtop {
    position: fixed;
    bottom: 25px;
    right: 25px;
    cursor: pointer;
    z-index: 999;
    color: var(--text-color);
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 10px var(--shadow-color);
    background-color: var(--background-color-rgb);
    i {
      width: 2rem;
      height: 2rem;
    }
    /* 在移动端隐藏组件 */
    @media (max-width: 768px) {
      display: none;
    }
}
</style>
