<script lang="ts" setup>
import { createFireworks } from '@explosions/fireworks'
import { onMounted } from 'vue'

onMounted(() => {
  createFireworks({
    selector: 'canvas.fireworks',
    colors: ['#66A7DD', '#3E83E1', '#214EC2'],
  })
})
</script>

<template>
  <canvas class="fireworks" />
</template>

<style>
canvas.fireworks {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  pointer-events: none;
}
</style>
