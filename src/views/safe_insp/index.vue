<template>
  <div>
    <div class="safeHead">
      <div>
        <el-col>
          <el-button type="warning">测试</el-button>
          <el-button type="primary" @click="editCreate">新增</el-button>
          <el-button type="primary">删除</el-button>
          <el-button type="primary">保存</el-button>
          <el-button type="primary">复制</el-button>
          <el-button type="primary">图文附件</el-button>
          <el-button type="primary">另存数据</el-button>
        </el-col>
      </div>
      <!-- 侧边栏搜索框 -->
      <Search funid="safe_insp" @search="search" />
      <div>
        <!-- <Search funid="safe_insp" @search="search" /> -->
      </div>
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
          <template slot-scope="scope">{{ scope.row.safe_insp__insp_state }}</template>
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
      multipleSelection: []
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
        this.multipleSelection = val;
      },
    editCreate() {
      //新增按钮跳转路由方法
      const param = `/safe_insp/create`
      this.$router.push(param)
    },
    getList() {
      api.getData(
        this.whereSql
      ).then((data) => {
        console.log(data,'主页data');
        this.tableData = data.data.root
      })
    },
    search(sql) {
      this.whereSql = sql
      this.getList()
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
