<template>
  <div class="city">
        <div class="city-search">
            <!--搜索 -->
          &nbsp;
          <van-icon @click="$router.go(-1)" size="20px" name="arrow-left"/>
          <van-search
          style="flex-grow: 1"
          slot="title"
          v-model="value"
          placeholder="搜索城市名字"
          show-action
          shape="round"
          @search="onSearch"
          >
          <div slot="action" @tap="isUpCity=false">取消</div>
          </van-search>
          <span></span>
        </div>
        <kl-city></kl-city>
        <!-- 这里使用数据驱动的时候 无法触发 view Change  所以使用的 DOM操作 -->
        <!-- :class="{'curr': currIndex === index}" 不生效原因 是因为不能使用全等  -->
        <div class="list-shortcut">
          <ul ref="index">
            <li v-for="(item, index) in cityData"
            class="list-index-item"
            :data-index="index"
            :key="index"
            @click="handleIndex(index)"
            :class="{'curr': currIndex == index}"
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
      cityData,
      currIndex: 0,
    }
  },
  mounted () {
      this.init()
  },
  methods: {
    init () {
        eventBus.$on('onChangeIndex', (index) => {
            this.currIndex = index
        })
    },
    onSearch () {
      eventBus.$emit('klCityScrollToEle', this.value)
    },
    handleIndex (index) {
        this.currIndex = index
        eventBus.$emit('klCityScrollToEle', this.cityData[index].initial)
    },
    clearCurr () {
        this.cityData.forEach((item, index) => {
            this.$refs[index] && (this.$refs[index][0].className = 'list-index-item')
        })
    }
  },
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
  padding: 10px;
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  border-radius: 25px;
}

.list-index-item {
    color: $color-white;
    margin-bottom: 10px;
}

.curr {
    color: skyblue;
    transition: transform 0.5s;
    transform: scale(2) translateX(-24px);
}
</style>