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
          active-text-color="#AC2807"
          background-color="#F6F9FB"
          router
        >
          <el-menu-item index="/home/act" id="parent">
            <span class="state">首页</span>
          </el-menu-item>
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
        <span @click="skipDocument"> 文档 </span>
        <span @click="skipControlPanel"> 控制台 </span>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer class="home_footer" style="height: 400px">
      <div class="home_footer_content"></div>
    </el-footer>
    <el-drawer
      id="drawer"
      :visible.sync="drawer"
      direction="ttb"
      :before-close="handleClose"
      :modal="false"
      :modal-append-to-body="false"
      :withHeader='false'
      size="100%"
    >
     <div>
       111
     </div>
    </el-drawer>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utlis'
export default {
  name: "Vue",
  props: {},
  data() {
    return {
      activeIndex: "",
      drawer: false,

    };
  },
  mounted() {
    let that = this
    let url = JSON.parse(localStorage.getItem("url")) || "/home/act"
    this.activeIndex = url

    let parent = document.getElementById("parent");
    let el_drawer = document.querySelector('.el-drawer')
    console.log(el_drawer);
    parent.onmouseenter = function () {
      that.drawer = true
    }
    el_drawer.onmouseleave = function () {
      that.drawer = false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      localStorage.setItem("url", JSON.stringify(key))
      // this.activeIndex = key
    },
    handleClose(done) {
      done()
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done();
      //   })
      //   .catch((_) => {});
    },
    skipDocument() {
      this.$router.push("/home/document")
      this.activeIndex = "/home/act"
    },
    skipControlPanel() {
      this.$router.push("/control")
    },
    // up() {
    //   // let newdrawer = this.drawer
    //   // let parent = document.getElementById('parent')
    //   // let a =  parent.onmouseenter = function() {
    //   //     // console.log('触发')
    //   //    newdrawer = true
    //   //    return a
    //   // }
    //   // a()
    //   // this.drawer = newdrawer
    //   // this.drawer = true

    // },
  },
}
</script>

<style lang='less' scoped>
.container {
  background: #f6f9fb;
}
#drawer{
  position: absolute;
  top: 70px;
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
  // line-height: 500px;
  flex-grow: 3;
  // background: yellow;
  text-align: center;
  line-height: 60px;
  font-size: 14px;
  color: rgb(144, 147, 153);
  span:nth-child(2) {
    margin-left: 50px;
  }
  span:hover {
    cursor: pointer;
  }
}
.el-menu {
  padding-left: 8%;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0px;
}
/deep/.home_footer {
  background: #222836;
  height: 500px;
}
.state {
  height: 100%;
  width: 100%;
  // background: red;
  display: inline-block;
  // padding: 0px 5px 0px 5px;
}
.el-menu-item {
  background: red;
}
</style>
