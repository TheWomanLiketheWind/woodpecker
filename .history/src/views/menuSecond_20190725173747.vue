<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="2"
               class="el-menu-vertical-demo">
        <el-menu-item v-for="(item, index) in filesList.navigeList"
                      :key="index"
                      :index="item.index">
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <main>
      <el-table :data="filesList.navigeList[2].tableData"
                border
                style="width: 100%">
        <el-table-column prop="date"
                         label="日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
        </el-table-column>
      </el-table>
    </main>
  </el-container>

</template>

<script lang="ts">
import Vue from "vue";
import files from "../jsonFile";

export default Vue.extend({
  data() {
    return {
      filesList: files
    };
  }
});
</script>


<style>
</style>
