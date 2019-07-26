<template>
  <el-header>
    {{msg}}
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             @select="handleSelect">
      <el-menu-item index="1">订单管理
      </el-menu-item>
      <el-menu-item index="2">
        <router-link>订单管理</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link>订单管理</router-link>
      </el-menu-item>
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
      activeIndex: 0
    };
  }

  private handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>

<style>
</style>
