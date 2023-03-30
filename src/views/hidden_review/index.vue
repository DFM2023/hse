<template>
  <div>
    <div class="nasa">
      <div >
        <el-button type="primary">提交</el-button>
        <el-button type="primary">图文附件</el-button>
      </div>
      <Search funid="hidden_check" @search="search" />
    </div>
    <el-car>
      <el-table
      ref="multipleTable"
      :data="tableData"
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
        label="隐患状态"
        width="120">
        <template slot-scope="scope">{{ scope.row.hidden_danger__hidden_state }}</template>
      </el-table-column>
      <el-table-column
        label="检查人"
        width="120">
        <template slot-scope="scope">{{ scope.row.hidden_danger__check_man }}</template>
      </el-table-column>
      <el-table-column
        label="检查部门"
        width="120">
        <template slot-scope="scope">{{ scope.row.hidden_danger__check_dept }}</template>
      </el-table-column>
      <el-table-column
        label="检查时间"
        width="120">
        <template slot-scope="scope">{{ scope.row.hidden_danger__check_date }}</template>
      </el-table-column>
      <el-table-column
        label="隐患描述"
        width="120">
        <template slot-scope="scope">{{ scope.row.hidden_danger__check_location }}</template>
      </el-table-column>
      <el-table-column
        label="整改内容"
        width="120">
        <template slot-scope="scope">{{ scope.row.hidden_danger__check_content }}</template>
      </el-table-column>
      <el-table-column
        label="整改人"
        width="120">
        <template slot-scope="scope">{{ scope.row.hidden_danger__reform_dept }}</template>
      </el-table-column>
      <el-table-column
        label="整改部门"
        width="120">
        <template slot-scope="scope">{{ scope.row.hidden_danger__reform_man }}</template>
      </el-table-column>
      <el-table-column
        label="整改期限"
        width="120">
        <template slot-scope="scope">{{ scope.row.hidden_danger__reform_limit }}</template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      
    </el-table>
    </el-car>
  </div>
   
</template>

<script>
import Search from '@/components/Search'
export default {
  props: {

  },
  data() {
    return {
      tableData:[]
    }
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {

  },
  components: {
    Search
  },
};
</script>

<style scoped lang="scss">
.nasa{
  display: flex;
  justify-content:space-between;
}
</style>
