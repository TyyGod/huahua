<template>
  <main class="layout">
    <el-container class="container">
      <el-header class="home_header">
        <div class="logo" @click="tohome">
          <h3>logo</h3>
        </div>
        <div v-show="isShowMenu" class="menu">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            active-text-color="#AC2807"
            router
            @select="handleSelect"
          >
            <el-menu-item index="/home/act">首页</el-menu-item>
            <el-menu-item id="parent2" index="/home/capability">产品服务</el-menu-item>

            <el-menu-item id="parent" index="/home/solution">解决方案</el-menu-item>
            <el-menu-item index="/home/market">应用服务市场</el-menu-item>
            <el-menu-item index="/home/developer">生态合作</el-menu-item>
            <el-menu-item index="/home/support">服务支持</el-menu-item>
            <el-menu-item index="/home/national">行业专题</el-menu-item>
            <el-menu-item index="/home/coal">关于我们</el-menu-item>
          </el-menu>
        </div>
        <div v-show="!isShowMenu" class="Dtmenu">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item>首页</el-menu-item>
            <el-menu-item>产品服务</el-menu-item>
            <el-menu-item>解决方案</el-menu-item>
            <el-menu-item>应用服务市场</el-menu-item>
            <el-menu-item>生态合作</el-menu-item>
            <el-menu-item>服务支持</el-menu-item>
            <el-menu-item>行业专题</el-menu-item>
            <el-menu-item>关于我们</el-menu-item>
          </el-menu>
        </div>
        <div class="main">
          <span @click="showSearchBox">  <svg t="1697177824579" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4113" width="200" height="200"><path d="M862.609 816.955L726.44 680.785l-0.059-0.056a358.907 358.907 0 0 0 56.43-91.927c18.824-44.507 28.369-91.767 28.369-140.467 0-48.701-9.545-95.96-28.369-140.467-18.176-42.973-44.19-81.56-77.319-114.689-33.13-33.129-71.717-59.144-114.69-77.32-44.507-18.825-91.767-28.37-140.467-28.37-48.701 0-95.96 9.545-140.467 28.37-42.973 18.176-81.56 44.19-114.689 77.32-33.13 33.129-59.144 71.717-77.32 114.689-18.825 44.507-28.37 91.767-28.37 140.467 0 48.7 9.545 95.96 28.37 140.467 18.176 42.974 44.19 81.561 77.32 114.69 33.129 33.129 71.717 59.144 114.689 77.319 44.507 18.824 91.767 28.369 140.467 28.369 48.7 0 95.96-9.545 140.467-28.369 32.78-13.864 62.997-32.303 90.197-54.968 0.063 0.064 0.122 0.132 0.186 0.195l136.169 136.17c6.25 6.25 14.438 9.373 22.628 9.373 8.188 0 16.38-3.125 22.627-9.372 12.496-12.496 12.496-32.758 0-45.254z m-412.274-69.466c-79.907 0-155.031-31.118-211.534-87.62-56.503-56.503-87.62-131.627-87.62-211.534s31.117-155.031 87.62-211.534c56.502-56.503 131.626-87.62 211.534-87.62s155.031 31.117 211.534 87.62c56.502 56.502 87.62 131.626 87.62 211.534s-31.118 155.031-87.62 211.534c-56.503 56.502-131.627 87.62-211.534 87.62z" fill="#ac2807" p-id="4114" /></svg></span>
          <span @click="skipDocument"> 文档 </span>
          <span>备案</span>
          <span @click="skipControlPanel"> 控制台 </span>
          <span>登录</span>
          <span>免费注册</span>
          <span />
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <Footer :last="test" @lastChange="lastChange" />
    </el-container>
    <el-drawer
      id="drawer"
      :visible.sync="drawer"
      direction="ttb"
      :before-close="handleClose"
      :modal="false"
      :modal-append-to-body="false"
      :with-header="false"
      size="450px"
    >
      <DBV :drawer-data="drawerData" />
    </el-drawer>
    <!-- 搜索框 -->
    <transition name="el-zoom-in-top">
      <div v-show="searchBox" class="Zzc" @click.self="closeSearbox">
        <div v-show="searchBox" class="searchBox">
          <div class="content">
            <div class="top">
              <MySearch @closeSb="getSbValue" />
            </div>
            <div class="bottom" />
          </div>
        </div>
      </div>
    </transition>
  </main>

</template>

