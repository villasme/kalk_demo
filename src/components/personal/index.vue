<template>
  <div class="personal">
       <div class="g-container">
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
          <div class="position"></div>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="postcss" scoped>
.g-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.position {
  position: absolute;
  width: 10vw;
  height: 10vw;
}

@for $i from 0 to 100 {
  // 当前是第几个盒子
  $x: $i % 10;
  // 当前个数 减去 当前是第几个 / 一行多少个
  $y: ($i - $x) / 10;

  .position:nth-child(calc($i+1)) {
    background: red;
    // top: $(y*10)vh;
  // left: $x * 10vw;
  }
  .position:nth-child($i + 1):hover {
    background: rgba(255, 155, 10, .5)
  }
}

</style>
