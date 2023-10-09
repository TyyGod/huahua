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

  </div>
</template>

<script>
export default {
  name: 'Vue',
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
  .loginBox {
    height: 400px;
    width: 350px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    position: absolute;
    top: 19%;
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
