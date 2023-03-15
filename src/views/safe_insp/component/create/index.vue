<template>
  <div>
    <el-card>
      <div class="button">
        <el-button type="primary">新增</el-button>
        <el-button type="primary">删除</el-button>
        <el-button type="primary">保存</el-button>
        <el-button type="primary">提交</el-button>
        <el-button type="primary">反提交</el-button>
        <el-button type="primary">图文附件</el-button>
      </div>
      <el-button type="primary">返回列表</el-button>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
