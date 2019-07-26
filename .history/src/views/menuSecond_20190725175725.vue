<template>
  <el-container>

    <el-aside width="200px">
      <el-menu :default-active="defaultActive"
               class="el-menu-vertical-demo"
               @select="handleSelect">
        <el-menu-item v-for="(item, index) in filesList.navigeList"
                      :key="index"
                      :index="item.index">
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <h3>{{filesList.navigeList[this.selectIndex].name}}</h3>
      <el-table :data="filesList.navigeList[this.selectIndex].tableData"
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
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage4"
                     :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
      </el-pagination>
    </el-main>
  </el-container>

</template>

<script lang="ts">
import Vue from "vue";
import files from "../jsonFile";

export default Vue.extend({
  data() {
    return {
      filesList: files,
      selectIndex: 0,
      defaultActive: "1",
      currentPage4: 4
    };
  },
  methods: {
    handleSelect(key: String) {
      this.selectIndex = Number(key) - 1;
    },
    handleSizeChange(val: Number) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val: Number) {
      console.log(`当前页: ${val}`);
    }
  }
});
</script>


<style lang="scss">
.el-pagination {
  margin-top: 30px;
  float: right;
}
</style>
