<template>
  <div class="result-container d-flex flex-wrap justify-content-between">
    <h1 class="w-100" v-if="resState.resList.length">识别结果：</h1>
    <div class="w-100" v-else>
      <h1>欢迎使用水表识别系统</h1>
      <p>点击下方按钮开始识别</p>
    </div>
    <el-card :body-style="{ padding: '0' }" v-for="(res, index) in resState.resList" :key="`card${index})`" class="mb-4">
      <img :src="res.imgRaw" class="water-meter-image" alt="water meter">
      <div class="bottom d-flex align-items-center justify-content-between p-3">
        <div>
          <div class="d-flex align-items-center">
            <span>识别区域：</span>
            <img :src="res.imgCrop" class="number-image" alt="number">
          </div>
          <div class="d-flex align-items-center">
            <span>识别结果：<span>{{ res.resStr }}</span></span>
          </div>
        </div>
        <div>
          <el-button type="text" class="button" @click="copy(res.resStr)">复制结果</el-button>
        </div>
      </div>
    </el-card>
    <div class="temp m-0 p-0" v-for="i in 3" :key="`temp${i})`"></div>
  </div>
</template>

<script>

import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { copyToClipboard } from '../../utils'

export default {
  name: 'result',
  setup () {
    const resState = reactive({
      resList: []
    })

    const copy = (content) => {
      copyToClipboard(
        content,
        () => ElMessage.success('已复制到剪贴板'),
        () => ElMessage.error('复制失败')
      )
    }

    const updateResList = (val) => {
      resState.resList.push(val)
    }

    return {
      resState,
      copy,
      updateResList
    }
  }
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
    width: 100%;
    display: block;
  }

  .number-image {
    width: 100px;
    display: inline-block;
  }
}
</style>
