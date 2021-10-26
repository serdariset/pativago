<template>
  <div>
    <div class="hotel-container">
      <div class="top-side">
        <Slider :photos="getData.photos" />
        <Rezervation/>
      </div>
      <Properties :comments="getData.comments" :services="getData.services"/>
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
    };
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
</style>