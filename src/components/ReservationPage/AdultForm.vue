<template>
  <div>
    <form class="adultForm-form" :class="allFormStatus($v.user)">
      <span class="adult-name-lastname"
        >{{ $v.user.name.$model }} {{ $v.user.lastname.$model }}
      </span>

      <div class="form-group" :class="formStatus($v.user.name)">
        <input
          placeholder="Name"
          class="adultForm-input"
          v-model.trim="$v.user.name.$model"
        />
      </div>
      <div class="error-group">
        <span
          v-if="$v.user.name.$dirty ? !$v.user.name.required : ''"
          class="error-span"
          >Bu alan gereklidir</span
        >
        <span
          v-if="$v.user.name.$dirty ? !$v.user.name.minLength : ''"
          class="error-span"
          >Minimum 3 karakter giriniz</span
        >
      </div>

      <div class="form-group" :class="formStatus($v.user.lastname)">
        <input
          placeholder="Last Name"
          class="adultForm-input"
          v-model.trim="$v.user.lastname.$model"
        />
      </div>
      <div class="error-group">
        <span
          v-if="$v.user.lastname.$dirty ? !$v.user.lastname.required : ''"
          class="error-span"
          >Bu alan gereklidir</span
        >
        <span
          v-if="$v.user.lastname.$dirty ? !$v.user.lastname.minLength : ''"
          class="error-span"
          >Minimum 3 karakter giriniz</span
        >
      </div>

      <div class="form-group" :class="formStatus($v.user.email)">
        <input
          placeholder="E-mail"
          class="adultForm-input"
          v-model.trim="$v.user.email.$model"
        />
      </div>
      <div class="error-group">
        <span
          v-if="$v.user.email.$dirty ? !$v.user.email.required : ''"
          class="error-span"
          >Bu alan gereklidir</span
        >
        <span
          v-if="$v.user.email.$dirty ? !$v.user.email.email : ''"
          class="error-span"
          >Geçerli bir e-posta adresi giriniz</span
        >
      </div>

      <div class="form-group" :class="formStatus($v.user.phone)">
        <input
          placeholder="0 (5__) ___ __ __"
          class="adultForm-input"
          v-model.trim="$v.user.phone.$model"
        />
      </div>
      <div class="error-group">
        <span
          v-if="$v.user.phone.$dirty ? !$v.user.phone.required : ''"
          class="error-span"
          >Bu alan gereklidir</span
        >
        <span
          v-if="$v.user.phone.$dirty ? !$v.user.phone.numeric : ''"
          class="error-span"
          >Telefon numarası harf içeremez</span
        >
        <span
          v-if="$v.user.phone.$dirty ? !$v.user.phone.minLength : ''"
          class="error-span"
          >Telefon numarası 11 haneli olmalıdır</span
        >
      </div>

      <div class="form-group" :class="formStatus($v.user.age)">
        <input
          placeholder="Age"
          class="adultForm-input"
          v-model.trim="$v.user.age.$model"
        />
      </div>
      <div class="error-group">
        <span
          v-if="$v.user.age.$dirty ? !$v.user.age.required : ''"
          class="error-span"
          >Bu alan gereklidir</span
        >
        <span
          v-if="$v.user.age.$dirty ? !$v.user.age.numeric : ''"
          class="error-span"
          >Yaşınız harf içeremez</span
        >
      </div>

      <div class="form-group" :class="formStatus($v.user.hes)">
        <input
          placeholder="Hes Code"
          class="adultForm-input"
          v-model.trim="$v.user.hes.$model"
        />
      </div>
      <div class="error-group">
        <span
          v-if="$v.user.hes.$dirty ? !$v.user.hes.required : ''"
          class="error-span"
          >Bu alan gereklidir</span
        >
        <span
          v-if="$v.user.hes.$dirty ? !$v.user.hes.minLength : ''"
          class="error-span"
          >Lütfen en az 10 hane giriniz</span
        >
      </div>

      <div class="form-group" :class="formStatus($v.user.citizenship)">
        <input
          placeholder="Citizenship Number"
          class="adultForm-input"
          v-model.trim="$v.user.citizenship.$model"
        />
      </div>
      <div class="error-group">
        <span
          v-if="$v.user.citizenship.$dirty ? !$v.user.citizenship.required : ''"
          class="error-span"
          >Bu alan gereklidir</span
        >
        <span
          v-if="
            $v.user.citizenship.$dirty ? !$v.user.citizenship.minLength : ''
          "
          class="error-span"
          >Lütfen en az 11 hane giriniz</span
        >
        <span
          v-if="$v.user.citizenship.$dirty ? !$v.user.citizenship.numeric : ''"
          class="error-span"
          >T.C NO harf içeremez</span
        >
      </div>
    </form>
  </div>
</template>

<script>
import { vuelidate } from "@/mixins/global.js";
export default {
  name: "AdultForm",

  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        phone: null,
        age: null,
        hes: "",
        citizenship: null,
      },
    };
  },
  mixins: [vuelidate],
  methods: {
    formStatus(validation) {
      if (validation.$dirty) {
        if (validation.$error) {
          return "formGroupError";
        } else {
          return "formGroupSuccess";
        }
      }
    },
    allFormStatus(validation) {
      if (validation.$dirty) {
        if (!validation.$anyError) {
          return "formGroupSuccess";
        }
      }
    },
  },
};
</script>

<style>
.adultForm-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 230px;
  height: auto;
  border: 2px solid white;
  padding: 2rem 1rem 1rem 1rem;
  background-color: transparent;
  border-radius: 10px;
  position: relative;
}
.adult-name-lastname {
  font-family: "Poppins", sans-serif;
  color: #616161;
  text-transform: capitalize;
  position: absolute;
  background-color: #cfd8dc;
  width: auto;
  top: -15px;
  left: 10px;
  padding: 0 0.5rem;
}

.form-group {
  width: 200px;
  height: 30px;
  /* border: 2px solid #c0c0c0; */
  border: 2px solid white;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  margin-top: 5px;
}
.adultForm-input {
  height: 20px;
  width: 200px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #616161;
  transition: 0.3s ease;
  font-family: "Poppins", sans-serif;
  font-size: 0.7rem;
  margin: 0.5rem;
}

.formGroupError {
  border-color: red;
}
.formGroupSuccess {
  border-color: #5a5;
}

.error-group {
  width: 200px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 5px;
}
.error-span {
  font-family: "Poppins", sans-serif;
  font-size: 0.7rem;
  color: red;
  margin-left: 10px;
}
</style>