<template>
  <div>
      <div class="hotel-container">
          <ul class="slider-container">
            <li class="slider">
              <div class="bottom-images" v-for="(photo,index) in getData.photos" :key="index">
                <img :src="require(`@/assets/images/${photo}`)" class="bottom-img"/>
              </div>
              <div class="top-image"> <img :src="require(`@/assets/images/${getData.photos[0]}`)" class="main-image"/> </div>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>

import json from "@/assets/data/Hotels.json";

export default {
  name: 'HotelPage',
  
  data(){
    return{
      HotelsData:json,
      getData:[]
      
    }
  },
  created(){
    for(let i = 0; i<this.HotelsData.length;i++){
      if(this.HotelsData[i].hotelID == this.$route.params.id){
        this.getData = this.HotelsData[i] 
      }
    }
  }
}
</script>

<style>
.hotel-container{
  width:1180px ;
  height: 500px;
  background-color:#CFD8DC;
  border-radius: 15px;
  padding: 1rem;
}
.slider-container{
  width:530px ;
  height: 370px;
  position: relative;
}
.slider{
  width:530px ;
  height: 370px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.bottom-images{
  flex-direction: row;
  width: 100px;
  height: 60px;
  background-color: blue;
  overflow: hidden;
}
.top-image{
  width:100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 300px;
  overflow: hidden;
  position: absolute;
  background-color: chartreuse;
  top: 0;
}
.main-image{
  max-width: 100%;
  min-height: 100%;
}
.bottom-img{
  max-width: 100%;
  min-height: 100%;
}
.bottom-images:nth-child(1){
  border-bottom-left-radius: 15px;
}
.bottom-images:nth-child(5){
  border-bottom-right-radius: 15px;
}
</style>