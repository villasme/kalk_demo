<template>
  <div class="goods-search">
      <!--搜索 -->
    &nbsp;
    <van-icon @click="onExit" size="20px" name="arrow-left"/>
    <van-search
    style="flex-grow: 1"
    slot="title"
    v-model="value"
    placeholder="批准文号、商品名、首字母"
    show-action
    shape="round"
    @search="onSearch"
    >
    <div slot="action" @click="onExit">取消</div>
    </van-search>
    <span></span>
  </div>
</template>

<script>

export default {
  props: ['isUpSearch'],
  components: {},
  data () {
    return {
      value: ''
    }
  },
  methods: {
      onSearch () {
        this.$emit('onSearch')
      },
      onExit () {
        this.$emit('onExit')
      }
  }
}
</script>

<style lang="postcss" scoped>
.goods-search {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>