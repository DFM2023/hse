<template>
  <div>
    <div class="safeHead">
      <div>
        <el-col>
          <el-button type="warning" @clcik="test">测试</el-button>  
          <!-- 完成 -->
          <el-button type="primary" @click="editCreate">新增</el-button>
          <!-- 完成 -->
          <el-button type="primary" @click="editDelete">删除</el-button>
          <!-- 完成 -->
          <el-button type="primary" @click="editSave">保存</el-button>
          
          <el-button type="primary" >图文附件</el-button>
          <el-button type="primary" >另存数据</el-button>
        </el-col>
      </div>
      <!-- 侧边栏搜索框 -->
      <Search funid="safe_insp" @search="search" />

      </div>
    <el-card>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          prop="safe_insp__insp_code"
          label="巡检单编号"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_code }}</template>
        </el-table-column>
        <el-table-column
          prop="safe_insp__insp_name"
          label="巡检名称"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_name }}</template>
        </el-table-column>
        <el-table-column
          prop="safe_insp__insp_state"
          label="巡检状态"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_state == 1?'已巡检':'巡检中' }}</template>
        </el-table-column>
        <el-table-column
          prop="safe_insp__insp_date"
          label="巡检日期"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_date }}</template>
        </el-table-column>
        <el-table-column
          prop="safe_insp__insp_man"
          label="巡检人员"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_man }}</template>
        </el-table-column>
        <el-table-column
          prop="safe_insp__insp_times"
          label="巡检频率"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_times }}</template>
        </el-table-column>
        <el-table-column
          prop="safe_insp__insp_memo"
          label="备注"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_memo }}</template>
        </el-table-column>
        <el-table-column
          prop="safe_insp__insp_ed"
          label="已巡检数量"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_ed }}</template>
        </el-table-column>
        <el-table-column
          prop="safe_insp__insp_ing"
          label="待巡检数量"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_ing }}</template>
        </el-table-column>
        <el-table-column
          prop="safe_insp__insp_non"
          label="不符合数量"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_non }}</template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>

</template>

<script>
import Search from '@/components/Search' // 导入子组件 在HTML中直接使用
import api from './api'
export default {
  components: {
    Search
  },
  props: {

  },
  data() {
    return {
      whereSql: '',
      tableData: [],
      ids: [] //数据行id数组
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    this.getList()
  },
  methods: {
    //选项框选择方法
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
    handleSelectionChange(val) {
      this.ids = val.map((item,i) =>{
        return item.safe_insp__safe_insp_id //map 方法这里返回 为新数组当前索引数据
      })
    },
    editCreate() {
      //新增按钮跳转路由方法
      const param = `/safe_insp/create`
      this.$router.push(param)
    },
    getList() {
      //获取表单数据
      api.getData(
        this.whereSql
      ).then((data) => {
        console.log(data,'主页data');
        this.tableData = data.data.root
      })
    },
    search(sql) {
      this.whereSql = sql
      console.log(sql,'sqlsqlsqlsql');
      this.getList()
    },
    test(){ //测试方法
      this.$refs.multipleTable.clearSelection() // 通过ref拿到el-table的内置方法
      console.log(this.$refs,'multipleTable');
    },
    editCopy() {
      //复制方法
    },
    editDelete() {
        //删除方法
        if (this.ids && this.ids.length > 0) {
        this.$confirm('确认删除所选数据？').then(() => {
          api.Delete(this.ids).then(data => {
            console.log(data);
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
    } ,
    editSave() {

    },
  }
}

</script>

<style scoped lang="scss">
.safeHead {
  display: flex;
  justify-content: space-between;

}
</style>
