<template>
  <el-header>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             @select="handleSelect">
      <el-menu-item index="1">
        <router-link>订单管理</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <router-link>订单管理</router-link>
      </el-submenu>
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
    Number;
  }
}
</script>

<style>
</style>
