<template>

  <div class="act">
    <div class="block">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in 4" :key="item">
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

    <div class="">

    </div>
      <FixedBoxVue >
          <template v-slot:top>
            <!-- <svg t="1696919051564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4015" width="200" height="200"><path d="M691.8 936.446667c-32.333333 0-67.22-5.46-104.146667-16.32C487.42 890.666667 382 824.226667 290.9 733.1S133.333333 536.586667 103.873333 436.346667c-14.666667-49.94-19.493333-96.153333-14.28-137.333334 5.62-44.426667 22.593333-81.08 50.46-108.946666l37.713334-37.713334a53.393333 53.393333 0 0 1 75.42 0l165.94 165.933334a53.4 53.4 0 0 1 0 75.426666L381.46 431.333333l-0.046667 0.046667c-21.333333 21.333333-0.1 90.413333 60.34 150.846667s129.486667 81.72 150.846667 60.36l37.713333-37.713334a53.4 53.4 0 0 1 75.426667 0l165.933333 165.94a53.393333 53.393333 0 0 1 0 75.42l-37.713333 37.713334c-27.866667 27.866667-64.52 44.84-108.946667 50.46a264.333333 264.333333 0 0 1-33.213333 2.04zM170.22 220.206667c-42.573333 42.58-51.6 115.066667-25.413333 204.1 27.5 93.506667 90.1 192.453333 176.266666 278.62s185.113333 148.766667 278.62 176.266666c89.04 26.186667 161.52 17.16 204.1-25.413333l37.706667-37.713333a10.666667 10.666667 0 0 0 0-15.086667l-165.933333-165.933333a10.666667 10.666667 0 0 0-15.086667 0l-37.706667 37.713333c-13.64 13.64-32.353333 20.573333-54.586666 20.573333-13.84 0-29.046667-2.666667-45.26-8.08-37.273333-12.426667-76.813333-38.286667-111.333334-72.813333s-60.386667-74.073333-72.813333-111.333333C324.666667 458.82 329.113333 423.333333 351.24 401.226667l37.713333-37.706667a10.666667 10.666667 0 0 0 0-15.086667l-165.933333-165.933333a10.666667 10.666667 0 0 0-15.086667 0z" fill="#5C5C66" p-id="4016"></path></svg> -->
          </template>
          <template v-slot:bottom>
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
    return {}
  },
  mounted() {},
  methods: {}
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
