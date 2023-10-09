<template>
  <el-tabs class="tabsleft" tab-position="left" :style="{height: height}">
    <slot />
  </el-tabs>
</template>
<script>
export default {
  name: 'TabsLeft',
  props: {
    height: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.tabsleft {
    ::v-deep .el-tabs__content {
        height: 100%;
        overflow: auto;
    }
}
</style>
