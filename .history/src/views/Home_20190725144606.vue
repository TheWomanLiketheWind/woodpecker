<template>
  <el-container>

    <Head msg="Welcome to Your Vue.js + TypeScript App"></Head>
    <el-main>Main</el-main>
    <img src="../assets/d1c2dc3ef8561f8ba11936fef14c613.png" />
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
