<template>
  <div class="home">
      <kl-home-panel>
          <div slot="content">
              这是内容啊
          </div>
      </kl-home-panel>
  </div>
</template>

<script>
import KlHomePanel from '../common/kl-home-panel'

export default {
  components: {
    KlHomePanel
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="postcss" scoped>

</style>