<template>
  <div>
    <div class="result-modal-container">
      <div class="loading-container">
        <div class="success-checkmark">
          <div class="check-icon">
            <span class="icon-line line-tip"></span>
            <span class="icon-line line-long"></span>
            <div class="icon-circle"></div>
            <div class="icon-fix"></div>
          </div>
        </div>
      </div>
      <div class="result-modal-info">
        <h4>{{ paymentName }}</h4>
        <p>Your payment has been received successfully</p>
       <router-link to="/"><button>Go Home Page</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultModal",
  props: {
    paymentName: String,
  },
 
};
</script>

<style>
.result-modal-container {
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  background-color: rgb(231, 231, 231);
  box-shadow: 1px 2px 14px -1px rgba(0, 0, 0, 0.096);
  border-radius: 10px;
  position: relative;
}
.loading-container {
  background-color: white;
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  box-shadow: 1px 2px 14px -1px rgba(0, 0, 0, 0.096);
  padding-top: 18px;
  padding-right: 7px;
}
.result-modal-info {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
}
.result-modal-info h4 {
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
}
.result-modal-info p {
  font-family: "Poppins", sans-serif;
}
.result-modal-info button {
  outline: none;
  border: none;
  border-radius: 10px;
  margin-top: 45px;
  background-color: #03a9f4;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  color: white;
  width: 145px;
  height: 40px;
  font-size: 1.1rem;
}
.success-checkmark {
  width: 80px;
  height: 115px;
  margin: 0 auto;
}
.success-checkmark .check-icon {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #4caf50;
}
.success-checkmark .check-icon::before {
  top: 3px;
  left: -2px;
  width: 30px;
  transform-origin: 100% 50%;
  border-radius: 100px 0 0 100px;
}
.success-checkmark .check-icon::after {
  top: 0;
  left: 30px;
  width: 60px;
  transform-origin: 0 50%;
  border-radius: 0 100px 100px 0;
  animation: rotate-circle 4.25s ease-in;
}
.success-checkmark .check-icon::before,
.success-checkmark .check-icon::after {
  content: "";
  height: 100px;
  position: absolute;
  background: #ffffff;
  transform: rotate(-45deg);
}
.success-checkmark .check-icon .icon-line {
  height: 5px;
  background-color: #4caf50;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
}
.success-checkmark .check-icon .icon-line.line-tip {
  top: 46px;
  left: 14px;
  width: 25px;
  transform: rotate(45deg);
  animation: icon-line-tip 0.75s;
}
.success-checkmark .check-icon .icon-line.line-long {
  top: 38px;
  right: 8px;
  width: 47px;
  transform: rotate(-45deg);
  animation: icon-line-long 0.75s;
}
.success-checkmark .check-icon .icon-circle {
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid rgba(76, 175, 80, 0.5);
}
.success-checkmark .check-icon .icon-fix {
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: #ffffff;
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}
@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}
@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}
</style>