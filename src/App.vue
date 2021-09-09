<template>
  <div id="app" class="h-100">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  computed: {

  }
}
</script>

<style lang="scss">
html {
  font-size: 14px;
  height: 100%;
  letter-spacing: 0.01rem;
  body {
    font-family: "Montserrat", Helvetica, Arial, serif;
    height: 100%;
    background-color: #f8f8f8;
    p {
      line-height: 1.5rem;
    }
    a {
      &:hover {
        text-decoration: none;
      }
    }
    h2, .h2 {
      font-size: 1.714rem;
    }
  }
}
</style>
