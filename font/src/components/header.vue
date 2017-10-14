<template>
  <div>
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">个人博客</el-menu-item>
      <el-submenu :index="i.onedata.id" v-for="(i,index) in arr" :key="index">
        <template slot="title">{{i.onedata.cnname}}</template>
        <el-menu-item :index="k.id" v-for="(k,ind) in i.twodata" :key="ind">{{k.cnname}}</el-menu-item>
      </el-submenu>
</el-menu>
<div class="line"></div>


  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        arr:[]

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        Bus.$emit("Id",keyPath)
      },
      
    },
    created(){
      this.axios.get("/api/front_article/getNav").then((data)=>{
          this.arr=data.data.data;
      })
    }
  }
</script>

<style>

</style>
