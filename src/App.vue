<template>
  <transition name="router-fade" mode="out-in">
    <router-view></router-view>
  </transition></template>
<script>
import Hello from './components/Hello'
export default {
  name: 'app',
  data() {
    return {
    };
  },
  component: {
      Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
