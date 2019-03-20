<template>
  <div class="kl-tabbar">
      <van-tabbar v-model="active">
        <slot></slot>  
      </van-tabbar>
  </div>
</template>

<script>
import VanTabbar  from 'vant/lib/tabbar';
import 'vant/lib/tabbar/style';

export default {
  props: {
    
  },
  data() {
    return {
      active: 0
    }
  },
  components: {
    VanTabbar,
  }
}
</script>

<style lang="postcss" module>
</style>
