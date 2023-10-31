<template>
  <div class="allsearch">
   <div class="top">
    <div class="search">
           <span> <svg t="1697425169298" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3976" width="200" height="200"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z" p-id="3977"></path></svg></span>
            <span><input type="text" v-model="searchval" placeholder="请输入内容"></span>
             <transition name="el-fade-in-linear">
                  <span v-show="isShowel" @click="clear"><svg t="1697426468534" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5115" width="200" height="200"><path d="M512 451.33l242.679-242.679c16.754-16.753 43.916-16.753 60.67 0 16.753 16.754 16.753 43.916 0 60.67L572.669 512l242.68 242.679c16.753 16.754 16.753 43.916 0 60.67-16.754 16.753-43.916 16.753-60.67 0L512 572.669 269.321 815.35c-16.754 16.753-43.916 16.753-60.67 0-16.753-16.754-16.753-43.916 0-60.67L451.331 512 208.65 269.321c-16.753-16.754-16.753-43.916 0-60.67 16.754-16.753 43.916-16.753 60.67 0L512 451.331z" fill="#2c2c2c" p-id="5116"></path></svg></span>
             </transition>
             <transition name="el-zoom-in-center">
                <span v-show="isShowel"><button>搜索</button></span>
             </transition>
    </div>
   </div>
   <div class="bottom">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first" >
        <div style="background:#fff;height:500px">1111</div>
    </el-tab-pane>
    <el-tab-pane label="产品" name="second">
        <div style="background:#fff;height:500px">1111</div>
    </el-tab-pane>
    <el-tab-pane label="解决方案" name="third">
        <div style="background:#fff;height:500px">1111</div>
    </el-tab-pane>
    <el-tab-pane label="文档" name="fourth">
        <div style="background:#fff;height:500px">1111</div>
    </el-tab-pane>
    <el-tab-pane label="应用服务" name="fourth2">
        <div style="background:#fff;height:500px">1111</div>
    </el-tab-pane>
    <el-tab-pane label="开发者" name="fourth3">
        <div style="background:#fff;height:500px">1111</div>
    </el-tab-pane>
  </el-tabs>
   </div>
  </div>
</template>

<script>
import { watch } from 'vue'
export default {
  name: 'AllSerach',
  props: {},
  data() {
    return {
      searchval: '',
      isShowel: false,
      activeName: 'first'
    }
  },
  mounted() {
    const _this = this
    _this.searchval = JSON.parse(localStorage.getItem('searchval'))
  },
  methods: {
    clear: function() {
      this.searchval = ''
    }
  },
  watch: {
    searchval: function() {
      if (this.searchval) {
        this.isShowel = true
      } else {
        this.isShowel = false
      }
    }
  }
}
</script>

<style lang="less">
.el-tabs__nav-scroll{
    margin-left: 5%;
}
.el-tabs__item.is-active{
    color: #ac2807 ;
}
.el-tabs__content{
    background: white ;
    margin-top: -15px;
    }
.el-tabs__item:hover{
    color: #ac2807;
}
.el-tabs__active-bar{
    background: #ac2807;
    height: 3px;
}
.el-tabs__nav-wrap::after{
    background: none;
}
.allsearch{
    .el-tabs{
        // margin-left: 5%;
        // width: 90%;
    }
    .icon{
        width: 1.5em;
        height: 1.5em;
    }
    .top{
        height: 100px;
        width: 100%;
        .search{
            width: 70%;
            height: 50%;
            float: left;
            margin-left: 5%;
            margin-top: 2%;
            box-shadow: 0px 1.5px 5px 1.5px #cacaca;
            border-radius: 50px;
             span:nth-child(1){
                 display: inline-block;
                 margin-top: 1.5%;
                 margin-left: 20px;
                 float: left;
             }
              span:nth-child(2){
                 margin-left: 1.2%;
                 height: 100%;
                 width: 78%;
                 margin-top: 1%;
                 display: inline-block;
                 float: left;
                 input{
                   font-size: 15px;
                   background: none;
                   height: 60%;
                   width: 100%;
                }
            }
            span:nth-child(3){
                display: inline-block;
                margin-top: 1.5%;
                cursor: pointer;
                margin-left: 3%;
            }
             span:nth-child(4){
                display: inline-block;
                margin-top: 0.9%;
                margin-right: 2%;
                float: right;
                button{
                    border: none;
                    color: white;
                    height: 30px;
                    width: 60px;
                    font-size: 12px;
                    background: #ac2807;
                }
            }
        }
    }
    .bottom{
        height: 900px;
        width: 100%;
    }
}
</style>
