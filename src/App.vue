<template>
  <div id="app" class="h-100">
    <component :is="`layout-${contentLayoutType}`">
      <router-view />
    </component>
  </div>
</template>

<script>
import LayoutVertical from './layouts/vertical/LayoutVertical.vue'

export default {
  name: 'App',
  components: {
    LayoutVertical
  },
  computed: {
    contentLayoutType () {
      return this.$route.meta.layout
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 14px;
  height: 100%;
  letter-spacing: 0.01rem;
  body {
    height: 100%;
    background-color: #f8f8f8;
    p {
      line-height: 1.5rem;
    }
    a {
    text-decoration: none;
    }
  }
}
</style>
