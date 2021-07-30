<template>
  <li class="nav-item">
    <b-link class="d-flex align-items-center" :href="item.route">
      <unicon 
        :name="item.icon || 'circle'"
        :class="{
          'little-icon': !item.icon,
        }"
      />
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

<style lang="scss">
.little-icon {
  margin-left: 1rem;
  svg {
  height: 12px;
  width: 12px;
  }
}
</style>