<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" dot>订单</van-tabbar-item>
      <van-tabbar-item icon="search" info="5">找药</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" info="20">收益</van-tabbar-item>
      <van-tabbar-item icon="contact" info="20" to="/personal">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data () {
    return {
      active: 0,
    }
  },
  components: {

  }
}
</script>

<style>
</style>
