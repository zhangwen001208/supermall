<template>
  <div class="goodslist-item">
    <img :src="goodsitem.show.img" />
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="item-price">{{goodsitem.price}}</span>
      <span class="item-cfav">{{goodsitem.cfav}}</span>
    </div>


  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsitem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style>
  .goodslist-item {
   /* position: relative; */
   padding-bottom: 20px;
    width: 48%;
  }
  .goodslist-item img {
    width: 100%;
   border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    text-align: center;
    position: relative;
     bottom: 5px;
     left: 0;
     right: 0;


  }
  .goods-info p{
    overflow:hidden ;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .item-price{
    color: #F08D49;
    margin-right: 20px;
  }
  .goods-info .item-cfav{
    position: relative;
  }
  .goods-info .item-cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top:1px;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/colect.svg') 0 0/14px 14px;
  }

</style>
