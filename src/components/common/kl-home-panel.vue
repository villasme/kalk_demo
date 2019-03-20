<template>
  <div class="kl-home-panel">
    <van-panel title="标题" desc="描述信息" status="状态" class="home-panel">
        <div slot="header" class="kl-home-panel-header">
            <span>畅销品种</span>
            <router-link to="">>>更多畅销</router-link>
        </div>
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
    </van-panel>
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
.kl-home-panel {
    padding: 0 20px;
}

.kl-home-panel-header {
    display: flex;
    justify-content: space-between;
}
</style>