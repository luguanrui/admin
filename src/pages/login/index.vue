<template>
  <div class="login-wrapper">
    <el-card>
      <div class="login-content">
        <div class="logo">登录系统</div>
        <el-form :model="form">
          <div class="form-group">
            <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
          </div>
          <div class="form-group">
            <el-input v-model="form.pwd" type="password" placeholder="请输入密码"></el-input>
          </div>
          <div class="form-group">
            <el-checkbox v-model="form.remPwd"></el-checkbox>&nbsp;&nbsp;记住密码
          </div>
          <div class="form-group">
            <el-button type="primary" @click="handleLogin" size="large">登&nbsp;&nbsp;录</el-button>
          </div>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
