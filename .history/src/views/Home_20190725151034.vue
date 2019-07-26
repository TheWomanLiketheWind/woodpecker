<template>
  <el-container>
    <el-header class="headerAll">
      <img src=""
           class="headImage">
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               text-color="#fff"
               active-text-color="#29e2fe"
               @select="handleSelect">
        <el-menu-item v-for="(item, index) in menuList"
                      :key="index"
                      :index="item.index">{{item.name}}</el-menu-item>
      </el-menu>
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
  }
}
</style>
