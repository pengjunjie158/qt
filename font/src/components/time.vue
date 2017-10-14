<template>
    <el-row class="rowall">
        <el-col :span="24" style="border-radius: 4px;">
            <el-row class="classrowone">最新文章</el-row>
            <el-row v-for="(i,index) in datalist" class="classrow" :span="24" :key="index">
                <el-col :span="2" class="classrow1">{{index+1}}</el-col>
                <el-col :span="14" class="classrow2">{{i.article_name}}</el-col>
                <el-col :span="6" class="classrow3">{{i.time}}</div></el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data(){
            return{
                datalist:[]
            }
        },
        created(){
            Bus.$on("Data",(val)=>{
              this.datalist=val;
          })
        }
}
</script>

<style>

</style>
