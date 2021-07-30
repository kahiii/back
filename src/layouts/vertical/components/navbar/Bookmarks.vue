<template>
  <b-navbar-nav class="nav">
    <b-nav-item
      v-for="(bookmark, index) in bookmarks"
      :id="`bookmark-${index}`"
      :key="index"
      :href="bookmark.route"
    >
      <unicon :name="bookmark.icon" />
      <b-tooltip
        triggers="hover"
        :target="`bookmark-${index}`"
        :title="bookmark.title"
        :delay="{ show: 1000, hide: 50 }"
      />
    </b-nav-item>
  </b-navbar-nav>
</template>

<script>
import navMenuItems from '@navigation'

export default {
  data () {
    return {
      navMenuItems
    }
  },
  computed: {
    bookmarks: function() {
      return this.navMenuItems.filter(item => item.isBookmarked)
    }
  }
}
</script>

<style>

</style>