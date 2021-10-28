<template>
  <div>
    <div class="reservation-page-container">
      <Steppers :stepNumber="stepNumber" />
      <ReservationCard :productCard="productCard" v-show="stepNumber == 0"/>
      <div class="person-form-container" v-show="stepNumber == 1">
        <span class="form-title">Adult information</span>
        <div class="adults-form">
          <AdultForm   v-for="(person,index) in productCard.adult" :key="'person-adult-form'+index"/>
          
        </div>
        <span class="form-title">Child information</span>
        <div class="adults-form">
          <ChildForm v-for="(person,index) in productCard.child" :key="'person-child-form'+index"/>
          
        </div>
        
      </div>
      <button @click="nextStep()" class="next-step-button">Next..</button>
    </div>
    
  </div>
</template>

<script>
import ReservationCard from "@/components/ReservationPage/ReservationCard";
import Steppers from "@/components/ReservationPage/Steppers";
import AdultForm from "@/components/ReservationPage/AdultForm";
import ChildForm from "@/components/ReservationPage/ChildForm";
export default {
  name: "Reservation",
  components: {
    ReservationCard,
    Steppers,
    AdultForm,
    ChildForm,
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
.person-form-container {
  width: 100%;
  height: auto;
  background-color: #cfd8dc;
  display: flex;
  flex-direction: column;
  
  border-radius: 10px;
  padding:1rem ;
  padding-bottom: 4rem;
}
.adults-form{
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
}
.form-title {
  font-family: "Poppins", sans-serif;
  color: #616161;
  border-bottom: 3px solid white;
  margin-bottom: 1.5rem;
  width: calc(1180px - 6rem);
  height: 40px;
  font-size: 1.4rem;
  padding-left: 1rem;
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
.prev-step-button{
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
  right: 190px;
}
.next-step-button:hover {
  background-color: #058cca;
}
</style>