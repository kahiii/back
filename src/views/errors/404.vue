<template>
  <div class="misc-wrapper">
    <Logo />
    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-4">
          Page Introuvable 🕵🏻‍♀️
        </h2>
        <p class="mb-4">
          Oops! 😖 La page que vous recherchez n'existe pas...
        </p>
        <b-button
          variant="primary"
          class="mb-2 btn-sm-block"
          :to="{path:'/'}"
        >
          Accueil
        </b-button>
        <!-- image -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Logo: () => import('@/components/globals/Logo.vue')
  }
}
</script>

<style lang="scss" scoped>
.logo-brand {
  position: absolute;
  top: 20px;
  left: 20px;
}
.misc-wrapper {
  display: flex;
  flex-basis: 100%;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  .misc-inner {
    position: relative;
    max-width: 750px;
    h2 {
      font-family: inherit;
      font-weight: 500;
      line-height: 1.2;
      color: #5e5873;
    }
    p {
      color: #6e6b7b;
    }
    .btn {
      padding: 0.786rem 1.5rem;
      border-radius: 0.358rem;
      font-weight: 500;
    }
  }
}
</style>
