<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { computed, defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'svgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.iconClass}`
    })
    const svgClass = computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className
      } else {
        return 'svg-icon'
      }
    })
    return {
      iconName,
      svgClass,
    }
  },
})
</script>

<style scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
