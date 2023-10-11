<template>

  <div class="act">
    <!-- banner -->
    <div class="block">
      <el-carousel height="500px" :interval='5000'>
        <el-carousel-item v-for="item in 4" :key="item" >
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div class="loginBox">
        <div class="loginBox_top">
          <div class="img">
            <img
              src="https://img2.baidu.com/it/u=638285213,1746517464&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
              alt=""
            >
          </div>
          <button>登录</button>
        </div>
        <div class="loginBox_footer">
          <div class="loginBox_footer_box">
            <div class="loginBox_footer_box_content">
              <div class="top">
                公告栏
              </div>
              <div class="line" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 云计算服务 -->
    <div class="ComputingServices">
      <div class="top">
          <span>稳定、安全、高性能的云计算服务</span>
          <span>查看全部服务 ></span>
      </div>
      <div class="bottom">
        <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
      </div>
    </div>
    <!-- 右侧悬浮框 -->
    <FixedBoxVue :ToolTitle='`联系我们`' :ToolContent='`400-113-2111`' :ToolTitle2='`智能客服`' :ToolContent2='`尽心为您服务`' :disabled='false'>
      <template v-slot:top>
        <svg t="1696924023070" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4173" width="50000" height="50000"><path d="M647.786667 845.397333c-76.053333-24.234667-157.248-76.266667-240.917334-163.648-81.152-84.757333-131.626667-164.864-157.504-238.442666-16.832-47.829333-21.056-85.546667-18.581333-111.402667a50.986667 50.986667 0 0 1 0.384-3.221333l0.341333-3.349334c0.469333-18.112 10.922667-46.144 22.122667-59.264a414.677333 414.677333 0 0 1 34.56-39.466666c9.834667-9.877333 19.306667-18.133333 27.946667-24.192 12.885333-9.045333 21.162667-11.328 23.317333-10.069334-0.213333 0.021333 1.045333 1.322667 2.837333 3.776 3.157333 4.288 7.082667 10.517333 11.669334 18.410667a1030.4 1030.4 0 0 1 31.04 59.264 3473.109333 3473.109333 0 0 1 58.368 126.229333c1.706667 3.84 0.938667 12.309333-1.344 15.722667l-47.04 69.824a27.52 27.52 0 0 0-3.370667 7.424c-7.509333 25.92 12.309333 66.517333 73.834667 129.216 37.504 38.186667 70.293333 63.061333 98.496 77.077333 18.944 9.429333 33.28 12.8 42.730666 12.586667 4.48-0.192 8.256-1.450667 11.52-3.626667l69.546667-46.933333c3.584-2.410667 12.416-3.349333 16.533333-1.685333l8.704 3.477333a3178.794667 3178.794667 0 0 1 91.477334 38.464c7.04 3.114667 13.802667 6.144 20.266666 9.088 21.76 9.962667 39.637333 18.773333 52.629334 25.984 6.784 3.797333 12.074667 7.061333 15.573333 9.642667 1.429333 1.066667 2.432 1.877333 2.901333 2.346666a10.602667 10.602667 0 0 1-2.197333-3.968l1.472 3.2c4.522667 8.064-16.853333 38.122667-51.562667 68.714667a626.624 626.624 0 0 1-20.544 17.344 21.333333 21.333333 0 1 0 26.453334 33.450667 669.056 669.056 0 0 0 22.293333-18.794667c52.48-46.293333 80.661333-85.866667 60.544-121.642667l1.472 3.2c-6.037333-16.64-32.277333-31.274667-91.306667-58.261333-6.613333-3.050667-13.546667-6.144-20.736-9.322667a2876.629333 2876.629333 0 0 0-101.610666-42.538666c-17.109333-6.912-40.874667-4.416-56.234667 5.930666l-69.546667 46.933334 10.922667-3.626667c0.576-0.021333-0.554667-0.149333-2.986667-0.725333a92.693333 92.693333 0 0 1-19.306666-7.424c-23.68-11.776-52.693333-33.792-87.04-68.778667-51.797333-52.757333-65.322667-80.490667-63.317334-87.445333a16.021333 16.021333 0 0 1-1.92 4.074666l46.741334-69.376c10.474667-15.573333 12.586667-39.530667 5.013333-56.725333l-4.138667-9.365333a3937.258667 3937.258667 0 0 0-46.122666-100.202667c-3.029333-6.293333-5.973333-12.416-8.874667-18.304-30.997333-63.082667-48.512-93.290667-64.213333-100.48-18.922667-11.157333-42.261333-4.672-67.456 12.992-10.922667 7.658667-22.186667 17.472-33.642667 28.970667a456.597333 456.597333 0 0 0-37.610667 42.88c-16.853333 19.712-30.805333 57.173333-31.509333 84.906666l0.341333-3.349333c-0.277333 1.493333-0.597333 3.797333-0.896 6.954667-3.050667 31.893333 1.877333 75.818667 20.821334 129.621333 27.946667 79.466667 81.664 164.736 166.912 253.781333 88.490667 92.416 175.765333 148.330667 258.773333 174.805334 27.797333 8.853333 53.888 13.952 77.973333 15.957333a21.333333 21.333333 0 0 0 3.52-42.517333 310.570667 310.570667 0 0 1-68.522666-14.08z" fill="#3D3D3D" p-id="4174"></path></svg>
      </template>
      <template v-slot:bottom >
        111
      </template>
      <template v-slot:backtop>
        回顶
      </template>
    </FixedBoxVue>
  </div>
