<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="item,index" class="tab-control-item"
    :class="{active: index === currentIndex}"
    @click="itemclick(index)">
      <span>{{item}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name:'TabControl',
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods:{
      itemclick(index){
        this.currentIndex = index;
        this.$emit('tabclick',index)
      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    text-align: center;



    background-color: #EEEEEE;
  }
  .tab-control-item {
    flex:1;


  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: #F2777A;

  }
  .active span {
    border-bottom: 2px solid #F2777A;

  }
</style>
