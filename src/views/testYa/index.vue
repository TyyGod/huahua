<template>
  <div class="main-conent main-conent-screen main-conent-bgFFF main-conent-borderradius">
    <div class="screen-header">
      <el-row>
        <el-col :span="8">
          <el-button v-hasPermi="['3']" type="primary" icon="el-icon-plus">新增</el-button>
          <el-dropdown class="margin-l10">
            <el-button type="primary" icon="el-icon-plus">
              更多操作<i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>批量删除</el-dropdown-item>
              <el-dropdown-item>批量审批</el-dropdown-item>
              <el-dropdown-item>批量编辑</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="16" class="text-right">
          <el-input
            v-model="search"
            class="margin-l10"
            style="width:200px;"
            placeholder="请输入搜索内容"
          >
            <i slot="suffix" class="el-input__icon el-icon-search cursor-pointer" />
          </el-input>
        </el-col>
      </el-row>
    </div>

    <screen-table
      class="screen-conent assets-grey-theme-table"
      table-class="custom-table"
      header-row-class-name="custom-table-header"
      :data="tableData"
    >
      <el-table-column
        fixed
        type="selection"
        width="55"
      />
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150"
      />
      <el-table-column
        prop="name"
        label="姓名"
        min-width="120"
      />
      <el-table-column
        prop="province"
        label="省份"
        min-width="120"
      />
      <el-table-column
        prop="city"
        label="市区"
        min-width="120"
      />
      <el-table-column
        prop="address"
        label="地址"
        min-width="300"
      />
      <el-table-column
        prop="zip"
        label="邮编"
        min-width="120"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="handleClick(scope.row)">查看</el-button>
          <el-dropdown class="margin-l5">
            <span class="cursor-pointer">
              <el-button type="text">更多<i class="el-icon-arrow-down el-icon--right" /></el-button>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="tableEdit(scope.row)">编辑</el-dropdown-item>
              <el-dropdown-item @click.native="tableDel(scope.row)">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </screen-table>

    <el-link v-clipboard:copy="value" v-clipboard:success="clipboardSuccess" :underline="false" icon="el-icon-document-copy" style="float:right">复制</el-link>
    <pre>{{ value }}</pre>

    <div class="screen-footer text-right">
      <el-pagination
        background
        layout="sizes, prev, pager, next, total"
        :page-sizes="[10, 20, 50, 100]"
        :total="1000"
      />
    </div>
    <breadcrumb />
    <!-- <tui-editor ref="tuieditor" v-model="content" />
    <tui-editor-viewer v-model="content" /> -->
    <!-- 建议使用以下的编辑器 -->
    <!-- <mavon-editor
      v-model="content"
      :subfield="false"
      :toolbars-flag="true"
      :box-shadow="false"
      default-open="edit"
      preview-background="#FFFFFF"
    />
    <CKEditor v-model="editorData" /> -->
    <quillEditor />
    <tree-table
      :data="treeData"
      class="height-100"
      :column="treeTableColumn"
      node-key="id"
    >
      <template v-slot:default="{ node, treeData }">
        <el-button
          type="text"
          size="mini"
          @click.stop="add(node.level, treeData)"
        >
          新增下级
        </el-button>
        <el-button
          type="text"
          size="mini"
          @click.stop="add(node.level, treeData)"
        >
          修改
        </el-button>
        <el-button
          type="text"
          size="mini"
          @click.stop="del(treeData)"
        >
          删除
        </el-button>
      </template>
    </tree-table>
  </div>
</template>
<script>
import ScreenTable from '@/components/ScreenTable'
import Breadcrumb from '@/components/Breadcrumb'
import quillEditor from '@/components/quillEditor'
import TuiEditor from '@/components/TuiEditor'
import TuiEditorViewer from '@/components/TuiEditor/Viewer'
import MavonEditor from '@/components/MavonEditor'
import CKEditor from '@/components/CKEditor'
import TreeTable from '@/components/TreeTable'
export default {
  components: {
    ScreenTable,
    Breadcrumb,
    quillEditor,
    TreeTable
    // CKEditor,
    // TuiEditor,
    // TuiEditorViewer,
    // MavonEditor
  },
  data() {
    return {
      content: '# This is Test.',
      contentHtml: '',
      search: '',
      value: '123test',
      editorData: '<p>Content of the editor.</p>',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }
      ],
      treeTableColumn: [
        {
          title: '分类列表',
          label: 'label1',
          minWidth: 300
        },
        {
          title: '简称',
          label: 'short',
          minWidth: 300
        }
      ],
      treeData: [
        {
          id: 1,
          label1: '一级 1',
          short: 'one 1',
          children: [{
            id: 4,
            label1: '二级 1-1',
            short: 'two 1-1',
            content: '111',
            children: []
          }]
        },
        {
          id: 2,
          label1: '一级 2',
          short: 'one 2',
          children: [{
            id: 5,
            label1: '二级 2-1',
            short: 'two 2-1'
          }, {
            id: 6,
            label1: '二级 2-2',
            short: 'two 2-3'
          }]
        },
        {
          id: 3,
          label1: '一级 3',
          short: 'one 3',
          children: [{
            id: 7,
            label1: '二级 3-1',
            short: 'tow 3-1'
          }, {
            id: 8,
            label1: '二级 3-2',
            short: 'tow 3-2'
          }]
        },
        {
          id: 20,
          label1: '一级 4',
          short: 'one 4',
          children: [{
            id: 21,
            label1: '二级 4-1',
            short: 'tow 4-1'
          }, {
            id: 22,
            label1: '二级 4-2',
            short: 'tow 4-2'
          }]
        },
        {
          id: 30,
          label1: '一级 5',
          short: 'one 5',
          children: [{
            id: 31,
            label1: '二级 5-1',
            short: 'tow 5-1'
          }, {
            id: 32,
            label1: '二级 5-2',
            short: 'tow 5-2'
          }]
        }
      ]
    }
  },
  created() {
    this.$EventBus.$on('changePrice', (oldPrice, newPrice) => {
      console.log(oldPrice, newPrice)
    })
    this.$EventBus.$emit('changePrice', 100, 200)
  },
  methods: {
    add(level, data) {
      console.log(level, data)
      this.$message({
        message: '这里可以显示一个弹框表单',
        type: 'success'
      })
    },
    del(data) {
      console.log(data)
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
      }).catch(() => {})
    },
    getContent() {
      this.contentHtml = this.$refs.tuieditor.getHtml()
    },
    imgUpload(fileOrBlob, callback) {
      var formdata = new FormData()
      formdata.append('image', fileOrBlob)
      console.log(formdata, fileOrBlob)
      /*
        // ajax上传
        request({
            url: '/upload/img',
            method: 'post',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(res => {
            const { data } = res;
            const { url, name } = data;
            callback(url, name);
        }).catch(err => {
            console.log(err);
        }); */
      callback('https://gitee.com/lqsong/public/raw/master/common/Alipay.png', '赞助码')
    },
    /** 高亮显示 */
    highlightedCode(code, key) {

    },
    /** 复制代码成功 */
    clipboardSuccess() {
      this.$modal.msgSuccess('复制成功')
    },
    handleClick(row) {
      console.log(row)
    },
    tableEdit(row) {
      console.log(row)
    },
    tableDel(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

