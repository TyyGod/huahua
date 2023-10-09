<template>
  <ckeditor v-model="editorData" :editor="editor" :config="editorConfig" />
</template>
<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import defaultOptions from './default-options'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'
export default {
  name: 'CKEditor',
  components: {
    ckeditor: CKEditor.component
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return defaultOptions
      }
    },
    toolbar: {
      type: [Array, Object],
      default() {
        return [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'indent',
          'outdent',
          '|',
          /* "imageUpload", */
          'blockQuote',
          'insertTable',
          'mediaEmbed',
          'undo',
          'redo'
        ]
      }
    },
    language: {
      type: [String, Object],
      default: 'zh-cn'
    }
  },
  data() {
    return {
      editor: ClassicEditor
    }
  },
  computed: {
    editorData: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    editorConfig: function() {
      const options = Object.assign({}, defaultOptions, this.options)
      options.toolbar = this.toolbar
      options.language = this.language
      return options
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style>
.ck-editor__editable { min-height: 200px; }
</style>
