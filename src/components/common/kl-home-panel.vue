<template>
  <div class="kl-home-panel">
    <van-panel class="home-panel">
        <div slot="header" class="kl-home-panel-header">
            <span>{{title}}</span>
            <span class="kl-home-pannel-header-link" @click="clickLink" :to="to">{{status}}</span>
        </div>
        <slot name="content"></slot>
    </van-panel>
  </div>
</template>

<script>
export default {
  props: {
      title: {
        type: String,
        default: '标题'
      },
      status: {
        type: String,
        default: '状态'
      },
      to: {
        type: [String, Object],
        default: ''
      }
  },
  data () {
    return {

    }
  },
  methods: {
    clickLink () {
      this.$emit('onClickLink')
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../assets/css/constant.scss';

.kl-home-panel {
    padding: 0 30px;
}

.kl-home-panel-header {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1Px solid #e4e4e4;
    color: $color-orange;
}

.kl-home-pannel-header-link {
    color: $color-orange;
}
</style>