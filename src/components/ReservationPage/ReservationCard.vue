<template>
  <div>
    <div class="reservation-card-container">
      <div class="people-selection">
        <span class="group-title">Number of people to stay</span>
        <div class="card-group">
          <div class="people-card-container">
            <span>{{ productCard.adult }}</span>
            <span>Adults</span>
          </div>
          <div class="people-card-container" v-show="productCard.child > 0">
            <span>{{ productCard.child }}</span>
            <span>Children</span>
          </div>
           <div class="people-card-container" >
            <span>{{ productCard.day }}</span>
            <span>Day(s)</span>
          </div>
        </div>
      </div>
      <div class="people-selection">
        <span class="group-title">Room type</span>
        <div class="card-group">
          <div class="people-card-container">
            <span>{{ productCard.room[0] | capitalize }}</span>
          </div>
        </div>
      </div>

      <div class="people-selection" v-show="productCard.options.length > 0">
        <span class="group-title">Special selections</span>
        <div class="card-group">
          <div
            class="people-card-container"
            v-for="(selection, index) in productCard.options"
            :key="index"
          >
            <i :class="selection[2]" style="margin-bottom: 5px"></i>
            <span>{{ selection[1] | capitalize }}</span>
          </div>
        </div>
      </div>

      <div class="people-selection">
        <span class="group-title">Total</span>
        <div class="card-group">
          <div class="people-card-container">
            <span style="font-weight:600">{{ totalPrice}} $</span>
          </div>
        </div>
      </div>
    </div>
   
   
  </div>
</template>

<script>
import { filters } from "@/mixins/global.js";
export default {
  name: "ReservationCard",
  props: {
    productCard: Object,
    stepNumber:Number,
  },
  mixins: [filters],
  computed:{
      totalPrice(){
          let adultPrice = this.productCard.adult * this.productCard.room[1]
          let childPrice = this.productCard.child * (this.productCard.room[1]/2)
          let selectionPrice = 0
          for(let index = 0; index<this.productCard.options.length; index++){
              selectionPrice += this.productCard.options[index][0]
          }
          return adultPrice + childPrice + selectionPrice
      }
  }
};
</script>

<style>
.reservation-card-container {
  width: calc(1180px - 2rem);
  height: auto;
  background-color: #cfd8dc;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  padding-bottom: 4rem;
}
.people-selection {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.card-group {
  display: flex;
  margin-left: 1rem;
}
.people-card-container {
  background-color: white;
  border: 3px solid #03a9f4;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  color: #616161;
  font-size: 1rem;
  margin-right: 1rem;
}

.group-title {
  font-family: "Poppins", sans-serif;
  color: #616161;
  border-bottom: 2px solid white;
  margin-bottom: 1rem;
  width: 300px;
  height: 30px;
}
</style>