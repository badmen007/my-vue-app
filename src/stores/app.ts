import { defineStore } from 'pinia'
import { Size } from '@/plugins/element'

export const useAppStore = defineStore(
  'app',
  () => {
    // 状态
    const state = reactive({
      sidebar: {
        // sidebar 展开状态
        opened: true
      },
      size: 'default'
    })
    const sidebar = computed(() => state.sidebar)
    const size = computed(() => state.size)
    // actions
    const toggleSidebar = () => {
      state.sidebar.opened = !state.sidebar.opened
    }
    const setSize = (size: Size) => {
      state.size = size
    }
    return { state, sidebar, toggleSidebar, size, setSize }
  }
)
