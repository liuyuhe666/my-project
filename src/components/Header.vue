<script setup lang="ts">
import { onMounted, ref } from 'vue'
import link from '../config/link.json'

const linkList = ref(link)
const isDarkMode = ref(false)
const darkModeIconClass = ref('fas fa-moon')

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('dark-mode', isDarkMode.value)
  localStorage.setItem('darkMode', isDarkMode.value.toString())

  darkModeIconClass.value = isDarkMode.value ? 'fas fa-sun' : 'fas fa-moon'
}

onMounted(() => {
  const saveDarkMode = localStorage.getItem('darkMode')
  if (saveDarkMode !== null) {
    isDarkMode.value = saveDarkMode === 'true'
    document.body.classList.toggle('dark-mode', isDarkMode.value)
  }
  darkModeIconClass.value = isDarkMode.value ? 'fas fa-sun' : 'fas fa-moon'
})
</script>

<template>
  <header class="container">
    <div class="left">
      <div
        v-for="item in linkList" :key="item.url" v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1.5 }"
      >
        <a :href="item.url" :title="item.name" target="_blank">
          <i :class="item.icon" />
        </a>
      </div>
    </div>
    <div
      v-motion class="right"
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :hovered="{ scale: 1.5 }"
    >
      <span @click="toggleDarkMode">
        <i :class="darkModeIconClass" />
      </span>
    </div>
  </header>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 5vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    div {
      padding: 8px;
      a {
        color: var(--text-color);
        i {
          width: var(--icon-size);
          height: var(--icon-size);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    span {
      padding: 8px;
      i {
        width: var(--icon-size);
        height: var(--icon-size);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
