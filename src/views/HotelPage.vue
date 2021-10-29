<template>
  <div>
    <div class="hotel-container">
      <div class="top-side">
        <Slider :photos="getData.photos" />
        <div class="right-side">
          <Rezervation
            :data="[
              getData.hotelName,
              getData.location,
              getData.rating,
              getData.price,
              getData.options,
            ]"
            @take-room="takeRoom($event)"
            @quantity-adult="takeAdult($event)"
            @quantity-child="takeChild($event)"
            @quantity-day="takeDay($event)"
          />
          <div class="rezerve-button">
            <span class="selection-error" ref="selectionError"
              >Please specify the number of people</span
            >
            <span class="selection-error" ref="roomError">
              Please select a room type
            </span>
            <span class="selection-error" ref="childError">
              Children cannot make reservations
            </span>
            <span class="selection-error" ref="dayError"
              >Please specify the number of days</span
            >
            <span class="total-price"
              >{{ (totalPrice + optionsPrice) * getDay }}$</span
            >
            <button
              class="rezerve"
              @click="toForm(quantityAdult, quantityChild)"
            >
              Rezerve
            </button>
          </div>
        </div>
      </div>
      <Properties
        :comments="getData.comments"
        :options="getData.options"
        @take-option="takeOption($event)"
      />
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
      getOption: [],
      getRoom: [],
      quantityAdult: 0,
      quantityChild: 0,
      getDay: 0,
    };
  },

  methods: {
    takeOption(val) {
      this.getOption = val;
    },
    takeRoom(val) {
      this.getRoom = val;
    },
    takeAdult(val) {
      this.quantityAdult = val;
    },
    takeChild(val) {
      this.quantityChild = val;
    },
    takeDay(val) {
      this.getDay = val;
    },
    toForm(adult, child) {
      let number = this.$refs.selectionError.style;
      let childNumber = this.$refs.childError.style;
      let room = this.$refs.roomError.style;
      let day = this.$refs.dayError.style;
      if (adult == 0 && child == 0) {
        number.display = "flex";
        setTimeout(() => {
          number.display = "none";
        }, 2500);
      } else if (this.getRoom.length == 0) {
        room.display = "flex";
        setTimeout(() => {
          room.display = "none";
        }, 2500);
      } else if (this.getDay == 0) {
        day.display = "flex";
        setTimeout(() => {
          day.display = "none";
        }, 2500);
      } else if (child > 0 && adult == 0) {
        childNumber.display = "flex";
        setTimeout(() => {
          childNumber.display = "none";
        }, 2500);
      } else {
        this.$router.push({
          name: "reservation",
          params: {
            adult: adult,
            child: child,
            options: this.getOption,
            room: this.getRoom,
            day: this.getDay,
          },
        });
      }
    },
  },
  computed: {
    optionsPrice() {
      let optionPrices = 0;
      for (let index = 0; index < this.getOption.length; index++) {
        optionPrices += this.getOption[index][0];
      }
      return optionPrices;
    },
    totalPrice() {
      let total = 0;
      if (this.getRoom[1] == undefined) {
        total = 0;
      } else {
        total =
          this.getRoom[1] * this.quantityAdult +
          (this.getRoom[1] / 2) * this.quantityChild;
      }

      return total;
    },
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
    Rezervation,
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
.top-side {
  display: flex;
}
.right-side {
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
.selection-error {
  width: 248px;
  height: 25px;
  background-color: rgb(255, 143, 143);
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  font-size: 0.75rem;
  position: absolute;
  top: -35px;
  color: white;
  border: 2px solid red;
  display: none;
  font-weight: 400;
}
</style>