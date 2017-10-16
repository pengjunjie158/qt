<template>
  <div>
    这是A页
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
     computed:{
    ...mapState([
     "dataNav"
    ])
  },
  created(){
      if(!this.dataNav){
        this.$router.push({path:"/loading",query:{a:"123"}})
      }
  }

}
</script>

<style>

</style>
