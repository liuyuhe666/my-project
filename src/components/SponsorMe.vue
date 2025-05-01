<script setup lang="ts">
import { ref } from 'vue'
import Image from './Image.vue'

const isShow = ref(false)
// const proxyUrl = ref(import.meta.env.VITE_GITHUB_PROXY_URL)
// const alipayUrl = ref(`${proxyUrl.value}https://raw.githubusercontent.com/lyh-gzh/buy-me-a-coffee/refs/heads/main/assets/alipay.png`)
// const wxUrl = ref(`${proxyUrl.value}https://raw.githubusercontent.com/lyh-gzh/buy-me-a-coffee/refs/heads/main/assets/wx.png`)
const alipayUrl = ref(`https://raw.githubusercontent.com/lyh-gzh/buy-me-a-coffee/refs/heads/main/assets/alipay.png`)
const wxUrl = ref(`https://raw.githubusercontent.com/lyh-gzh/buy-me-a-coffee/refs/heads/main/assets/wx.png`)
const sponsorUrl = ref('https://github.com/lyh-gzh/buy-me-a-coffee')

function toggle() {
  isShow.value = !isShow.value
}
</script>

<template>
  <div class="sponsor-me-container">
    <div
      v-motion class="sponsor-me-btn" :enter="{ scale: 1 }"
      :hovered="{ scale: 1.2 }"
      @click="toggle"
    >
      <i class="fa-solid fa-heart" style="color: #f87171;" />
    </div>
    <div v-if="isShow" v-motion-pop class="sponsor-me-box">
      <p><a :href="sponsorUrl" target="_blank">☕ Buy me a coffee</a></p>
      <div>
        <Image :src="alipayUrl" alt="支付宝" class="img" />
        <Image :src="wxUrl" alt="微信" class="img" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.sponsor-me-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    .sponsor-me-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border: 1px solid var(--border-color);
        cursor: pointer;
        border-radius: 50%;
        background-color: var(--background-color-rgb);
        &:hover {
            box-shadow: 0 1px 8px var(--shadow-color);
        }
    }
    .sponsor-me-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--background-color-rgb);
        border-radius: var(--border-radius);
        margin-top: 8px;
        div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 8px;
          .img {
            padding: 8px;
            background-color: #fff;
            border-radius: var(--border-radius);
            box-shadow: 0 1px 8px var(--shadow-color);
          }
          @media (max-width: 768px) {
            flex-direction: column;
          }
        }
    }
}
</style>
