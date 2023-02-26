<template>
  <div>
    <button @click="handleClick">计数器</button>
    <span> {{ counter.count }}</span>
  </div>
</template>

<script lang="ts" setup>

import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()
const handleClick = () => {
  counter.increment()
}
</script>