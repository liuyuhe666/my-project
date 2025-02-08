<script setup lang="ts">
import { TinyColor } from '@ctrl/tinycolor'

const data = defineProps<{
  name: string
  emoji: string
  color: string
  description: string
  url: string
  github: string
}>()

const tinyColor = new TinyColor(data.color)
const startColor = tinyColor.spin(55).toHexString()
const endColor = data.color

function openLink(url: string) {
  if (url) {
    window.open(url)
  }
}
</script>

<template>
  <div class="card-container">
    <div class="card-emoji">
      {{ data.emoji }}
    </div>
    <div class="card-name">
      {{ data.name }}
    </div>
    <div class="card-description">
      {{ data.description }}
    </div>
    <div class="card-bottom">
      <span class="left-btn" @click="openLink(url)">
        <i class="fa-solid fa-globe" />
      </span>
      <span class="right-btn" @click="openLink(github)">
        <i class="fa-brands fa-github" />
      </span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card-container {
    width: 350px;
    height: 160px;
    margin: 8px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: var(--text-color);
    border-radius: var(--border-radius);
    background: linear-gradient(to right bottom, v-bind(startColor), v-bind(endColor));
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1px 8px var(--shadow-color);
    }
    .card-bottom {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        span {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          color: #fff;
          padding: 8px 0;
        }
        .left-btn {
          position: relative;
          background-color: rgba(0, 0, 0, 0.03);
          &::before {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
            z-index: -1;
            content: "";
            background: #6eb7f9;
            height: 0%;
            width: 100%;
            transition: height 0.3s ease-in-out;
          }
          &:hover::before {
            height: 100%;
          }
        }
        .right-btn {
          position: relative;
          background-color: rgba(0, 0, 0, 0.05);
          &::before {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
            z-index: -1;
            content: "";
            background: #000;
            height: 0%;
            width: 100%;
            transition: height 0.3s ease-in-out;
          }
          &:hover::before {
            height: 100%;
          }
        }
    }
    .card-emoji {
      margin-top: 1rem;
    }
    .card-name {
      font-size: 18px;
      font-weight: 900;
    }
    .card-description {
      overflow: hidden;
      text-overflow: ellipsis;
    }
}
</style>
