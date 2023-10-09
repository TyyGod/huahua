<template>
  <div class="main-conent main-conent-minheight">
    <el-card shadow="never" class="border-none">
      <CKEditor v-model="editorData" />
    </el-card>

    <el-card shadow="never" class="border-none" style="margin-top:4px;">
      <div v-html="editorData" />
    </el-card>

  </div>
</template>
<script>
import CKEditor from '@/components/CKEditor'
export default {
  components: {
    CKEditor
  },
  data() {
    return {
      editorData: '<p>Content of the editor.</p>'
    }
  }
}
</script>
