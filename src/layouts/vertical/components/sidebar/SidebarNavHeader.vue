<template>
  <li class="navigation-header text-truncate">
    <span>{{this.item.header}}</span>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>

</style>