<template>
  <div>
    <div
      ref="editor"
      class="editor"
      :style="styles"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    />
    <el-upload
      class="uploadder-ed"
      name="file"
      :headers="upload.headers"
      :action="upload.url"
      :show-file-list="false"
      :on-success="handleFileSuccess"
    />
    <el-upload
      class="upload-demo"
      name="file"
      :headers="upload.headers"
      :action="upload.url"
      :show-file-list="false"
      :on-success="handleFileSuccess1"
    />
  </div>
</template>

<script>
import Quill from 'quill'
import { quillRedefine } from 'vue-quill-editor-upload'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { getToken } from '@/service/lib/localToken'
// 自定义video插件
const BlockEmbed = Quill.import('blots/block/embed')
class VideoBlot extends BlockEmbed {
  static create(value) {
    const node = super.create()
    node.setAttribute('src', value.url)
    node.setAttribute('controls', value.controls)
    node.setAttribute('width', value.width)
    node.setAttribute('height', value.height)
    node.setAttribute('webkit-playsinline', true)
    node.setAttribute('playsinline', true)
    node.setAttribute('x5-playsinline', true)
    return node
  }

  static value(node) {
    return {
      url: node.getAttribute('src'),
      controls: node.getAttribute('controls'),
      width: node.getAttribute('width'),
      height: node.getAttribute('height')
    }
  }
}
VideoBlot.blotName = 'simpleVideo'
VideoBlot.tagName = 'video'
Quill.register(VideoBlot)
export default {
  name: 'Editor',
  // eslint-disable-next-line vue/no-unused-components
  components: { quillRedefine },
  props: {
    /* 编辑器的内容 */
    value: {
      type: String,
      default: ''
    },
    /* 高度 */
    height: {
      type: Number,
      default: null
    },
    /* 最小高度 */
    minHeight: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      // 用户导入参数
      upload: {
        // 设置上传的请求头部
        headers: { Authorization: 'Bearer ' + getToken() },
        // 上传的地址
        url: process.env.VUE_APP_BASE_API + '/file?type=1'
      },
      Quill: null,
      currentValue: '',
      options: {
        theme: 'snow',
        bounds: document.body,
        debug: 'warn',
        modules: {
          // 工具栏配置
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
              ['blockquote', 'code-block'], // 引用  代码块
              [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
              [{ indent: '-1' }, { indent: '+1' }], // 缩进
              [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
              [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
              [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
              [{ align: [] }], // 对齐方式
              ['clean'], // 清除文本格式
              ['link', 'image', 'video'] // 链接、图片、视频
            ],
            handlers: {
              'image': function(value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector('.uploadder-ed input').click()
                } else {
                  this.quill.format('image', false)
                }
              },
              'video': function(value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector('.upload-demo input').click()
                  // this.quill.getModule("toolbar").addHandler("video", this.uploadVideoHandler)
                } else {
                  this.Quill.format('video', false)
                }
              }
            }

          }
        },
        placeholder: '请输入内容',
        readOnly: false,
        lenIndex: 0

      }
    }
  },
  computed: {
    styles() {
      const style = {}
      if (this.minHeight) {
        style.minHeight = `${this.minHeight}px`
      }
      if (this.height) {
        style.height = `${this.height}px`
      }
      return style
    }
  },
  watch: {
    value: {
      handler(val) {
        if (val !== this.currentValue) {
          this.currentValue = val === null ? '' : val
          if (this.Quill) {
            this.Quill.pasteHTML(this.currentValue)
          }
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.Quill = null
  },
  methods: {
    // uploadVideoHandler(){
    //   const input = document.querySelector('#uploadVideo')
    //   input.value = ''
    //   input.click()
    // },
    // async uploadVideo (event) {
    //   const form = new FormData()
    //   form.append('upload_file', event.target.files[0])
    //   // const url = await $.ajax(...)
    //   const addImageRange = this.quill.getSelection()
    //   const newRange = 0 + (addImageRange !== null ? addImageRange.index : 0)
    //   this.quill.insertEmbed(newRange, 'vidio', url)
    //   this.quill.setSelection(1 + newRange)
    // },
    // 获得焦点事件
    onEditorFocus(e) { this.lenIndex = e.getSelection().index },
    // 内容改变事件
    onEditorChange(e) { this.lenIndex = e.quill.getSelection().index },
    // 文件上传成功处理
    handleFileSuccess(response, file, fileList) {
      if (response.code === 200) {
        this.Quill.insertEmbed(this.lenIndex, 'image', response.data.url)
        this.Quill.setSelection(this.lenIndex + 1)
      }
    },
    handleFileSuccess1(response, file, fileList) {
      // if (response.code == 200) { // 上传后video是放在iframe中的，一般情况下是没有问题的，但在小程序中使用h5页面时，iframe中的域名需要添加到小程序业务域名中，否则会禁止访问。
      //     const addImageRange = this.Quill.getSelection()
      //     const newRange = 0 + (addImageRange !== null ? addImageRange.index : 0)
      //     this.Quill.insertEmbed(newRange, 'video', response.data.url)
      //     this.Quill.setSelection(1 + newRange)
      // }
      if (response.code === 200) { // 更好的解决方法是简单的添加一个video元素，而不是iframe，我们需要定制一个Video Embed。
        const addImageRange = this.Quill.getSelection()
        const newRange = 0 + (addImageRange !== null ? addImageRange.index : 0)
        this.Quill.insertEmbed(newRange, 'simpleVideo', {
          url: response.data.url,
          controls: 'controls',
          width: '100%',
          height: '30%'
        })
        this.Quill.setSelection(1 + newRange)
      }
    },
    init() {
      const editor = this.$refs.editor
      this.Quill = new Quill(editor, this.options)
      this.Quill.pasteHTML(this.currentValue)
      this.Quill.on('text-change', (delta, oldDelta, source) => {
        const html = this.$refs.editor.children[0].innerHTML
        const text = this.Quill.getText()
        const quill = this.Quill
        this.currentValue = html
        this.$emit('input', html)
        this.$emit('on-change', { html, text, quill })
      })
      this.Quill.on('text-change', (delta, oldDelta, source) => {
        this.$emit('on-text-change', delta, oldDelta, source)
      })
      this.Quill.on('selection-change', (range, oldRange, source) => {
        this.$emit('on-selection-change', range, oldRange, source)
      })
      this.Quill.on('editor-change', (eventName, ...args) => {
        this.$emit('on-editor-change', eventName, ...args)
      })
    }
  }
}
</script>

<style>
.editor, .ql-toolbar {
  white-space: pre-wrap!important;
  line-height: normal !important;
}
.quill-img {
  display: none;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "请输入链接地址:";
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: "保存";
  padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "14px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "10px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "18px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "文本";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "标题1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "标题2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "标题3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "标题4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "标题5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "标准字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "衬线字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "等宽字体";
}
</style>
