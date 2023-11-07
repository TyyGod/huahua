<template>
  <div>
    <div class="fixedBox">
    <div class="fixedBox_content">
        <el-tooltip class="tooltip" placement="left" effect="light"  :open-delay='800' :disabled='disabled'>
          <div class="tcont" @click="skipSupport" slot='content'><span class="title">{{ToolTitle ? ToolTitle : ''}} </span><br><span class="content">{{ToolContent}}</span></div>
      <div class="top">
           <slot name="top"  />
      </div>
        </el-tooltip>
      <div class="line" />
        <el-tooltip placement="left" effect="light" :open-delay='800' :disabled='disabled'>
            <div class="tcont" slot="content" @click="Infomessage"><span class="title">{{ToolTitle2 ? ToolTitle2 : ''}} </span><br><span class="content">{{ToolContent2}}</span></div>
      <div class="bottom">
        <slot name="bottom" />
      </div>
        </el-tooltip>
    </div>
  </div>
    <transition name="el-fade-in-linear">
      <div class="backtop"  v-show="backTop" @click="backToTop">
        <slot name="backtop" />
      </div>
    </transition>
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
      if (scrollTop > 720) {
        _this.backTop = true
      } else {
        _this.backTop = false
      }
    })
  },
  methods: {
    backToTop: function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
    skipSupport: function() {
      this.$router.push('/home/support')
    },
    Infomessage() {
      this.$message({
        message: '正在建设中...',
        type: 'warning'
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.icon{
  height: 1.9em !important;
  width: 1.9em !important;
  float: none !important;
  margin-top: 10px !important;
  margin-left: 0px !important;
}
.tooltip{

}
.el-tooltip__popper{
  .is-light{
    border: none;
  }
}
.tcont{
  cursor: pointer;
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
    top: 88%;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 2px 1px 1.5px #d0d3d1;
    right: 1.5%;
    text-align: center;
    line-height: 50px;
    font-size: 12px;
}
.fixedBox{
    position:fixed;
    top: 65%;
    right: 1.5%;
    height: 150px;
    width: 50px;
     box-shadow: 0px 2px 1px 1.5px #d0d3d1;
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
            height: 49%;
            width: 100%;
            // background-color: red;
            text-align: center;
            line-height: 50px;
             font-size: 14px;
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
            height: 49%;
            width: 100%;
            // background-color: blue;
            // color: white;
            text-align: center;
            margin-top: 45%;
            line-height: 40px;
            font-size: 14px;
             img{
                 width: 100%;
                 height: 100%;
             }
        }
    }
}

</style>
