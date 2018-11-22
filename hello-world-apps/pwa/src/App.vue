<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HelloWorldServices type="Node" domain="localhost:7272" />
    <HelloWorldServices type="Java" domain="localhost:7070" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HelloWorldServices from './components/HelloWorldServices.vue'

export default {
  name: 'app',
  components: { HelloWorldServices }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
