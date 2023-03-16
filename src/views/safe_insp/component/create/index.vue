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
        <el-button type="primary">返回列表</el-button>
      </div>
      <el-row>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
              <el-col :span="8">
                <el-form-item label="巡检编号">
                   <el-input v-model="form.safe_insp__insp_code" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="巡检状态">
                  <el-select v-model="form.safe_insp__insp_state" placeholder="请选择巡检状态">
                    <el-option label="已巡检" value="1" />
                    <el-option label="巡检中" value="0" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-input  placeholder="请输入巡检名称" v-model="from.safe_insp__insp_name" ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary"  prefix-icon="el-icon-search"></el-button>
                </el-form-item>
              </el-col>
          </el-form>>
          
      </el-row> 
    </el-card>
  </div>
</template>

<script>
import api from '../../api';
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      form: {
        safe_insp__insp_code: '',
        safe_insp__insp_name: '',
        safe_insp__insp_state: '',
        safe_insp__insp_date: '',
        safe_insp__insp_man: '',
        safe_insp__insp_times: '',
        safe_insp__insp_memo: '',
        safe_insp__insp_ed: '',
        safe_insp__insp_ing: '',
        safe_insp__insp_non: '',
        safe_insp__insp_name_id: '',
        safe_insp__org_id: '',
        safe_insp__safe_insp_id: '',
        safe_insp__dept_id: '',
        safe_insp__insp_man_id: ''
      },
      rules:{
        safe_insp__insp_name:[
        { required: true, },
        ]
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    // this,getList()
  },
  methods: {
  //  getList() {
  //   api.getData(

  //   ).then((data) => {
  //     console.log(data,'fromdata');
  //     this.form =data.data.root
  //   })
  //  }

  }
}
</script>

<style scoped lang="scss">

</style>
