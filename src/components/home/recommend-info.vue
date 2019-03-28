<template>
  <div class="recommend-info">
      <van-nav-bar
        title="详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-card
        num="2"
        price="2.00"
        desc="占位商品"  
        title="占位商品"
        :thumb="imageURL"
      />
      <br>
      <br>
      <lk-price-index></lk-price-index>

      <!-- 折线图 -->
      <div class="lineChart" ref="lineChart"></div>

      <dl>
        <dt>32个商家</dt>
        <dd>
          <p>价格</p>
          <p>库存</p>
          <p>销量</p>
          <p @click="isUpCity=true" style="color:red">筛选<van-icon name="filter-o" /></p>
        </dd>
      </dl>
      <div>
        <van-col v-for="n in 3" :key="n"  span="24"><goods-item-horizontal :data="n"></goods-item-horizontal></van-col>
      </div>

      <!-- 筛选的框框 -->
      <van-popup class="up-city" v-model="isUpCity" position="right" :overlay="false">
        
      </van-popup>
  </div>
</template>

<script>
import LkPriceIndex from './price-index'
import GoodsItemHorizontal from './goods-item_horizontal'


export default {
  components: {
    LkPriceIndex,
    GoodsItemHorizontal
  },
  data () {
    return {
      active: 0,
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
      isUpCity: false,
    }
  },
  created () {
    
  },
  mounted () {
    this.init();
    window.console.log('我的医药id 是：',this.$route.params.id)
  },
  methods: {
    init () {
      let lineChart = this.$echarts.init(this.$refs.lineChart)
      let option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
        }
      lineChart.setOption(option)
    },
    onClickLeft () {
      this.$router.go(-1);
    },
  }
}
</script>

<style lang="postcss" scoped>
.lineChart {
  margin: 0 auto;
  width: 90%;
  height: 500px;
}

dl {
  display: flex;
  justify-content: space-between;
  align-items: center;

  dt {
    flex: 1.2;
  }
}

dl dd{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: space-around;

    p {
      flex: 1;
    }
}

.up-city {
    width: 100%;
    height: 100%;
}


</style>