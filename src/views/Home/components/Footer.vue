<template>
  <footer>
    <div class="container">
      <div class="url-warp">
        <div class="column location">
          <div
            style="cursor: pointer;"
            @click="tohome"
          >
            <img
              src="@/assets/images/logo.png"
              alt="logo"
              class="logo"
            >
            {{ last }}
          </div>
          <div
            class="desc"
            style="margin-top: 8px;"
          >
            邮箱：hi@huoxian.cn
          </div>
          <div class="desc">
            电话：
            <a href="tel:010-82772660">010-82772660</a>
            <a href="tel:19910386797">199 1038 6797</a>
          </div>
          <div class="desc">
            总部：北京市海淀区上地东路35号颐泉汇C座3层
          </div>
          <div class="desc">
            分支机构：上海 深圳
          </div>
        </div>
        <div class="column">
          <div class="label">
            产品与服务
          </div>
          <div class="url top-url">
            企业资产发现
          </div>
          <div class="url">
            企业风险识别
          </div>
        </div>
        <div class="column">
          <div class="label">
            关于&帮助
          </div>
          <div class="url top-url">
            关于我们
          </div>
          <div class="url">
            帮助文档
          </div>
          <div class="url">
            建议反馈
          </div>
        </div>
        <div class="column">
          <div class="label">
            关注我们
          </div>
          <div class="qrCode">
            <!-- <img
              class="gongzhonghao"
              src="@/assets/images/gongzhonghao.jpg"
              alt="公众号"
            > -->
            <div class="desc">
              火线安全平台
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        Copyright© 2022 Huoxian All rights reserved.
        <span>丨</span>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
        >京ICP备20013659号-2</a>
        <span>丨</span>北京安全共识科技有限公司
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    last: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {

    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        console.log(this.$route.name)
      },
      immediate: true
    }
  },
  mounted() {

  },
  methods: {
    tohome() {
      this.$router.push('/')
      this.$emit('lastChange', this.last + '1')
    }
  }
}
</script>

<style scoped lang="scss">
footer {
  background: #1B2332;
  padding: 0 20px;
  color: #ABABAB;

  .url-warp {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;

    .column {
      img {
        height: 32px;
      }

      .desc {
        font-size: 12px;
        line-height: 17px;

        & + .desc {
          margin-top: 11px;
        }

        a {
          color: #ABABAB;

          & + a {
            margin-left: 16px;
          }
        }
      }

      .label {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
      }

      .top-url {
        margin-top: 16px;
      }

      .url {
        font-size: 12px;
        line-height: 17px;
        cursor: pointer;
        display: block;
        color: #ABABAB;

        &:hover {
          color: #d73533;
        }

        & + .url {
          margin-top: 11px;
        }
      }

      .gongzhonghao {
        width: 72px;
        height: 72px;
        margin-top: 16px;
      }
    }
  }

  .copyright {
    color: #ABABAB;
    font-size: 12px;
    padding-top: 24px;
    border-top: 1px groove #ABABAB;
    text-align: center;
    padding-bottom: 36px;

    a {
      color: #ABABAB;
    }
  }
}

@media only screen and (max-width: 767px) {
  footer {
    width: fit-content;
  }
}

@media only screen and (min-width: 768px) {
}
</style>
