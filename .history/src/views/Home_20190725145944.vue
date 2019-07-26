<template>
  <el-container>

    <AHead></AHead>
    <el-main>Main</el-main>
  </el-container>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div> -->

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AHead from "@/components/Head.vue"; // @ is an alias to /src

@Component({
  components: {
    AHead
  }
})
export default class Home extends Vue {}
</script>
