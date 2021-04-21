<template>
  <div class="container home-page">
    <result ref="resultRef"></result>
    <div class="upload-container d-flex align-items-end">
      <el-upload
              :action="`${baseUrl}recognize`"
              :show-file-list="false"
              accept=".jpg,.jpeg,.png,.gif,.JPG,.JPEG,.PNG,.GIF"
              multiple
              :limit="fileLimit"
              :on-success="handleApiSuccess"
              :on-error="handleApiError"
              :on-exceed="handleExceed">
        <i class="el-icon-plus upload-button"></i>
      </el-upload>
      <span class="tip m-3">
        说明：
        <br>
        1.点击左侧按钮上传并识别水表图片
        <br>
        2.页面最多允许上传{{ fileLimit }}张图片
        <br>
        3.你可以点击<a :href="`${baseUrl}download/demo`" download="demo.jpg">下载示例图片</a>
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { b64toBlob } from '../utils/file'
import { getBaseUrl } from '../utils'
import result from '../components/result'

export default {
  name: 'Home',
  components: { result },
  setup () {
    const fileLimit = 50
    const baseUrl = getBaseUrl()
    const resultRef = ref(null)

    const handleApiSuccess = (response, file) => {
      if (response.code !== 0) {
        ElMessage.error(response.message)
      }
      resultRef.value.updateResList({
        imgRaw: URL.createObjectURL(file.raw),
        imgCrop: URL.createObjectURL(b64toBlob(response.imgCrop)),
        resStr: response.resStr
      })
    }

    const handleApiError = () => {
      ElMessage.error('请求出错')
    }

    const handleExceed = () => {
      ElMessage.error(`页面最多允许上传${fileLimit}张图片`)
    }

    return {
      fileLimit,
      baseUrl,
      resultRef,
      handleApiSuccess,
      handleApiError,
      handleExceed
    }
  }
}
</script>

<style lang="scss">
@import "../element-variables";

.home-page {
  .el-upload {
    border: 1px dashed #d9d9d9;
    background: white;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: $--color-primary;
    }
  }

  .upload-button {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .tip {
    font-size: 12px;
    color: #909399;
  }
}
</style>