<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
import Footer from './components/Footer.vue'
import DBV from './components/DrawerBox.vue'
import MySearch from './components/mySearch.vue'
export default {
  name: 'Index',
  components: {
    Footer,
    DBV,
    MySearch
  },
  props: {},
  data() {
    return {
      chart: null,
      resizeHandler: null,
      radio1: '今日',
      datevalue1: '',
      activeIndex: '',
      test: 'footer',
      drawer: false,
      searchBox: false,
      isShowMenu: true,
      drawerData: [
        {
          id: 1, title: '计算', cont: [{ id: 1, title: '弹性....', tid: 1 }, { id: 2, title: '镜像.....', tid: 1 }]
        },
        {
          id: 2, title: '存储', cont: [{ id: 1, title: '弹性2....', tid: 2 }, { id: 2, title: '镜像2.....', tid: 2 }]
        },
        {
          id: 3, title: '数据库', cont: [{ id: 1, title: '弹性3....', tid: 3 }, { id: 2, title: '镜像3.....', tid: 3 }]
        },
        {
          id: 4, title: '网络', cont: [{ id: 1, title: '弹性4....', tid: 4 }, { id: 2, title: '镜像4.....', tid: 4 }]
        },
        {
          id: 5, title: '容器', cont: [{ id: 1, title: '弹性....' }, { id: 2, title: '镜像.....' }]
        },
        {
          id: 6, title: '中间件', cont: [{ id: 1, title: '弹性....' }, { id: 2, title: '镜像.....' }]
        },
        {
          id: 7, title: '安全', cont: [{ id: 1, title: '弹性....' }, { id: 2, title: '镜像.....' }]
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'sidebarOpened'
    ])
  },
  watch: {
    sidebarOpened() {
      this.resizeHandler()
    },
    $route: {
      handler: function(val, oldVal) {
        this.activeIndex = this.$route.path
        this.drawer = false
      },
      immediate: true
    }
  },
  mounted() {
    const that = this
    // const url = JSON.parse(localStorage.getItem('url')) || '/home/act'
    // this.activeIndex = url

    const parent = document.querySelector('#parent')
    const parent2 = document.querySelector('#parent2')
    const el_drawer = document.querySelector('.el-drawer')
    parent.onmouseenter = function() {
      that.isShowMenu === true ? that.drawer = true : null
    }
    parent2.onmouseenter = function() {
      that.isShowMenu === true ? that.drawer = true : null
    }
    console.log(parent)
    el_drawer.onmouseleave = function() {
      that.drawer = false
    }
  },
  methods: {
    tohome() {
      // console.log(111)
    },
    lastChange(newTest) {
      this.test = newTest
    },
    handleSelect() {

    },
    initChart() {
      this.chart = echarts.init(document.getElementById('home-traffic-chart'), 'macarons')
      this.chart.setOption({
        grid: {
          left: '50px',
          right: '20px',
          top: '10px',
          bottom: '35px'
        },
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5888, 3838, 15880, 12888, 18888, 16888, 5888, 3838, 15880, 12888, 18888, 16888]
        }]
      })
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
      window.open('http://localhost:8081/#/home/document')
    },
    skipControlPanel() {
      window.open('http://localhost:8081/#/control')
    },
    showSearchBox() {
      this.searchBox = true
      this.isShowMenu = false
    },
    getSbValue(val) {
      this.searchBox = val[0]
      this.isShowMenu = val[1]
    },
    closeSearbox() {
      this.searchBox = false
      this.isShowMenu = true
    }
  }
}
</script>

<style lang='less' scoped>
@media screen and (max-width:1300px) {
  .main {
  min-width: 350px;
  flex-grow: 3;
  text-align: center;
  display: flex;
  // align-items: center;
  justify-content: center;
  line-height: 70px;
  font-size: 14px;
  color: black;
  span:nth-child(1){
    margin-top: 5px;
  }
  span:nth-child(2) {
    margin-left: 15px;
  }
  span:nth-child(3) {
    margin-left: 15px;
  }
  span:nth-child(4) {
    margin-left: 15px;
  }
  span:nth-child(5) {
    margin-left: 15px;
  }
  span:nth-child(6) {
    display: inline-block;
    height: 70px;
    width: 80px;
    right: 0px;
    position: absolute;
    background: #17A6FA;
    color: white;
  }
  span:hover {
    cursor: pointer;
  }
}
}
@media screen and (min-width:1300px) {
  .main {
  min-width: 450px;
  flex-grow: 3;
  text-align: center;
  display: flex;
  // align-items: center;
  justify-content: center;
  line-height: 70px;
  font-size: 14px;
  color: black;
  span:nth-child(1){
    margin-top: 5px;
  }
  span:nth-child(2) {
    margin-left: 30px;
  }
  span:nth-child(3) {
    margin-left: 30px;
  }
  span:nth-child(4) {
    margin-left: 30px;
  }
  span:nth-child(5) {
    margin-left: 30px;
  }
  span:nth-child(6) {
    display: inline-block;
    height: 70px;
    width: 100px;
    right: 0px;
    position: absolute;
    background: #17A6FA;
    color: white;
  }
   span:nth-child(7) {
    height: 70px;
    width: 10px;
    // background: red;
  }
  span:hover {
    cursor: pointer;
  }
}
}
:deep .el-menu-item{
  background: transparent  !important;
}
.el-main{
  padding: 10px 0px 20px 0px;
}
 .icon{
    width: 1.6em;
    height: 1.6em;
  }
.layout {
  background: #f6f6f6;
  min-height: 100vh;
}
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
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: red;
  flex-grow: 1;
}
.menu {
  flex-grow: 3;
  text-align: center;
  line-height: 50%;
}
.Dtmenu {
  flex-grow: 3;
  opacity: 0;
   text-align: center;
   line-height: 50%;
}
.el-menu {
  padding-left: 8%;
  background:#f6f6f6;
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
.el-menu-item:hover{
  background-color: transparent !important;
}
.el-menu-item{
  padding: 0;
  height: 50px;
  line-height: 70px;
  margin: 0px 15px 0px 15px;
}
.Zzc{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  z-index: 7;
  .searchBox{
  height: 400px;
  width: 600px;
  position: fixed;
  background: white;
  top: -10px;
  left: 41%;
  z-index: 8;
  border-radius: 15px;
  box-shadow:0px 0px 5px 1px #cacaca;
  .content{
    width: 90%;
    height: 90%;
    margin-left: 5%;
    margin-top: 2.5%;
     .top{
    margin-top: 30px;
    width: 100%;
    height: 10%;
  }
  .bottom{
    width: 100%;
    height: 80%;
    margin-top: 20px;
  }
  }
}
}

</style>
