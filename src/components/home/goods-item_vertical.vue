<template>
  <div class="goods-item_vertical">
      <dl class="goods-item_vertical-dl">
          <dt>
              <em>较均价低6%</em>
              <img src="/logo.png" alt="这是图片">
          </dt>
          <dd><strong class="goods-item_vertical-name">39感冒灵</strong></dd>
          <dd class="goods-item_vertical-dl-gray">厂家名称</dd>
          <dd class="goods-item_vertical-dl-gray">国药准字</dd>
          <dd><b class="goods-item_vertical-dl-min_price">最低供货价：￥7.0</b></dd>
          <dd class="goods-item_vertical-dl-price">32个商家/均价：￥10</dd>
          <dd class="goods-item_vertical-dl-price">历史最低价格：Y6.00</dd>
      </dl>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {}
  }
}
</script>

<style lang="postcss" scoped>
@import '../../assets/css/mixin.scss';

.goods-item_vertical-dl {
    display: flex;
    flex-direction: column;
    align-items: center;

    dt {
        margin-bottom: 22px;
        width: 164px;
        height: 190px;

        em {
            position: relative;
            padding: 10px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: $size-middle;
            font-weight: 700;
            background: $color-orange;
            color: $color-white;

            &::after {
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                @include triangle-bottom();
            }
        }

        img {
            max-width: 100%;
            max-height: 100%;
            vertical-align: middle;
        }
    }

    dd {
        margin-bottom: 22px;
    }
}

.goods-item_vertical-name {
    font-weight: 700;
}

.goods-item_vertical-dl-gray {
    color: $color-gray
}

.goods-item_vertical-dl-min_price {
    color: $color-orange;
}

.goods-item_vertical-dl-price {
    color: $color-blue;
}
</style>