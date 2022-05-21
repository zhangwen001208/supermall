<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>

    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'Scroll',
    props:{
      probeType:{
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type:Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      /* 创建better-scroll组件 */
       this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
/*        这里的值是0，1都是默认值 不监听 2 是监听但没有惯性监听 3是全局监听 */
      }),
      /* 监听组件事件 */
      this.scroll.on('scroll',(Position) =>{
         this.$emit('scroll',Position)

      }),
      /* 下拉加载更多 */

          this.scroll.on('pullingUp',() =>{
            this.$emit('pullingUp')
          })


    },
    methods:{
      scrollTo(x,y,time=300) {
       this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      },
      refresh() {
       if(this.scroll && this.scroll.refresh){
          this.scroll &&  this.scroll.refresh()
       }
      },
      finishpullUp() {
        if(this.pullUpLoad){
          this.scroll &&  this.scroll.finishPullUp()
        }
        
      }
    }

  }
</script>

<style>
</style>
