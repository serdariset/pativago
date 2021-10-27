<template>
  <div>
    <div class="hotel-container">
      <div class="top-side">
        <Slider :photos="getData.photos" />
       <div class="right-side">
          <Rezervation :data="[getData.hotelName,getData.location,getData.rating,getData.price,getData.options]"/>
          <div class="rezerve-button">
          <span class="total-price"><!-- {{(getPrices * quantityAdult) +( quantityChild*getPrices/2)}} -->$</span>
          <button class="rezerve" >Rezerve</button>
        </div>
       </div>
       
        
      </div>
      <Properties :comments="getData.comments" :options="getData.options" @take-option="takeOption($event)"/>

    </div>
  </div>
</template>

<script>
import json from "@/assets/data/Hotels.json";
import Slider from "../components/HotelPage/Slider.vue";
import Properties from "../components/HotelPage/Properties.vue";
import Rezervation from "../components/HotelPage/Rezervation.vue";

export default {
  name: "HotelPage",

  data() {
    return {
      HotelsData: json,
      getData: [],
      getOption:[],
    };
  },
  methods:{
    takeOption(val){
      this.getOption = val
    }
  },
  created() {
    for (let i = 0; i < this.HotelsData.length; i++) {
      if (this.HotelsData[i].hotelID == this.$route.params.id) {
        this.getData = this.HotelsData[i];
      }
    }
  },
  
  components: {
    Slider,
    Properties,
    Rezervation
  },
};
</script>

<style>
.hotel-container {
  width: 1180px;
  height: auto;
  background-color: #e0e0e0be;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 1px 2px 14px -1px rgba(0, 0, 0, 0.59);
  display: flex;
  flex-direction: column;

}
.top-side{
  display: flex;
}
.right-side{
  display: flex;
  flex-direction: column;
  position: relative;
}

.rezerve-button {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 50px;
}
.rezerve {
  outline: none;
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  background-color: #03a9f4;
  color: white;
  transition: 0.3s ease;
}
.rezerve:hover {
  background-color: #0094d8;
  cursor: pointer;
}
.total-price {
  width: 90px;
  height: 50px;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  background-color: #03a9f4;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: default;
}
</style>