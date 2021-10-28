<template>
  <div>
    <div class="step-bars-container">
      <div class="step-bar first-step-container" :class="stepNumber == 0 ? 'active-step' : 'disable-step'">
        <span class="step-number">1</span>
        <span class="step-bar-description">Check</span>
      </div>
      <div class="step-bar second-step-container" :class="stepNumber == 1 ? 'active-step' : 'disable-step'">
        <span class="step-number">2</span>
        <span class="step-bar-description">Form</span>
      </div>
      <div class="step-bar third-step-container" :class="stepNumber == 2 ? 'active-step' : 'disable-step'">
        <span class="step-number">3</span>
        <span class="step-bar-description">Done</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Steppers',
    props:{
        stepNumber:Number
    }
};
</script>

<style>
.step-bars-container {
  width: calc(1180px - 2rem);
  height: 200px;
  padding: 1rem;
  background-color: #cfd8dc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
}
.step-bar {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.active-step{
    background-color: #03a9f4;
}
.disable-step{
    background-color: #a19e9e;
}
.step-number {
  color: white;
  font-size: 3.5rem;
  font-family: "Poppins", sans-serif;
}
.step-bar-description {

  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 1.5rem;
}
</style>