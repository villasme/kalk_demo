<template>
  <div class="home">
      <kl-home-panel>
          <div slot="content">
              <goods-item-vertical></goods-item-vertical>
          </div>
      </kl-home-panel>
  </div>
</template>

<script>
import KlHomePanel from '../common/kl-home-panel'
import GoodsItemVertical from './goods-item_vertical'

export default {
  components: {
    KlHomePanel,
    GoodsItemVertical
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="postcss" scoped>

</style>