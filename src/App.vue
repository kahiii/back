<template>
  <div id="app" class="h-100">
    <component :is="`layout-${contentLayoutType}`">
      <router-view :key="$route.path"/>
    </component>
  </div>
</template>

<script>
import LayoutVertical from './layouts/vertical/LayoutVertical.vue'
import LayoutFull from './layouts/full/LayoutFull.vue'

export default {
  name: 'App',
  components: {
    LayoutVertical,
    LayoutFull
  },
  computed: {
    contentLayoutType () {
      return this.$route.meta.layout || 'vertical'
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
    font-family: "Montserrat", Helvetica, Arial, serif;
    height: 100%;
    background-color: #f8f8f8;
    p {
      line-height: 1.5rem;
    }
    a {
      &:hover {
        text-decoration: none;
      }
    }
    h2, .h2 {
      font-size: 1.714rem;
    }
  }
}
</style>
