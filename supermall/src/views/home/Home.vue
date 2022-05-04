<template>
	<div id="home">
    <NavBar class="home-nav" >
      <template v-slot:center >购物街 </template>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommed :recommonds="recommonds"></HomeRecommed>
    <FeatureView></FeatureView>
    <TabControl :title="['流行','新款','精选']" @tabclick="tabclick"></TabControl>
    <GoodsList :goodslist="goods[currentType].list"></GoodsList>
	</div>

</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommed from './childComps/HomeRecommed.vue'
  import FeatureView from './childComps/FeatureView.vue'


import TabControl from 'components/content/tabControl/TabControl.vue'
 import NavBar from "components/common/navbar/NavBar.vue"
 import GoodsList from 'components/content/goods/GoodsList.vue'


  import {getHomeMultidata,getHomeGoodsdata} from "network/home.js"


  export default {
    name:"Home",
    data() {
      return {
        banners:[],
        recommonds:[],
        goods:{
          'pop':{page: 0, list:[] },
          'new':{page: 0, list:[] },
          'sell':{page: 0, list:[] }
        },
         currentType:'pop',
      }

    },


    components: {
      NavBar,
      HomeSwiper,
      HomeRecommed,
      FeatureView,
      TabControl,
      GoodsList
    },


      created() {
        /* 1.请求多个数据  生命周期函数 组件加载获取数据*/
       this.getHomeMultidata()
       /* 2.请求商品数据 */
       this.getHomeGoodsdata('pop')
       this.getHomeGoodsdata('new')
       this.getHomeGoodsdata('sell')
        },
        methods:{
          /**
           * 单机响应事件模块
           */
          tabclick(index) {
           switch(index) {
              case 0:
              this.currentType='pop'
              break
              case 1:
              this.currentType='new'
              break
              case 2:
              this.currentType='sell'
              break
            }
          },
          /**
           * 网络请求模块
           */
          getHomeMultidata() {
            getHomeMultidata().then(res => {
                this.banners=res.data.data.banner.list;
                this.recommonds = res.data.data.recommend.list
                })
          },
          getHomeGoodsdata(type) {
            const page=this.goods[type].page +1
            getHomeGoodsdata(type,page).then( res => {
              this.goods[type].list.push(...res.data.data.list)
              this.goods[type].page +1
            })
          }

        }


}
</script>


<style>

#home {
  padding-top:44px ;
  /* height: 2000px; */


  }
.home-nav {
    background-color: #F08D49;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;

  }
</style>
