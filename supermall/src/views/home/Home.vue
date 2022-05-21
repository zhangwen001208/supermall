<template>
	<div id="home">
    <NavBar class="home-nav" >
      <template v-slot:center >购物街 </template>
    </NavBar>
    <Scroll class="content" ref="scroll" :probe-Type='3' @scroll="contentscroll"
    :pull-UpLoad='true' @pullingUp="loadmore">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommed :recommonds="recommonds"></HomeRecommed>
      <FeatureView></FeatureView>
      <TabControl :title="['流行','新款','精选']" @tabclick="tabclick"></TabControl>
      <GoodsList :goodslist="goods[currentType].list"></GoodsList>
    </Scroll>
    <BackTop @click="backtopclick" v-show="isbackshow"></BackTop>
	</div>

</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommed from './childComps/HomeRecommed.vue'
  import FeatureView from './childComps/FeatureView.vue'


import TabControl from 'components/content/tabControl/TabControl.vue'
 import NavBar from "components/common/navbar/NavBar.vue"
 import GoodsList from 'components/content/goods/GoodsList.vue'
 import Scroll  from 'components/common/scroll/Scroll.vue'
 import BackTop from 'components/content/backtop/BackTop.vue'


  import {getHomeMultidata,getHomeGoodsdata} from "network/home.js"
  import emitter from 'assets/css/bus.js'
  import {debounce} from 'common/utils.js'


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
         isbackshow: false,
         /* saveY:0 */
      }

    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommed,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },

    created() {
      this.getHomeMultidata()
      /* 2.请求商品数据 */
      this.getHomeGoodsdata('pop')
      this.getHomeGoodsdata('new')
      this.getHomeGoodsdata('sell')

    },

    beforeDestroy() {
      emitter.off('imageitemload')
    },
    mounted(){
          /* const refresh = debounce(this.$refs.scroll.scroll.refresh,50) */
          /* 监听页面加载数据 通过事件总线 on 方法来接收 */
         emitter.on('imageitemload', () =>  {
        if(this.$refs.scroll){
            this.$refs.scroll.refresh()
         }

          })
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
          backtopclick() {
            /* 通过直接获取组件对象来获取组件对象里的属性和方法 */
              this.$refs.scroll.scrollTo(0,0,300)

             /* console.log(this.$refs.scroll.scroll.scrollTo()) */
          },
          contentscroll(Position) {
            /* 设置显示backtop图标 根据下拉监听距离 */
              this.isbackshow = (-Position.y) >1000
          },
          loadmore() {
/*            这里直接调用方法 我们是给每个类型加载更多的数据 这里就拿去下面封装好的页面加一*/
               /* this.getHomeGoodsdata(this.currentType) */
               this.getHomeGoodsdata(this.currentType)
               /* console.log("上拉加载更多") */

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
              /* 这里是清楚进行多次下拉加载更多 */
             this.$refs.scroll.finishpullUp()

            })

          }

        }


}
</script>


<style scoped>

#home {
  padding-top:44px ;
  /* height: 2000px; */
  height: 100vh;


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
  /* .tab-control{
    position: sticky;
    top: 44px;

  } */
  .content{
    height: calc(100vh - 93px);
    position: relative;

    /* overflow: hidden; */
  }
</style>
