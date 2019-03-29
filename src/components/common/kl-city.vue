<template>
  <div class="kl-city" ref="KlCity">
      <div class="content">
        <div v-for="(cityObj, index) in cityData" :key="index" >
            <van-cell :data-index="index" :ref="cityObj.initial" :title="cityObj.initial"/>
            <van-cell :data-index="index" :ref="city.name" :title="city.name" value="内容" v-for="(city, ind) in cityObj.list" :key="ind" />
        </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import cityData from '../../assets/js/city.js'
import eventBus from 'src/utils/eventBus.js'

let {log} = window.console
export default {
  components: {

  },
  data () {
    return {
        cityData
    }
  },
  mounted () {
      this.$nextTick(()=> {
          this.init()
      })

      eventBus.$on('klCityScrollToEle', (value) => {
          this.scroll.scrollToElement(this.$refs[value])
          if (this.$refs[value]) {
              let index = this.$refs[value].getAttribute('data-index')
              eventBus.$emit('onChangeIndex', index)
          }
      })
  },
  methods: {
      init () {
        log('初始化了')
        this.scroll = new BScroll(this.$refs.KlCity, {
            probeType: 3,
            click: true,
        })

        this.scroll.on('scroll', this.onScroll)
      },
      onScroll (pos) {
          let {y} = pos
          let tops = this.getScrollTop()
          tops.reduce((total, currentValue, currentIndex) => {
              if ( currentValue < Math.abs(y)) {
                eventBus.$emit('onChangeIndex', currentIndex)
              }
          }, 0)
      },
      getScrollTop () {
          let scrollTops = []
          this.cityData.forEach(item => {
              let ele = this.$refs[item.initial]
              let top = ele.offsetTop
              scrollTops.push(top)
          })
          return scrollTops
      }
  }
}
</script>

<style lang="postcss" scoped>
.kl-city {
    position: absolute;
    top: 100px;
    width: 80%;
    height: 1200px;
    overflow: hidden;
}

.content {
    .city-item {
        width: 160px;
        margin: 10px;
    }
}
</style>