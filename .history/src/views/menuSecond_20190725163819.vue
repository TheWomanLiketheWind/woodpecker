<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose">
        <el-menu-item index="1">
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>


<style>
</style>
