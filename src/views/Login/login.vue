<template>
  <div class="login">
      <div class="Login_left">

      </div>
      <div class="Login_right">
        <div class="content">
           <p>欢迎来到煤炭行业云</p>
           <div style="marginTop:50px">
              <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="0" size="medium" >
        <el-form-item label="" prop="username">
          <el-input v-model.trim="ruleForm.username" autocomplete="off" placeholder="请输入账号" @keyup.enter.native="submitForm('ruleForm')">
            <i slot="prefix" class="el-input__icon el-icon-user" />
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model.trim="ruleForm.password" type="password" autocomplete="off" placeholder="请输入密码" @keyup.enter.native="submitForm('ruleForm')">
            <i slot="prefix" class="el-input__icon el-icon-lock" />
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button  class="submit" type="primary" :loading="loading" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
           </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  data() {
    return {
      loading: false,
      ruleForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur' }
        ]
      },
      redirect: undefined,
      otherQuery: {}
    }
  },
  mounted() {},
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    submitForm(formName) {
      const _this = this
      _this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.loading = true
          const paramData = {
            username: _this.ruleForm.username,
            password: _this.ruleForm.password
          }
          _this.$store.dispatch('user/login', paramData).then(() => {
            _this.loading = false
            _this.$router.push({ path: _this.redirect || '/', query: _this.otherQuery }, () => {})
          }).catch(error => {
            _this.$message.error(error.msg || 'Has Error')
            _this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="less" scoped>
.login{
    height: 100vh;
    width: 100vw;
    display: flex;
    .Login_left{
        width: 50%;
        height: 100%;
        background: white;
    }
    .Login_right{
        width: 50%;
        height: 100%;
        background: rgb(239, 239, 239);
        display: flex;
        justify-content: center;
        align-items: center;
        .content{
            height: 500px;
            width: 400px;
            // background: red;
            font-size: 20px;
            text-align: center;
            letter-spacing: 2px;
            .submit{
              width: 100%;
            }
        }
    }
}

</style>
