<template>
  <div class="container home-page">
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
          <div class="text-center">
            <img :src="dialogImageUrl" :alt="dialogImageName">
            <div>{{ dialogImageName }}</div>
          </div>
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
      dialogImageName: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogImageName = file.name
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
.home-page {

  .action-bar {
    margin: 0.6rem 0;
  }
}
</style>
