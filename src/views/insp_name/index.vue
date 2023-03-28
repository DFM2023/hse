<template>
  <div>
    <div>
       <div>
        <el-button type="primary" @click="editCreate">新增</el-button>
        <el-button type="primary" @click="editDelete">删除</el-button>
        <el-button type="primary" @click="editSave">保存</el-button>
        <el-button type="primary" @click="editCopy">复制</el-button>
        <el-button type="primary" @click="upload">图文附件</el-button>
        <el-button type="primary" @click="expxls">另存数据</el-button>
       </div>
    </div>
    <div>
        <el-row>
          <el-col :span="8">
            <el-card>
              <Search class="search" funid="insp_name" @search="search" />
              <el-table
                ref="deptTable"
                :data="tableData"
                style="width: 100%"
                @row-click="rowClick"
                @selection-change="handleSelectionChange"
                @cell-dblclick="cellDblclick">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  label="巡检表名称"
                  width="120">
                <template slot-scope="scope">{{ scope.row.insp_name__insp_name }}</template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="120">
                  
                  <el-button icon="el-icon-view" type="text" title="编辑" @click="edit(scope.row)" />
                </el-table-column>
              </el-table>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="pageInfo.pageNo"  
                  :page-sizes="[10, 30, 50, 100]"
                  :page-size="pageInfo.pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="pageInfo.total">
              </el-pagination>
            </el-card>
          </el-col>
              <el-col :span="16">
                <InspItem ref="inspItem" v-model="id" />
              </el-col> 
        </el-row>
      </div>
      <el-dialog
        title="新增"
        :visible.sync="dialogFormVisible"
        width="50%"
        @close="closeDialog"
        >
        <el-form :model="form" ref="form">
          <el-form-item label="巡检表名称" :label-width="formLabelWidth" prop="dept_code">
            <el-input v-model="form.insp_name__insp_name" />
          </el-form-item>
        </el-form>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="create">确 定</el-button>
        
      </el-dialog>
      <el-dialog
        title="编辑"
        :visible.sync="dialogFormVisible"
        width="50%"
        @close="closeDialog"
        >
        <el-form :model="form" ref="form">
          <el-form-item label="巡检表名称" :label-width="formLabelWidth" prop="dept_code">
            <el-input v-model="form.insp_name__insp_name" />
          </el-form-item>
        </el-form>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="create">确 定</el-button>
        
      </el-dialog>
      
    </div>
</template>

<script>
import api from './api'
import Search from '@/components/Search'
import InspItem from './component/insp_item'
export default {
  props: {

  },
  components: {
    Search,
    InspItem
    
  },
  data() {
    return {
      tableData:[],
      whereSql: '',
      pageInfo:{
        pageSize:10,
        pageNo:0,
        total:0
      },
      id:'',
      
      form: {
        insp_name__insp_name:'',
        insp_name__org_id:'',
        insp_name__insp_name_id:'',
        insp_name__dept_id:''
      },
      formLabelWidth: '120px',
      dialogFormVisible: false,
      ids:[],
    }
  },
  
  computed: {

  },
  created() {
    this.getList()

  },
  mounted() {

  },
  watch: {

  },
  methods: {
    editCreate() {
      
      this.dialogFormVisible = true
      this.form = JSON.parse(JSON.stringify(this.form))//通过深拷贝实现表单清空
    },
    
    editDelete() { //
      if (this.ids && this.ids.length > 0) {
        this.$confirm('确认删除？').then(() => {
          api.Delete(this.ids).then(data => {
            console.log(this.ids,'11111111111111111111111111111');
            if (data.success) {
              
              this.getList()
              this.$message.success('删除成功！')
            } else {
              this.$message.error(data.message)
            }
          })
        }).catch(() => {})
      } else {
        this.$message.warning('请选择数据进行删除')
      }
    },
    editSave() {},          
    editCopy() {},
    upload() {},
    expxls() {},
    edit(row) {
      this.dialogFormVisible = true
      this.form = JSON.parse(JSON.stringify(row))
    },
    search(sql) {
      this.whereSql = sql
      this.getList()
      
    },
    getList() {
      let pageNo = this.pageInfo.pageNo * this.pageInfo.pageSize - this.pageInfo.pageSize
      if (pageNo < 0) {
        pageNo = 0
      }
      api.getData(
        pageNo, // 当前页数
        this.pageInfo.pageSize, // 当前总页数
        this.whereSql
      ).then(data => {
        console.log(data, '副页data');
        if(data.success) {
          this.tableData = data.data.root
          this.pageInfo.total = data.data.total
        }else{
          this.$message.error(data.message)
        }
       
      })
    },
    handleSizeChange(page) {
      this.pageInfo.pageSize = page
      this.pageInfo.pageNo = 0
      this.getList()
    },
    handleCurrentChange(page) {
      this.pageInfo.pageNo = page
      this.getList()
    },
    rowClick(row) { //单击目标会产生的事件
      this.id = row.insp_name__insp_name_id
      this.$refs.inspItem.getList(this.id, false)
    },
    closeDialog() {
      this.dialogFormVisible = false
      this.$refs['form'].resetFields()
      this.form.dept_name = ''
      this.form.dept_code = ''
    },
    create() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          api.Crerte(this.form).then((data) => {
            if (data.success) {
              this.getList()
              this.dialogFormVisible = false
              this.$refs['form'].resetFields()
              this.$message.success('保存成功！')
            } else {
              this.$message.error(data.message)
            }
          })
        }
      })
    },
    handleSelectionChange(val) { //当选择项发生变化时会触发该事件
      console.log(val,'form的数据'); //通过传入val得到form的数据
      this.ids = val.map(d => d.insp_name__insp_name_id) //拿到数据中的id赋值给ids
      console.log(this.ids,'id的值');
    },
    cellDblclick(row) {  //双击触发事件
      this.dialogFormVisible = true
      this.form = JSON.parse(JSON.stringify(row))
    },
  },
};
</script>

<style scoped lang="scss">
.search {
      margin-left: -50px;
      margin-bottom: 10px;
    }
.el-card {
    margin-top: 10px;
  }

</style>
