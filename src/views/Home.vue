<template>
  <div class="container">
    <el-header>
      <div>水表识别系统</div>
    </el-header>
    <div class="upload-container">
      <div class="upload-photo-wall">
        <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                limit="10"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :file-list="fileList">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="action-bar">
        <el-button>批量识别</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style>

</style>
