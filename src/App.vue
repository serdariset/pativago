<template>
  <div id="app">
    <Header />
    <div class="hotel-cards">
      <HotelCards/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import HotelCards from './components/HotelCards.vue'

export default {
  name: 'App',
  components:{
    Header,
    HotelCards,
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
 
}
.hotel-cards{
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  width:  1200px ;
}
</style>
