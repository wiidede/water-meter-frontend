<template>
  <div class="result-container container d-flex flex-wrap justify-content-between">
    <h1 class="w-100">识别结果</h1>
    <el-card :body-style="{ padding: '0' }" v-for="i in 8" :key="`card${i})`" class="mb-4">
      <img src="" class="water-meter-image" alt="water meter">
      <div class="bottom d-flex align-items-center justify-content-between p-3">
        <div>
          <span>识别区域：</span>
          <img src="" class="number-image" alt="number">
          <br/>
          <span>识别结果：xxxxx</span>
        </div>
        <div>
          <el-button type="text" class="button">复制结果</el-button>
        </div>
      </div>
    </el-card>
    <div class="temp m-0 p-0" v-for="i in 3" :key="`temp${i})`"></div>
  </div>
</template>

<script>
export default {
  name: 'Result'
}
</script>

<style scoped lang="scss">
.result-container {
  &>div {
    flex: 0 0 32%;
  }

  .temp {
    border: 0;
    height: 0;
  }

  .water-meter-image {
    border: 1px solid hotpink;
    height: 280px;
    width: 100%;
    display: block;
  }

  .number-image {
    border: 1px solid hotpink;
    height: 24px;
    width: 100px;
    display: inline-block;
  }
}
</style>
