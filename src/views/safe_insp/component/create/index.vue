<template>
  <div>
    <el-card>
      <div class="button">
        <el-button type="primary">新增</el-button>
        <el-button type="primary">删除</el-button>
        <el-button type="primary" >保存</el-button>
        <el-button type="primary">提交</el-button>
        <el-button type="primary">反提交</el-button>
        <el-button type="primary">图文附件</el-button>
        <el-button type="primary">返回列表</el-button>
      </div>
      
        <el-form  :inline="true" ref="form" :model="form" label-width="80px" :rules="rules">
          <el-row>
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
                <el-form-item prop="safe_insp__insp_name">
                  <el-input  placeholder="请输入巡检名称" v-model="form.safe_insp__insp_name" ></el-input>
                  <el-button maxlength="250" type="primary"  prefix-icon="el-icon-search"></el-button>
                </el-form-item>
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="8">
                <el-form-item label="巡检日期" placeholder="选择日期" prop="safe_insp__insp_date">
                  <el-date-picker
                    v-model="form.safe_insp__insp_date"
                    type="date"
                    placeholder="选择日期"
                    value-format="yyyy-MM-DD">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item prop="safe_insp__insp_man" ref="safe_insp__insp_man" label="巡检人员">
                  <el-input  placeholder="请输入巡检人员" v-model="form.safe_insp__insp_man" >
                    <el-button type="primary"  icon="el-icon-search"></el-button></el-input>
                 </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="备注">
                   <el-input v-model="form.safe_insp__insp_memo" />
                </el-form-item>
              </el-col>
            </el-row>
              <el-col :span="8">
                <el-form-item ref="safe_insp__insp_times" label="巡检频率" prop="safe_insp__insp_time">
                  <el-select v-model="form.safe_insp__insp_times" placeholder="请选择">
                    <el-option label="日检" value="1" />
                    <el-option label="周检" value="2" />
                    <el-option label="月检" value="3" />
                    <el-option label="季检" value="4" />
                    <el-option label="年检" value="5" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-row>
                <el-col :span="7">
                  <el-form-item label="已巡检数量">
                    <el-input v-model="form.safe_insp__insp_ed" disabled="disabled" />
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="待巡检数量">
                    <el-input v-model="form.safe_insp__insp_ing" disabled="disabled" />
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="不符合数量">
                    <el-input v-model="form.safe_insp__insp_non" disabled="disabled" />
                  </el-form-item>
                </el-col>
              </el-row>
          </el-form>>
      </el-card>
  </div>
</template>

<script>
// import api from '../../api';
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
          { required: true, message: '请输入巡检名称' },
        ],
        safe_insp__insp_date:[
          { required: true, message: '请输入巡检日期'}
        ],
        safe_insp__insp_man:[
          { required: true, message: '请选择巡检人员'}
        ],
        safe_insp__insp_times:[
          { required: true, message: '请选择巡检频率' }
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
    // this.getList()
  },
  methods: {
  //  getList() {
  //   api.getformData( ).then((data) => {
  //     console.log(data,'fromdata');
  //     this.form =data.data.root
  //   })
  //  },
  //  formSave() {
  //   this.getList()
  //  }
  }
}
</script>

<style scoped lang="scss">

</style>
