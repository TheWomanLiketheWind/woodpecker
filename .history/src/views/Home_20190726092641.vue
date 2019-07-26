<template>
  <el-container>
    <el-header class="headerAll">
      <img src=""
           class="headImage">
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               background-color="#222a30"
               text-color="#fff"
               active-text-color="#29e2fe"
               @select="handleSelect">
        <el-menu-item v-for="(item, index) in menuList"
                      :key="index"
                      :index="item.index"
                      v-on:listenToChildEvent="menuClick">{{item.name}}</el-menu-item>
      </el-menu>

      <el-dropdown>
        <img src="../assets/headImage.jpg"
             class="drophead" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <!-- <router-link to="/menuSecond">点击跳转</router-link> -->
    <router-view />
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
      activeIndex: "4",
      menuList: [
        {
          name: "首页",
          index: "1",
          link: ""
        },
        {
          name: "车队基本信息",
          index: "2",
          link: ""
        },
        {
          name: "车队业务/交易管理",
          index: "3",
          link: ""
        },
        {
          name: "车队风险信息",
          index: "4",
          link: ""
        },
        {
          name: "车辆保险信息",
          index: "5",
          link: ""
        },
        {
          name: "车队估值/风险",
          index: "6",
          link: ""
        },
        {
          name: "车队财资",
          index: "7",
          link: ""
        },
        {
          name: "车队信贷",
          index: "8",
          link: ""
        }
      ]
    };
  }

  private handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }

  menuClick(data: any) {
    this.$router.push(data);
  }
}
</script>

<style lang="scss">
.headerAll {
  background: #222a30;
  margin-bottom: 20px .headImage {
    width: 150px;
    height: 100%;
    border: 0;
  }
  .drophead {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
