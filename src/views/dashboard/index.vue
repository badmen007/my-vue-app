<template>
  <div>
    <h1>Dashboard page</h1>
    <svg-icon icon-class="bug" />
    <svg-icon icon-class="404" class-name="custom-class" @click="sayHi"/>
    <br />
    <br />
    <br />
    缓存测试 <input type="text"/>
    <el-button type="primary">按钮</el-button>
  </div>
</template>


<script setup lang="ts">
// import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()!
const sayHi = () => {
  proxy?.$message.success('Hi')
}
</script>

<style lang="scss">
.custom-class {
  font-size: 200px;
  color: green;
}
</style>