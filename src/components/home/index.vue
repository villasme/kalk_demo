<template>
  <div class="home-index">
    <!-- 找药的搜索框 -->
    <van-search @click="onSearch" placeholder="批准文号、商品名、首字母" v-model="value" />
    <!-- 所有要的种类 -->
    <lk-home></lk-home>

    <!-- 搜索页 -->
    <van-popup class="popup-search" v-model="isUpSearch"  position="right" :overlay="false">
      <!-- 搜索框 -->
      <goods-search 
        :isUpSearch="isUpSearch" 
        v-on:onSearch="onSearch"
        :value="value"
      ></goods-search>
      <br>

      <!-- 热门搜索 -->
      <div class="nav-swiper">
        <kl-nav-swiper 
        :swiperOption="swiperOption"
        ></kl-nav-swiper>
      </div>
      <br>

      <!-- 搜索历史 -->
      <div class="search-history">
        <h3>搜索历史</h3>
        <br>
        <van-list
          class="history-list"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-swipe-cell v-for="item in list"
            :key="item"
            :right-width="65">
            <van-cell-group>
              <van-cell title="历史记录" :value="item" />
            </van-cell-group>
            <van-button type="warning" @click="onDelete(item)" slot="right">删除</van-button>
          </van-swipe-cell>
          
        </van-list>
        <br>
        <br>
        <van-button type="default" size="large">清除搜索历史</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import LkHome from './home'
import GoodsSearch from './goods-search'
import KlNavSwiper from '../common/kl-nav-swiper'

export default {
  data () {
    return {
      value: '',
      isUpSearch: true,
      swiperOption: {
        slidesPerView : 4.7,
        spaceBetween: 30,
        freeMode: true,
        on: {
          tap: function () {
            alert('你碰了 swiper')   
          }
        }
      },
      // 搜索历史
      list: [1],
      loading: false,
      finished: false
      // 搜索历史end
    }
  },
  components: {
    LkHome,
    GoodsSearch,
    KlNavSwiper
  },
  methods: {
    onSearch () {},
    onNavClick (data) {
      alert(data);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onDelete (data) {
      alert(data)
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../assets/css/mixin.scss';

.home-index {
  padding-bottom: 100px;
}

.popup-search {
  width: 100%;
  height: 100%;
}

.nav-swiper {
  padding: 0 0 0 20px;
}

.search-history {
  padding: 0 20px;
}

.history-list {
  max-height: 750px;
  overflow: hidden;
  overflow-y: auto;
}


</style>

