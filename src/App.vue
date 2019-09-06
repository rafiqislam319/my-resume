<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/includes/Header'

export default {
  name: 'App',
  components: {
    'my-header': Header
  }
}
</script>

<style>
</style>
