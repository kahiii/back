<template>
  <div class="app-content content">
    <TheNavbar />
    <AppBreadcrumb />
    <div class="content-body">
      <slot />
    </div> 
  </div>
</template>

<script>
import AppBreadcrumb from './components/appBreadcrumb/AppBreadcrumb.vue'
import TheNavbar from './components/navbar/TheNavbar.vue'

export default {
  components: { TheNavbar, AppBreadcrumb },
}
</script>

<style lang="scss">
.app-content {
  padding: 1rem 2rem 0;
  &.content {
    margin-left: 260px;
  }
}
</style>