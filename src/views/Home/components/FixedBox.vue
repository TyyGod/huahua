<template>
    <div class="fixedBox">
       <div class="fixedBox_content">
        <div class="top">
            <slot name="top" :row="value"></slot>
        </div>
        <div class="line">

        </div>
        <div class="bottom">
            <slot name="bottom" :row="value"></slot>
        </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'FixedBox',
  props: {},
  data() { return {} },
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.fixedBox{
    position:fixed;
    top: 70%;
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
            height: 30%;
            width: 80%;
            // background-color: red;
            text-align: center;
            line-height: 35px;
             font-size: 14px;
             margin-left: 10%;
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
            height: 30%;
            width: 80%;
            // background-color: blue;
            // color: white;
            text-align: center;
            margin-top: 45%;
            margin-left: 10%;
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
