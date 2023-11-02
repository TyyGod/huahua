<template>
  <div class="Support">
    <div class="banner">
      <img src="https://cloudcache.tencent-cloud.com/qcloud/ui/portal-set/build/Cooperation/images/bannerPC-new_0f3.jpg" alt="">
      <div class="fiexdBox">
        <div class="top">
          <p class="title">服务支持</p>
          <p class="info">文字描述文字描述文字描述文字描述文
            字描述文字描述文字描述文字描述文字描述文字描述文字描述文字
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p>
        </div>
      </div>
    </div>
    <section class="basic-services">
      <div class="title">基础服务</div>
      <div class="content-info">工程师团队为您提供7*24小时技术服务支持</div>
      <div class="perfect-matrix-card">
        <div v-for="item in basicList" :key="item.name" class="perfect-matrix-cardli">
          <span class="name">{{ item.name }}</span>
          <div class="info">{{ item.content }}</div>
          <div class="basic-customer">
            <div v-for="obj in item.aList" :key="obj.title" class="basic-tab">
              <div>{{ obj.title }}</div>
              <i class="el-icon-arrow-right" />
            </div>
            <div v-for="obj in item.telList" :key="obj.title" class="basic-tel">
              <div>{{ obj.title }}:</div>
              <span>{{ obj.tel }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="exclusive-services">
      <div class="title">专属服务</div>
      <div class="content-info">工程师团队为您提供7*24小时技术服务支持</div>
      <div class="perfect-matrix-card">
        <div v-for="item in exclusiveList" :key="item.name" class="exclusive-matrix-cardli">
          <span class="name">{{ item.name }}</span>
          <div class="info">{{ item.content }}</div>
          <div class="exclusive-customer">
            了解详情
          </div>
        </div>
      </div>
    </section>
    <section class="expert-services">
      <div class="title">专家培训</div>
      <div class="content-info">产品和技术能力培训，为团队人才赋能</div>
      <div class="expert-matrix-card">
        <div v-for="(item, index) in expertList" :key="index" :style="`background: url(${item.url}) no-repeat 100%;`" class="expert-matrix-cardli">
          <div class="expert-img-name">{{ item.name }}</div>
        </div>
        <div class="expert-more">查看更多 <i class="el-icon-arrow-right" /></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Vue',
  props: {

  },
  data() {
    return {
      basicList: [
        {
          name: '在线服务',
          content: '7*24小时客服，为您推荐最佳方案',
          aList: [
            {
              title: '智能客服',
              url: ''
            },
            {
              title: '人工客服',
              url: ''
            }
          ]
        },
        {
          name: '工单服务',
          content: '技术工程师7*24小时竭诚为您提供专业技术支持',
          aList: [
            {
              title: '提交工单',
              url: ''
            },
            {
              title: '我的工单',
              url: ''
            }
          ]
        },
        {
          name: '服务热线',
          content: '7*24即时响应您的需求，让您无后顾之忧',
          telList: [
            {
              title: '支持热线',
              tel: '4001132111'
            },
            {
              title: '售前电话',
              tel: '29922849'
            }
          ]
        },
        {
          name: '建议反馈',
          content: '感谢您对我们的支持，您的宝贵建议是我们前进的动力',
          aList: [
            {
              title: '在线反馈',
              url: ''
            }
          ]
        }
      ],
      exclusiveList: [
        {
          name: '上云迁移服务',
          content: '云服务云服务云服务云服务云服务云服务云服务云服务'
        },
        {
          name: '运维服务',
          content: '客户要求客户要求客户要求客户要求客户要求客户要求客户要求客户要求客户要求客户要求'
        },
        {
          name: '专家服务',
          content: '配置优化配置优化配置优化配置优化配置优化配置优化配置优化配置优化配置优化配置优化配置优化'
        }
      ],
      expertList: [
        {
          name: '培训专题',
          url: 'https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          name: '培训专题',
          url: 'https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          name: '培训专题',
          url: 'https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          name: '培训专题',
          url: 'https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          name: '培训专题',
          url: 'https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          name: '培训专题',
          url: 'https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          name: '培训专题',
          url: 'https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          name: '培训专题',
          url: 'https://img2.baidu.com/it/u=3325681724,843062485&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        }
      ]

    }
  },
  mounted() {

  },
  methods: {

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
}
.basic-services{
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
  .content-info{
    text-align: center;
    margin-top: 8px;
    font-size: 14px;
    color: #4c5b76;
  }
  .perfect-matrix-card{
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    .perfect-matrix-cardli{
      background: #f5f7fa;
      padding: 24px;
      width: 49%;
      height: 180px;
      margin-bottom: 1%;
      cursor: pointer;
      .name{
        font-size: 18px;
        font-weight: 500;
      }
      .info{
        margin-top: 14px;
        font-size: 12px;
        color: #4c5b76;
        line-height: 20px;
      }
      .basic-tel{
         display: flex;
         align-items: center;
         gap: 16px;
         width: 100%;
         margin-bottom: 12px;
         >span{
           color: #17A6FA;
         }
      }
      .basic-customer{
        margin-top: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .basic-tab{
           display: flex;
           gap: 12px;
           align-items: center;
           color: #17A6FA;
           >div{
             cursor: pointer;
           }
        }
      }
    }

  }
}
.exclusive-services{
  padding: 40px 60px;
  .title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #16181a;
    line-height: 48px;
  }
  .content-info{
    text-align: center;
    margin-top: 8px;
    font-size: 14px;
    color: #4c5b76;
  }
  .perfect-matrix-card{
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    .exclusive-matrix-cardli{
      background: #fff;
      padding: 24px;
      width: 32%;
      margin-bottom: 1%;
      cursor: pointer;
      .name{
        font-size: 18px;
        font-weight: 500;
      }
      .info{
        margin-top: 14px;
        font-size: 12px;
        color: #4c5b76;
        line-height: 20px;
        height: 120px;
      }
      .exclusive-customer{
        background-color: #17A6FA;
        margin: 0 -24px -24px -24px;
        line-height: 48px;
        color: #fff;
        cursor: pointer;
        text-align: center;

      }
    }
  }
}
.expert-services{
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
  .content-info{
    text-align: center;
    margin-top: 8px;
    font-size: 14px;
    color: #4c5b76;
  }
  .expert-matrix-card{
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    .expert-matrix-cardli{
      padding: 24px;
      width: 24%;
      height: 180px;
      margin-bottom: 1%;
      cursor: pointer;
      position: relative;
      .expert-img-name{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        line-height: 48px;
        background-color: #f5f7fa98;
        padding-left: 24px;
        color: #fff;
      }
    }
    .expert-more{
      width: 100%;
      color: #17A6FA;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
      margin-top: 24px;
    }
  }
}

</style>
