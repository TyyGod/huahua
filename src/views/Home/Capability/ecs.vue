<template>
  <div class="ecs">
    <div class="banner">
        <img src="https://img0.baidu.com/it/u=3928348106,579674690&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=365" alt="">
      <div class="fiexdBox">
        <div class="top">
         <p class="title"> {{data.title}} </p>
         <p class="desc">
             弹性云上机 (ECS，Elastic Cloud Server) 是一种可随时获取、弹性可扩展的计算服务。云土机由 CPU、内存、镜像、云硬盘组成，同时结合VPC、安全组、数据多副本保存等能力，打造一个既高效又可靠安全的计算环境，确保服务持久稳定运行。
         </p>
          <el-button class="btn">立即开通</el-button>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ecs',
  props: {},
  data() {
    return {
      data: []
    }
  },
  mounted() {
    const _this = this
    _this.data = JSON.parse(localStorage.getItem('DescData'))
    console.log(_this.data)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.ecs{
    background: white;
    .banner{
  position: relative;
  width: 100%;
  height: 400px;
  min-width: 1500px;
  img{
    width: 100%;
    height: 100%;
  }
}
.fiexdBox{
  min-width: 200px;
  position: absolute;
  height: 200px;
  width: 40%;
  top: 50px;
  left: 5%;
  .top{
    position: relative;
    margin-top: 50px;
    .box{
      position: absolute;
      width: 70%;
      height: 100px;
      background: white;
      top: 100px;
      z-index: 5;
    }
    .title{
      font-size: 40px;
      font-weight: bold;
      letter-spacing: 3px;
    }
    .desc{
        font-size: 13px;
        color: white;
        margin-top: 20px;
        line-height: 16px;
    }
    .btn{
        height: 40px;
        width: 120px;
        background: #ac2807;
        font-size: 14px;
        border: none;
        color: white;
        margin-top: 40px;
        border-radius: 5px;
    }
  }
}
}
</style>
