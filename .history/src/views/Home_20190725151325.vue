<template>
  <el-container>
    <el-header class="headerAll">
      <img src=""
           class="headImage">
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               background-color="#222a30"
               text-color="#fff"
               active-text-color="#29e2fe"
               @select="handleSelect">
        <el-menu-item v-for="(item, index) in menuList"
                      :key="index"
                      :index="item.index">{{item.name}}</el-menu-item>
      </el-menu>

      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  data() {
    return {
      activeIndex: "1",
      menuList: [
        {
          name: "订单管理",
          index: "1",
          link: ""
        },
        {
          name: "订单管理",
          index: "2",
          link: ""
        },
        {
          name: "订单管理",
          index: "3",
          link: ""
        }
      ]
    };
  }

  private handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>

<style lang="scss">
.headerAll {
  background: #222a30;
  .headImage {
    width: 150px;
    height: 100%;
    border: 0;
  }
}
</style>
