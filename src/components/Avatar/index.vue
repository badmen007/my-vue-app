<template>
  <el-dropdown class="avatar-container">
    <div class="avatar-wrapper">
      <img :src="avatar" class="user-avatar" />
      <i class="el-icon-caret-bottom" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>
        <router-link to="/profile/index">
          <el-dropdown-item>个人设置</el-dropdown-item>
        </router-link>
        <el-dropdown-item divided @click="logout">
          <span style="display: block">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import avatar from '@/assets/vue.svg'
import { useUserStore } from '@/stores/user'
const { proxy } = getCurrentInstance()!

const store = useUserStore()

const logout = () => {
  store.logout()
  proxy?.$message.success('退出成功')
  window.location.reload()
}
</script>

<style lang="scss" scoped>
.avatar-container {
  margin-right: 30px;
  .avatar-wrapper {
    margin-top: 5px;
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
