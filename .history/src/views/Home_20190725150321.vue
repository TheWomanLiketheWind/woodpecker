<template>
  <el-container>

    <AHead></AHead>
    <el-main>Main</el-main>
  </el-container>
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
