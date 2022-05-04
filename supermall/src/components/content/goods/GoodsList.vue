<template>
  <div class="goods">
    <GoodsListItem v-for="item in goodslist" :goodsitem='item' ></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    name:"GoodsList",
    props: {
      goodslist: {
      type: Array,
      default() {
        return []
      }
      }
    },
    components:{
      GoodsListItem
    }
  }

</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;

  }
</style>
