<template>
  <div class="bread">
    <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{onename}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{twoname}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[],
            obj:"",
            onename:"技术",
            twoname:"vue",
        }
    },
    created(){
        this.axios.get("/api/front_article/getNav").then((data)=>{
          this.arr=data.data.data;
      })
       Bus.$on("Id",(val)=>{
            this.obj=val;
        })
        
    },
    watch:{
        obj(){
            const _this=this;
            for(var i=0;i<this.arr.length;i++){
                 
                 if(_this.arr[i].onedata.id==this.obj[0]){
                    _this.onename=_this.arr[i].onedata.cnname;
                    var two=_this.arr[i].twodata;
                    for(var j=0;j<two.length;j++){
                        if(two[j].id==this.obj[1]){
                            _this.twoname=two[j].cnname;
                            var name={
                                one:_this.onename,
                                two: _this.twoname
                            }
                            Bus.$emit("Name",name)

                        }
                    }
                 }
            }
            
        }
    },
}
</script>

<style>
.bread{
    margin: 45px;
}
</style>
