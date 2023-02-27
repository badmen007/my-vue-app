<template>
  <component :is="type" v-bind="linkProps">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { isExternal } from '@/utils/validate'

// 针对路径是外链 就渲染a标签 如果是正常的路由路径 就渲染为 router-link

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

// 判断接受的路径是不是外链
const isExt = computed(() => isExternal(props.to))
const type = computed(() => (isExt.value ? 'a' : 'router-link'))

const linkProps = computed(() => {
  if(isExt.value) {
    // a标签上的原生属性
    return {
      href: props.to,
      target: '_blank',
      rel: 'noopener'
    }
  }
  // router-link上的属性
  return {
    to: props.to
  }
})

</script>