<template>
  <ul>
    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
    />
  </ul>
</template>

<script>
import SidebarNavGroup from './SidebarNavGroup.vue'
import SidebarNavHeader from './SidebarNavHeader.vue'
import SidebarNavLink from './SidebarNavLink.vue'

export default {
  components: {
    SidebarNavGroup,
    SidebarNavHeader,
    SidebarNavLink,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    resolveNavItemComponent (item) {
      if (item.header) return 'sidebar-nav-header'
      if (item.children) return 'sidebar-nav-group'
      return 'sidebar-nav-link'
    }
  }
}
</script>

<style>

</style>