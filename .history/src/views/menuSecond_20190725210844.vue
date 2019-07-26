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
      <el-table :data="tableData"
                border
                stripe
                style="width: 100%">
        <el-table-column type="index"
                         label="序号"
                         width="70"
                         align="center">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180"
                         align="center" />
        <el-table-column prop="cardId"
                         label="身份证号"
                         align="center" />
        <el-table-column prop="driveId"
                         label="驾驶证号"
                         align="center" />
        <el-table-column prop="tel"
                         label="联系方式"
                         align="center" />
        <el-table-column prop="signType"
                         label="签约状态"
                         align="center" />
        <el-table-column label="司机风险数据"
                         align="center">
          <template>
            <el-button type="danger">需签约</el-button>
            <el-button type="text">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage4"
                     :page-sizes="[10, 20, 50, 100]"
                     :page-size="10"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="tableData.length">
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
      currentPage4: 4,
      tableData: [
        {
          name: "王小虎",
          cardId: "110430198801180456",
          driveId: "110430198801180456",
          tel: "13811111111",
          signType: 0
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
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
