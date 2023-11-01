<template>
  <div class="coal">
    <div class="banner">
      <img src="https://cloudcache.tencent-cloud.com/qcloud/ui/portal-set/build/Cooperation/images/bannerPC-new_0f3.jpg" alt="">
      <div class="fiexdBox">
        <div class="top">
          <p class="title"> 煤炭行业上云新选择</p>
          <p class="info">文字描述文字描述文字描述文字描述文
            字描述文字描述文字描述文字描述文字描述文字描述文字描述文字
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p>
          <div class="videoButton">
            <div class="playButton" @click="showVideo=!showVideo">
              <img src="@/assets/images/noplay.png" alt="">
              点击观看视频
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="introduce">
      <div class="title">为什么选择煤炭行业云</div>
      <div class="advantageCard">
        <div v-for="item in advantageList" :key="item.name" :class="newCardHover===item.name&&'about-feature-card-hover'" class="about-feature-card" @mouseenter="hAdvantage(item)">
          <div
            :style="`background: url(${item.url}) 50% no-repeat;
    background-size: contain;`"
            class="is-current"
          />
          <div class="name">{{ item.name }}</div>
          <div class="text">
            {{ item.text }}
          </div>
        </div>

      </div>
    </section>
    <section class="perfect-matrix">
      <div class="title">完善的产品矩阵</div>
      <div class="perfect-matrix-card">
        <div v-for="item in matrixList" :key="item.name" class="perfect-matrix-cardli">
          <img :src="item.url" alt="">
          <span>{{ item.name }}</span>
          <i class="el-icon-arrow-right" />
        </div>
      </div>
    </section>
    <section class="ecological-services">
      <div class="services_section_inner">
        <header class="pls-section__hd">
          <h2 class="pls-section__title">强大的生态服务</h2>
          <div class="pls-section__desc">腾讯云强大的生态体系和多样化的服务支持，助您无忧上云</div>
        </header>
        <div class="pls-section__bd">
          <div v-for="item in sceneCardList" :key="item.name" class="pls-section__bd_li">
            <div class="about-scene-card-cnt">
              <h3 class="about-scene-card-tit">{{ item.name }}</h3>
              <div class="about-scene-card-desc">{{ item.text }}</div>
              <div class="about-scene-card-arrowlink">
                <span class="tp-link__inner">{{ item.go }}</span>
                <i class="el-icon-arrow-right" />
              </div>
            </div>
            <div class="about-scene-card-bg">
              <img class="about-scene-card-img" :src="item.url">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="perfect-certification">
      <div class="title">获得的资质认证</div>
      <div class="certification">
        <div v-for="item in [1,2]" :key="item" class="certification_li">
          <div>资质认证{{ item }}</div>
          <img src="https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1575354314037_q1nf0eessfzssv2t9.png" alt="">
        </div>
      </div>
      <div class="authority">
        <div v-for="item in [1,2,3,4,5,6]" :key="item" class="authority_li">
          <img src="https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1575354735666_cluuj5hgv58a4te29.png" alt="">
          <div>IOS 2700{{ item }}</div>
        </div>
      </div>
    </section>
    <TheMask :show-video="showVideo" @changeShowVideo="changeShowVideo" />
  </div>
</template>

<script>
import TheMask from './components/Mask.vue'
export default {
  name: 'Vue',
  components: {
    TheMask
  },
  props: {

  },
  data() {
    return {
      video: null,
      showVideo: false,
      newCardHover: '高效稳定',
      advantageList: [
        {
          name: '高效稳定',
          text: '深厚的基础架构,自研的操作系统，多年技术锤炼和海量服务经验，为客户提供高性能、易运维、智能化、弹性化的云服务。',
          url: 'https://qcloudimg.tencent-cloud.cn/raw/c158861916012432f1441bb97d0e1f51/feature-efficient.svg'
        },
        {
          name: '安全可靠',
          text: '七大安全联合实验室团队，一体化智慧安全管理体系，助您建立系统性的安全防御机制。',
          url: 'https://qcloudimg.tencent-cloud.cn/raw/c9beadbfcf8e0dae5251a0f7192a2371/fetaure-reliable.svg'
        },
        {
          name: '丰富场景',
          text: '从基础设施到行业应用领域，提供完善的产品体系，为各种业务场景提供全栈解决方案，助力业务腾飞。',
          url: 'https://qcloudimg.tencent-cloud.cn/raw/c158861916012432f1441bb97d0e1f51/feature-efficient.svg'
        },
        {
          name: '开放生态',
          text: '完整的合作伙伴生态体系，与产业链上下游通力合作，提供优质的服务和丰富的产品满足您全方位的业务需求。',
          url: 'https://qcloudimg.tencent-cloud.cn/raw/3cf3649054291c7a36d00ff8240746bd/feature-ecology.svg'
        },
        {
          name: '服务保障',
          text: '7*24小时高效服务保障，多元化的服务支持，提供专业的上云前、中、后全流程技术服务，让您的云上之旅更安心。',
          url: 'https://qcloudimg.tencent-cloud.cn/raw/e07a88e0cf6fba26dfdd9172d12a628e/fetature-guarantee.svg'
        }
      ],
      matrixList: [
        {
          name: '计算',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '网络',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '存储',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '数据库',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '容器与中间件',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '安全',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '边缘云',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '视频云',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '大数据',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '人工智能与算法',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '企业应用',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        },
        {
          name: '查看全部产品',
          url: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/portal-set/src/projects/Cooperation/components/Ecology/css/img/icon-cooperation.png'
        }
      ],
      sceneCardList: [
        {
          name: '解决方案',
          text: '提供支持多个业务场景的解决方案',
          go: '前往解决方案',
          url: 'https://imgcache.qq.com/qcloud/tcloud_dtc/static/static_source_business/e4187dbf-ddfb-4268-9df4-06da65bdbfdd.png'
        },
        {
          name: '云市场',
          text: '满足最苛刻软件和服务需求的云市场',
          go: '前往云市场',
          url: 'https://imgcache.qq.com/qcloud/tcloud_dtc/static/static_source_business/83203007-54f1-45cb-a446-527d62c77269.png'
        },
        {
          name: '官方文档',
          text: '丰富权威的官方文档，助您快速上云',
          go: '前往官方文档',
          url: 'https://imgcache.qq.com/qcloud/tcloud_dtc/static/static_source_business/f163b582-bd24-4bc4-9cce-6de3281c6609.png'
        },
        {
          name: '服务支持',
          text: '多样化的服务支持，提供全流程服务',
          go: '前往服务支持',
          url: 'https://imgcache.qq.com/qcloud/tcloud_dtc/static/static_source_business/741f01c6-d1f2-44ac-94e3-7f6cedd801f3.png'
        }
      ]
    }
  },
  mounted() {
    this.video = document.getElementById('video')
  },
  methods: {
    changeShowVideo(show) {
      this.showVideo = show
    },
    hAdvantage(item) {
      this.newCardHover = item.name
    }
  }
}
</script>

<style lang="scss" scoped>

.banner {
  position: relative;
  width: 100%;
  height: 350px;
  img{
    width: 100%;
    height: 100%;
  }
  .fiexdBox{
    position: absolute;
    height: 200px;
    width: 50%;
    // background: red;
    top: 0px;
    left: 5%;
    .top{
      position: relative;
      margin-top: 80px;
      .title{
        font-size: 45px;
        letter-spacing: 3px;
      }
      .info{
        width: 70%;
        margin-top: 20px;
        margin-bottom: 40px;
        font-size: 12px;
        color: #4c5b76;
        line-height: 20px;
      }
    }
  }
  .videoButton{
    width: 180px;
    height: 48px;
    border: 1px solid #17A6FA;
    .playButton{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      color: #17A6FA;
      font-size: 16px;
      cursor: pointer;
      img{
        width: 40px;
        height: 40px;
      }
    }

  }
  #video{
    display: none;
  }
}
.introduce{
  height: 450px;
  margin-top: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  padding: 0 100px;
  background-image: url("https://cloudcache.tencent-cloud.com/qcloud/ui/portal-set/build/About/images/bg-mod-choose_507.jpg");
  .title{
    margin-bottom: 82px;
    text-align: center;
    font-size: 28px;
    color: #16181a;
    line-height: 48px;
  }
}
.advantageCard{
  display: flex;
  .about-feature-card{
    position: relative;
    display: block;
    flex: 0 0 auto;
    width: 20%;
    box-sizing: border-box;
    padding: 40px 28px;
    height: 270px;
    max-width: 236px;
    .name{
      margin-bottom: 32px;
      font-size: 20px;
      color: #495770;
      letter-spacing: 0;
      line-height: 28px;
      font-weight: 500;
    }
    .text{
      font-size: 14px;
      color: #9ea6b3;
      letter-spacing: 0;
      line-height: 24px;
      max-height: 120px;
      display: -webkit-box;
      box-orient: vertical;
      -webkit-line-clamp: 5;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: normal;
    }
    .is-current{
      width: 136px;
      height: 136px;
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      top: -70px;
      right: 8px;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
  }
  .about-feature-card-hover{
    background: url('https://cloudcache.tencent-cloud.com/qcloud/ui/portal-set/build/About/images/featrue-card-bg_0c8.png') 50% no-repeat;
    background-size: contain;
    .is-current{
      opacity: 1;
      visibility: visible;
    }
    .name{
      color: #fff;
    }
    .text{
      color: #fff;
      transition: all .2s ease-in-out;
    }
  }
}
.perfect-matrix{
  padding: 40px 60px;
  background-color: #fff;
  .title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #16181a;
    line-height: 48px;
  }
  .perfect-matrix-card{
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    .perfect-matrix-cardli{
      background: #f5f7fa;
      width: 24%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 1%;
      cursor: pointer;
      >img{
        height: 50px;
      }
    }

  }
}
.ecological-services{
  color: #fff;
  background-repeat: no-repeat;
  background-color: #242933;
  background-image: url('https://cloudcache.tencent-cloud.com/qcloud/ui/portal-set/build/About/images/bg-mod-service-left_469.jpg'),url('https://cloudcache.tencent-cloud.com/qcloud/ui/portal-set/build/About/images/bg-mod-service-right_76f.png');
  background-position: calc(50% - 611.5px) bottom,calc(50% + 834.5px) top;
  background-size: auto 235px,auto 220px;
  padding-top: 80px;
  padding-bottom: 80px;
  .services_section_inner{
    margin: 0 auto;
    box-sizing: border-box;
    max-width: 1180px;
    color: #fff;
    .pls-section__hd{
      margin-bottom: 60px;
      text-align: center;
      .pls-section__title{
        font-size: 28px;
        line-height: 48px;
        font-weight: 400;
      }
      .pls-section__desc{
        margin-top: 8px;
        line-height: 26px;
        font-size: 16px;
      }

    }
    .pls-section__bd{
      display: flex;
      flex-flow: row wrap;
      box-sizing: border-box;
      margin-left: -10px;
      margin-right: -10px;
      margin-bottom: -20px;
    }
    .pls-section__bd_li{
      margin-bottom: 20px;
      padding-left: 10px;
      padding-right: 10px;
      min-height: 280px;
      box-sizing: border-box;
      display: block;
      position: relative;
      padding: 20px 20px 170px;
      overflow: hidden;
      background-image: linear-gradient(179deg,#292f3b 2%,#242933);
      box-shadow: 8px 8px 20px 0 rgba(18,21,26,.6), -8px -8px 20px 0 rgba(54,62,77,.5), inset 0 4px 20px 0 rgba(36,41,51,.5);
      border-radius: 4px;
      cursor: pointer;
      flex: 0 0 auto;
      width: 25%;
      &:hover {
        background: #242933;
        box-shadow: inset 8px 8px 20px 0 rgba(18,21,26,.5), inset -8px -8px 20px 0 rgba(54,62,77,.5);
        border-radius: 4px;
      }
      .about-scene-card-cnt{
        .about-scene-card-tit {
            margin-bottom: 8px;
            line-height: 28px;
            font-size: 20px;
            color: #fff;
            font-weight: 400;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .about-scene-card-desc {
          line-height: 24px;
            font-size: 14px;
            color: hsla(0,0%,100%,.6);
            box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            max-height: 48px;
            -webkit-line-clamp: 2;
        }
        .about-scene-card-arrowlink {
            margin-top: 4px;
            line-height: 24px;
            font-size: 14px;
        }
      }
      .about-scene-card-bg{
        position: absolute;
        right: 0;
        bottom: 0;
        overflow: hidden;
        img{
          display: block;
          width: 200px;
          height: 200px;
          font-size: 0;
        }
      }
    }
  }
}
.perfect-certification{
  padding: 40px 60px;
  background-color: #fff;
  .title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #16181a;
    line-height: 48px;
  }
  .certification{
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 1%;
    >div{
      display: flex;
      align-items: center;
      gap: 1%;
    }
    .certification_li{
      width: 49%;
      border: 1px solid #9ea6b3;
      height: 100px;
      >div{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img{
        width: 50%;
        height: 100%;
      }
    }
  }
  .authority{
    margin-top: 40px;
    margin-bottom: 60px;
    background-image: linear-gradient(0deg,#fff,#f3f5f8);
    border: 2px solid #fff;
    box-shadow: 8px 8px 20px 0 rgba(55,99,170,.1), -8px -8px 20px 0 #fff;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .authority_li{
      >div{
        margin-top: 5px;
        text-align: center;
      }
      img{
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>
