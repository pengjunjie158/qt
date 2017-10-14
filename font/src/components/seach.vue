<template>
    <div>
        <h4>全站搜索</h4>
        <div style="width:100%;display:flex;">
            <el-input v-model="input" placeholder="请输入内容" style="flex:1 ;margin-left:8px;"></el-input>
            <el-button type="primary" @click="seach" style="margin:0 8px;">确定</el-button>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            input:"",
        }
    },
    methods:{
        seach(){
            Bus.$emit("Inp",this.input)
            this.input=""
        }
    }
}
</script>

<style>
h4{
    width: 95%;
    height: 30px;
    background: red;
    border-radius:10px;
    line-height: 30px;
    margin: 10px auto; 
    color: #fff; 
}
</style>
