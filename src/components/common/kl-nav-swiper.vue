<template>
  <div class="kl-nav-swiper">
      <slot name="title"><h3>热门搜索</h3><br/></slot>
      <swiper :options="_swiperOption">
        <!-- <div v-for="n in 20" :key="n" class="kl-nav-swiper-slide"><swiper-slide>Slide {{n}}</swiper-slide></div> -->
        <swiper-slide v-for="n in 20" :key="n" class="kl-nav-swiper-slide">Slide {{n}}</swiper-slide>
      </swiper>
  </div>
</template>

<script>

export default {
  props: ['swiperOption'],
  components: {},
  data () {
    return {}
  },
  computed: {
      _swiperOption () {
          let swiperOption = this.swiperOption || {}
          return swiperOption
      }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../assets/css/mixin.scss';

.kl-nav-swiper-slide {
    margin-right: 20px !important;
    width: 140px !important;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-weight: 700;
    font-size: $size-small;
    border: 1Px solid $color-gray;
    border-radius: 30px;
}
</style>