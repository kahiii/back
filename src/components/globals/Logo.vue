<template>
  <b-link
    class="logo-brand"
    to="/"
  >
    <span class="brand-logo mr-4">
      <b-img
        :src="require('@assets/img/logos/logo.png')"
        alt="logo"
      />
    </span>
    <div class="brand-name">
      <h2 class="brand-text">
        La Couleur
      </h2>
      <h2 class="brand-text">
        Des Maux
      </h2>
    </div>
  </b-link>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.logo-brand {
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: none;
  }
  .brand-logo img {
    max-width: 45px;
  }
  .brand-name {
    text-align: center;
    .brand-text {
      margin: 0;
      color: #3e5ea9;
      font-weight: 600;
      letter-spacing: 0.01rem;
      font-size: 1.3rem;
      &:first-child {
        color: #192b44
      }
    }
  }
}
</style>