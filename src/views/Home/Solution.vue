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
    <div class="AllSoluton">
      <div class="title">
        了解国能云所有解决方案
      </div>
      <div class="Alltabs">
       <div style="width:80%;marginLeft:10%;display:flex">
        <div :class="isTabs === true ? 'left' : 'right' " @click="changeTabs">通用解决方案</div>
        <div :class="isTabs === false ? 'left' : 'right' " @click="changeTabs2">行业解决方案</div>
       </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div v-for="i in data" :key="i.id" :class="activeTabs === i.id ? 'activeItem' : 'item' " @click="changeTabs3(i)">
            {{i.title}}
          </div>
        </div>
        <div class="right">
          <div v-for="item in data" :key="item.id" class="item">
              <span class="title" :id="item.id">icon {{item.title}}</span>
              <span v-for="i in item.children" :key="i.id" class="main">{{i.title}}</span>
            </div>
        </div>
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
  props: {

  },
  data() {
    return {
      showBox: false,
      isTabs: true,
      activeTabs: 1,
      data: [
        {
          id: 1,
          title: '云网融合',
          children: [
            {
              id: 1,
              title: '企业级互联网架构能力'
            }
          ]
        },
        {
          id: 2,
          title: '混合云',
          children: [
            {
              id: 1,
              title: '混合云商用密码'
            }
          ]
        },
        {
          id: 3,
          title: '大数据',
          children: [
            {
              id: 1,
              title: '大数据管理瓶体'
            }
          ]
        }
      ],
      data2: [
        {
          id: 1,
          title: '工业',
          children: [
            {
              id: 1,
              title: '数字工程'
            }
          ]
        }
      ],
      data3: [
        {
          id: 1,
          title: '云网融合',
          children: [
            {
              id: 1,
              title: '企业级互联网架构能力'
            }
          ]
        },
        {
          id: 2,
          title: '混合云',
          children: [
            {
              id: 1,
              title: '混合云商用密码'
            }
          ]
        },
        {
          id: 3,
          title: '大数据',
          children: [
            {
              id: 1,
              title: '大数据管理瓶体'
            }
          ]
        }
      ]
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
    },
    changeTabs() {
      this.isTabs = true
      this.data = this.data3
    },
    changeTabs2() {
      this.isTabs = false
      this.data = this.data2
      this.activeTabs = 1
    },
    changeTabs3(item) {
      this.activeTabs = item.id
      const ele = document.getElementById(item.id)
      ele.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
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
  min-width: 1500px;
  position: relative;
  width: 100%;
  height: 400px;
  img{
    width: 100%;
    height: 100%;
  }
}
.HotSoluton{
  background: white;
  height: 500px;
  width: 100%;
  .title{
    height: 15%;
    width: 100%;
    min-width: 1300px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .content{
    height: 80%;
    width: 80%;
    min-width: 1300px;
    margin-left: 10%;
    margin-top: 20px;
    .top{
      display: flex;
      width: 100%;
      height: 45%;
      justify-content: space-between;
      .topbox{
        height: 100%;
        width: 49%;
        min-width: 500px;
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
.AllSoluton{
  width: 100%;
  min-width: 1500px;
   .title{
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 2px;
    background: white;
  }
  .Alltabs{
    display: flex;
    width: 100%;
    height: 56px;
    background: white;
    padding-top: 20px;
    .left{
      cursor: pointer;
      width: 50%;
      height: 35px;
      background: #ac2807;
      color: white;
      line-height: 33px;
      text-align: center;
    }
    .right{
      cursor: pointer;
      width: 50%;
      height: 35px;
      border: 1px solid #ac2807;
      color: #ac2807;
      text-align: center;
      line-height: 33px;
    }
  }
  .bottom{
      height: 90%;
      width: 80%;
      margin-top: 50px;
      margin-left: 10%;
      .left{
        float: left;
        width: 15%;
        .item{
          cursor: pointer;
          padding: 18px 20px;
          transition: background 0.2s linear;
        }
        .activeItem{
          cursor: pointer;
          padding: 18px 20px;
          transition: background 0.2s linear;
          background: rgb(252, 224, 217);
          color: #ac2807;
        }
      }
      .right{
        float: left;
        width: 84%;
        margin-left: 1%;
        .item{
         margin-top: 10px;
         border-top: 2px solid #e2e5e3;
         height: 250px;
         width: 100%;
         display: flex;
         align-items: center;
         position: relative;
         .title{
           position: absolute;
           display: block;
           height: 40px;
           width: 135px;
           top: -20px;
           font-size: 18px;
           font-weight: bold;
           line-height: 40px;
           background: rgb(246, 249, 251);
         }
         .main{
           display: inline-block;
           width: 100%;
           height: 70%;
           background: #f1f1f1;
         }
        }
      }
    }
}
.fiexdBox{
  position: absolute;
  height: 200px;
  width: 50%;
  // background: red;
  top: 50px;
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
