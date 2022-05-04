<template>
  <div class="recommed">
    <div class="item" v-for="item in recommonds">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
      <div class="item-title">{{item.title}}</div>


    </div>

  </div>

</template>

<script>
  export default {
    name:"HomeRecommed",
    props:{
      recommonds: {
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommed{
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 15px 0px 20px;
    border-bottom: 8px solid #eee;
  }
  .recommed .item{
    flex: 1;

  }
  .recommed img {
    width: 80px;
    height: 80px;
  }
  .item .item-title{
    margin-top: 10px;
  }
</style>
