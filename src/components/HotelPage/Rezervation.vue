<template>
  <div>
    <div class="rezervation-container">
      <h2 class="rezervation-hotel-name">{{ data[0] }}</h2>

      <div class="rezervation-rating-location">
        <div class="rezervation-rating">
          <span
            v-for="star in data[2]"
            :key="'checkedStar' + star"
            class="fa fa-star checked"
          >
          </span>
          <span
          style="color:#616161"
            class="fa fa-star"
            v-for="star in 5 - data[2]"
            :key="'start' + star"
          >
          </span>
        </div>

        <span class="vertical"></span>

        <div class="rezervation-location">
          <i class="fas fa-map-marker-alt"></i>
          <span class="location">{{ data[1] }}</span>
        </div>
      </div>
      <div class="rezervation-pricing">
        <span class="rezervation-price-range"
          >{{ firstPrice }}$ - {{ lastPrice }}$</span
        >
        <span class="rezervation-info">
          <i class="fas fa-info"></i>
          <span class="rezervation-info-tooltip"
            >Prices are per person, per day</span
          >
        </span>
      </div>
      <div class="rezervation-input">
        <div class="rezervation-input-selections">
          <div class="rezervation-inputs">
            <div class="rezervation-action">
              <span class="action-button" @click="quantityAdult > 0 ? quantityAdult-- : null"><i class="fas fa-minus"></i></span>
              <span class="action-result">{{ quantityAdult }}</span>
              <span class="action-button" @click="quantityAdult++"><i class="fas fa-plus"></i></span>
            </div>
            <span class="input-for-who">Number of Adults</span>
          </div>

          <div class="rezervation-inputs">
            <div class="rezervation-action">
              <span class="action-button" @click="quantityChild > 0 ? quantityChild-- : null"><i class="fas fa-minus"></i></span>
              <span class="action-result">{{ quantityChild }}</span>
              <span class="action-button" @click="quantityChild++"><i class="fas fa-plus"></i></span>
            </div>
            <span class="input-for-who">Number of Children</span>
          </div>
        </div>

        <div class="rezervation-input-options">
          <span
            class="rezervation-option"
            @click="getPrice(option.price, index)"
            v-for="(option, index) in data[3]"
            :key="index"
            :value="option.price"
            :class="index == selectedOption ? 'selected-option' : ''"
            >
            {{ option.type | capitalize }}
            </span>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { filters } from "@/mixins/global.js";
export default {
  name: "Rezervation",
  props: {
    data: Array,
  },
  mixins: [filters],
  data() {
    return {
      date: "",
      quantityAdult: 3,
      quantityChild: 0,
      firstPrice: Number,
      lastPrice: Number,
      getPrices: this.data[3][0].price,
      selectedOption: 0,
    };
  },
  methods:{
    getPrice(val, index){
      this.getPrices = val
      this.selectedOption = index
    }
  },
  created() {
    this.firstPrice = this.data[3][0].price;
    this.lastPrice = this.data[3][this.data[3].length - 1].price;
  },
};
</script>



<style>
.rezervation-container {
  width: 600px;
  height: 500px;
  background-color: #cfd8dc;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.rezervation-hotel-name {
  font-family: "Poppins", sans-serif;
  color: #616161;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}
.rezervation-rating-location {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.rezervation-pricing {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.rezervation-price-range {
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  color: #03a9f4;
  font-weight: 700;
  cursor: default;
}
.rezervation-info {
  width: 20px;
  height: 20px;
  border: 2px solid #03a9f4;
  color: #03a9f4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.6rem;
  cursor: pointer;
  margin-left: 10px;
  position: relative;
}
.rezervation-info-tooltip {
  width: 190px;
  height: 30px;
  background-color: white;
  left: 30px;
  position: absolute;
  color: #616161;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border-radius: 5px;
  visibility: hidden;
}
.rezervation-info:hover .rezervation-info-tooltip {
  visibility: visible;
}
.rezervation-input {
  width: 100%;
  height: 335px;
  display: flex;
  flex-direction: column;
}
.rezervation-input-selections {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
.rezervation-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.input-for-who {
  width: 210px;
  height: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-radius: 0 0 10px 10px;
  color: #616161;
  border-top: 2px solid #bdbaba;
  cursor: default;
}
.rezervation-action {
  display: flex;
  background-color: white;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}
.action-button {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #03a9f4;
  cursor: pointer;
  transition: 0.3s ease;
}
.action-button:hover {
  background-color: rgb(100, 100, 100);
  color: white;
}
.action-result {
  width: 90px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  color: #616161;
  font-weight: 800;
}
.rezervation-input-options {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
}
.rezervation-option {
  width: 100px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  color: #616161;
  border: 3px solid transparent;
}
.selected-option {
  border: 3px solid #03a9f4;
}
</style>

