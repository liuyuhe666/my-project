<script setup lang="ts">
import { ref } from 'vue'

const name = ref<string>(import.meta.env.VITE_APP_USER_NAME)
const githubName = ref<string>(import.meta.env.VITE_GITHUB_USER_NAME)
const githubUrl = `https://github.com/${githubName.value}`
</script>

<template>
  <footer>
    <p>Made with <i class="fa-solid fa-heart" style="color: #ff0000;" /> by <a :href="githubUrl" target="_blank">{{ name }}</a></p>
  </footer>
</template>

<style lang="less" scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      a {
        color: var(--text-color);
        &:hover {
          color: var(--hover-link-color);
        }
      }
    }
}
</style>
