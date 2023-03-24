<template>
  <div>
    <el-card>
      <div class="buttons">
        <el-button type="primary">删除</el-button>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button type="primary">图文附件</el-button>
        <el-button type="primary">返回列表</el-button>
      </div>
      <div class="formstyle">
          <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-row>
                <el-col :span="7">
                  <el-form-item label="巡检编号" >
                    <el-input v-model="form.safe_insp__insp_code" maxlength="250" />
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="巡检状态">
                    <el-select v-model="form.safe_insp__insp_state" placeholder="请选择巡检状态">
                      <el-option label="已巡检" value="1" />
                      <el-option label="巡检中" value="0" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item prop="safe_insp__insp_name" label="巡检名称">
                    <el-input  placeholder="请输入巡检名称" v-model="form.safe_insp__insp_name"  >
                      <el-button slot="append" @click="inspNameVisible = !inspNameVisible" maxlength="250" icon="el-icon-search"></el-button>
                    </el-input>
                  </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="7">
                  <el-form-item label="巡检日期" placeholder="选择日期" prop="safe_insp__insp_date">
                    <el-date-picker
                      v-model="form.safe_insp__insp_date"
                      type="date"
                      placeholder="选择日期"
                      value-format="yyyy-MM-DD">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item prop="safe_insp__insp_man" ref="safe_insp__insp_man" label="巡检人员">
                    <el-input  placeholder="请输入巡检人员"   v-model="form.safe_insp__insp_man" >
                      <el-button slot="append" icon="el-icon-search" @click="selUserVisible = !selUserVisible"></el-button>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="备注">
                    <el-input v-model="form.safe_insp__insp_memo"  maxlength="500"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">
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
              </el-row>
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
            </el-form>
        </div>
      </el-card>
      <el-dialog
        v-if="selUserVisible"
        title="选择人员"
        :visible.sync="selUserVisible"
        width="60%"
      >
        <SelUser ref="selUser" @updateUser="updateUser" />
        <span>
          <el-button @click="selUserVisible = false">取 消</el-button>
          <el-button type="primary" @click="selUser">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        v-if="inspNameVisible"
        title="选择巡检名称"
        :visible.sync="inspNameVisible"
        width="40%"
      >
      
        <InspName @updateInspName="updateInspName" />
        <!-- <span>
          <el-button type="primary" @click="inspNameVisible = false">取 消</el-button>
          <el-button type="primary" @click="inspNameVisible = false">确 定</el-button>
        </span> -->
      </el-dialog>
  </div>
</template>

<script>
import api from '../../api';
import SelUser from '@/components/selUser'
import InspName from '../inspName'

export default {
  components: {
    SelUser,
    InspName
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
      },
      selUserVisible: false,
      inspNameVisible: false,
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
    dialogVisible() {
      dialogVisible = true
    },
    updateUser(data) {
        this.form.safe_insp__insp_man = data.sys_user__user_name
        this.form.safe_insp__insp_man_id = data.sys_user__user_id
        this.selUserVisible = false
    },
    save() {
      this.$refs.form.validate(valid => {
        if(valid) {
          api.Add(this.form).then(data =>{
            if(data.data.success) {
              this.$message.success('新增成功！')
              const param = `/safe_insp/safe_insp`
              this.$router.push(param)
            } else {
              this.$message.error(data.message)
            }
        })
      } else {
        this.$message({
          message: '表单信息未填写正确，请检查后再保存！',
          type: 'warning'
        });
      }
    })
  },
  updateInspName(data) {
      console.log(data,'data------');
      this.form.safe_insp__insp_name = data.insp_name__insp_name
      this.safe_insp__insp_name_id = data.insp_name__insp_name_id
      this.inspNameVisible = false
  },
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-form-item {
    text-align: right;
    /* vertical-align: middle; */
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 6px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.formstyle{
  margin: 15px 0 0 0 ;
}
.el-col{
  margin-left: 2%;
}
</style>
