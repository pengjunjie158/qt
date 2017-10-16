<template>
  <div>
    这是主页
    <router-view></router-view>
    <router-link to="/a">转到A</router-link> 
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: 'HelloWorld',
  computed:{
    ...mapState([
     "articleData"
    ])
  },
  created(){
      if(!this.articleData){
        this.$router.push({path:"/loading"})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
