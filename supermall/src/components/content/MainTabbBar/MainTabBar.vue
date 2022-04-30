<template>
	<div>
		<TabBar>
		 <TabBarItem path="/home">
			 <template v-slot:item-icon><img  src="~assets/img/home.svg" /></template>
			 <template v-slot:item-icon-active><img  src="~assets/img/home_active.svg" /></template>
			 <template v-slot:item-text><div >首页</div></template>
		 </TabBarItem>
		 <TabBarItem path="/category">
			 <template v-slot:item-icon><img  src="~assets/img/category.svg" /></template>
			 <template v-slot:item-icon-active><img  src="~assets/img/category_active.svg" /></template>
			 <template v-slot:item-text><div >分类</div></template>
		 </TabBarItem>
		 <TabBarItem path="/cart">
			<template v-slot:item-icon><img  src="~assets/img/cart.svg" /></template>
			<template v-slot:item-icon-active><img  src="~assets/img/cart_active.svg" /></template>
			<template v-slot:item-text><div >购物车</div></template>
		 </TabBarItem>
		 <TabBarItem path="/profile">
			 <template v-slot:item-icon><img  src="~assets/img/profile.svg" /></template>
			 <template v-slot:item-icon-active><img  src="~assets/img/profile_active.svg" /></template>
			 <template v-slot:item-text><div >我的</div></template>
		 </TabBarItem>
		</TabBar>
	</div>
</template>

<script>
	import TabBar from '../../common/tabbar/TabBar.vue'
	import TabBarItem from '../../common/tabbar/TabBarItem.vue'
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
			
		}
		
	 
	}
</script>

<style>
</style>
