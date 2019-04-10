<template>
    <div class="login">
      <el-form :model="form" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped></style>
