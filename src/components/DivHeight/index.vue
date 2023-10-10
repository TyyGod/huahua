<!-- 当前组件-我觉得用处不大 一个div传递高度的盒子 -->
<template>
  <div class="divheight" :style="{height: height}">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'DivHeight',
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
.divheight {
    display: block;
    overflow: hidden;
    overflow-y: auto;
}
</style>
