<template>
  <div>
      数据请求
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    name:"loading",
    data(){
      return{
        data:""
      }
    },
    created(){
        this.defaultdata();
        this.data=this.$route.query.a
        console.log(this.$route.query.a) 
    },
    computed:{
      ...mapState({
        state:(state)=>{
          return state.state
        },
        statea:(state)=>{
          return state.statea
        }
      })
    },
    watch:{
        state(){
          if(this.state){
            this.$router.push("/")
          }
            
        },
         statea(){
           console.log(this.statea)
          if(this.statea){
            this.$router.push("/a")
          }
        },
        data(){
           console.log(this.data)
          if(this.data=="123"){
            this.all();
          }
        }
    },
  methods:{
      // fn(){
      //   this.$router.push({path:"/"})  
      // },
    ...mapActions([
      "defaultdata","all"
    ])
    
  }

}
</script>

<style>
div{
    text-align: center;
}
</style>
