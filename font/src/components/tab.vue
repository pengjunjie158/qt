<template>
    <el-table
      :data="tableData"
      style="width: 90%;text-align:center;">
      <el-table-column
        prop="article_name"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cnname_one"
        label="分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="editer"
        label="作者">
      </el-table-column>
      <el-table-column
        prop="time"
        label="发布时间">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [],
          olddata:[],
          obj:null,
          sea:null
        }
      },
      created(){
            Bus.$on("Name",(val)=>{
              this.obj=val;
              
          })
          

          Bus.$on("Inp",(val)=>{
               this.sea=val;
              
          })
          this.axios.get("/api/front_article/getArticleAll").then((data)=>{
            
            this.olddata=data.data.data;
            this.tableData=this.olddata;
            Bus.$emit("Data",this.olddata)
          })
      },
    watch:{
        obj(){
          console.log(this.obj)
             const _this=this;
             _this.tableData=[];
             for(var i=0;i<this.olddata.length;i++){
                 if(this.olddata[i].cnname_one==this.obj.one&&this.olddata[i].cnname_two==this.obj.two){
                  _this.tableData.push(this.olddata[i])
                  }
             }
            
        },
        sea(){
          console.log(this.sea)
             const _this=this;
             _this.tableData=[];
             for(var i=0;i<this.olddata.length;i++){
                 if(this.olddata[i].article_name==this.sea){
                  _this.tableData.push(this.olddata[i])
                  }
             }
            
        },
    },
    }
  </script>
  <style>
  .cell{
    text-align: center;
  }
  </style>
  