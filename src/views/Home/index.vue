<template>
   
  <el-container class="container">
    <el-header class="home_header">
      <div class="logo">
        <h3>logo</h3>
      </div>
      <div class="menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color='#AC2807'
          background-color='#F6F9FB'
          router

        >
          <el-menu-item index="/home/act">首页</el-menu-item>
          <el-menu-item index="/home/capability">产品能力</el-menu-item>

          <el-menu-item index="/home/solution">解决方案</el-menu-item>
          <el-menu-item index="/home/market">应用服务市场</el-menu-item>
          <el-menu-item index="/home/developer">开发者</el-menu-item>
          <el-menu-item index="/home/support">服务支持</el-menu-item>
          <el-menu-item index="/home/national">了解国能云</el-menu-item>
          <el-menu-item index="/home/coal">煤炭行业云</el-menu-item>
        </el-menu>
      </div>
      <div class="search">
        <h3>搜索</h3>
      </div>
      <div class="main">
        <h3>个人</h3>
      </div>
    </el-header>
    <el-main style="height:500px"> 
      <router-view/>
    </el-main>
    <el-footer class="home_footer" style="height:400px">
        <div class="home_footer_content">

        </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Vue",
  props: {},
  data() {
    return {
       activeIndex: '/home/act',
    };
  },
  mounted() {},
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
};
</script>

<style lang='less' scoped>
.container{
  background: #F6F9FB;
}
.home_header {
  display: flex;
  /* justify-content: space-around; */
}
.logo {
  flex-grow: 2;
  background: red;
  text-align: center;
  line-height: 50%;
}
.menu {
  flex-grow: 3;
  background: blue;
  text-align: center;
  line-height: 50%;
}
.search {
  flex-grow: 4;
  background: green;
  text-align: center;
  line-height: 50%;
}
.main {
  flex-grow: 3;
  background: yellow;
  text-align: center;
  line-height: 50%;
}
.el-menu{
  padding-left: 8%;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0px;
}
/deep/.home_footer{
  background: #222836;
  height: 500px;
}

</style>
