<template>
  <div class="goods-item_vertical">
      <dl>
          <dt></dt>
          <dd><strong>39感冒灵</strong></dd>
          <dd>厂家名称</dd>
          <dd>国药准字</dd>
          <dd><b class="goods-item_vertical-dl-min_price">最低供货价：￥7.0</b></dd>
          <dd class="goods-item_vertical-dl-price">32个商家/均价：￥10</dd>
          <dd class="goods-item_vertical-dl-price">历史最低价格：Y6.00</dd>
      </dl>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../assets/css/constant.scss';

.goods-item_vertical-dl-min_price {
    color: $color-orange;
}

.goods-item_vertical-dl-price {
    color: $color-blue;
}
</style>