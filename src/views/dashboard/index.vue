<template>
  <div>
    <h1>Dashboard page</h1>
    <svg-icon icon-class="bug" />
    <svg-icon icon-class="404" class-name="custom-class" @click="sayHi"/>
  </div>
</template>


<script setup lang="ts">
const sayHi = () => {
  alert('hi')
}
</script>

<style lang="scss">
.custom-class {
  font-size: 200px;
  color: green;
}
</style>