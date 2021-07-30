<template>
  <li 
    class="nav-item has-sub"
    :class="{
      'open': isOpen,
    }"
  >
    <b-link
      class="d-flex align-items-center"
      @click="collapseGroup(!isOpen)"
    >
      <unicon :name="item.icon" />
      <span class="menu-title text-truncate">{{ item.title }}</span>
      <b-badge
        v-if="item.tag"
        pill
        :variant="item.tagVariant || 'primary'"
        class="mr-1 ml-auto"
      >
        {{ item.tag }}
      </b-badge>
    </b-link>
    <b-collapse
      v-model="isOpen"
      class="menu-content"
      tag="ul"
    >
      <component
        :is="resolveNavItemComponent(child)"
        v-for="child in item.children"
        :key="child.header || child.title"
        ref="groupChild"
        :item="child"
      />
    </b-collapse>
  </li>
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
  data () {
    return {
      isOpen: false
    }
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    resolveNavItemComponent (item) {
      if (item.header) return 'sidebar-nav-header'
      if (item.children) return 'sidebar-nav-group'
      return 'sidebar-nav-link'
    },
    collapseGroup(val) {
      this.isOpen = val
    }
  }
}
</script>

<style lang="scss">
.has-sub > a::after {
    content: "";
    height: 1.1rem;
    width: 1.1rem;
    right: 20px;
    display: inline-block;
    position: absolute;
    transition: all 0.2s ease-out;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' %3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.1rem;
}

.has-sub.open {
  >a {
    background: whitesmoke;
    border-radius: 6px;
    &::after {
      transform: rotate(90deg);
    }
  }
} 


</style>