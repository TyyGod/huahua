<template>
  <div class="drawerBox">
    <div class="drawerLeft">
      <div class="drawerData_content">
        <div v-for="i in drawerData" :key="i.id" class="drawerData_content_li">
          <span @click="changeTitle(i)" :class="activeIndex === i.id ? 'activeLic' : 'Lic' ">  {{i.title}}</span>
        </div>
      </div>
    </div>
    <div class="drawerRight">
      <div v-for="item in drawerData" :key="item.id">
        <div v-for="i in item.cont" v-show="i.tid === activeIndex" :key="i.id">
          {{i.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerBox',
  props: {
    drawerData: {
      type: Array
    }
  },
  data() {
    return {
      activeIndex: 1
    }
  },
  mounted() {},
  methods: {
    changeTitle: function(item) {
      this.activeIndex = item.id
    } },
  watch: {}
}
</script>

<style lang="less" scoped>
.drawerBox{
  width: 100%;
  height: 100%;
  ::-webkit-scrollbar{
      width: 5px;
  }
  ::-webkit-scrollbar-track{
     background-color: #EFEFEF;
  }
  ::-webkit-scrollbar-thumb{
      background-color: #acacac;
  }
  .drawerLeft{
    height: 100%;
    width:20%;
    background-color: #EFEFEF;
    float: left;
    .drawerData_content{
        height: 80%;
        width: 40%;
        margin-left: 35%;
        margin-top: 15%;
        // background-color: red;
        overflow-y: auto;
        .drawerData_content_li{
            cursor: pointer;
            font-size: 15px;
            height: 20px;
            // background-color: red;
            padding-bottom: 30px;
            padding-top: 30px;
            .Lic{
                color: black;
            }
            .activeLic{
                color: #AC2807;
            }
        }
    }
  }
  .drawerRight{
    height: 100%;
    width: 80%;
    float: left;
  }
}
</style>
