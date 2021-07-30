<template>
  <div>
    <Sidebar />
    <layout-vertical-content-renderer>
      <slot />
    </layout-vertical-content-renderer>
  </div>
</template>

<script>
import LayoutVerticalContentRenderer from './LayoutVerticalContentRenderer.vue'
import Sidebar from './components/sidebar/Sidebar.vue'

export default {
  name: 'layout-vertical',
  components: {
    LayoutVerticalContentRenderer,
    Sidebar,
  }
}
</script>

<style>

</style>