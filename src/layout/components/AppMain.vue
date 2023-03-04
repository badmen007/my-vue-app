<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="includes">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { useTagsView } from '@/stores/tagsView'
import { toRefs } from 'pinia'
const route = useRoute()
const store = useTagsView()
const { cacheViews } = toRefs(store)
const includes = () => computed(() => cacheViews.value as string[])

</script>

<style lang="scss" scoped>
.app-main { 
  /* navbar 50px */
  min-height: calc(100vh - 50px);
}
.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s;
}
.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
