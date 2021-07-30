<template>
  <div class="main-menu menu-fixed menu-accordion menu-shadow">
    <div class="navbar-header expanded">
      Logo
    </div>
    <VuePerfectScrollbar
      tagname="ul"
      class="main-menu-content scroll-area"
    >
      <SidebarNavItems
        :items="navMenuItems"
        class="navigation navigation-main"
      />
    </VuePerfectScrollbar>
  </div>
</template>

<script>
import SidebarNavItems from './SidebarNavItems.vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import navMenuItems from '@navigation'

export default {
  components: {
    VuePerfectScrollbar,
    SidebarNavItems
  },
  data () {
    return {
      navMenuItems
    }
  }
}
</script>

<style lang="scss">
.main-menu {
  z-index: 1031;
  position: absolute;
  display: table-cell;
  height: 100%;
  width: 260px;
  overflow: hidden;
  color: #6e6b7b;
  background: #fff;
  &.menu-fixed {
    position: fixed;
  }
  &.menu-shadow {
    box-shadow: 0 0 15px 0 rgba(34, 41, 47, 0.05);
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .navbar-header {
    position: relative;
    padding: 0.35rem 1rem 0.3rem 1.64rem;
    height: 4.45rem;
  }
  .main-menu-content {
    height: calc(100% - 4.45rem) !important;
    position: relative;
    .navigation {
      font-size: 1.1rem;
      font-family: "Montserrat", Helvetica, Arial, serif;
      font-weight: 400;
        li a {
        position: relative;
        margin: 0 15px;
        padding: 10px 15px 10px 15px;
        color: #625f6e;
        line-height: 1.45;
        transition: 0.5s ease;
        &:hover {
          cursor: pointer;
          transform: translateX(5px);
        }
        svg {
          margin-right: 1.1rem;
        }
      }
    }
  }
}
</style>