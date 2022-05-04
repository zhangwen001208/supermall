<template>
  <div id="">
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
 import {getHomeMultidata} from "network/home.js"
 import {Swiper,SwiperItem} from "components/common/swiper/index.js"
  export default {
    name:"HomeSwiper",
    props: {
      banners: {
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem

    }
  }
</script>

<style>
</style>
