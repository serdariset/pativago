<template>
  <div>
    <div class="reservation-page-container">
      <Steppers :stepNumber="stepNumber" />
      <ReservationCard :productCard="productCard" v-show="stepNumber == 0"/>
      <PersonForm :person="[productCard.adult,productCard.child]" v-show="stepNumber == 1"/>
      <button @click="nextStep()" class="next-step-button">Next..</button>
    </div>
    
  </div>
</template>

<script>
import ReservationCard from "@/components/ReservationPage/ReservationCard";
import Steppers from "@/components/ReservationPage/Steppers";
import PersonForm from "@/components/ReservationPage/PersonForm";
export default {
  name: "Reservation",
  components: {
    ReservationCard,
    Steppers,
    PersonForm,
  },
  data() {
    return {
      stepNumber: 0,
      productCard: this.$route.params,
    };
  },
  methods: {
    nextStep() {
      this.stepNumber < 2 ? this.stepNumber++ : null;
    },
  },
};
</script>

<style>
.reservation-page-container {
  width: 1180px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  background-color: #e0e0e0be;
  box-shadow: 1px 2px 14px -1px rgba(0, 0, 0, 0.59);
  border-radius: 10px;
  position: relative;
}
.next-step-button {
  outline: none;
  border: none;
  width: 150px;
  height: 50px;
  cursor: pointer;
  background-color: #03a9f4;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  border-radius: 10px;
  transition: 0.3s ease;
  position: absolute;
  bottom: 30px;
  right: 30px;
}
.next-step-button:hover {
  background-color: #058cca;
}
</style>