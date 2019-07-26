<template>
  <el-container>

    <head></head>
    <el-main>Main</el-main>
  </el-container>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div> -->

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Heaheadd from "@/components/Head.vue"; // @ is an alias to /src

@Component({
  components: {
    head
  }
})
export default class Home extends Vue {}
</script>
