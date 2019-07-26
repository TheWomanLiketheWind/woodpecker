<template>
  <el-header>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1">
        <router-link>订单管理</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <router-link>订单管理</router-link>
      </el-submenu>
      <el-menu-item index="3">
        <router-link>订单管理</router-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {

}
</script>

<style>
</style>
