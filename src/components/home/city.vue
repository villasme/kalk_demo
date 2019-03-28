<template>
  <div class="city">
        <div class="city-search">
            <!--搜索 -->
          &nbsp;
          <van-icon @click="isUpCity=false" size="20px" name="arrow-left"/>
          <van-search
          style="flex-grow: 1"
          slot="title"
          v-model="value"
          placeholder="搜索城市名字"
          show-action
          shape="round"
          @search="onSearch"
          >
          <div slot="action" @click="isUpCity=false">取消</div>
          </van-search>
          <span></span>
        </div>
        <kl-city></kl-city>
        <div class="list-shortcut">
          <ul ref="index">
            <li v-for="(item, index) in cityData"
            class="list-index-item"
            :data-index="index"
            :key="index"
            :class="{'curr': item.curr}"
            @click="handleIndex(index)"
            >
            {{ item.initial }}
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
import KlCity from '../common/kl-city'
import cityData from '../../assets/js/city.js'
import eventBus from 'src/utils/eventBus'

let {log}  = window.console
export default {
  components: {
      KlCity,
  },
  data () {
    return {
      isUpCity: false,
      // 搜索
      value: '',

      // 城市
    }
  },
  computed: {
      cityData () {
          return cityData.map((item) => {
              item.curr = false
              return item
          })
      }
  },
  mounted () {
      this.init()
  },
  methods: {
    init () {
        eventBus.$on('onChangeIndex', (index) => {
            this.clearCurr()
            this.cityData[index].curr = true
        })
    },
    onSearch () {
      eventBus.$emit('klCityScrollToEle', this.value)
    },
    handleIndex (index) {
        this.clearCurr()
        eventBus.$emit('klCityScrollToEle', this.cityData[index].initial)
        this.cityData[index].curr = true
        log(this.cityData[index])
    },
    clearCurr () {
        this.cityData.forEach(item => {
            item.curr = false
        })
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../assets/css/mixin.scss';

.city-search {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: $color-white;
}

.list-shortcut {
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%)
}

.list-index-item {
    margin-bottom: 10px;
}

.curr {
    color: red;
}
</style>