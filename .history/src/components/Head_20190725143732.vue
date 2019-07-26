<template>
  <el-header>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             @select="handleSelect">
      <el-menu-item v-for="(item, index) in menuList"
                    :key="index"
                    :index="item.index">{{item.name}}</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Head extends Vue {
  @Prop() private msg!: string;
  data() {
    return {
      activeIndex: 1,
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

<style>
</style>
