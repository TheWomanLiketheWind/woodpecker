<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="2"
               class="el-menu-vertical-demo">
        <el-menu-item index="1"
                      v-for="(item, index) in navigeList"
                      :key="index">
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <router-view />
  </el-container>

</template>

<script lang="ts">
import Vue from "vue";
import files from "../jsonFile";

export default Vue.extend({
  data() {
    return {
      navigeList: files.navigeList
    };
  }
});
</script>


<style>
</style>
