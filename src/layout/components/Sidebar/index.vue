<template>
  <el-menu
    class="sidebar-container-menu"
    mode="vertical"
    :default-active="activeMenu"
    :background-color="scssVariables.menuBg"
    :text-color="scssVariables.menuText"
    :collapse="sidebar.opened"
    :collapse-transition="true"
    :active-text-color="themeColor"
  >
    <sidebar-item
      v-for="route in menuRoutes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>
<script lang="ts" setup>
import scssVariables from '@/styles/variables.module.scss'
import { routes } from '@/router'
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import { useSettingStore } from '@/stores/settings';

const store = useAppStore()
const { sidebar } = storeToRefs(store)

const route = useRoute()
// 根据路由路径 对应 当前激活的菜单 页面刷新后 激活当前路由匹配的菜单
const activeMenu = computed(() => {
  const { path, meta } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

const menuRoutes = computed(() => routes)

const settingStore = useSettingStore()
const themeColor = computed(() => settingStore.settings.theme)
</script>