</template>

<script>
import FixedBoxVue from './components/FixedBox.vue'

export default {
  name: 'Vue',
  components: {
    FixedBoxVue
  },
  props: {},
  data() {
    return {
      activeName: 'second'
    }
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less">
.act {
  height: 1800px;
  //轮播图样式
  el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.el-carousel__button {
  width: 7.5px;
  height: 7.5px;
  border-radius: 50%;
  background: #ac2807;
}
.act {
  .block{
    position: relative;
  }
  .ComputingServices{
    width: 100%;
    height: 600px;
    margin-top: 50px;
    // background-color: red;
    .top{
       cursor: pointer;
      height: 20%;
      width: 100%;
      text-align: center;
      span:nth-child(1){
        font-size: 35px;
        display: block;
        width: 100%;
        float: left;
      }
      span:nth-child(2){
        margin-top: 15px;
        width: 100%;
        display: block;
        float: left;
        color: #ac2807 !important;
        font-weight: bold !important;
      }
    }
    .bottom{
      height: 80%;
      width:100%
    }
  }
  .loginBox {
    height: 400px;
    width: 350px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    position: absolute;
    top: 12%;
    left: 70%;
    z-index: 5;
    border: 1px solid #BBB;
    .loginBox_top {
      text-align: center;
      height: 50%;
      width: 100%;
      // background: red;
      .img {
        width: 100%;
        img {
          height: 80px;
          width: 80px;
          border-radius: 50%;
          margin-top: 10%;
        }
      }
      button {
        width: 80px;
        background: #ac2807;
        height: 30px;
        font-size: 14px;
        color: white;
        border-radius: 2px;
        border: none;
        margin-top: 20px;
      }
    }
    .loginBox_footer {
      height: 50%;
      width: 100%;
      .loginBox_footer_box{
       height: 80%;
       width: 90%;
       margin-left: 5%;
       border-radius: 3px;
       margin-top: 5%;
        background-color: rgba(0, 0, 0, 0.2);
        .loginBox_footer_box_content{
               height: 80%;
               width: 90%;
               margin-left: 5%;
               margin-top: 5%;
               float: left;
              //  background: red;
              .top{
                     color: white;
                     font-size: 16px;
              }
              .line{
                     margin-top: 5px;
                     width: 100%;
                     height: 3px;
                     background: #BBB;
              }
        }
      }
    }
  }
}
</style>
