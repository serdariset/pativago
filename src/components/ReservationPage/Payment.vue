<template>
  <div>
    <div class="payment-card-container">
      <div class="card-information-container payment-box">
        <span class="card-title">Card Owner</span>

        <div
          class="payment-form-group"
          :class="paymentStatus($v.paymentCard.fullname)"
        >
          <input
            placeholder="Fullname"
            class="payment-card-input"
            v-model.trim="$v.paymentCard.fullname.$model"
          />
        </div>
        <div class="error-group">
            <span v-if="$v.paymentCard.fullname.$dirty? !$v.paymentCard.fullname.required: ''"
              class="error-span">Bu alan gereklidir</span>
            <span v-if=" $v.paymentCard.fullname.$dirty ? !$v.paymentCard.fullname.minLength: ''"
              class="error-span">Minimum 3 karakter giriniz</span>
          </div>

        <div class="payment-form-group" :class="paymentStatus($v.paymentCard.cardNumber)">
          <input
            type="number"
            style="apperance:none"
            class="payment-card-input"
            placeholder="Card Number"
            maxlength="16"
            v-model.trim="$v.paymentCard.cardNumber.$model"
            @click="showCardFront()"
            @keyup="letterSpace()"
          />
        </div>
        <div class="error-group">
            <span v-if="$v.paymentCard.cardNumber.$dirty? !$v.paymentCard.cardNumber.required: ''"
              class="error-span">Bu alan gereklidir</span>
            <span v-if=" $v.paymentCard.cardNumber.$dirty ? !$v.paymentCard.cardNumber.minLength: ''"
              class="error-span">16 karakter giriniz</span>
          </div>
        <div class="small-form-group-container">
          <div class="payment-form-group-small" :class="paymentStatus($v.paymentCard.cardMonth)">
            <input
              type="text"
              class="payment-card-input-small"
              placeholder="Month"
              @click="showCardFront()"
              v-model.trim="$v.paymentCard.cardMonth.$model"
            />
          </div>
          <div class="payment-form-group-small" :class="paymentStatus($v.paymentCard.cardYear)">
            <input
              type="text"
              class="payment-card-input-small"
              placeholder="Year"
              v-model.trim="$v.paymentCard.cardYear.$model"
              @click="showCardFront()"
            />
          </div>
          <div class="payment-form-group-small" :class="paymentStatus($v.paymentCard.cardSecure)">
            <input
              type="text"
              class="payment-card-input-small"
              placeholder="Secure"
              @click="showCardBack()"
              v-model.trim="$v.paymentCard.cardSecure.$model"
            />
          </div>
        </div>
      </div>

      <div class="payment-box card-image-container">
        <div class="box">
          <div class="front" ref="frontFace">
            <div class="card-front-top">
              <span>PatiBank</span>
            </div>
            <div class="card-front-middle">
              <span ref="cardNumberRef" class="hidden-card-number">{{
                $v.paymentCard.cardNumber.$model
              }}</span>

              <div ref="cardNumberSpaced" class="cardNumberSpaced"></div>
            </div>
            <div class="card-front-bottom">
              <span class="card-owner-name" ref="fullNameRef">{{
                $v.paymentCard.fullname.$model
              }}</span>
              <div class="card-date-info-container">
                <span class="card-date-info">{{
                  $v.paymentCard.cardMonth.$model
                }}</span>
                /
                <span class="card-date-info">{{
                  $v.paymentCard.cardYear.$model
                }}</span>
              </div>
            </div>
          </div>
          <div class="back" ref="backFace">
            <span class="black-strip"></span>
            <div class="secure-strip-container">
              <div class="secure-strip">
                <span>{{ $v.paymentCard.cardSecure.$model }}</span>
              </div>
            </div>
          </div>
        </div>
        <button class="next-step-button" @click="submitPayment()">Pay</button>
      </div>
    </div>
  </div>
</template>

