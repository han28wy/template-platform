<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Approved by">
      <el-input v-model="formInline.user" placeholder="Approved by" clearable />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select
        v-model="formInline.region"
        placeholder="Activity zone"
        clearable
      >
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { userStore } from '@/stores/user';

const formInline = reactive({
  user: '',
  region: '',
  date: ''
});

const router = useRouter();
const onSubmit = () => {
  console.log('submit!');
  userStore()
    .login()
    .then(() => {
      console.log('登录成功');
      router.push('/home');
    })
    .catch(() => {
      console.log('登录失败');
    });
};
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}
</style>
