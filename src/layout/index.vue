<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>
    <div class="main-container">
      <div class="header">
        <navbar @showSetting="openSetting"></navbar>
        <tags-view v-if="showTagsView"></tags-view>
      </div>
      <!-- <div class="app-main">
        <h2>app main</h2>
        <router-view></router-view>
      </div> -->
      <app-main></app-main>
    </div>
    <right-panel
      v-model="showSetting"
      title="样式风格设置"
      :size="settingPanelWith"
    >
      <settings />
    </right-panel>
  </div>
</template>

<script setup lang="ts">
import variables from '@/styles/variables.module.scss'
import { useSettingStore } from '@/stores/settings'
const settingsStore = useSettingStore()
const showSetting = ref(false)

const showTagsView = computed(() => settingsStore.settings.tagsView)
const otherHeight = computed(() => (showSetting.value ? 84 : 50) + 'px')

const openSetting = () => {
  // 控制right-panel弹出
  showSetting.value = true
}

const settingPanelWith = computed(() => variables.settingPanelWidth)
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: cyan;
      .navbar {
        height: 50px;
        background: #1890ff;
      }
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      /* main = 100% - navbar + tagsview */
      min-height: calc(100vh - v-bind(otherHeight));
      background: red;
    }
  }
}
</style>
