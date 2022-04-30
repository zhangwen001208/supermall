<template>
	<div id="home">
    <NavBar class="home-nav" >
      <template v-slot:center >购物街 </template>
    </NavBar>
    <Swiper>
        <SwiperItem v-for="item in banners" :key="item">
          <a :href="item.link">
            <img :src="item.image" />
          </a>
        </SwiperItem>

    </Swiper>


	</div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue"

  import {getHomeMultidata} from "network/home.js"
  import {Swiper,SwiperItem} from "components/common/swiper/index.js"

  export default {
    name:"Home",
    data() {
      return {
        banners:[],
        recommonds:[]
      }
    },
    components:{
      NavBar,
      Swiper,
      SwiperItem,
    },
    created() {
      /* 1.请求多个数据  生命周期函数 组件加载获取数据*/
      getHomeMultidata().then(res => {
        this.banners=res.data.data.banner.list;
        /* console.log(res) */

       this.recommonds = res.data.data.recommend.list
      })
    }



  }
</script>


<style>
.home-nav{
    background-color: #F08D49;
    color: #fff;
  }
</style>
