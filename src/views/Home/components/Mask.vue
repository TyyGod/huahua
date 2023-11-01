<template>
  <div v-if="showVideo" class="Mask">
    <div class="Mask0" />
    <div class="video-close" @click="$emit('changeShowVideo', !showVideo)">关闭视频</div>
    <div class="video-div">
      <div class="video-demo">
        <video
          id="video"
          :poster="imgurl"
          autoplay
          controls="controls"
          src="https://qcloudimg.tencent-cloud.cn/raw/5ac92ca43ebbeb8c797d20fb0c2dc578.mp4"
        />
      </div>
      <div class="video-info">
        本视频由腾讯产业互联网学堂提供，更多云计算、大数据、人工智能课程
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMask',
  props: {
    showVideo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      video: null,
      imgurl: '@/assets/images/bg.jpg'
    }
  },
  mounted() {
    this.video = document.getElementById('video')
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.Mask{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .Mask0{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
  }
  .video-close {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 32px;
    height: 32px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .video-div{
    position: relative;
    max-width: 98%;
    width: 700px;
    max-height: 100%;
    height: 400px;
    font-size: 14px;
    line-height: 500px;
    color: #fff;
    background-color: #000;
    z-index: 10003;
    border: 1px solid #000;
  }
  .video-demo{
    position: absolute;
    top: 40px;
    bottom: 40px;
    left: 0;
    right: 0;
    width: 100%;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video-info{
    border-top: 1px solid #333;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 40px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666666;
  }
  #video{
    max-width: 100%;
    max-height: 100%;
    min-width: 500px;
    height: 100%;
    width: 100%;
  }
}
</style>
