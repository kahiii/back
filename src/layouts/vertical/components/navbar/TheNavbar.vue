<template>
<nav class="navbar header-navbar navbar navbar-shadow align-items-center navbar-light navbar-expand floating-nav">
  <div class="navbar-container d-flex content align-items-center">

        <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">

      <!-- Bookmarks Container -->
      <Bookmarks />
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <UserDropdown />
    </b-navbar-nav>
  </div>
</nav>
</template>

<script>
import Bookmarks from './Bookmarks.vue'
import UserDropdown from './UserDropdown.vue'

export default {
  components: { Bookmarks, UserDropdown },
}
</script>

<style lang="scss">
.header-navbar {
  font-family: "Montserrat", Helvetica, Arial, serif;
  padding: 0 !important;
  &.navbar-shadow {
    box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  }

  &.navbar-light {
      background: #fff;
  }

  &.floating-nav {
    margin: 0 0 1.3rem 0;
    border-radius: 0.428rem;
    .navbar-container {
      padding: 0.8rem 1rem;
      flex-basis: 100%;
    }
  }

}
</style>