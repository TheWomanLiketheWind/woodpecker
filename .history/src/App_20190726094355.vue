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
    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: rgb(209, 209, 209);
    }
    .el-menu-item.is-active {
      border-left: 5px solid #000;
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
