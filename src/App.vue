<template>
  <div id="app">
    <router-view></router-view>

    <kl-tabbar></kl-tabbar>
  </div>
</template>

<script>
import KlTabbar from './components/common/kl-tabbar'
export default {
  name: 'app',
  components: {
    KlTabbar
  }
}
</script>

<style lang="postcss">
@import './assets/css/reset.css';

#app {
  font-size: 32px;
}
</style>
