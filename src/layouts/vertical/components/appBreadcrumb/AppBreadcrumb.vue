<template>
    <b-row
    v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
    class="content-header"
  >

    <!-- Content Left -->
    <b-col
      class="content-header-left mb-2"
      cols="12"
      md="9"
    >
      <b-row class="breadcrumbs-top">
        <b-col cols="12">
          <h2 class="content-header-title mb-0">
            {{ $route.meta.pageTitle }}
          </h2>
          <div class="breadcrumb-wrapper">
            <b-breadcrumb>
              <b-breadcrumb-item to="/">
                Home
              </b-breadcrumb-item>
              <b-breadcrumb-item
                v-for="item in $route.meta.breadcrumb"
                :key="item.text"
                :active="item.active"
                :to="item.to"
              >
                {{ item.text }}
              </b-breadcrumb-item>
            </b-breadcrumb>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.breadcrumbs-top {
  .content-header-title{
    float: left;
    border-right: 1px solid #d6dce1;
    font-weight: 500;
    color: #636363;
    padding-right: 1rem;
  }
  .breadcrumb-wrapper {
    .breadcrumb {
      padding: 0.5rem 1rem;
      margin-bottom: 0;
      background-color: transparent;
      border-radius: 0;
    }
  }
}
</style>