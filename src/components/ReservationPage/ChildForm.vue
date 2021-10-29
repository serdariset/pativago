<template>
  <div>
    <form class="childForm-form" :class="allFormStatus($v.user)">
      <span class="adult-name-lastname"
        >{{ $v.user.name.$model }} {{ $v.user.lastname.$model }}
      </span>

      <div class="form-group" :class="formStatus($v.user.name)">
        <input
          placeholder="Name"
          class="childForm-input"
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
          class="childForm-input"
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

      <div class="form-group" :class="formStatus($v.user.age)">
        <input
          placeholder="Age"
          class="childForm-input"
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
          class="childForm-input"
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
          class="childForm-input"
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
  name: "childForm",

  data() {
    return {
      user: {
        name: "",
        lastname: "",
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
.childForm-form {
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
.childForm-input {
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