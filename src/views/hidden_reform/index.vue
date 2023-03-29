<template>
  <div>
    <div class="toto">
      <div>
        <el-button type="primary"  @click="audit">提交</el-button>
        <el-button type="primary" @click="upload">图文附件</el-button>
      </div>
      <Search funid="hidden_reform" @search="search" />
    </div>
    <el-card>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="隐患编号"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__hidden_code }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__hidden_state"
          label="隐患状态"
          width="120">
          <template slot-scope="scope"
          >{{ scope.row.hidden_danger__hidden_state == 1 ? '排查中' : scope.row.hidden_danger__hidden_state == 2 ? '待整改' :scope.row.hidden_danger__hidden_state == 3 ? '整改中' :scope.row.hidden_danger__hidden_state == 4 ? '待验收' : '已验收' }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__check_man"
          label="检查人"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_man }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__check_dept"
          label="检查部门"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_dept }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__check_date"
          label="检查时间"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_date }}</template>
        </el-table-column><el-table-column
          prop="hidden_danger__check_location"
          label="隐患描述"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_location }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__check_content"
          label="隐患内容"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_content }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__reform_dept"
          label="整改人"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__reform_dept }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__reform_man"
          label="整改部门"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__reform_man }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__reform_limit"
          label="整改期限"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__reform_limit }}</template>
        </el-table-column><el-table-column
          prop="address"
          label="操作"
          width="120">
          <el-button icon="el-icon-view" type="text" title="编辑" @click="edit(scope.row)" />
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="pager.pageNo"
        :page-sizes="[10, 30, 50, 100, 500]"
        :page-size="pager.pageSize"
        :total="pager.total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="sizeChange"
        @current-change="pageChange"
      />
    </el-card>
  </div>
</template>
<script>
import api from './api';
import Search from '@/components/Search'
export default {
  props: {

  },
  data() {
    return {
      tableData:[],
      whereSql:'',
      pager: {
        pageNo: 0,
        pageSize: 10,
        total: 0
      },
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
    handleSelectionChange() {},
    getList() {
      let pageNo = this.pager.pageNo * this.pager.pageSize - this.pager.pageSize
      if (pageNo < 0) {
        pageNo = 0
      }
      api.getDate(
        this.pager.pageSize,
        pageNo,
        this.whereSql
      ).then((data) => {
        if (data.success) {
          this.tableData = data.data.root
          this.pager.total = data.data.total
         
          
        } else {
          this.$message.error(data.message)
        }
      }) 
    },
    search(sql) {
      this.whereSql = sql
      this.getList()
    },
    sizeChange(size) {
      this.pager.pageSize = size
      this.getList()
    },
    pageChange(page) {
      this.pager.pageNo = page
      this.getList()
    },
    audit() {

    },
    upload() {
      if (this.ids.length > 1) {
        this.$message.warning('只能选择一条数据！')
      } else if (this.ids.length === 0) {
        this.$message.warning('请选择一条数据！')
      } else {
        this.dialogUploadVisible = true
      }
    }
    

  },
  components: {
    Search,
  },
};
</script>

<style scoped lang="scss">
.toto {
  display: flex;
  justify-content:space-between;
}
</style>
