<template>
<div>
    <div class="top">
        <headtop></headtop>
    </div>
  <div class="bottom">
        <div class="left">
            <bread></bread>
            <tab class="tab"></tab>
        </div>
        <div class="right">
            <seach></seach>
            <sort></sort>
            <times></times>
        </div>
  </div>
</div>
  
</template>

<script>
import header from "./header";
import bread from "./bread";
import tab from "./tab";
import seach from "./seach";
import sort from "./sort";
import Time from "./time";
export default {
    components:{
        headtop:header,
        bread:bread,
        tab:tab,
        seach:seach,
        sort:sort,
        times:Time
    }
}
</script>

<style>
.bottom{
    width: 100%;
}
.left{
    width: 70%;
    float: left;
}
.right{
    float: right;
    width: 30%;
    height: 500px;
    background: yellow;
    margin-top: 90px;
}
.tab{
    margin: 45px;
}
</style>