<script>
import { payment } from "@/mixins/global.js";
export default {
  name: "Payment",

  data() {
    return {
      paymentCard: {
        fullname: "",
        cardNumber: null,
        cardMonth: null,
        cardYear: null,
        cardSecure: null,
      },
      cardFace: 0,
    };
  },
  mixins: [payment],
  methods: {
    letterSpace() {
      let cardNumberSpan = this.$refs.cardNumberRef.innerHTML;
      let newValue = this.$refs.cardNumberSpaced;
      newValue.innerHTML = `<span class="cardNumberSpacer">${cardNumberSpan.slice(
        0,
        4
      )}</span>
      <span class="cardNumberSpacer">${cardNumberSpan.slice(4, 8)}</span>
      <span class="cardNumberSpacer">${cardNumberSpan.slice(8, 12)}</span>
      <span class="cardNumberSpacer">${cardNumberSpan.slice(12, 16)}</span>`;
    },
    showCardBack() {
      let backFace = this.$refs.backFace.style;
      let frontFace = this.$refs.frontFace.style;

      frontFace.transform = "perspective(1000px) rotateY(180deg)";
      backFace.transform = "perspective(1000px) rotateY(0deg)";
    },
    showCardFront() {
      let backFace = this.$refs.backFace.style;
      let frontFace = this.$refs.frontFace.style;

      frontFace.transform = "perspective(1000px) rotateY(0deg)";
      backFace.transform = "perspective(1000px) rotateY(-180deg)";
    },
    paymentStatus(validation) {
      if (validation.$dirty) {
        if (validation.$error) {
          return "paymentFormError";
        } else {
          return "paymentFormSuccess";
        }
      }
    },
    submitPayment() {
      if(this.$v.paymentCard.$dirty && !this.$v.paymentCard.$error){
        let fullNameRef = this.$refs.fullNameRef.innerHTML;
      let showNextStep = 3;
      this.$emit("full-name", [fullNameRef, showNextStep]);
      }
     
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sriracha&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@800&display=swap");

.payment-card-container {
  width: calc(1180px - 2rem);
  height: auto;
  background-color: #cfd8dc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem;
  padding-bottom: 7rem;
}
.payment-box {
  width: 400px;
  height: 250px;
  border-radius: 15px;
}

.card-information-container {
  padding: 1rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.card-title {
  font-family: "Poppins", sans-serif;
  color: #616161;
  font-weight: 600;
  letter-spacing: 0.7px;
  margin-bottom: 0px;
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.payment-form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: white;
  border: 2px solid #acabab;
  border-radius: 5px;
}

.payment-card-input {
  width: 100%;
  outline: none;
  border: none;
  font-family: "Poppins", sans-serif;
  padding-left: 1rem;
  height: 30px;
  border-radius: 5px;
}
.small-form-group-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.payment-form-group-small {
  width: 30%;
  display: flex;
  height: 40px;
  background-color: white;
  border: 2px solid #acabab;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
.paymentFormError {
  border-color: red;
}
.paymentFormSuccess {
  border-color: #5a5;
}
.payment-card-input-small {
  width: 100%;
  outline: none;
  border: none;
  font-family: "Poppins", sans-serif;
  padding-left: 1rem;
  border-radius: 10px;
  height: 40px;
}

.box {
  position: absolute;
  width: 400px;
  height: 250px;
}
.box .front {
  position: relative;
  width: 100%;
  height: 100%;
  background: #929191;
  backface-visibility: hidden;
  transform: perspective(1000px) rotateY(0deg);
  transition: 1s;
  border-radius: 15px;
  padding: 1rem;
}
.box:hover .front {
  transform: perspective(1000px) rotateY(180deg);
}
/* Back Side*/
.box .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #929191;
  backface-visibility: hidden;
  transform: perspective(1000px) rotateY(-180deg);
  transition: 1s;
  border-radius: 15px;
}
.box:hover .back {
  transform: perspective(1000px) rotateY(0deg);
}
.black-strip {
  width: 100%;
  height: 60px;
  display: flex;
  margin-top: 2rem;
  background-color: black;
}
.secure-strip-container {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.secure-strip {
  background-color: white;
  width: 75%;
  height: 35px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "Sriracha", cursive;
  overflow: hidden;
}
.secure-strip span {
  width: 45px;
  height: 35px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
}
/*Front Side*/
.card-front-top {
  font-family: "Sriracha", cursive;
  color: white;
  font-size: 1.5rem;
  width: 100%;
}
.card-front-middle {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.hidden-card-number {
  width: 100%;
  height: 15px;
  background-color: skyblue;
  display: none;
}
.card-owner-name {
  font-family: "Poppins", sans-serif;
  color: white;
  width: 100%;
  height: 30px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
}
.cardNumberSpaced {
  width: 100%;
  height: 55px;
  display: flex;
  align-items: flex-end;
}
.cardNumberSpacer {
  margin-right: 0.8rem;
  font-family: "Karla", sans-serif;
  color: white;
  font-size: 25px;
}
.card-front-bottom {
  font-family: "Poppins", sans-serif;
  color: white;
  width: 100%;
  height: 76px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.card-date-info-container {
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
}
</style>