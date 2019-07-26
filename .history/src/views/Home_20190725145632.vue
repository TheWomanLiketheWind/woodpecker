<template>
  <el-container>
    <el-header class="headerAll">head</el-header>
    <!-- <Head msg="Welcome to Your Vue.js + TypeScript App"></Head> -->
    <el-main>Main</el-main>
  </el-container>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div> -->

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Head from "@/components/Head.vue"; // @ is an alias to /src

@Component({
  components: {
    Head
  }
})
export default class Home extends Vue {}
</script>
