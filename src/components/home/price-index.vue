<!--价格指数-->
<template>
  <div class="price-index">
      <div class="title">
          <van-icon name="bar-chart-o" />
          价格指数
      </div>
      <br>
      <div>
          <van-button plain hairline type="primary" size="small">近1个月</van-button>&nbsp;
          <van-button plain hairline type="primary" size="small">近3个月</van-button>&nbsp;
          <van-button plain hairline type="primary" size="small">近6个月</van-button>&nbsp;
          <van-button plain hairline type="primary" size="small">近1年</van-button>&nbsp;
          <van-button plain hairline type="primary" size="small">全部</van-button>
      </div>
      <br>
      <ul>
          <li>
              <span>浏览</span>
              <strong>100次</strong>
          </li>
          <li>
              <span>分享</span>
              <strong>50次</strong>
          </li>
          <li>
              <span>成交</span>
              <strong>30单</strong>
          </li>
          <li>
              <span>均价</span>
              <strong>￥20.00</strong>
          </li>
      </ul>
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
@import '../../assets/css/mixin.scss';

.price-index {
    padding: 0 20px;
    .title {
        color: $color-yellow;
    }

    ul {
        display: flex;
        justify-content: space-between;

        li {
            margin-right: 10px;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            height: 200px;
            border: 1px solid $color-gray;

            strong {
                font-weight: 700;
                color: $color-green;
            }
        }
    }
}
</style>