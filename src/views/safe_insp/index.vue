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
      <div>
        <!-- <Search funid="safe_insp" @search="search" /> -->
      </div>
    </div>
    <!-- <div class="searchBox">
      <el-dropdown>
        <el-button plain>单据状态<i class="el-icon-arrow-down "></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>巡检单编号</el-dropdown-item>
          <el-dropdown-item>巡检名称</el-dropdown-item>
          <el-dropdown-item>巡检状态</el-dropdown-item>
          <el-dropdown-item>巡检日期</el-dropdown-item>
          <el-dropdown-item>巡检人员</el-dropdown-item>
          <el-dropdown-item>巡检频率</el-dropdown-item>
          <el-dropdown-item>备注</el-dropdown-item>
          <el-dropdown-item>已巡检数量</el-dropdown-item>
          <el-dropdown-item>待巡检数量</el-dropdown-item>
          <el-dropdown-item>不符合数量</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-input  placeholder="请输入内容"  v-model="input2"> </el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div> -->

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
          label="巡检编号"
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

export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      tableData: []
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
    editCreate() {
      const param = `/insp/edit_form/create`
      this.$router.push(param)
    }

  }
}
</script>

<style scoped lang="scss">
.safeHead {
  display: flex;
  justify-content: space-between;

}
</style>
