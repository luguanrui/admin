export default {
  data() {
    return {
      form: {
        name: '',
        pwd: '',
        remPwd: true
      }
    }
  },
  methods: {
    handleLogin() {
      if (!this.form.name) {
        this.$message.error('请输入用户名')
        return
      }
      if (!this.form.pwd) {
        this.$message.error('请输入密码')
        return
      }
    }
  }
}
