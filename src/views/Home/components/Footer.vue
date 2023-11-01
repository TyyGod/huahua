<template>
  <footer>
    <div class="container">
      <div class="warp-content">
        <div class="url-warp">
          <div class="column">
            <div class="label">
              快捷入口
            </div>
            <div v-for="item in pathList" :key="item.label" class="url top-url" @click="goUrl(item)">
              {{ item.label }}
            </div>
          </div>
          <div class="column">
            <div class="label">
              关于&帮助
            </div>
            <div v-for="item in urlList" :key="item.label" class="url top-url" @click="goUrl(item)">
              {{ item.label }}
            </div>
          </div>
          <div class="column">
            <div class="label">
              联系我们
            </div>
            <div class="qrCode">
              <div
                class="desc"
                style="margin-top: 8px;"
              >
                邮箱
                <div class="desc">revali@company.name</div>
              </div>
              <div class="desc">
                电话：
                <div class="desc">
                  <a href="tel:0831-33319000">0831-33319000</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="warp-right">
          <img src="https://pss.bdstatic.com/static/superman/img/qrcode_download-02b84e1f66.png" alt="">
          <div class="weChat">微信公众号</div>
        </div>
      </div>
      <div class="copyright">
        Copyright©2018-2023
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
      pathList: [
        {
          label: '文档中心',
          url: '/home/document'
        },
        {
          label: '备案中心',
          url: '/home/document'
        },
        {
          label: '行业要闻',
          url: '/home/national'
        },
        {
          label: '关于我们',
          url: '/home/coal'
        }
      ],
      urlList: [
        {
          label: '官网1',
          url: '/'
        },
        {
          label: '官网2',
          url: '/'
        },
        {
          label: '官网3',
          url: '/'
        }
      ]
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
    },
    goUrl(item) {
      this.$router.push(item.url)
    }
  }
}
</script>

<style scoped lang="scss">
footer {
  background: #1B2332;
  color: #ABABAB;
  .warp-content{
    padding: 60px 140px;
    display: flex;
    justify-content: space-between;
    .warp-right{
      padding: 30px 150px;
      img{
        width: 100px;
        height: 100px;
      }
      .weChat{
        margin-top: 24px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .url-warp {
    flex: 1;
    display: flex;
    gap: 100px;
    padding: 24px 0;
    border-right: 1px groove #ABABAB;

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
        padding-bottom: 16px;
      }

      .top-url {
        margin-top: 16px;
      }
      .qrCode{
        margin-top: 16px;
        .desc{
          margin-top: 11px;
        }
      }

      .url {
        font-size: 12px;
        line-height: 17px;
        cursor: pointer;
        display: block;
        color: #ABABAB;
        cursor: pointer;

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
