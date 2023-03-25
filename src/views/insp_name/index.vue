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
          <Search class="search" funid="insp_name" @search="search" />
          <el-table
          ref="deptTable"
          :data="tableData"
          style="width: 100%">
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
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import api from './api'
import Search from '@/components/Search'

export default {
  props: {

  },
  components: {
    Search,
    
  },
  data() {
    return {
      tableData:[],
      whereSql: 'where_sql=&where_value=&where_type=',
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
    editCreate() {},
    editDelete() {},
    editSave() {},
    editCopy() {},
    upload() {},
    expxls() {},
    edit() {},
    search(sql) {
      this.whereSql = sql
      this.getList()
      
    },
    getList() {
      api.getData(
        this.pager.pageSize,
        pageNo,
        this.whereSql
      ).then(data => {
        if(data.success) {
          this.tableData = data.data.root
        }else{
          this.$message.error(data.message)
        }
       
      })
    }
  },
};
</script>

<style scoped lang="scss">
.search {
      margin-left: -50px;
      margin-bottom: 10px;
    }

</style>
