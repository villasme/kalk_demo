<template>
  <div class="goods-recommend">
      <van-list
        class="recommend_list"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <goods-item-horizontal v-for="item in list" :key="item"></goods-item-horizontal>
      </van-list>
  </div>
</template>

<script>
import GoodsItemHorizontal from './goods-item_horizontal'
export default {

  components: {
      GoodsItemHorizontal
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="postcss" scoped>
.recommend_list {
  padding: 0 50px;
}
</style>