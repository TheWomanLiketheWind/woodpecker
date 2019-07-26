<template>
  <el-header class="headerAll">
    head
  </el-header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Head extends Vue {
  @Prop() private msg!: string;
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
  .headImage {
    width: 150px;
    height: 100%;
  }
}
</style>
