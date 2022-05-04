<template>
  <div id="app">
  	<router-view></router-view>
  	<MainTabBar></MainTabBar>
     
  </div>
 
  
</template>
<script>
  import MainTabBar from "components/content/MainTabbBar/MainTabBar.vue"
  export default {
    name:"App",
    components: {
      MainTabBar
    }
  }
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }

</style>
