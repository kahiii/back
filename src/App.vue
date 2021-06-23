<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="test">test</button>
  </div>
</template>

<script>
import auth from './services/auth/authService'

export default {
  name: 'App',
  methods: {
    test () {
      auth.log()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
