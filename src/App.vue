<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f7f7f7;
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menuSecond {
    height: calc(100vh - 80px);

    .el-table th,
    .el-table tr {
      color: #646565;
    }
    .el-table__header th {
      background: #f9faf9;
    }
    .el-menu {
      border-right: 0;
    }
    .el-main {
      padding: 20px 40px;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: rgb(209, 209, 209);
    }

    .el-menu-item.is-active span {
      border-left: 5px solid #000;
    }
    .el-menu-item {
      display: flex;
      align-items: center;
      padding: 0 !important;
      height: 70px;
    }

    .el-menu-item span {
      height: 43px;
      line-height: 43px;
      text-align: left;
      width: 100%;
      display: block;
      padding-left: 22px;
    }
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  margin: 0;
}
</style>
