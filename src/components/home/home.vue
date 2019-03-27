<template>
  <div class="home">
      <!-- 畅销品种 -->
      <kl-home-panel title="畅销品种" status=">>更多畅销">
          <div slot="content">
            <br>
            <van-row>
              <van-col v-for="n in 4" :key="n"  span="12"><goods-item-vertical></goods-item-vertical></van-col>
            </van-row>
          </div>
      </kl-home-panel>
      <!-- 推荐品种 -->
      <kl-home-panel title="推荐品种" status=">>更多推荐" v-on:onClickLink="onClickRecommend">
          <div slot="content">
            <br>
            <van-row>
              <van-col v-for="n in 3" :key="n"  span="24"><goods-item-horizontal></goods-item-horizontal></van-col>
            </van-row>
          </div>
      </kl-home-panel>
      <!--更多推荐弹出层 -->
      <van-popup class="popup-recommend" v-model="isUpRecommend"  position="right" :overlay="false">
        <van-nav-bar
          title="推荐品种"
          left-text="返回"
          right-text=""
          left-arrow
          @click-left="isUpRecommend=false"
        />
        <br>
        <goods-recommend></goods-recommend>
      </van-popup>
  </div>
</template>

<script>
import KlHomePanel from '../common/kl-home-panel'
import GoodsItemVertical from './goods-item_vertical'
import GoodsItemHorizontal from './goods-item_horizontal'
import GoodsRecommend from './goods-recommend'

export default {
  components: {
    KlHomePanel,
    GoodsItemVertical,
    GoodsItemHorizontal,
    GoodsRecommend
  },
  data () {
    return {
      isUpRecommend: false // 弹出更多推荐
    }
  },
  methods: {
    onClickRecommend () {
      this.isUpRecommend = true
    }
  }
}
</script>

<style lang="postcss" scoped>
.popup-recommend {
  width: 100%;
  height: 100%;
}
</style>