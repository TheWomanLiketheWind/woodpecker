<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose">
        <el-menu-item index="1"
                      v-for="(item, index) in files.navigeList"
                      :key="index">
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>

</template>

<script lang="ts">
import Vue from "vue";
import files from "../jsonFile";

export default Vue.extend({
  data() {
    return {
      navigeList: [{}]
    };
  }
});
</script>


<style>
</style>
