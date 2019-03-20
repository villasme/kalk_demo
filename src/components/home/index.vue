<template>
  <div class="home-index">
    <van-search placeholder="批准文号、商品名、首字母" v-model="value" />
    <lk-home></lk-home>
  </div>
</template>

<script>
import LkHome from './home'

export default {
  data () {
    return {
      value: ''
    }
  },
  components: {
    LkHome
  }
}
</script>

<style lang="postcss" scoped>
</style>

