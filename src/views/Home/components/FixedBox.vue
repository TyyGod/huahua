<template>
  <div>
    <div class="fixedBox">
    <div class="fixedBox_content">
        <el-tooltip class="tooltip" placement="left" effect="light"  :open-delay='800' :disabled='disabled'>
          <div class="tcont" slot='content'><span class="title">{{ToolTitle ? ToolTitle : ''}} </span><br><span class="content">{{ToolContent}}</span></div>
      <div class="top">
           <slot name="top"  />
      </div>
        </el-tooltip>
      <div class="line" />
        <el-tooltip placement="left" effect="light" :open-delay='800' :disabled='disabled'>
            <div class="tcont" slot="content"><span class="title">{{ToolTitle2 ? ToolTitle2 : ''}} </span><br><span class="content">{{ToolContent2}}</span></div>
      <div class="bottom">
        <slot name="bottom" />
      </div>
        </el-tooltip>
    </div>
  </div>
  <div class="backtop"  v-if="backTop" @click="backToTop">
      <slot name="backtop" />
  </div>
  </div>
</template>

<script>
export default {
  name: 'FixedBox',
  props: {
    ToolTitle: {
      type: String || Boolean,
      default: ''
    },
    ToolContent: {
      type: String,
      default: ''
    },
    ToolTitle2: {
      type: String,
      default: ''
    },
    ToolContent2: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      backTop: false
    }
  },
  mounted() {
    const _this = this
    const scroll_height = document.documentElement.scrollHeight
    console.log(_this.ToolTitle)
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > scroll_height / 3) {
        _this.backTop = true
      } else {
        _this.backTop = false
      }
    })
  },
  methods: {
    backToTop: function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
      // let timer = null
      // let onTop = document.documentElement.scrollTop
      // if (document.documentElement.scrollTop > 0) {
      //   timer = setInterval(() => {
      //     onTop = document.documentElement.scrollTop -= 10
      //     console.log(document.documentElement.scrollTop)
      //   }, 100)
      // } else if (onTop === 0) {
      //   console.log(timer)
      //   clearInterval(timer)
      // }
    }
  }
}
</script>

<style lang="less" scoped>
.tooltip{
  border:none
}
.tcont{
  padding: 5px 45px 5px 15px;
  .title{
    font-size: 13px;
    font-weight: bold;
  }
  .content{
    display: block;
    margin-top: 10px;
  }
}
.backtop{
    cursor: pointer;
    position:fixed;
    top: 85%;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #b6b6b6;
    right: 1.5%;
    text-align: center;
    line-height: 45px;
    font-size: 12px;
    animation: fadein 3s;
}
.fixedBox{
    position:fixed;
    top: 65%;
    right: 1.5%;
    height: 120px;
    width: 45px;
    border: 1px solid #b6b6b6;
    border-top-color: 1px white;
    border-radius: 50px;
    z-index: 5;
    background-color: white;
    .fixedBox_content{
        height: 80%;
        width: 80%;
        // background-color: black;
        margin-left: 10%;
        margin-top: 25%;
        float: left;
        .top{
          cursor: pointer;
            height: 30%;
            width: 100%;
            // background-color: red;
            text-align: center;
            line-height: 35px;
             font-size: 14px;
             margin-bottom: 45%;
             margin-top: 10%;
             img{
                 width: 100%;
                 height: 100%;
             }
        }
        .line{
            height: 1px;
            width: 60%;
            margin-left: 20%;
            background-color: #c0c0c0;
        }
        .bottom{
          cursor: pointer;
            height: 30%;
            width: 100%;
            // background-color: blue;
            // color: white;
            text-align: center;
            margin-top: 45%;
            line-height: 30px;
            font-size: 14px;
             img{
                 width: 100%;
                 height: 100%;
             }
        }
    }
}

</style>
