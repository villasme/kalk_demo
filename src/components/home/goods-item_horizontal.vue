<template>
  <div class="goods-item_vertical">
      <dl class="goods-item_vertical-dl" @click="onClick">
          <dt>
              <em>较均价低6%</em>
              <img src="/logo.png" alt="这是图片">
          </dt>
          <dd>
              <p><strong class="goods-item_vertical-name">39感冒灵</strong>&nbsp;<span class="goods-item_vertical-dl-price">成单：5&nbsp;浏览：11</span></p>
              <p class="goods-item_vertical-dl-gray goods-item_vertical-price_trend"><span>厂家名称&nbsp;国药准字</span><span>价格走势<van-icon name="arrow" /></span></p>
              <p><b class="goods-item_vertical-dl-min_price">最低供货价：￥7.0</b></p>
              <p class="goods-item_vertical-dl-price">32个商家&nbsp;均价：￥10 历史最低：Y6.00</p>
          </dd>
      </dl>
  </div>
</template>

<script>

export default {
  props: ['data'],
  components: {},
  data () {
    return {}
  },
  mounted () {
    //   alert(this.data)
  },
  methods: {
      onClick () {
          this.$router.push(`/recommendinfo/${this.data}`)
      }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../assets/css/mixin.scss';

.goods-item_vertical-dl {
    display: flex;
    align-items: flex-end;
    font-size: $size-small;

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
                content: "";
                position: absolute;
                left: 50%;
                bottom: -75px;
                transform: translateX(-50%);
                @include triangle-top(60px);
            }
        }

        img {
            max-width: 100%;
            max-height: 100%;
            vertical-align: middle;
        }
    }

    dd {
        margin: 0 0 22px 10px;

        p {
            margin-bottom: 10px;
        }
    }
}

.goods-item_vertical-name {
    font-weight: 700;
}

.goods-item_vertical-dl-gray {
    color: $color-gray
}

.goods-item_vertical-price_trend {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.goods-item_vertical-dl-min_price {
    font-size: $size-middle;
    color: $color-orange;
}

.goods-item_vertical-dl-price {
    color: $color-blue;
}
</style>