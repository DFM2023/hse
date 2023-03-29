<template>
  <div>
    <div class="too">
      <div>
        <el-button type="primary" @click="newcreate">新增</el-button>
        <el-button type="primary" @click="del">删除</el-button>
        <el-button type="primary" @click="audit">提交</el-button>
        <el-button type="primary"  @click="unaudit">反提交</el-button>
      </div>
      <Search funid="hidden_check" @search="search" />
    </div>
    <el-card>
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @cell-dblclick="cellDblclick">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="hidden_danger__hidden_state"
          label="隐患状态"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__hidden_state == 1 ? '排查中' : scope.row.hidden_danger__hidden_state == 2 ? '待整改' :scope.row.hidden_danger__hidden_state == 3 ? '整改中' :scope.row.hidden_danger__hidden_state == 4 ? '待验收' : '已验收' }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__hidden_code"
          label="隐患编号"
          width="120">
          <template slot-scope="scope">{{ scope.row.hidden_danger__hidden_code }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__check_man"
          label="检查人">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_man }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__check_dept"
          label="检查部门">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_dept }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__check_date"
          label="检查时间">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_date }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__check_location"
          label="隐患描述">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_location }}</template>
        </el-table-column>
        <el-table-column
          prop="hidden_danger__check_content"
          label="检查内容">
          <template slot-scope="scope">{{ scope.row.hidden_danger__check_content }}</template>
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
  </div>
</template>

<script>
import Search from '@/components/Search'
import api from './api';
export default {
  props: {

  },
  data() {
    return {
      whereSql:'',
      tableData:[],
      pageInfo:{
        pageSize:10,
        pageNo:0,
        total:0
      },
      data:[]
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
    search(sql) {
      this.whereSql = sql
      this.getList()
    },
    cellDblclick() {},
    handleSelectionChange(val) {
      this.ids = val.map(d => d.hidden_danger__hidden_danger_id)
    },
    getList() {
      let pageNo = this.pageInfo.pageNo * this.pageInfo.pageSize - this.pageInfo.pageSize
      if (pageNo < 0) {
        pageNo = 0
      }
      api.getDate(
        pageNo, // 当前页数
        this.pageInfo.pageSize, // 当前总页数
        this.whereSql
      ).then((data) =>{
        console.log(data,'隐患排查data');
        if(data.success) {
          this.tableData = data.data.root
          this.pageInfo.total = data.data.total
          this.keyids = this.data.map(d => {
            return d.hidden_danger__hidden_danger_id
          }).join()
        }else{
          this.$message.error(data.message)
        }
      })
    },
    
    handleSizeChange() {
      this.pageInfo.pageSize = page
      this.pageInfo.pageNo = 0
      this.getList()
    },
    handleCurrentChange(page) {
      this.pageInfo.pageNo = page
      this.getList()
    },
    edit() {
      const param = `/hidden_danger/hidden_check/audit/${row.hidden_danger__hidden_danger_id}`
      this.$router.push(param)
    },
    newcreate() {
      const param = `/hidden_danger/hidden_check/create`
      this.$router.push(param)
    },
    del() {},
    audit() {},
    unaudit() {},
  },
  components: {
    Search
  },
};
</script>

<style scoped lang="scss">
.too {
 display: flex;
 justify-content:space-between;
}
</style>
