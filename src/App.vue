<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="postcss">
@import './assets/css/reset.css';
@import './assets/css/constant.scss';

#app {
  font-size: $size-normal;
  color: $color-normal;
}
</style>
