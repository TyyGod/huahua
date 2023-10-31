<template>
  <div class="solution">
    <div class="banner">
        <img src="https://img0.baidu.com/it/u=3928348106,579674690&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=365" alt="">
      <div class="fiexdBox">
        <div class="top">
         <p class="title"> 煤炭行业云解决方案</p>
         <p class="search"><input @input="searchNow($event)" type="text" placeholder="请输入产品名称"><svg style="marginTop:7px;float:right;marginRight:10px" t="1697181229055" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4369" width="200" height="200"><path d="M862.609 816.955L726.44 680.785l-0.059-0.056a358.907 358.907 0 0 0 56.43-91.927c18.824-44.507 28.369-91.767 28.369-140.467 0-48.701-9.545-95.96-28.369-140.467-18.176-42.973-44.19-81.56-77.319-114.689-33.13-33.129-71.717-59.144-114.69-77.32-44.507-18.825-91.767-28.37-140.467-28.37-48.701 0-95.96 9.545-140.467 28.37-42.973 18.176-81.56 44.19-114.689 77.32-33.13 33.129-59.144 71.717-77.32 114.689-18.825 44.507-28.37 91.767-28.37 140.467 0 48.7 9.545 95.96 28.37 140.467 18.176 42.974 44.19 81.561 77.32 114.69 33.129 33.129 71.717 59.144 114.689 77.319 44.507 18.824 91.767 28.369 140.467 28.369 48.7 0 95.96-9.545 140.467-28.369 32.78-13.864 62.997-32.303 90.197-54.968 0.063 0.064 0.122 0.132 0.186 0.195l136.169 136.17c6.25 6.25 14.438 9.373 22.628 9.373 8.188 0 16.38-3.125 22.627-9.372 12.496-12.496 12.496-32.758 0-45.254z m-412.274-69.466c-79.907 0-155.031-31.118-211.534-87.62-56.503-56.503-87.62-131.627-87.62-211.534s31.117-155.031 87.62-211.534c56.502-56.503 131.626-87.62 211.534-87.62s155.031 31.117 211.534 87.62c56.502 56.502 87.62 131.626 87.62 211.534s-31.118 155.031-87.62 211.534c-56.503 56.502-131.627 87.62-211.534 87.62z" fill="#c2c2c2" p-id="4370"></path></svg></p>
         <p class="hot">热门搜索: 云计算 云安全中心 弹性伸缩 大数据 人工智能AI</p>
         <transition name="el-zoom-in-top">
           <p class="box" v-show="showBox"></p>
         </transition>
        </div>
     </div>
    </div>
    <div class="HotSoluton">
      <div class="title">
        热门解决方案
      </div>
      <div class="content">
        <div class="top">
          <div class="topbox">1</div>
          <div class="topbox">1</div>
        </div>
        <div class="footer">
          <div class="FooterBoxLeft"></div>
          <div class="FooterBoxMiddel"></div>
          <div class="FooterBoxRight"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vue',
  props: {

  },
  data() {
    return {
      showBox: false
    }
  },
  mounted() {

  },
  methods: {
    searchNow(e) {
      if (e.currentTarget.value) {
        this.showBox = true
      } else {
        this.showBox = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.icon{
  width: 1.5em;
  height: 1.5em;
}
.solution{
  .banner{
  position: relative;
  width: 100%;
  height: 350px;
  img{
    width: 100%;
    height: 100%;
  }
}
.HotSoluton{
  height: 500px;
  width: 100%;
  .title{
    height: 15%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .content{
    height: 80%;
    width: 90%;
    margin-left: 5%;
    // background: red;
    margin-top: 20px;
    .top{
      display: flex;
      width: 100%;
      height: 45%;
      justify-content: space-between;
      .topbox{
        height: 100%;
        width: 49%;
        border-radius: 15px;
        background:url('https://img1.baidu.com/it/u=3893389324,4043822814&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800') no-repeat 100% 100%;
      }
    }
    .footer{
      display: flex;
      width: 100%;
      height: 45%;
      margin-top: 10px;
      justify-content: space-between;
      .FooterBoxLeft{
        width: 33%;
        height: 100%;
        border-radius: 10px;
        background: url('https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500') no-repeat 100%;
      }
      .FooterBoxMiddel{
        width: 25%;
        border-radius: 10px;
        height: 100%;
        background: url('https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500') no-repeat 100%;
      }
      .FooterBoxRight{
        border-radius: 10px;
        width: 38%;
        height: 100%;
        background: url('https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500') no-repeat 100%;
      }
    }
  }
}
.fiexdBox{
  position: absolute;
  height: 200px;
  width: 50%;
  // background: red;
  top: 0px;
  left: 10%;
  .top{
    position: relative;
    margin-top: 80px;
    .box{
      position: absolute;
      width: 70%;
      height: 100px;
      background: white;
      top: 120px;
      z-index: 5;
    }
    .title{
      font-size: 45px;
      letter-spacing: 3px;
    }
    .search{
      width: 70%;
      height: 35px;
      background: white;
      border-radius: 5px;
      margin-top: 20px;
      line-height: 35px;
      input{
        margin-left: 10px;
        width: 80%;
      }
    }
    .hot{
      margin-top: 20px;
      font-size: 12px;
      font-weight: bold;
    }
  }
}
}
</style>
