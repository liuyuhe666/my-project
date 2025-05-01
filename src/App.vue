<script setup lang="ts">
import { ref } from 'vue'
import BackTop from './components/BackTop.vue'
import Fireworks from './components/Fireworks.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import ProjectCard from './components/ProjectCard.vue'
import SponsorMe from './components/SponsorMe.vue'
import data from './config/data.json'

const name = ref(import.meta.env.VITE_APP_USER_NAME)
const currentIndex = ref<number>(-1)
</script>

<template>
  <div class="bg" />
  <Fireworks />
  <Header />
  <div class="main-container">
    <h2 v-motion-slide-visible-left>
      <span>{{ name }}</span> - Project
    </h2>
    <div v-motion-slide-visible-right class="tag-container">
      <div :class="{ active: currentIndex === -1 }" @click="currentIndex = -1">
        全部
      </div>
      <div v-for="(item, index) in data" :key="item.title" :class="{ active: currentIndex === index }" @click="currentIndex = index">
        <span>{{ item.emoji }}</span>
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div v-if="currentIndex === -1">
      <div v-for="item in data" :key="item.title">
        <div v-if="item.children.length" class="tag-list-container">
          <span class="tag-title">{{ item.title }}</span>
          <div class="list-container">
            <div v-for="child in item.children" :key="child.name">
              <ProjectCard v-bind="child" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="data[currentIndex].children.length" class="tag-list-container">
        <span class="tag-title">{{ data[currentIndex].title }}</span>
        <div class="list-container">
          <div v-for="item in data[currentIndex].children" :key="item.name">
            <ProjectCard v-motion-pop v-bind="item" />
          </div>
        </div>
      </div>
      <div v-else class="empty-container">
        空空如也~
      </div>
    </div>
  </div>
  <SponsorMe />
  <Footer />
  <BackTop />
</template>

<style lang="less" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 96px;
  min-height: 100vh;
  h2 {
    span {
      position: relative;
      &::before {
        position: absolute;
        border-radius: 5px;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        z-index: -1;
        content: "";
        background: #ffcc00ad;
        height: 30%;
        width: 110%;
        transition: height 0.3s ease-in-out;
      }
      &:hover::before {
        height: 60%;
      }
    }
  }
}
.tag-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 8px;
    padding: 8px;
    border-radius: var(--border-radius);
    span {
      margin-left: 2px;
    }
  }
  .active {
    background-color: rgba(59, 130, 246, 1);
    color: #fff
  }
}
.tag-list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tag-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 900;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
}
.list-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  background-image: var(--bg-img);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation-name: bg-fade-in;
  animation-duration: 2s;

  @keyframes bg-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
