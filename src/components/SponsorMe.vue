<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)

function toggle() {
  isShow.value = !isShow.value
}
</script>

<template>
  <div class="sponsor-me-container">
    <div class="sponsor-me-btn" @click="toggle">
      <i class="fa-solid fa-heart" style="color: #f87171;" />
    </div>
    <div v-if="isShow" v-motion-pop class="sponsor-me-box">
      <p>☕ Buy me a coffee</p>
      <div>
        <img src="https://raw.githubusercontent.com/lyh-gzh/buy-me-a-coffee/refs/heads/main/assets/alipay.png" alt="支付宝">
        <img src="https://raw.githubusercontent.com/lyh-gzh/buy-me-a-coffee/refs/heads/main/assets/wx.png" alt="微信">
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
            background-color: #ffffffe6;
            transform: scale(1.1);
            transition: transform .4s ease-in-out;
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
    }
}
</style>
