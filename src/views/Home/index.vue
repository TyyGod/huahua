<template>
  <main class="layout">
    <el-container class="container">
      <el-header class="home_header">
        <div class="logo" @click="tohome">
          <h3>logo</h3>
        </div>
        <div class="menu">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="#AC2807"
            background-color="#F6F9FB"
            router
            @select="handleSelect"
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
        <router-view />
      </el-main>
      <Footer :last="test" @lastChange="lastChange" />
    <!-- <el-footer class="home_footer" style="height:400px">
      <div class="home_footer_content" />
    </el-footer> -->
    </el-container>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utlis'
import Footer from './components/Footer.vue'
export default {
  name: 'Index',
  components: {
    Footer
  },
  props: {},
  data() {
    return {
      chart: null,
      resizeHandler: null,
      radio1: '今日',
      datevalue1: '',
      activeIndex: '',
      test: 'footer'
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
      },
      immediate: true
    }
  },
  mounted() {
    const _this = this
    _this.resizeHandler = debounce(() => {
      if (_this.chart) {
        _this.chart.resize()
      }
    }, 100)
    // _this.initChart()
    _this.initResizeEvent()
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
    initResizeEvent() {
      window.addEventListener('resize', this.resizeHandler)
    }
  }
}
</script>

<style lang='less' scoped>
.layout {
  background: #f6f6f6;
  min-height: 100vh;
}
.container{
  background: #F6F9FB;
}
.home_header {
  display: flex;
  /* justify-content: space-around; */
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: red;
  flex-grow: 1;
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  flex-grow: 3;
  background: yellow;
  text-align: center;
  line-height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
