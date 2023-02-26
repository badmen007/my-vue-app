<template>
  <div  class="app-wrapper">
    <div class="sidebar-container">sidebar</div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">navbar</div>
        <div class="tags-view">tagsview</div>
      </div>
      <div class="app-main">
        <h2>app main</h2>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>